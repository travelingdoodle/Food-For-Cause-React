import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => (
  <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <div className="navbar-header">
      <Link className="navbar-brand" to="/">
          Food For Cause
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
          <Link to="/reserve">Reserve Items</Link>
        </li>
      <li
          className={window.location.pathname === '/donate' ? 'active' : ''}
        >
          <Link to="/donate">Donate Food</Link>
        </li>
    </ul>
      <ul className="nav navbar-nav mr-right">
          <img className="rounded-circle" id="nav-pic" src="https://www.catholic.edu/assets/images/default_profile.jpg" alt="Placeholder" height="25px" />
          <li className={window.location.pathname === '/profile' ? 'active' : ''}>
          <Link to="/profile">Profile</Link>
        </li>
        </ul>

      {/* <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a className="nav-link" href="main.html">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="items.html">Find Items</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="add.html">Add Items</a>
        </li>
        <li className="nav-item">
            <a className="nav-link active" href="profile.html">Profile<span className="sr-only">(current)</span></a>
        </li>
      </ul> */}

      {/* <form className="form-inline mt-2 mt-md-0">
        <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form> */}
    </div>
  </nav>
);

export default Navbar;
