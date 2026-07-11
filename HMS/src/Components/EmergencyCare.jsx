
import { FaAmbulance, FaPhoneAlt } from "react-icons/fa";

function EmergencyCare() {
  return (
    <section className="HMSEmergencyCare">

      <div className="HMSEmergencyContainer">

        <div className="HMSEmergencyLeft">

          <div className="HMSEmergencyIcon">
            <FaAmbulance />
          </div>

          <div>
            <h2>24/7 Emergency Care</h2>

            <p>
              Our emergency department is available around the clock to provide
              immediate medical attention with experienced doctors, advanced
              equipment, and rapid response services.
            </p>
          </div>

        </div>

        <div className="HMSEmergencyRight">

          <h3>Emergency Helpline</h3>

          <div className="HMSEmergencyNumber">
            <FaPhoneAlt />
            <span>+91 98765 43210</span>
          </div>

          <a href="tel:+919876543210" className="HMSEmergencyBtn">
            Call Now
          </a>

        </div>

      </div>

    </section>
  );
}

export default EmergencyCare;