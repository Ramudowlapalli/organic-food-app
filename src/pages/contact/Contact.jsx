import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
  const [buttonText, setButtonText] = useState("Send Message");

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText("Sent ✅");

    // Optional: reset text after 3 seconds
    setTimeout(() => {
      setButtonText("Send Message");
    }, 3000);
  };

  return (
    <div className="container-fluid py-5 bg-light contact-section">
      <div className="container py-5">
        {/* --- Header --- */}
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bold text-success mb-3">
            Contact Us
          </h1>
          <p className="text-muted fs-5">
            Have questions or want to know more about our organic products?  
            We’d love to hear from you!
          </p>
        </div>

        <div className="row g-5 align-items-center">
          {/* --- Left Side Image --- */}
          <div className="col-lg-5 col-md-6">
            <img
              src="/contactImage.jpg"
              alt="Contact Organic"
              className="img-fluid rounded-4 shadow-lg w-100"
              style={{ objectFit: "cover", height: "100%" }}
            />
          </div>

          {/* --- Right Side Contact Form --- */}
          <div className="col-lg-7 col-md-6">
            <div className="bg-white shadow rounded-4 p-4 p-lg-5">
              <h4 className="mb-4 fw-bold text-success">Send Message</h4>
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control border-success py-3"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      className="form-control border-success py-3"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control border-success py-3"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      className="form-control border-success py-3"
                      rows="4"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>
                  <div className="col-12 text-center">
                    <button
                      type="submit"
                      className={`btn ${
                        buttonText === "Sent ✅"
                          ? "btn-outline-success"
                          : "btn-success"
                      } rounded-pill py-3 px-5 mt-3 fw-semibold`}
                    >
                      {buttonText}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* --- Google Map --- */}
        <div className="row mt-5">
          <div className="col-12">
            <iframe
              title="Organic Farm Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.5319867420865!2d83.36593477496892!3d17.781170583202294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3944a422a993e5%3A0x5f4a52b0a3b410a0!2sPanorama%20Hills%2C%20Madhurawada%2C%20Visakhapatnam%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1730182000000!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: "15px" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
