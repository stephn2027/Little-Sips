import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Dropdown from './Dropdown';
import logo from '../images/logo-2.png';
import '../css/navbar.css';

export default function Navbar(props) {
  
  const [click, setClick] = useState(false);
  const [dropdownstate, setDropdown] = useState(false);
  const [navClass, setNavClass] = useState('cnavbar');

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  window.addEventListener('scroll', () => {
    if (window.scrollY >= 10) {
      setNavClass('cnavbar active');
    } else {
      setNavClass('cnavbar');
    }
  });

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  return (
    <React.Fragment>
      <nav className={navClass}>
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img src={logo} className="nav-logo" alt="" />
        </Link>

        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <NavLink
              to="/story"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/menu" className="nav-links" onClick={closeMobileMenu}>
              Menu
            </NavLink>
          </li>
          <li
            className="nav-item"
            onMouseEnter={() => onMouseEnter()}
            onMouseLeave={() => onMouseLeave()}
          >
            <div to="" className="nav-links" onClick={closeMobileMenu}>
              Contact Us &nbsp;
              <i className="fas fa-caret-down"></i>
            </div>
            {dropdownstate && <Dropdown />}
          </li>
          <li className="nav-item">
            <NavLink
              to="/location"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Location
            </NavLink>
          </li>
          {/* <Button /> */}
        </ul>
      </nav>
    </React.Fragment>
  );
}
