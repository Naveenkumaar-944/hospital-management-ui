import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

function ContactInfo() {
  return (
    <section id="HMSContactInfo" className="HMSContactInfo">

      <h2 className="HMSSectionTitle">Get In Touch</h2>
      <p className="HMSSectionSubTitle">
        We'd love to hear from you. Reach out to us anytime.
      </p>

      <div className="HMSContactContainer">

        <div className="HMSContactCard">
          <div className="HMSIcon">
            <FaPhoneAlt />
          </div>

          <h3>Call Us</h3>

          <p>+91 98765 43210</p>
          <span>Available 24/7</span>
        </div>

        <div className="HMSContactCard">
          <div className="HMSIcon">
            <FaEnvelope />
          </div>

          <h3>Email</h3>

          <p>info@abishekhealthcare.com</p>
          <span>Reply within 24 Hours</span>
        </div>

        <div className="HMSContactCard">
          <div className="HMSIcon">
            <FaMapMarkerAlt />
          </div>

          <h3>Hospital Address</h3>

          <p>
            No.24, Williams Road,
            <br />
            Cantonment,
            <br />
            Tiruchirappalli,
            <br />
            Tamil Nadu - 620001
          </p>
        </div>

        <div className="HMSContactCard">
          <div className="HMSIcon">
            <FaClock />
          </div>

          <h3>Working Hours</h3>

          <p>Monday - Saturday</p>

          <span>8:00 AM - 8:00 PM</span>

          <span>Emergency Service 24/7</span>
        </div>

      </div>

    </section>
  );
}

export default ContactInfo;