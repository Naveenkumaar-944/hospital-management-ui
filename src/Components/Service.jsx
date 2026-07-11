import Cardiology from "../assets/cardiology.png";
import Neurology from "../assets/neurology.png";
import ICU from "../assets/icu.png";
import Ortho from "../assets/orthopedic.png";

function Services() {
  return (
    <section id="HMSServices" className="HMSServices">

      <div className="ServiceTitle">
        <h2>Our Medical Services</h2>
        <p>Complete healthcare solutions with advanced technology</p>
      </div>

      <div className="ServiceContainer">

        <div className="ServiceCard">
          <img src={Cardiology} alt="cardiology" />
          <h3>Cardiology</h3>
          <p>Advanced heart care and diagnosis</p>
          <button>Learn More</button>
        </div>

        <div className="ServiceCard">
          <img src={Neurology} alt="neurology" />
          <h3>Neurology</h3>
          <p>Brain and nervous system treatment</p>
          <button>Learn More</button>
        </div>

        <div className="ServiceCard">
          <img src={ICU} alt="icu" />
          <h3>ICU Care</h3>
          <p>24/7 emergency critical care support</p>
          <button>Learn More</button>
        </div>

        <div className="ServiceCard">
          <img src={Ortho} alt="orthopedic" />
          <h3>Orthopedic</h3>
          <p>Bone, joint and fracture treatment</p>
          <button>Learn More</button>
        </div>

      </div>

    </section>
  );
}

export default Services;