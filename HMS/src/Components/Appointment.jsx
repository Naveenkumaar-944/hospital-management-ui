import Appoint from "../assets/appointment.png"

function Appointment() {
  return (
    <section id="AppointmentSection" className="AppointmentSection">

      {/* LEFT */}
      <div className="AppointmentLeft">
        <h2>Book an Appointment</h2>
        <p>
          Schedule your consultation with our experienced doctors.
          Fast, secure and hassle free booking.
        </p>

        <form>

          <input type="text" placeholder="Full Name" />

          <input type="email" placeholder="Email Address" />

          <input type="tel" placeholder="Phone Number" />

          <select>
            <option>Select Department</option>
            <option>Cardiology</option>
            <option>Neurology</option>
            <option>Orthopedic</option>
            <option>ICU Care</option>
          </select>

          <input type="date" />

          <button type="submit">
            Confirm Appointment
          </button>

        </form>
      </div>

      {/* RIGHT */}
      <div className="AppointmentRight">
        <img
          src={Appoint} alt="appointment" />
      </div>

    </section>
  );
}

export default Appointment;