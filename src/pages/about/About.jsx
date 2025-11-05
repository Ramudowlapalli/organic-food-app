import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section
        className="text-white text-center d-flex flex-column align-items-center justify-content-center"
        style={{
          background:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('./images/About NaturaX.jpg') center/cover",
          minHeight: "80vh", // ⬆️ Increased height
          padding: "60px 20px",
        }}
      >
        <div className="container">
          <h1 className="display-4 fw-bold mb-3">
            About <span className="text-success">NaturaX</span>
          </h1>
          <p
            className="lead text-light mx-auto"
            style={{ maxWidth: "700px", textAlign: "center" }} // ⬅️ Center text explicitly
          >
            “Nourishing lives through pure, protein-rich, and organic food.”
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="container py-5">
        <div className="row align-items-center g-4">
          <div className="col-12 col-lg-6 text-center text-lg-start">
            <img
              src="./images/Our Story.jpg"
              loading="lazy"
              alt="Our Story"
              className="img-fluid rounded-4 shadow-lg w-100"
              style={{
                height: "400px", // ⬆️ Increased image height
                objectFit: "cover",
              }}
            />
          </div>
          <div className="col-12 col-lg-6">
            <h2 className="fw-bold text-success mb-3 text-center text-lg-start">
              Our Story
            </h2>
            <p className="text-muted mb-3 fs-6 fs-md-5 text-center text-lg-start">
              At <strong>NaturaX</strong>, we believe that health starts from
              the soil. What began as a small effort to promote organic farming
              has grown into a trusted name in natural nutrition. Our founders,
              inspired by ancient Indian wellness traditions and modern science,
              wanted to redefine how people eat, live, and feel.
            </p>
            <p className="text-muted fs-6 fs-md-5 text-center text-lg-start">
              Every product we offer is grown responsibly, sourced ethically,
              and packed with natural nutrients to support your health goals.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-light py-5 text-center">
        <div className="container">
          <h2 className="fw-bold text-success mb-4">Our Mission & Vision</h2>
          <p
            className="text-muted mx-auto"
            style={{ maxWidth: "850px", fontSize: "1.05rem" }}
          >
            Our mission is to empower individuals to choose purity over
            processed food. We aim to make organic and protein-rich nutrition
            accessible to every Indian household and inspire a culture of
            mindful eating.
          </p>

          {/* Cards Row */}
          <div className="row mt-5 gy-4 gx-3 justify-content-center">
            {[
              {
                icon: "fa-leaf",
                title: "Pure & Natural",
                desc: "Zero chemicals, no preservatives — every bite is fresh and nutritious.",
              },
              {
                icon: "fa-heartbeat",
                title: "Health First",
                desc: "Protein-rich foods that enhance strength, immunity, and well-being.",
              },
              {
                icon: "fa-globe",
                title: "Sustainability",
                desc: "Eco-friendly farming and biodegradable packaging at our core.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="col-12 col-md-6 col-lg-4 d-flex justify-content-center"
              >
                <div className="card border-0 shadow-sm rounded-4 p-4 h-100 w-100">
                  <i className={`fa ${item.icon} text-success fs-2 mb-3`}></i>
                  <h5 className="fw-semibold mb-2">{item.title}</h5>
                  <p className="text-muted small mb-0">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section className="container py-5">
        <div className="row align-items-center g-4">
          <div className="col-12 col-lg-6 order-lg-2 text-center">
            <img
              src="./images/Quality You Can Trust.jpg"
              loading="lazy"
              alt="Quality Assurance"
              className="img-fluid rounded-4 shadow-lg w-100"
              style={{
                height: "400px", // ⬆️ Increased height
                objectFit: "cover",
              }}
            />
          </div>
          <div className="col-12 col-lg-6 order-lg-1">
            <h2 className="fw-bold text-success mb-3 text-center text-lg-start">
              Quality You Can Trust
            </h2>
            <p className="text-muted mb-3 fs-6 fs-md-5 text-center text-lg-start">
              Each product undergoes a strict quality verification process to
              ensure it meets the highest standards of purity and freshness.
            </p>
            <ul className="list-unstyled text-muted fs-6 text-center text-lg-start">
              <li>
                <i className="fa fa-check text-success me-2"></i>No pesticides
                or chemicals
              </li>
              <li>
                <i className="fa fa-check text-success me-2"></i>High protein
                and fiber content
              </li>
              <li>
                <i className="fa fa-check text-success me-2"></i>Locally sourced
                ingredients
              </li>
              <li>
                <i className="fa fa-check text-success me-2"></i>Freshly packed
                for longer shelf life
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="bg-light py-5 text-center">
        <div className="container">
          <h2 className="fw-bold text-success mb-3">
            Committed to Sustainability
          </h2>
          <p
            className="text-muted mx-auto px-3"
            style={{ maxWidth: "850px", fontSize: "1.05rem", lineHeight: "1.7" }}
          >
            We believe in giving back to the planet that nourishes us. Our
            packaging is eco-friendly, and our farmers are trained in
            sustainable agriculture. Together, we’re building a greener, cleaner
            future for generations to come.
          </p>
          <div className="row justify-content-center mt-4">
            <div className="col-12 col-md-10 col-lg-8">
              <img
                src="./images/Committed to Sustainability.jpg"
                loading="lazy"
                alt="Sustainability"
                className="img-fluid rounded-4 shadow-lg w-100"
                style={{
                  height: "400px", // ⬆️ Increased height
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-5 text-center text-white"
        style={{
          background: "linear-gradient(to right, #28a745, #2ecc71)",
        }}
      >
        <div className="container py-4">
          <h3 className="fw-bold mb-3">Join Our Organic Revolution 🌾</h3>
          <p className="lead mb-4">
            Choose nature. Choose health. Choose{" "}
            <strong className="text-white">NaturaX</strong>.
          </p>
          <button
            className="btn btn-light text-success rounded-pill px-4 py-2 fw-semibold"
            onClick={() => (window.location.href = "/products")}
          >
            Explore Our Products →
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
