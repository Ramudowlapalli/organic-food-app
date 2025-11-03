import React from "react";
import { Card } from "react-bootstrap";

const BiologicallySafe = () => {
  return (
    <div className="container-fluid py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          {/* --- Left Side Image --- */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <img
              src="./images/BiologicallySafeMain.jpg"
              alt="Biologically Safe"
              className="img-fluid rounded-4 shadow-lg w-100"
              style={{ height: "100%", objectFit: "cover" }}
            />
          </div>

          {/* --- Right Side Content --- */}
          <div className="col-lg-6">
            <h1 className="text-success fw-bold mb-3">Biologically Safe</h1>
            <p className="text-muted">
              Safety and health are at the core of everything we produce. Our
              biologically safe food is cultivated without toxins, pesticides,
              or harmful chemicals, ensuring it’s safe for your body and for the
              planet.
            </p>
            <p className="text-muted">
              We follow international organic certification standards and
              perform multiple lab tests to guarantee purity, freshness, and
              long-term health benefits for your family.
            </p>

            {/* --- Horizontal Cards --- */}
            <div className="mt-5 d-flex flex-column gap-4">
              {/* Card 1 */}
              <Card className="flex-row border-0 shadow-sm rounded-4 overflow-hidden">
                <Card.Img
                  src="./images/labTested.jpg"
                  style={{ width: "180px", objectFit: "cover" }}
                  alt="Lab Tested"
                />
                <Card.Body className="d-flex flex-column justify-content-center">
                  <Card.Title className="text-success mb-2">
                    Lab Tested & Certified
                  </Card.Title>
                  <Card.Text className="text-muted mb-0">
                    Every product passes through advanced biological and
                    chemical testing for safety assurance.
                  </Card.Text>
                </Card.Body>
              </Card>

              {/* Card 2 */}
              <Card className="flex-row border-0 shadow-sm rounded-4 overflow-hidden">
                <Card.Img
                  src="./images/ecoFriendly.jpg"
                  style={{ width: "180px", objectFit: "cover" }}
                  alt="Eco Friendly Methods"
                />
                <Card.Body className="d-flex flex-column justify-content-center">
                  <Card.Title className="text-success mb-2">
                    Eco-Friendly Methods
                  </Card.Title>
                  <Card.Text className="text-muted mb-0">
                    Promoting biodiversity and soil health through sustainable
                    farming techniques.
                  </Card.Text>
                </Card.Body>
              </Card>

              {/* Card 3 */}
              <Card className="flex-row border-0 shadow-sm rounded-4 overflow-hidden">
                <Card.Img
                  src="./images/familyHealth.jpg"
                  style={{ width: "180px", objectFit: "cover" }}
                  alt="Family Health"
                />
                <Card.Body className="d-flex flex-column justify-content-center">
                  <Card.Title className="text-success mb-2">
                    Family Health First
                  </Card.Title>
                  <Card.Text className="text-muted mb-0">
                    Safe and nutritious food designed to support the health of
                    every member of your family.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BiologicallySafe;
