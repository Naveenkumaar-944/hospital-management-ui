import { useState } from "react";
import Source from "../assets/image.png";
import Hero from "./Hero";
import Service from "./Service";
import Doctors from "./Doctors";
import Appointment from "./Appointment";


function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="HMSHead">
      <nav className="HMSNav">

        {/* LEFT SIDE */}
        <div className="HMSLogo">

          {/* MENU ICON */}
          <div
            className="menuIcon"
            onClick={() => setOpen(!open)}
          >
            {open ? "✕" : "☰"}
          </div>

          {/* LOGO */}
          <img src={Source} alt="HMS Logo" />

        </div>

        {/* DESKTOP NAVBAR */}
        <div className="HMSNavlink">
          <a href="#HMSHero">Home</a>
          <a href="#HMSServices">Services</a>
          <a href="#HMSDoctors">Doctors</a>
          <a href="#HMSAbout">About</a>
          <a href="#HMSContactInfo">Contact</a>
          <a href="#" id="HMSLogin">Login</a>
        </div>

        {/* OVERLAY */}
        {open && (
          <div
            className="overlay"
            onClick={() => setOpen(false)}
          ></div>
        )}

        {/* SIDEBAR */}
        <div className={`sidebar ${open ? "active" : ""}`}>

          <a href="#HMSHero">Home</a>
          <a href="#HMSServices">Services</a>
          <a href="#HMSDoctors">Doctors</a>
          <a href="#HMSAbout">About</a>
          <a href="#HMSContactInfo">Contact</a>
          <a href="#" id="HMSLogin">Login</a>

        </div>

      </nav>
    </header>
  );
}

export default Header;
