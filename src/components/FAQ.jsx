import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const FAQ = () => {
  const faqs = [
    {
      question: "What makes NaturaX products organic?",
      answer:
        "All NaturaX products are sourced from certified organic farms where no synthetic pesticides, fertilizers, or GMOs are used. Our farmers follow natural and eco-friendly farming practices.",
    },
    {
      question: "Do you deliver across India?",
      answer:
        "Yes! We deliver to most cities and towns across India with safe and eco-friendly packaging. Delivery times may vary depending on your location.",
    },
    {
      question: "Are your products fresh?",
      answer:
        "Absolutely. Our produce is harvested and delivered directly from farms to your doorstep to ensure maximum freshness and nutrition.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order is confirmed, you will receive an email and SMS with a tracking link so you can check your order status in real-time.",
    },
    {
      question: "Do you support sustainable farming?",
      answer:
        "Yes, sustainability is at the heart of NaturaX. We work closely with farmers to promote eco-friendly practices and reduce carbon footprints in food production.",
    },
  ];

  return (
    <section className="py-5 bg-light" id="faq">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-success">Frequently Asked Questions</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: "700px" }}>
            Find quick answers about our organic products, delivery, and sustainability efforts.
          </p>
        </div>

        <div className="accordion shadow-sm rounded-4" id="faqAccordion">
          {faqs.map((faq, index) => (
            <div className="accordion-item border-0 mb-3" key={index}>
              <h2 className="accordion-header" id={`heading${index}`}>
                <button
                  className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${index}`}
                  aria-expanded={index === 0 ? "true" : "false"}
                  aria-controls={`collapse${index}`}
                  style={{
                    backgroundColor: "#e8f5e9",
                    fontWeight: "600",
                    color: "#2e7d32",
                    fontSize: "1.05rem",
                  }}
                >
                  {faq.question}
                </button>
              </h2>
              <div
                id={`collapse${index}`}
                className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                aria-labelledby={`heading${index}`}
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body text-muted" style={{ fontSize: "0.95rem" }}>
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
