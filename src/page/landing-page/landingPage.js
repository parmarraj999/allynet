import React from 'react';
import { Link } from 'react-router-dom';
import './landingPage.css';


function LandingPage() {
  const bigImgConfig = { width: 1478, height: 834 };

  const smallImages = [
    { src: '../../../../assets/heroarrow.png', x: 58.09, y: 90.66, width: 182.82, height: 182.82 },
    { src: '../../../../assets/heromessage.png', x: 815.25, y: 145.13, width: 156.51, height: 156.51 },
    { src: '../../../../assets/heroavatars.png', x: 17, y: 593.04, width: 350.11, height: 262.73 },
    { src: '../../../../assets/heroarrow.png', x: 942.41, y: 612.36, width: 123.19, height: 123.19 },
    { src: '../../../../assets/herotick.png', x: 1277.04, y: 333.37, width: 199.93, height: 199.93 },
  ].map(img => ({
    ...img,
    leftPercent: (img.x / bigImgConfig.width) * 100,
    topPercent: (img.y / bigImgConfig.height) * 100,
    widthPercent: (img.width / bigImgConfig.width) * 100,
    heightPercent: (img.height / bigImgConfig.height) * 100,
  }));

  return (
    <div className="landing-parent">

      <section className="navbar-section">
        <div className="navbar-card">
          <div className="logo-text">ALLYNET</div>
          <div className="menu-links">
            <a href="#home" className="menu-item">Home</a>
            <div className="menu-item dropdown">
              Feature
              <svg style={{ width: '20px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg>
              <div className="dropdown-content">
                <a href="#feature1">Feature 1</a>
                <a href="#feature2">Feature 2</a>
              </div>
            </div>
            <div className="menu-item dropdown">
              Community
              <svg style={{ width: '20px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg>
              <div className="dropdown-content">
                <a href="#forum">Forum</a>
                <a href="#events">Events</a>
              </div>
            </div>
            <a href="#about" className="menu-item">About Us</a>
          </div>
          <Link to='/login' className="navbutton">Join for Free</Link>
        </div>
      </section>

      <section className="hero-section">
        <div className="big-image-container">
          <img src='/assets/heroimg.png' alt="Hero background" className="big-bg" />

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
            <Link to='/login' className="hero-button">Get Started</Link>
          </div>
        </div>

      </section>

      <div className="next-section">
        <p className="next-text">
          <span className="quotes">“”</span>
          ALLYNET connects students with experienced alumni and mentors, offering clear career roadmaps and a supportive community. No more random resources — just trusted guidance, all in one place.
          <span className="quotes">“”</span>
        </p>
      </div>

      <section className="whyus">
        <div className='why-us-container' >
          <div class="left-part">
            <h1 class="heading">Why Choose
              Allynet ?</h1>
            <p class="subheading">From mentorship to roadmaps — we’ve got you covered with all or your problems in one place and with single click</p>
          </div>
          <div class="right-part">
            <div className="cards">
             <svg style={{width:"35px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 14.0619V22H4C4 17.5817 7.58172 14 12 14C12.3387 14 12.6724 14.021 13 14.0619ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM17.7929 19.9142L21.3284 16.3787L22.7426 17.7929L17.7929 22.7426L14.2574 19.2071L15.6716 17.7929L17.7929 19.9142Z"></path></svg>
              <h2>Verified Mentorship</h2>
              <p>Connect with verified alumni & seniors who guide you with real experience — not random advice</p>
            </div>
            <div className="cards">
              <svg style={{width:"35px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18 3C19.6569 3 21 4.34315 21 6C21 7.65685 19.6569 9 18 9H15C13.6941 9 12.5831 8.16562 12.171 7.0009L11 7C9.9 7 9 7.9 9 9L9.0009 9.17102C10.1656 9.58312 11 10.6941 11 12C11 13.3059 10.1656 14.4169 9.0009 14.829L9 15C9 16.1 9.9 17 11 17L12.1707 17.0001C12.5825 15.8349 13.6937 15 15 15H18C19.6569 15 21 16.3431 21 18C21 19.6569 19.6569 21 18 21H15C13.6941 21 12.5831 20.1656 12.171 19.0009L11 19C8.79 19 7 17.21 7 15H5C3.34315 15 2 13.6569 2 12C2 10.3431 3.34315 9 5 9H7C7 6.79086 8.79086 5 11 5L12.1707 5.00009C12.5825 3.83485 13.6937 3 15 3H18ZM18 17H15C14.4477 17 14 17.4477 14 18C14 18.5523 14.4477 19 15 19H18C18.5523 19 19 18.5523 19 18C19 17.4477 18.5523 17 18 17ZM8 11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H8C8.55228 13 9 12.5523 9 12C9 11.4477 8.55228 11 8 11ZM18 5H15C14.4477 5 14 5.44772 14 6C14 6.55228 14.4477 7 15 7H18C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"></path></svg>
              <h2>Career Roadmap</h2>
              <p>Follow step-by-step roadmaps for placements, higher studies, and exams with curated notes & guides.</p>
            </div>
            <div className="cards">
             <svg style={{width:"35px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 2H13V1H11V2H7C5.34315 2 4 3.34315 4 5V8C4 10.7614 6.23858 13 9 13H15C17.7614 13 20 10.7614 20 8V5C20 3.34315 18.6569 2 17 2ZM11 7.5C11 8.32843 10.3284 9 9.5 9C8.67157 9 8 8.32843 8 7.5C8 6.67157 8.67157 6 9.5 6C10.3284 6 11 6.67157 11 7.5ZM16 7.5C16 8.32843 15.3284 9 14.5 9C13.6716 9 13 8.32843 13 7.5C13 6.67157 13.6716 6 14.5 6C15.3284 6 16 6.67157 16 7.5ZM4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H4Z"></path></svg>
              <h3>AI Mentor Match</h3>
              <p>Our AI instantly matches you with the best mentor based on your interests, skills, and goals</p>
            </div>
            <div className="cards">
              <svg style={{width:"35px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 7.00002C16.4183 7.00002 20 10.5817 20 15C20 19.4183 16.4183 23 12 23C7.58172 23 4 19.4183 4 15C4 10.5817 7.58172 7.00002 12 7.00002ZM12 10.5L10.6775 13.1797L7.72025 13.6094L9.86012 15.6953L9.35497 18.6406L12 17.25L14.645 18.6406L14.1399 15.6953L16.2798 13.6094L13.3225 13.1797L12 10.5ZM13 1.99902L18 2.00002V5.00002L16.6366 6.13758C15.5305 5.55773 14.3025 5.17887 13.0011 5.04951L13 1.99902ZM11 1.99902L10.9997 5.04943C9.6984 5.17866 8.47046 5.55738 7.36441 6.13706L6 5.00002V2.00002L11 1.99902Z"></path></svg>
              <h4>Gamified Learning</h4>
              <p>Stay motivated with badges, rewards, and leaderboards while learning and sharing knowledge.</p>
            </div>

         </div>
        </div>
      </section>


      <section className="syct">
        <div className="heading">Share Your Career Today</div>
        <div className="cards2container">
          <div className="card2">
            <img src='/assets/mentorship.png ' alt="card1" />
            <p>Get mentorship from verified alumni anytime, anywhere</p>
            <div className='card-btn' >
              <div className='dot red-dot'></div>
              <h1>Mentorship</h1>
            </div>
          </div>
          <div className="card2">
            <img src='/assets/career_roadmap.png' alt="card2" />
            <p>Follow structured roadmaps for placements & higher studies</p>
            <div className='card-btn' >
              <div className='dot green-dot'></div>
              <h1>Career Roadmap</h1>
            </div>
          </div>
          <div className="card2">
            <img src='/assets/gamification.png' alt="card3" />
            <p>Stay motivated with badges, rewards & leaderboards</p>
            <div className='card-btn' >
              <div className='dot blue-dot'></div>
              <h1>Gemification</h1>
            </div>
          </div>
        </div>
        <a href="#signup" className="hero-button-black">Get Started</a>


    </section>

      {/* Hero2 Section */}
      {/* <section className="hero2-section">
        <div className="big-image2-container">
          <img src={hero2} alt="Hero background" className="big-bg2" />
          <div className="hero2-content">
            <h1 className="hero2-title">

              Meet ALLYNET, the first platform that combines verified mentorship,
            <span className="half-title"> clear career roadmaps, and gamified learning — built to help students grow faster with the right guidance.</span>
            </h1>
            <a href="#signup" className="hero-button">Get Started</a>
          </div>
        </div>
      </section> */}
      <section className='hero-two' >
        <div className="hero-two-container">
        </div>
      </section>

    </div>
  );
}

export default LandingPage;
