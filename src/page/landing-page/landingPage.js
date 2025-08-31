import React from 'react';
import './landingPage.css';
import arrowIcon from './assets/arrow1.png';
import heroimg from './assets/heroimg.png';
import herorocket from './assets/herorocket.png';
import heromessage from './assets/heromessage.png';
import heroavatars from './assets/heroavatars.png';
import heroarrow from './assets/heroarrow.png';
import herotick from './assets/herotick.png';
import hero2 from './assets/hero2.png';
import user_follow from './assets/user_follow.png';
import mind_map from './assets/mind_map.png';
import robot_2_fill from './assets/robot_2_fill.png';
import medal_fill from './assets/medal_fill.png';

function LandingPage() {
  const bigImgConfig = { width: 1478, height: 834 };

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

      {/* Navbar Section */}
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

          <div className="hero-content">
            <h1 className="hero-title">Mentorship, Roadmaps & Growth</h1>
            <p className="hero-subtitle">All In One Place</p>
            <a href="#signup" className="hero-button">Get Started</a>
          </div>
        </div>

        <div className="next-section">
          <p className="next-text">
            <span className="quotes">“”</span>
            ALLYNET connects students with experienced alumni and mentors, offering clear career roadmaps and a supportive community. No more random resources — just trusted guidance, all in one place.
            <span className="quotes">“”</span>
          </p>
        </div>
      </section>
      <section className="whyus">
        <div class="left-part">
          <h1 class="heading">Why Choose 
Allynet ?</h1>
<p class="subheading">From mentorship to roadmaps — we’ve got you covered with all or your problems in one place and with single click</p>
        </div>
        <div class="right-part">
          <div className="cards">
            <img src={user_follow} alt="card1"/>
            <h1>Verified Mentorship</h1>
            <p>Connect with verified alumni & seniors who guide you with real experience — not random advice</p>
          </div>
          <div className="cards">
            <img src={mind_map} alt="card2"/>
            <h2>Career Roadmap</h2>
            <p>Follow step-by-step roadmaps for placements, higher studies, and exams with curated notes & guides.</p>
          </div>
          <div className="cards">
            <img src={robot_2_fill} alt="card3"/>
            <h3>AI Mentor Match</h3>
            <p>Our AI instantly matches you with the best mentor based on your interests, skills, and goals</p>
            </div>
            <div className="cards">
              <img src={medal_fill} alt="card3"/>
              <h4>Gamified Learning</h4>
              <p4>Stay motivated with badges, rewards, and leaderboards while learning and sharing knowledge.</p4>
            </div>
          
        </div>
      </section>

      {/* Hero2 Section */}
      <section className="hero2-section">
        <div className="big-image2-container">
          <img src={hero2} alt="Hero background" className="big-bg2" />
          <div className="hero2-content">
  <h1 className="hero2-title">
    Meet ALLYNET, the first platform that combines verified mentorship, 
    <span className="half-title"> clear career roadmaps, and gamified learning — built to help students grow faster with the right guidance.</span>
  </h1>
  <a href="#signup" className="hero2-button">Get Started</a>
</div>
        </div>
      </section>

    </div>
  );
}

export default LandingPage;