import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const Services = () => {
  const phoneNumber = "9014057080";

  const handleCallNow = () => {
    window.open(`tel:${phoneNumber}`, "_self");
  };

  const handleMessage = (service) => {
    const message = `Hello! I’m interested in your "${service}" service. Please share more details.`;
    window.open(
      `https://wa.me/91${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div
      className="container-xxl py-5"
      style={{ backgroundColor: "#f8fff5", textAlign: "center" }}
    >
      <div className="container">
        {/* --- Section Header --- */}
        <div className="section-header mx-auto mb-5" style={{ maxWidth: "650px" }}>
          <h1
            className="display-5 mb-3 fw-bold"
            style={{ color: "#2e7d32", letterSpacing: "1px" }}
          >
            Our Organic Services
          </h1>
          <p className="text-muted fs-6">
            Explore our range of natural and organic services designed to help you live
            a healthier, more sustainable lifestyle.
          </p>
        </div>

        {/* --- Services Grid --- */}
        <div className="row g-4 justify-content-center">
          {/* Service 1 */}
          <div className="col-lg-4 col-md-6">
            <div className="card border-0 shadow-sm rounded-4 h-100">
              <img
                src="./images/Organic Farm Visits.jpg"
                loading="lazy"
                className="card-img-top rounded-top-4"
                alt="Farm Visit"
                style={{ height: "240px", objectFit: "cover" }}
              />
              <div className="card-body bg-white p-4 rounded-bottom-4">
                <h5 className="text-success fw-semibold mb-3">Organic Farm Visits</h5>
                <p className="text-muted small mb-4">
                  Visit our organic farms and learn about sustainable cultivation and
                  healthy food practices straight from nature.
                </p>

                <div className="d-flex justify-content-center gap-3">
                  <button
                    className="btn btn-success rounded-pill px-3 fw-semibold d-flex align-items-center"
                    onClick={handleCallNow}
                  >
                    <FaPhoneAlt className="me-2" /> Call Now
                  </button>

                  <button
                    className="btn btn-warning rounded-pill px-3 fw-semibold d-flex align-items-center"
                    onClick={() => handleMessage("Organic Farm Visit")}
                  >
                    <FaWhatsapp className="me-2" /> Message Me
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Service 2 */}
          <div className="col-lg-4 col-md-6">
            <div className="card border-0 shadow-sm rounded-4 h-100">
              <img
                src="./images/OrganicConsultation.jpg"
                loading="lazy"
                className="card-img-top rounded-top-4"
                alt="Consultation"
                style={{ height: "240px", objectFit: "cover" }}
              />
              <div className="card-body bg-white p-4 rounded-bottom-4">
                <h5 className="text-success fw-semibold mb-3">
                  Organic Lifestyle Consultation
                </h5>
                <p className="text-muted small mb-4">
                  Get expert advice on living an organic lifestyle — from nutrition
                  guidance to sustainable home practices.
                </p>

                <div className="d-flex justify-content-center gap-3">
                  <button
                    className="btn btn-success rounded-pill px-3 fw-semibold d-flex align-items-center"
                    onClick={handleCallNow}
                  >
                    <FaPhoneAlt className="me-2" /> Call Now
                  </button>

                  <button
                    className="btn btn-warning rounded-pill px-3 fw-semibold d-flex align-items-center"
                    onClick={() =>
                      handleMessage("Organic Lifestyle Consultation")
                    }
                  >
                    <FaWhatsapp className="me-2" /> Message Me
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Service 3 */}
          <div className="col-lg-4 col-md-6">
            <div className="card border-0 shadow-sm rounded-4 h-100">
              <img
                src="./images/OrganicSupply.jpg"
                loading="lazy"
                className="card-img-top rounded-top-4"
                alt="Organic Supply"
                style={{ height: "240px", objectFit: "cover" }}
              />
              <div className="card-body bg-white p-4 rounded-bottom-4">
                <h5 className="text-success fw-semibold mb-3">
                  Organic Product Supply
                </h5>
                <p className="text-muted small mb-4">
                  Fresh organic fruits, vegetables, and groceries delivered from
                  local farms directly to your doorstep.
                </p>

                <div className="d-flex justify-content-center gap-3">
                  <button
                    className="btn btn-success rounded-pill px-3 fw-semibold d-flex align-items-center"
                    onClick={handleCallNow}
                  >
                    <FaPhoneAlt className="me-2" /> Call Now
                  </button>

                  <button
                    className="btn btn-warning rounded-pill px-3 fw-semibold d-flex align-items-center"
                    onClick={() => handleMessage("Organic Product Supply")}
                  >
                    <FaWhatsapp className="me-2" /> Message Me
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
