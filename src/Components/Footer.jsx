
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaHeartbeat,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="HMSFooter">

      <div className="HMSFooterContainer">

        {/* Hospital Info */}

        <div className="HMSFooterSection">

          <div className="HMSFooterLogo">

            <FaHeartbeat className="HMSLogoIcon" />

            <h2>Abishek Healthcare</h2>

          </div>

          <p>
            Delivering quality healthcare with compassion, advanced medical
            technology, and experienced professionals dedicated to your
            well-being.
          </p>

          <div className="HMSSocialIcons">

            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaTwitter />
            </a>

            <a href="#">
              <FaLinkedinIn />
            </a>

          </div>

        </div>

        {/* Quick Links */}

        <div className="HMSFooterSection">

          <h3>Quick Links</h3>

          <ul>

            <li><a href="#HMSHero">Home</a></li>

            <li><a href="#HMSAbout">About</a></li>

            <li><a href="#HMSServices">Services</a></li>

            <li><a href="#HMSDoctors">Doctors</a></li>

            <li><a href="#HMSContactInfo">Contact</a></li>

          </ul>

        </div>

        {/* Departments */}

        <div className="HMSFooterSection">

          <h3>Departments</h3>

          <ul>

            <li>Cardiology</li>

            <li>Neurology</li>

            <li>Orthopedics</li>

            <li>Pediatrics</li>

            <li>Emergency Care</li>

          </ul>

        </div>

        {/* Contact */}

        <div className="HMSFooterSection">

          <h3>Contact Info</h3>

          <div className="HMSFooterContact">

            <p>
              <FaPhoneAlt />
              +91 98765 43210
            </p>

            <p>
              <FaEnvelope />
              info@abishekhealthcare.com
            </p>

            <p>
              <FaMapMarkerAlt />
              Williams Road, Cantonment,
              Tiruchirappalli - 620001
            </p>

          </div>

        </div>

      </div>

      <div className="HMSFooterBottom">

        <p>
          © 2026 <strong>Abishek Healthcare</strong>. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;