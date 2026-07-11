import { useState } from "react";

function FAQ() {

  const faqs = [
    {
      question: "How can I book an appointment?",
      answer:
        "You can book an appointment through our website, by calling our reception, or by visiting the hospital directly."
    },
    {
      question: "Do you provide emergency services?",
      answer:
        "Yes. Our emergency department operates 24 hours a day, 7 days a week."
    },
    {
      question: "Can I consult doctors online?",
      answer:
        "Yes. We offer online consultations for selected departments and specialists."
    },
    {
      question: "Do you accept health insurance?",
      answer:
        "Yes. We accept most major health insurance providers. Please contact our billing department for details."
    },
    {
      question: "What are the hospital visiting hours?",
      answer:
        "General visiting hours are from 10:00 AM to 7:00 PM. ICU visits are subject to hospital policies."
    }
  ];

  const [active, setActive] = useState(null);

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="HMSFAQSection">

      <div className="HMSFAQHeading">
        <h2>Frequently Asked Questions</h2>
        <p>
          Find answers to the most common questions about our hospital and
          services.
        </p>
      </div>

      <div className="HMSFAQContainer">

        {faqs.map((faq, index) => (

          <div
            key={index}
            className={`HMSFAQItem ${active === index ? "active" : ""}`}
          >

            <button
              className="HMSFAQQuestion"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              <span>{active === index ? "−" : "+"}</span>
            </button>

            <div
              className={`HMSFAQAnswer ${
                active === index ? "show" : ""
              }`}
            >
              <p>{faq.answer}</p>
            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default FAQ;