import { useState } from 'react'
import './App.css'
import Header from "../src/Components/Header.jsx"
import Hero from './Components/Hero.jsx'
import Service from './Components/Service.jsx'
import Doctors from './Components/Doctors.jsx'
import Appointment from './Components/Appointment.jsx'
import ContactInfo from './Components/ContactInfo.jsx'
import ContactForm from './Components/ContactForm.jsx'
import FAQ from './Components/FAQ.jsx'
import EmergencyCare from './Components/EmergencyCare.jsx'
import Footer from './Components/Footer.jsx'
import About from './Components/About.jsx'

function App() {
  return (
    <>
    <Header />
    <Hero />
    <About />
    <Service />
    <Doctors />
    <Appointment />
    <ContactInfo />
    <ContactForm />
    <FAQ />
    <EmergencyCare />
    <Footer />
    </>
  )
}

export default App
