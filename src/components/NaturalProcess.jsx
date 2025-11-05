import React from "react";
import { Card } from "react-bootstrap";

const NaturalProcess = () => {
  return (
    <div className="container-fluid py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          {/* --- Left Side Image --- */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <img
              src="./images/naturall Process.jpg"
              loading="lazy"
              alt="Natural Process"
              className="img-fluid rounded-4 shadow-lg w-100"
              style={{ height: "100%", objectFit: "cover" }}
            />
          </div>

          {/* --- Right Side Content --- */}
          <div className="col-lg-6">
            <h1 className="text-success fw-bold mb-3">Natural Process</h1>
            <p className="text-muted">
              Our organic journey begins with fertile, chemical-free soil that’s
              nurtured by nature itself. We use eco-friendly farming methods,
              natural compost, and traditional irrigation to grow produce that’s
              rich in nutrients and free from harmful residues.
            </p>
            <p className="text-muted">
              Every crop is grown with patience and care — ensuring freshness,
              purity, and sustainability. This process not only benefits your
              health but also protects our planet for future generations.
            </p>

            {/* --- Horizontal Cards --- */}
            <div className="mt-5 d-flex flex-column gap-4">
              {/* Card 1 */}
              <Card className="flex-row border-0 shadow-sm rounded-4 overflow-hidden">
                <Card.Img
                  src="./images/Eco Farming.jpg"
                  loading="lazy"
                  style={{ width: "180px", objectFit: "cover" }}
                  alt="Eco Farming"
                />
                <Card.Body className="d-flex flex-column justify-content-center">
                  <Card.Title className="text-success mb-2">
                    Eco Farming
                  </Card.Title>
                  <Card.Text className="text-muted mb-0">
                    Using organic compost and traditional irrigation methods to
                    keep the soil alive and nutrient-rich.
                  </Card.Text>
                </Card.Body>
              </Card>

              {/* Card 2 */}
              <Card className="flex-row border-0 shadow-sm rounded-4 overflow-hidden">
                <Card.Img
                  src="./images/Chemical-Free Growth.jpg"
                  loading="lazy"
                  style={{ width: "180px", objectFit: "cover" }}
                  alt="Chemical Free Growth"
                />
                <Card.Body className="d-flex flex-column justify-content-center">
                  <Card.Title className="text-success mb-2">
                    Chemical-Free Growth
                  </Card.Title>
                  <Card.Text className="text-muted mb-0">
                    100% natural — grown without synthetic fertilizers or
                    pesticides, preserving the purity of nature.
                  </Card.Text>
                </Card.Body>
              </Card>

              {/* Card 3 */}
              <Card className="flex-row border-0 shadow-sm rounded-4 overflow-hidden">
                <Card.Img
                  src="./images/Sustainable Harvest.jpg"
                  loading="lazy"
                  style={{ width: "180px", objectFit: "cover" }}
                  alt="Sustainable Harvest"
                />
                <Card.Body className="d-flex flex-column justify-content-center">
                  <Card.Title className="text-success mb-2">
                    Sustainable Harvest
                  </Card.Title>
                  <Card.Text className="text-muted mb-0">
                    Supporting local farmers and protecting the environment with
                    responsible harvesting practices.
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

export default NaturalProcess;
