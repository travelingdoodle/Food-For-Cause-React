import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from '../../assets/img/logo.png';

const Navbar = () => (
  <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <div className="navbar-header">
        <Link className="navbar-brand" to="/">
          <img className="navbar-logo" src={Logo} alt="Food For Cause" />
        </Link>
    </div>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">

      <ul className="nav navbar-nav mr-auto">
        <li
          className={
            window.location.pathname === '/' ||
            window.location.pathname === '/reserve'
              ? 'active'
              : ''
          }
        >
          <Link className="nav-link" to="/reserve">Reserve Items</Link>
        </li>
        <li className={window.location.pathname === '/donate' ? 'active' : ''}>
          <Link className="nav-link" to="/donate">Donate Food</Link>
        </li>
      </ul>
      <ul className="nav navbar-nav mr-right">
        <img className="rounded-circle" id="nav-pic" src="https://www.catholic.edu/assets/images/default_profile.jpg" alt="Placeholder" height="25px" />
        <li id="profileLink" className={window.location.pathname === '/profile' ? 'active' : ''}>
          <Link className="nav-link" to="/profile">Profile</Link>
        </li>
        <li className={window.location.pathname === '/logout' ? 'active' : ''}>
          <Link className="nav-link" to="/logout">Logout</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
