import React, { useEffect } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import './loginPage.css';

function LoginPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const handlePopState = () => {
      navigate("/", { replace: true }); // redirect back to Landing Page
    };

    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [navigate]);

  return (
    <section className="login-wrapper">
      <div className="login-left">
        <div className='left-login-container' >


          <h1 className="login-title">Welcome To Allynet</h1>

          <div className="login-inputs">
            <input className="login-input" type="email" placeholder="Email" />
            <input className="login-input" type="password" placeholder="Password" />
            <a style={{color:"blue"}}>Foget Password ?</a>
          </div>


          <div className="login-buttons">
            <Link to="/home" className="login-btn login-btn-primary">
              Log In
            </Link>
            <Link to="/loginas" className="login-btn login-btn-secondary">
              Create New Account
            </Link>
          </div>
        </div>
      </div>
      <div className="right-section">
        <img src="/assets/login.png" alt="login"/>
      </div>
    </section>
  );
}

export default LoginPage;
