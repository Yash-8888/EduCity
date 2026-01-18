import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll'
import menu_icon from '../../assets/menu-icon.png'


const Navbar = () => {
  
    const [Sticky, setSticky] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
        window.scrollY > 50 ? setSticky(true) : setSticky(false);
      });
    }, []);
    const [mobileMenu, setMobileMenu] = useState(false);
    const toggelMenu = () => {
      mobileMenu ? setMobileMenu(false): setMobileMenu(true);
    }

  return (
    <nav className= {`Container ${Sticky ? 'Dark-nav' : ''}`} >
        <img src={logo} alt="" className="logo" />
        <ul className={mobileMenu?'':'hide-mobile-menu'}>
            <li><Link to="Hero" smooth={true} offset={0} duration={500}>Home</Link> </li>
            <li><Link to="Promgrams" smooth={true} offset={0} duration={500}>Program</Link></li>
            <li><Link to="About" smooth={true} offset={0} duration={500}>About Us</Link></li>
            <li><Link to="Campus" smooth={true} offset={0} duration={500}>Campus</Link></li>
            <li><Link to="Testimonials" smooth={true} offset={0} duration={500}>Testamonials</Link></li>
            <li><Link to="contact" smooth={true} offset={0} duration={500} className="btn">Contact Us</Link></li>   
        </ul>
        <img src={menu_icon} alt="" className='Menu-icon' onClick={toggelMenu}/>
    </nav>
  )
}

export default Navbar
