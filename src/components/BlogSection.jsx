import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const BlogSection = () => {
  return (
    <div
      className="container-xxl py-5"
      style={{
        backgroundColor: "#f8fff5",
        textAlign: "center",
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div
          className="section-header mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "650px" }}
        >
          <h1
            className="display-5 mb-3 fw-bold"
            style={{ color: "#2e7d32", letterSpacing: "1px" }}
          >
            Latest Organic Blogs
          </h1>
          <p className="text-muted fs-6">
            Stay updated with our latest stories and tips on organic living,
            healthy eating, and sustainable farming — straight from nature to
            your home.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="row g-4 justify-content-center">
          {/* Blog 1 */}
          <div className="col-lg-4 col-md-6 wow fadeInUp d-flex" data-wow-delay="0.1s">
            <div className="card border-0 shadow-sm rounded-4 w-100">
              <img
                className="card-img-top rounded-top-4"
                src="./images/Organic Farming.jpg"
                alt="Organic Farming"
                style={{
                  height: "240px",
                  objectFit: "cover",
                }}
              />
              <div className="card-body bg-white p-4 rounded-bottom-4">
                <a
                  className="d-block h5 mb-3 text-success fw-semibold text-decoration-none"
                  href="#/"
                >
                  Grow Your Own Organic Vegetables at Home
                </a>
                <p className="text-muted small mb-3">
                  Simple techniques to cultivate fresh, chemical-free produce in
                  your own backyard.
                </p>
                <div className="border-top pt-3 text-muted small">
                  <small className="me-3">
                    <i className="fa fa-user text-success me-2"></i>Admin
                  </small>
                  <small>
                    <i className="fa fa-calendar text-success me-2"></i>01 Jan,
                    2045
                  </small>
                </div>
              </div>
            </div>
          </div>

          {/* Blog 2 */}
          <div className="col-lg-4 col-md-6 wow fadeInUp d-flex" data-wow-delay="0.3s">
            <div className="card border-0 shadow-sm rounded-4 w-100">
              <img
                className="card-img-top rounded-top-4"
                src="./images/Healthy Organic Food.jpg"
                alt="Healthy Organic Food"
                style={{
                  height: "240px",
                  objectFit: "cover",
                }}
              />
              <div className="card-body bg-white p-4 rounded-bottom-4">
                <a
                  className="d-block h5 mb-3 text-success fw-semibold text-decoration-none"
                  href="#/"
                >
                  Why Organic Food is the Key to a Healthier Lifestyle
                </a>
                <p className="text-muted small mb-3">
                  Understand how switching to organic foods can boost immunity,
                  energy, and overall wellness.
                </p>
                <div className="border-top pt-3 text-muted small">
                  <small className="me-3">
                    <i className="fa fa-user text-success me-2"></i>Admin
                  </small>
                  <small>
                    <i className="fa fa-calendar text-success me-2"></i>15 Feb,
                    2045
                  </small>
                </div>
              </div>
            </div>
          </div>

          {/* Blog 3 */}
          <div className="col-lg-4 col-md-6 wow fadeInUp d-flex" data-wow-delay="0.5s">
            <div className="card border-0 shadow-sm rounded-4 w-100">
              <img
                className="card-img-top rounded-top-4"
                src="./images/Organic Superfoods.jpg"
                alt="Organic Superfoods"
                style={{
                  height: "240px",
                  objectFit: "cover",
                }}
              />
              <div className="card-body bg-white p-4 rounded-bottom-4">
                <a
                  className="d-block h5 mb-3 text-success fw-semibold text-decoration-none"
                  href="#/"
                >
                  10 Must-Try Organic Superfoods for Daily Nutrition
                </a>
                <p className="text-muted small mb-3">
                  Discover nutrient-rich organic superfoods that help you stay
                  active and refreshed every day.
                </p>
                <div className="border-top pt-3 text-muted small">
                  <small className="me-3">
                    <i className="fa fa-user text-success me-2"></i>Admin
                  </small>
                  <small>
                    <i className="fa fa-calendar text-success me-2"></i>10 Mar,
                    2045
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* View More Button */}
        <div className="text-center mt-5">
          <a
            href="/blogs"
            className="btn btn-success rounded-pill px-4 py-2 fw-semibold shadow-sm"
            style={{
              transition: "all 0.3s ease-in-out",
            }}
            onMouseOver={(e) =>
              (e.target.style.backgroundColor = "#1b5e20")
            }
            onMouseOut={(e) =>
              (e.target.style.backgroundColor = "")
            }
          >
            View More Blogs →
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
