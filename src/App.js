import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './page/landing-page/landingPage';
import LoginPage from './login-page/loginPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>} />
          <Route path='/login' element={
            <LoginPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
