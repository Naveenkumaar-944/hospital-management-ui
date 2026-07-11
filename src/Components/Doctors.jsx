import Doc1 from "../assets/doc1.png";
import Doc2 from "../assets/doc2.png";
import Doc3 from "../assets/doc3.png";

function Doctors(){
  return(
    <section id="HMSDoctors" className="HMSDoctors">

      <div className="DoctorTitle">
        <h2>Meet Our Specialists</h2>
        <p>Experienced doctors dedicated to your health</p>
      </div>

      <div className="DoctorContainer">

        <div className="DoctorCard">
          <img src={Doc1} alt="" />
          <h3>Dr. Kratos</h3>
          <span>Cardiologist</span>
          <p>12+ Years Experience</p>
          <button>View Profile</button>
        </div>

        <div className="DoctorCard">
          <img src={Doc2} alt="" />
          <h3>Dr. Sun Wukong</h3>
          <span>Neurologist</span>
          <p>10+ Years Experience</p>
          <button>View Profile</button>
        </div>

        <div className="DoctorCard">
          <img src={Doc3} alt="" />
          <h3>Dr. Jin Sakai</h3>
          <span>Orthopedic</span>
          <p>15+ Years Experience</p>
          <button>View Profile</button>
        </div>

      </div>

    </section>
  )
}

export default Doctors;