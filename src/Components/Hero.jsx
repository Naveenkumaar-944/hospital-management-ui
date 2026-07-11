import Doctor from "../assets/doctor.png";

function Hero() {
  return (
    <section id="HMSHero" className="HMSHero">

      {/* LEFT SIDE */}
      <div className="HMSHeroLeft">

        <h1>
          Quality <span>Healthcare</span> <br />
          for Everyone
        </h1>

        <p>
          We combine advanced medical technology with compassionate
          care to build a healthier tomorrow.
        </p>

        <button><a href="#AppointmentSection">Book Appointment</a></button>

        {/* FEATURE BOXES */}
        <div className="HMSHeroFeatures">

          <div className="FeatureBox">
            <h4>Smart Technology</h4>
            <p>Integrated digital healthcare</p>
          </div>

          <div className="FeatureBox">
            <h4>Advanced Equipment</h4>
            <p>State of the art systems</p>
          </div>

          <div className="FeatureBox">
            <h4>Trusted Doctors</h4>
            <p>Expert specialists</p>
          </div>

        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="HMSHeroRight">
        <img src={Doctor} alt="Doctor" />
      </div>

    </section>
  );
}

export default Hero;