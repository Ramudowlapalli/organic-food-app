import React from "react";
import "./Hero.css";
import ProductsOverview from "../../components/ProductsOverview";
import BlogSection from "../../components/BlogSection";
import Coursel from "../../components/Coursel";

const Hero = () => {
  return (
    <>

<Coursel/>

      {/* ===== About Section ===== */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="about-img position-relative overflow-hidden p-5 pe-0">
                <img
                  className="img-fluid w-100 rounded-4 shadow"
                  src="about img.jpg"
                  alt="About Us"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <h1 className="display-5 mb-4 text-success fw-bold">
                Best Organic Fruits And Vegetables
              </h1>
              <p className="mb-4 text-muted">
                We deliver freshly harvested, 100% natural, and chemical-free
                fruits and vegetables directly from organic farms to your home.
              </p>
              <p><i className="fa fa-check text-success me-3"></i>Grown Without Chemicals</p>
              <p><i className="fa fa-check text-success me-3"></i>Packed With Nutrition</p>
              <p><i className="fa fa-check text-success me-3"></i>Supporting Local Farmers</p>
              <a
                className="btn btn-success rounded-pill py-3 px-5 mt-3"
                href="/about-details"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Features Section ===== */}
      <div className="container-fluid bg-light py-6">
        <div className="container text-center">
          <div
            className="section-header mx-auto mb-5"
            style={{ maxWidth: "500px" }}
          >
            <h1 className="display-5 mb-3 text-success fw-bold">
              Our Features
            </h1>
            <p className="text-muted">
              We combine the goodness of nature with sustainable practices to
              deliver food that keeps you healthy and happy.
            </p>
          </div>

          <div className="row g-4">
            {/* --- Feature 1 --- */}
            <div className="col-lg-4 col-md-6">
              <div className="bg-white text-center border border-success-subtle rounded-4 shadow-sm p-5 feature-card">
                <img
                  className="img-fluid mb-1"
                  src="/Natural Process.png"
                  alt="Natural Process"
                  style={{ width: "80px" }}
                />
                <h4 className="mb-3 text-success">Natural Process</h4>
                <p className="mb-4 text-muted">
                  Our products are grown with care, ensuring every step of the
                  process remains chemical-free and sustainable.
                </p>
                <a
                  className="btn btn-outline-success border-2 py-2 px-4 rounded-pill"
                  href="/natural-process"
                >
                  Read More
                </a>
              </div>
            </div>

            {/* --- Feature 2 --- */}
            <div className="col-lg-4 col-md-6">
              <div className="bg-white text-center border border-success-subtle rounded-4 shadow-sm p-5 feature-card">
                <img
                  className="img-fluid mb-4"
                  src="/Organic Products.png"
                  alt="Organic Products"
                  style={{ width: "80px" }}
                />
                <h4 className="mb-3 text-success">Organic Products</h4>
                <p className="mb-4 text-muted">
                  Each product is 100% organic, preserving nutrients and natural
                  flavors for a healthy lifestyle.
                </p>
                <a
                  className="btn btn-outline-success border-2 py-2 px-4 rounded-pill"
                  href="/organic-products"
                >
                  Read More
                </a>
              </div>
            </div>

            {/* --- Feature 3 --- */}
            <div className="col-lg-4 col-md-6">
              <div className="bg-white text-center border border-success-subtle rounded-4 shadow-sm p-5 feature-card">
                <img
                  className="img-fluid mb-4"
                  src="/Biologically Safe.png"
                  alt="Biologically Safe"
                  style={{ width: "80px" }}
                />
                <h4 className="mb-3 text-success">Biologically Safe</h4>
                <p className="mb-4 text-muted">
                  Tested and certified organic — ensuring your family enjoys the
                  safest, cleanest food possible.
                </p>
                <a
                  className="btn btn-outline-success border-2 py-2 px-4 rounded-pill"
                  href="/biologically-safe"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
     
      <ProductsOverview />
       <BlogSection />
    </>
  );
};

export default Hero;
