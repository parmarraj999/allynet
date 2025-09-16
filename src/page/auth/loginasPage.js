import React from 'react'
import { Link } from 'react-router-dom';
import './loginasPage.css';

function LoginasPage() {
  return (
    <section className="loginas-wrapper">
      <div className="loginas-left">
        <div className="loginas-container">
          <div className="loginas-progress-bar">
            <div className="loginas-progress-fill"></div>
          </div>

          <div className="loginas-content">
            <h1 className="loginas-title">Join Allynet As</h1>

            <div className="loginas-button-group">
              <Link to='/signin'>
                <button className="loginas-signup-button">Student</button>
              </Link>
              <Link to='/signin'>
                <button className="loginas-signup-button">Mentor</button>
              </Link>
              <Link to='/signin'>
                <button className="loginas-signup-button">Alumni</button>
              </Link>
            </div>

            <Link to='/login' className="loginas-login-text">
              Already have account ?
            </Link>
          </div>
        </div>
      </div>
      <div className="loginas-right">
        <img src="/assets/login.png" alt="loginas" />
      </div>
    </section>
  )
}

export default LoginasPage;
