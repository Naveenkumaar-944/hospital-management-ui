
import HospitalImage from "../assets/about.png";

function About() {
  return (
    <section id="HMSAbout" className="HMSAbout">

      <div className="HMSAboutContainer">

        <div className="HMSAboutImage">
          <img src={HospitalImage} alt="Hospital" />
        </div>

        <div className="HMSAboutContent">

          <span className="HMSAboutTag">
            ABOUT US
          </span>

          <h2>
            Caring for Your Health,
            <br />
            Every Step of the Way
          </h2>

          <p>
            Abishek Healthcare is committed to delivering high-quality,
            patient-centered healthcare with advanced medical technology and
            experienced professionals. Our goal is to provide compassionate,
            affordable, and accessible healthcare for every patient.
          </p>

          <div className="HMSAboutFeatures">

            <div className="HMSFeature">
              ✔ 15+ Years of Experience
            </div>

            <div className="HMSFeature">
              ✔ 50+ Expert Doctors
            </div>

            <div className="HMSFeature">
              ✔ 24/7 Emergency Services
            </div>

            <div className="HMSFeature">
              ✔ Advanced Medical Equipment
            </div>

          </div>

          <button className="HMSAboutBtn">
            Learn More
          </button>

        </div>

      </div>

    </section>
  );
}

export default About;