import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="expand navbar-expand" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="navbar-brand" to="/">
              Coffeely
            </Link>
            <NavLink className="nav-item nav-link" to="/menu">
              Menu
            </NavLink>
            <NavLink className="nav-item nav-link" to="/about">
              About
            </NavLink>
            <NavLink className="nav-item nav-link" to="/contact">
              Contact
            </NavLink>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}
