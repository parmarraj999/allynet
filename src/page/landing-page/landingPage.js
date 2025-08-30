import React from 'react';
import './landingPage.css';
import arrowIcon from './assets/arrow1.png';

// Import images
import heroimg from './assets/heroimg.png';
import herorocket from './assets/herorocket.png';
import heromessage from './assets/heromessage.png';
import heroavatars from './assets/heroavatars.png';
import heroarrow from './assets/heroarrow.png';
import herotick from './assets/herotick.png';

function LandingPage() {
  const bigImgConfig = { width: 1478, height: 834 }; // Figma dimensions

  // Convert px to % relative to big image
  const smallImages = [
    { src: herorocket, x: 58.09, y: 90.66, width: 182.82, height: 182.82 },
    { src: heromessage, x: 815.25, y: 145.13, width: 156.51, height: 156.51 },
    { src: heroavatars, x: 17, y: 593.04, width: 350.11, height: 262.73 },
    { src: heroarrow, x: 942.41, y: 612.36, width: 123.19, height: 123.19 },
    { src: herotick, x: 1277.04, y: 333.37, width: 199.93, height: 199.93 },
  ].map(img => ({
    ...img,
    leftPercent: (img.x / bigImgConfig.width) * 100,
    topPercent: (img.y / bigImgConfig.height) * 100,
    widthPercent: (img.width / bigImgConfig.width) * 100,
    heightPercent: (img.height / bigImgConfig.height) * 100,
  }));

  return (
    <div className="landing-parent">
      {/* Navbar */}
      <section className="navbar-section">
        <div className="navbar-card">
          <div className="logo-text">ALLYNET</div>

          <div className="menu-links">
            <a href="#home" className="menu-item">Home</a>
            <div className="menu-item dropdown">
              Feature
              <img src={arrowIcon} alt="" className="arrow-icon" />
              <div className="dropdown-content">
                <a href="#feature1">Feature 1</a>
                <a href="#feature2">Feature 2</a>
              </div>
            </div>
            <div className="menu-item dropdown">
              Community
              <img src={arrowIcon} alt="" className="arrow-icon" />
              <div className="dropdown-content">
                <a href="#forum">Forum</a>
                <a href="#events">Events</a>
              </div>
            </div>
            <a href="#about" className="menu-item">About Us</a>
          </div>

          <a href="#signup" className="navbutton">Join for Free</a>
        </div>
      </section>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="big-image-container">
          <img src={heroimg} alt="Hero background" className="big-bg" />

          {/* Small images */}
          {smallImages.map((img, idx) => (
            <img
              key={idx}
              src={img.src}
              alt=""
              className="small-img"
              style={{
                left: `${img.leftPercent}%`,
                top: `${img.topPercent}%`,
                width: `${img.widthPercent}%`,
                height: `${img.heightPercent}%`,
              }}
            />
          ))}

          {/* Hero Text & Button */}
          <div className="hero-content">
            <h1 className="hero-title">Mentorship, Roadmaps & Growth</h1>
            <p className="hero-subtitle">All In One Place</p>
            <a href="#signup" className="hero-button">Get Started</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;