import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Coursel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      img: "./images/carousel-3.jpg",
      loading: "lazy",
      title: (
        <>
          Organic Food Is Good For <span className="text-warning">Health</span>
        </>
      ),
    },
    {
      img: "./images/carousel-2.jpg",
      loading: "lazy",
      title: (
        <>
          Natural Food Is Always <span className="text-warning">Healthy</span>
        </>
      ),
    },
    {
      img: "./images/carousel-1.jpg",
      loading: "lazy",
      title: (
        <>
          Eat <span className="text-warning">Healthy</span> Live Healthy
        </>
      ),
    },
  ];

  useEffect(() => {
    const carousel = document.getElementById("header-carousel");
    const handleSlide = (e) => setActiveIndex(e.to);
    carousel.addEventListener("slid.bs.carousel", handleSlide);
    return () => carousel.removeEventListener("slid.bs.carousel", handleSlide);
  }, []);

  return (
    <div className="container-fluid p-0">
      <div
        id="header-carousel"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="4000"
      >
        {/* --- Indicators --- */}
        <div className="carousel-indicators mb-3" style={{ bottom: "15px" }}>
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#header-carousel"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : undefined}
              aria-label={`Slide ${index + 1}`}
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                backgroundColor: index === activeIndex ? "#198754" : "#fff",
                opacity: "0.8",
                margin: "0 6px",
                border: "none",
              }}
            ></button>
          ))}
        </div>

        {/* --- Slides --- */}
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img
                src={slide.img}
                className="d-block w-100"
                alt={`Slide ${index + 1}`}
                style={{
                  height: "90vh", 
                  objectFit: "cover",
                  filter: "brightness(75%)",
                }}
              />

              <div
                className="carousel-caption d-flex flex-column justify-content-center align-items-start ps-4 ps-md-5"
                style={{
                  top: "0",
                  bottom: "0",
                  textAlign: "left",
                }}
              >
                <h1
                  className="fw-bold mb-4 text-start"
                  style={{
                    fontSize: "3rem",
                  }}
                >
                  {slide.title}
                </h1>

                <div>
                  <a
                    href="/products"
                    className="btn btn-success rounded-pill py-sm-2 px-sm-4 me-2 mb-2"
                  >
                    Products
                  </a>
                  <a
                    href="/services"
                    className="btn btn-outline-light rounded-pill py-sm-2 px-sm-4 mb-2"
                  >
                    Services
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- Controls --- */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#header-carousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#header-carousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* --- Responsive Styles --- */}
      <style jsx>{`
        @media (max-width: 992px) {
          .carousel-item img {
            height: 70vh !important; /* Increased from 60vh */
          }
          .carousel-caption h1 {
            font-size: 2.2rem !important;
          }
        }

        @media (max-width: 768px) {
          .carousel-item img {
            height: 60vh !important; /* Increased from 50vh */
          }
          .carousel-caption h1 {
            font-size: 1.8rem !important;
          }
          .carousel-caption {
            padding-left: 2rem !important;
          }
        }

        @media (max-width: 576px) {
          .carousel-item img {
            height: 50vh !important; /* Increased from 45vh */
          }
          .carousel-caption h1 {
            font-size: 1.4rem !important;
            text-align: center !important;
          }
          .carousel-caption {
            align-items: center !important;
            text-align: center !important;
            padding: 0 1rem !important;
          }
          .carousel-caption a {
            width: 100%;
            display: inline-block;
          }
        }
      `}</style>
    </div>
  );
};

export default Coursel;
