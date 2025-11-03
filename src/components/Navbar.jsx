import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  Form,
  Button,
  NavDropdown,
} from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import { FaLeaf } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

const MyNavbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = (e) => {
    e.preventDefault();
    const trimmed = searchTerm.trim().toLowerCase();

    if (!trimmed) {
      alert("Please enter a product or category to search.");
      return;
    }

    // 🧠 If already on /products, dispatch event instead of navigating
    if (location.pathname === "/products") {
      window.dispatchEvent(
        new CustomEvent("navbar-search", { detail: trimmed })
      );
    } else {
      // 🧭 Navigate to Products page with query param
      navigate(`/products?search=${encodeURIComponent(trimmed)}`);
    }

    setSearchTerm("");
  };

  return (
    <Navbar
      expand="lg"
      className="organic-navbar py-3 px-3 px-lg-5 shadow-sm sticky-top"
      style={{ backgroundColor: "#2e7d32" }}
      collapseOnSelect
    >
      <Container fluid>
        {/* --- Brand --- */}
        <Navbar.Brand
          href="/home"
          className="text-light fw-bold d-flex align-items-center"
        >
          <FaLeaf size={26} className="text-warning me-2" />
          <span className="brand-name fs-4">NaturaX</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" className="bg-light border-0" />

        <Navbar.Collapse id="navbar-nav" className="mt-3 mt-lg-0">
          <Nav className="mx-auto text-center gap-2 gap-lg-4">
            <Nav.Link href="/home" className="text-light fw-semibold nav-link-hover">Home</Nav.Link>
            <Nav.Link href="/about" className="text-light fw-semibold nav-link-hover">About Us</Nav.Link>
            <Nav.Link href="/products" className="text-light fw-semibold nav-link-hover">Products</Nav.Link>
            <NavDropdown
              title={<span className="text-light fw-semibold">Pages</span>}
              id="pages-dropdown"
              menuVariant="dark"
              className="text-center text-lg-start"
            >
              <NavDropdown.Item href="/blogs">Blogs</NavDropdown.Item>
              <NavDropdown.Item href="/services">Services</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/contact" className="text-light fw-semibold nav-link-hover">Contact</Nav.Link>
          </Nav>

          {/* --- Search Form --- */}
          <Form
            className="d-flex mt-3 mt-lg-0 justify-content-center justify-content-lg-end"
            onSubmit={handleSearch}
          >
            <Form.Control
              type="search"
              placeholder="Search products..."
              className="me-2 rounded-pill border-0 shadow-sm"
              style={{
                width: "100%",
                maxWidth: "220px",
                fontSize: "0.95rem",
              }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button
              type="submit"
              variant="warning"
              className="rounded-pill px-3 fw-semibold text-dark"
            >
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
