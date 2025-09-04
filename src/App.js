import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './page/landing-page/landingPage';
import LoginPage from './page/login-page/loginPage';
import SignupPage from './page/login-page/signupPage';
import LoginasPage from './page/login-page/loginasPage';
import Main from './layout/main/main';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={
            <LoginPage />} />
          <Route path='/loginas' element={
            <LoginasPage />} />
          <Route path='/Sign-up' element={<SignupPage />} />
          <Route path='/home' element={<Main/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
