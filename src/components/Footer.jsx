import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLeaf } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="bg-success bg-gradient text-light py-5 mt-5">
      <div className="container">
        <div className="row text-center text-md-start align-items-start">
          {/* --- Brand Section --- */}
          <div className="col-md-3 mb-4 mb-md-0">
            <div className="d-flex align-items-center mb-3 justify-content-center justify-content-md-start">
              <FaLeaf size={28} className="text-warning me-2" />
              <h4 className="fw-bold m-0">NaturaX</h4>
            </div>
            <p className="text-light small">
              Bringing you 100% organic and eco-friendly products — straight from
              nature to your home. Eat clean, live green. 🌱
            </p>
          </div>

          {/* --- Quick Links & Categories (side by side on tablets and below) --- */}
          <div className="col-md-6 mb-4 mb-md-0">
            <div className="row">
              {/* Quick Links */}
              <div className="col-6 mb-4 mb-md-0">
                <h5 className="border-bottom border-warning pb-2 d-inline-block mb-3">
                  Quick Links
                </h5>
                <ul className="list-unstyled small">
                  <li><a href="/home" className="text-light text-decoration-none">Home</a></li>
                  <li><a href="/services" className="text-light text-decoration-none">Shop</a></li>
                  <li><a href="/about" className="text-light text-decoration-none">About Us</a></li>
                  <li><a href="/contact" className="text-light text-decoration-none">Contact</a></li>
                  <li><a href="/faq" className="text-light text-decoration-none">FAQ</a></li>
                </ul>
              </div>

              {/* Categories */}
              <div className="col-6 mb-4 mb-md-0">
                <h5 className="border-bottom border-warning pb-2 d-inline-block mb-3">
                  Categories
                </h5>
                <ul className="list-unstyled small">
                  <li><a href="#/" className="text-light text-decoration-none">Vegetables</a></li>
                  <li><a href="#/" className="text-light text-decoration-none">Fruits</a></li>
                  <li><a href="#/" className="text-light text-decoration-none">Grains</a></li>
                  <li><a href="#/" className="text-light text-decoration-none">Protein Foods</a></li>
                  <li><a href="#/" className="text-light text-decoration-none">Natural Oils</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* --- Stay Connected --- */}
          <div className="col-md-3">
            <h5 className="border-bottom border-warning pb-2 d-inline-block mb-3">
              Stay Connected
            </h5>
            <p className="small text-light">
              Subscribe for updates, health tips, and organic offers!
            </p>
            <form className="d-flex mb-3">
              <input
                type="email"
                className="form-control form-control-sm rounded-start"
                placeholder="Enter email"
              />
              <button className="btn btn-warning btn-sm rounded-end">
                Subscribe
              </button>
            </form>
            <div className="d-flex justify-content-center justify-content-md-start gap-3">
              <a href="#/" className="text-light fs-5"><FaFacebookF /></a>
              <a href="#/" className="text-light fs-5"><FaInstagram /></a>
              <a href="#/" className="text-light fs-5"><FaTwitter /></a>
              <a href="#/" className="text-light fs-5"><FaYoutube /></a>
            </div>
          </div>
        </div>

        <hr className="border-light opacity-50 mt-4" />

        {/* --- Footer Bottom --- */}
        <div className="text-center small text-light mt-3">
          © {new Date().getFullYear()} <strong className="text-warning">NaturaX</strong>. All Rights Reserved.
          <br />
          Made with ❤️ by <span className="text-warning">NaturaX Team</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
