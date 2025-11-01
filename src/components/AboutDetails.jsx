import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaLeaf, FaSeedling, FaHandsHelping, FaTruck } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const AboutDetails = () => {
  return (
    <div className="container-xxl py-5">
      <Container>
        <Row className="g-5 align-items-center">
          {/* --- Left Image Section --- */}
          <Col lg={6}>
            <div className="position-relative overflow-hidden p-5 pe-0">
              <img
                src="about img.jpg"
                alt="About NaturaX"
                className="img-fluid w-100 rounded-4 shadow"
              />
            </div>
          </Col>

          {/* --- Right Content Section --- */}
          <Col lg={6}>
            <h1 className="display-5 mb-3 text-success fw-bold">
              Best Organic Fruits And Vegetables
            </h1>

            <p className="text-muted mb-4">
              At <strong>NaturaX</strong>, we believe that true wellness starts
              from the ground up. Our mission is to make healthy eating easy and
              accessible by providing farm-fresh, 100% organic fruits and
              vegetables directly from our trusted local farmers.
            </p>

            <p className="text-muted mb-4">
              Every product we offer is cultivated with care — without synthetic
              fertilizers or harmful pesticides — preserving both your health
              and the planet’s natural balance. From the soil to your plate, we
              ensure purity, nutrition, and freshness.
            </p>

            {/* --- Highlights with Icons --- */}
            <div className="mb-3">
              <p>
                <FaSeedling className="text-success me-3" />
                <strong>Grown Without Chemicals:</strong> 100% natural farming
                techniques ensure safe and pure produce.
              </p>
              <p>
                <FaLeaf className="text-success me-3" />
                <strong>Packed With Nutrition:</strong> Retains vitamins and
                minerals for maximum nourishment.
              </p>
              <p>
                <FaHandsHelping className="text-success me-3" />
                <strong>Supporting Local Farmers:</strong> Empowering farmers
                with fair trade and sustainable practices.
              </p>
              <p>
                <FaTruck className="text-success me-3" />
                <strong>Delivered Fresh:</strong> Hand-picked daily and delivered
                straight to your doorstep.
              </p>
            </div>

            {/* --- CTA Button --- */}
            <Button
              variant="success"
              className="rounded-pill py-3 px-5 fw-semibold"
              href="/about"
            >
              Learn More About Us
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutDetails;
