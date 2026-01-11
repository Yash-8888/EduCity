import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import Programs from './components/Programs/Programs.jsx'
import Title from './components/Title/Title.jsx'
import About from './components/About/About.jsx'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <div className="Container">
        <Title subTitle='Our PROGRAM' Title='What We Offer'/>
        <Programs/>
        <About/>  
      </div> 
    </div>
  )
}

export default App
