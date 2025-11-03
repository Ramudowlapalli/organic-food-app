import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { products } from "../../assets/assets";
import "bootstrap/dist/css/bootstrap.min.css";

const Products = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);
  const searchTermFromURL = query.get("search")?.toLowerCase() || "";

  const [activeCategory, setActiveCategory] = useState("Vegetable");
  const [visibleCount, setVisibleCount] = useState(4);
  const [searchTerm, setSearchTerm] = useState(searchTermFromURL);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // 🧠 Listen for Navbar searches when already on /products
  useEffect(() => {
    const handleNavbarSearch = (e) => {
      const term = e.detail;
      setSearchTerm(term);
      navigate(`/products?search=${encodeURIComponent(term)}`);
    };

    window.addEventListener("navbar-search", handleNavbarSearch);
    return () =>
      window.removeEventListener("navbar-search", handleNavbarSearch);
  }, [navigate]);

  // 🔎 Update products whenever search or category changes
  useEffect(() => {
    let results = [];

    if (searchTerm) {
      results = products.filter(
        (item) =>
          item.name.toLowerCase().includes(searchTerm) ||
          item.category.toLowerCase().includes(searchTerm)
      );

      // Auto-select category based on first match
      if (results.length > 0) {
        setActiveCategory(results[0].category);
      }
    } else {
      results = products.filter((item) => item.category === activeCategory);
    }

    setFilteredProducts(results);
  }, [searchTerm, activeCategory]);

  // 🟢 Handle Category Click
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setSearchTerm(""); // Clear search term when changing category
    setVisibleCount(4);
    navigate("/products"); // Reset URL
  };

  // 🔎 Handle search inside Products page (not just Navbar)
  const handleLocalSearch = (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) {
      alert("Please enter a product or category name");
      return;
    }
    navigate(`/products?search=${encodeURIComponent(searchTerm)}`);
  };

  const handleSeeMore = () => setVisibleCount((prev) => prev + 4);

  return (
    <div className="container-xxl py-5">
      <div className="container">
        {/* Header Section */}
        <div className="row align-items-end mb-4">
          <div className="col-lg-6">
            <h1 className="display-5 mb-3 fw-bold text-success">
              {searchTerm
                ? `Results for "${searchTerm}"`
                : "Our Organic Products"}
            </h1>
            <p className="text-muted">
              {searchTerm
                ? "Here are the best matches. You can also switch categories below."
                : "Discover our natural, chemical-free organic collection."}
            </p>
          </div>

          {/* 🟢 Category Buttons */}
          <div className="col-lg-6 text-start text-lg-end">
            <ul className="nav nav-pills justify-content-end flex-wrap">
              {["Vegetable", "Fruit", "Fresh"].map((category) => (
                <li className="nav-item me-2 mb-2" key={category}>
                  <button
                    className={`btn border-2 ${
                      activeCategory === category
                        ? "btn-success"
                        : "btn-outline-success"
                    }`}
                    onClick={() => handleCategoryClick(category)}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 🔍 Local Search Bar (for searching again within Products) */}
        <form
          className="d-flex justify-content-center mb-4"
          onSubmit={handleLocalSearch}
        >
          <input
            type="text"
            className="form-control w-50 rounded-pill px-3 border-success"
            placeholder="Search products or categories..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
          />
          <button
            type="submit"
            className="btn btn-success rounded-pill px-4 ms-2 fw-semibold"
          >
            Search
          </button>
        </form>

        {/* Product Cards */}
        <div className="row g-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.slice(0, visibleCount).map((product) => (
              <div className="col-xl-3 col-lg-4 col-md-6" key={product.id}>
                <div className="card border-0 shadow-sm rounded-4 h-100">
                  <div className="position-relative overflow-hidden rounded-top">
                    <img
                      src={product.img}
                      alt={product.name}
                      className="img-fluid w-100"
                      style={{
                        height: "220px",
                        objectFit: "cover",
                        transition: "transform 0.4s ease",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.transform = "scale(1.05)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.transform = "scale(1)")
                      }
                    />
                    {product.isNew && (
                      <span className="badge bg-success position-absolute top-0 start-0 m-3 px-3 py-2 rounded-pill">
                        New
                      </span>
                    )}
                  </div>
                  <div className="card-body text-center">
                    <h5 className="fw-semibold">{product.name}</h5>
                    <p className="mb-0">
                      <span className="text-success fw-bold">
                        ₹{product.price}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-5">
              <h4 className="text-danger">No matching products found.</h4>
            </div>
          )}
        </div>

        {/* See More Button */}
        {!searchTerm && visibleCount < filteredProducts.length && (
          <div className="text-center mt-5">
            <button
              onClick={handleSeeMore}
              className="btn btn-success rounded-pill px-4 py-2"
            >
              See More Products
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
