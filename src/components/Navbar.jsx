import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Button from './Button';
import Dropdown from './Dropdown'
import logo from '../images/logo-2.png'
import '../css/navbar.css';


export default function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdownstate, setDropdown] = useState(false);
  const [navClass,setNavClass] = useState("cnavbar");
  
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  
  

  window.addEventListener('scroll',()=>{
      if(window.scrollY>=10){

       setNavClass("cnavbar active");
       
      }else{
          setNavClass('cnavbar');
          
      
      }
  });

  const onMouseEnter = () => {
    if (document.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
      
    }
  };

  const onMouseLeave = () => {
    if (document.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  return (
    <React.Fragment>
      <nav className={navClass}>
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
         <img src={logo}  className="nav-logo" alt="" />
          
        </Link>
        
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <NavLink
              to="/about"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              About
            </NavLink>
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link to="/menu" className="nav-links" onClick={closeMobileMenu}>
              Menu
              <i className="fas fa-caret-down"></i>
            </Link>
            {dropdownstate && <Dropdown />}
          </li>
          <li className="nav-item">
            <NavLink
              to="/contact"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Contact Us
            </NavLink>
          </li>
          <li className="nav-item">
            <Link
              to="/sign-up"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li>
          <Button />
        </ul>
      </nav>
    </React.Fragment>
  );
}
