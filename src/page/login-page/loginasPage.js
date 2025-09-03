import React from 'react'
import login from './assets/login.png';
import { Link } from 'react-router-dom';
import './loginasPage.css';

function LoginasPage() {
  return (
    
    
    <section className="login-wrapper">
      <div className="left-section">
        <div className="blank-container">
        <div className="blank-box1"></div>
        <div className="blank-box2"></div>
        </div>
        <h1>Join Allynet As</h1>
        
        
        
        <div className="login-buttons">
          <Link to='/Sign-up' className="login-button1">Student</Link>
          <Link to='/Sign-up' className="login-button2">Mentor</Link>
          <Link to='/Sign-up' className="login-button3">Alumni</Link>
          <Link to='/login' className="alreadyhaveaccount" style={{textDecoration: "none" , cursor: "pointer" }}>Already have account ?</Link>
        </div>
      </div>
       <div className="right-section">
        <img src={login} alt=""/>
        
       </div>
      
      
    
    </section>
    
  )
}
export default LoginasPage;
