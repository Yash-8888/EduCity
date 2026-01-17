import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import Programs from './components/Programs/Programs.jsx'
import Title from './components/Title/Title.jsx'
import About from './components/About/About.jsx'
import Campus from './components/Campus/Campus.jsx'
import { Activity } from 'react'
import Testimonials from './components/Testimonials/Testimonials.jsx'
import Contact from './components/Contact/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <div className="Container">
        <Title subTitle='Our PROGRAM' Title='What We Offer'/>
        <Programs/>
        <About/> 
        <Title subTitle='Gallery' Title='Campus Photos'/> 
        <Campus/>
        <Title subTitle='Testimonials' Title='What Our Students Say'/> 
        <Testimonials/>
        <Title subTitle='Contact Us' Title='Get In Touch'/> 
        <Contact/>
        <Footer/>
      </div> 
    </div>
  )
}

export default App
