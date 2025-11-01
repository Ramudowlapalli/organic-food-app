import React from "react";
import { Card } from "react-bootstrap";

const OrganicProducts = () => {
  return (
    <div className="container-fluid py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          
          {/* --- Left Side Content --- */}
          <div className="col-lg-6 order-2 order-lg-1">
            <h1 className="text-success fw-bold mb-3">Organic Products</h1>
            <p className="text-muted">
              Our organic products are carefully cultivated and processed using
              natural techniques that preserve the original taste and nutrients
              of the food. We never use synthetic chemicals, GMOs, or artificial
              preservatives — ensuring purity and authenticity.
            </p>
            <p className="text-muted">
              From our farms to your kitchen, every product goes through a
              strict quality check to make sure you receive nothing but the best
              nature can offer. We believe healthy food leads to a healthy life.
            </p>

            {/* --- Horizontal Cards --- */}
            <div className="mt-5 d-flex flex-column gap-4">
              {/* Card 1 */}
              <Card className="flex-row border-0 shadow-sm rounded-4 overflow-hidden">
                <Card.Img
                  src="/freshHarvest.jpg"
                  style={{ width: "180px", objectFit: "cover" }}
                  alt="Fresh Harvest"
                />
                <Card.Body className="d-flex flex-column justify-content-center">
                  <Card.Title className="text-success mb-2">
                    Fresh Harvest
                  </Card.Title>
                  <Card.Text className="text-muted mb-0">
                    Grown and harvested at peak ripeness to preserve nutrients
                    and natural taste.
                  </Card.Text>
                </Card.Body>
              </Card>

              {/* Card 2 */}
              <Card className="flex-row border-0 shadow-sm rounded-4 overflow-hidden">
                <Card.Img
                  src="/gmoFree.jpg"
                  style={{ width: "180px", objectFit: "cover" }}
                  alt="GMO-Free"
                />
                <Card.Body className="d-flex flex-column justify-content-center">
                  <Card.Title className="text-success mb-2">
                    100% GMO-Free
                  </Card.Title>
                  <Card.Text className="text-muted mb-0">
                    Every product is grown from non-genetically modified seeds,
                    keeping food natural and safe.
                  </Card.Text>
                </Card.Body>
              </Card>

              {/* Card 3 */}
              <Card className="flex-row border-0 shadow-sm rounded-4 overflow-hidden">
                <Card.Img
                  src="/purePackaging.jpg"
                  style={{ width: "180px", objectFit: "cover" }}
                  alt="Eco Packaging"
                />
                <Card.Body className="d-flex flex-column justify-content-center">
                  <Card.Title className="text-success mb-2">
                    Eco Packaging
                  </Card.Title>
                  <Card.Text className="text-muted mb-0">
                    Packed using biodegradable materials to ensure freshness
                    while caring for the environment.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>

          {/* --- Right Side Image --- */}
          <div className="col-lg-6 order-1 order-lg-2 mb-4 mb-lg-0">
            <img
              src="/OrganicProductsMain.jpg"
              alt="Organic Products"
              className="img-fluid rounded-4 shadow-lg w-100"
              style={{ height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganicProducts;
