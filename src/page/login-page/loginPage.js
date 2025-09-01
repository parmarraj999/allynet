import React from 'react'
import login from './assets/login.png';
import { Link } from 'react-router-dom';
import './loginPage.css';

function LoginPage() {
  return (
    <div className="login-wrapper">
    <section className="logincard">
      <div className="left-section">
        <h1>Welcome To Allynet</h1>
        <div className="inputs">
          <input  className="input1" type="email" placeholder="Email" />
          <input className="input2" type="password" placeholder="Password"/>
        </div>
        <div className="forget-password">
          <Link to='/forget-password' style={{textDecoration: "none" , cursor: "pointer" }}>Forget Password?</Link>
        </div>
        <div className="buttons">
          <Link to='/Home' className="button1">Log In</Link>
          <Link to='/Sign-up' className="button2">Create New  Account</Link>
        </div>
      </div>
      <div className="right-section">
        <img src={login} alt=""/>
        
      </div>
      
    
    </section>
    </div>
  )
}

export default LoginPage