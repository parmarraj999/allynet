import React from 'react';
import './landingPage.css';
import arrowIcon from './assets/arrow1.png';

function LandingPage() {
  return (
    <section className="navbar-section">
      <div className="navbar-card">
        <div className="logo-text">ALLYNET</div>

        <div className="menu-links">
          <a href="#home" className="menu-item">Home</a>

          <div className="menu-item dropdown">
            Feature
            <img src={arrowIcon} alt="arrow" className="arrow-icon" />
            <div className="dropdown-content">
              <a href="#feature1">Feature 1</a>
              <a href="#feature2">Feature 2</a>
            </div>
          </div>

          <div className="menu-item dropdown">
            Community
            <img src={arrowIcon} alt="arrow" className="arrow-icon" />
            <div className="dropdown-content">
              <a href="#forum">Forum</a>
              <a href="#events">Events</a>
            </div>
          </div>

          <a href="#about" className="menu-item">About Us</a>
        </div>

        <a href="#signup" className="navbutton">
  Join for Free
</a>
      </div>
    </section>
  );
}

export default LandingPage;