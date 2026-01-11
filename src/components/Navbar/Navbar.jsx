import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'


const Navbar = () => {
  
    const [Sticky, setSticky] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
        window.scrollY > 50 ? setSticky(true) : setSticky(false);
      });
    }, []);

  return (
    <nav className= {`Container ${Sticky ? 'Dark-nav' : ''}`} >
        <img src={logo} alt="" className="logo" />
        <ul>
            <li>Home</li>
            <li>Program</li>
            <li>About Us</li>
            <li>Campus</li>
            <li>Testamonials</li>
            <li><button className="btn">Contact Us</button></li>   
        </ul>
    </nav>
  )
}

export default Navbar
