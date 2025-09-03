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
      <div className="left-section">
        <h1>Welcome To Allynet</h1>
        <div className="inputs">
          <input className="input1" type="email" placeholder="Email" />
          <input className="input2" type="password" placeholder="Password" />
        </div>
        <div className="forget-password">
          <Link to='/forget-password' style={{ textDecoration: "none", cursor: "pointer" }}>
            Forget Password?
          </Link>
        </div>
        <div className="buttons">
          <Link to='/Home' className="button1">Log In</Link>
          <Link to='/loginas' className="button2">Create New Account</Link>
        </div>
      </div>
      <div className="right-section">
        <img src="/assets/login.png" alt="login"/>
      </div>
    </section>
  );
}

export default LoginPage;