import React from 'react';
import './Main.css';

const Main = () => (
  <div className="site-wrapper">
      <div className="site-wrapper-inner">
      <div className="cover-container">
        <header className="masthead clearfix">
          <div className="inner">
            <nav className="nav nav-masthead">
              <a className="nav-link" href="#">About Us</a>
              <a className="nav-link" href="#">Contact</a>
            </nav>
          </div>
        </header>

        <main role="main" className="inner cover">
          <h1 className="cover-heading">Food For Cause</h1>
          <br />
          <h3 className="lead">Help supply local food pantries, to make Kansas City a better place.</h3>
          <br /><br />
          <a href="/login" className="btn btn-lg btn-secondary">Login</a>
        </main>

        <footer className="mastfoot">
          <div className="inner">
            <p>&copy; 2017 Food For Cause</p>
          </div>
        </footer>
      </div>
    </div>
    </div>
);

export default Main;
