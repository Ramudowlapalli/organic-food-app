import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductsOverview = () => {
  const navigate = useNavigate();

  const sampleProducts = [
    { id: 1, name: "Fresh Tomato", price: "₹40", oldPrice: "₹55", img: "./images/Fresh Tomato.jpg" },
    { id: 2, name: "Organic Broccoli", price: "₹50", oldPrice: "₹70", img: "./images/Organic Broccoli.jpg" },
    { id: 3, name: "Crisp Spinach", price: "₹35", oldPrice: "₹50", img: "./images/Crisp Spinach.jpg" },
  ];

  return (
    <div className="container py-5">
      {/* Section Heading */}
      <div className="text-center mb-5">
        <h2 className="display-6 fw-bold text-success">Fresh & Organic Products</h2>
        <p className="text-muted">
          Explore our handpicked range of organic vegetables and fruits grown naturally
          and delivered fresh to your doorstep.
        </p>
      </div>

      {/* Products Grid */}
      <div className="row g-4 justify-content-center">
        {sampleProducts.map((product, index) => (
          <div
            key={product.id}
            className="col-lg-3 col-md-5 col-sm-6 wow fadeInUp"
            data-wow-delay={`${0.1 * index}s`}
          >
            <div className="card border-0 shadow-sm rounded-4 overflow-hidden h-100">
              <img
                src={product.img}
                className="card-img-top"
                alt={product.name}
                style={{ height: "220px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title mb-2">{product.name}</h5>
                <p className="mb-0">
                  <span className="text-success fw-semibold">{product.price}</span>{" "}
                  <span className="text-muted text-decoration-line-through small">
                    {product.oldPrice}
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Button to Products Page */}
      <div className="text-center mt-5">
        <button
          className="btn btn-success rounded-pill px-4 py-2"
          onClick={() => navigate("/products")}
        >
          View All Products →
        </button>
      </div>
    </div>
  );
};

export default ProductsOverview;
