import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";


const Navbar = () => (
  <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <a className="navbar-header">
        <Link className="navbar-brand" to="/">
          Food For Cause
        </Link>
      </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">

    <ul className="nav navbar-nav mr-auto">
        <li
          className={
            window.location.pathname === "/" ||
            window.location.pathname === "/items"
              ? "active"
              : ""
          }
        >
          <Link to="/items">Find Items</Link>
        </li>
        <li
          className={window.location.pathname === "/add" ? "active" : ""}
        >
          <Link to="/Add">Add Items</Link>
        </li>
        <li className={window.location.pathname === "/profile" ? "active" : ""}>
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

      <form className="form-inline mt-2 mt-md-0">
        <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>
);

export default Navbar;
