import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './loginPage.css';

// Firebase imports
import { auth, db } from '../../firebase/firebase.config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

function LoginPage() {
  const navigate = useNavigate();

  // local state for inputs + errors
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // handle back button → always go landing
  useEffect(() => {
    const handlePopState = () => {
      navigate('/', { replace: true }); // redirect back to Landing Page
    };
    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      // 1. sign in user with Firebase Auth
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // 2. get user role from Firestore
      const userDoc = await getDoc(doc(db, 'users', user.uid));
      if (userDoc.exists()) {
        const userData = userDoc.data();
        // redirect based on role
        if (userData.role === 'student') {
          navigate('/');
        } else if (userData.role === 'alumni' || userData.role === 'mentor') {
          navigate('/');
        } else {
          navigate('/');
        }
        window.localStorage.setItem("userId", user.uid)
        window.localStorage.setItem("isLogged", true)
        window.localStorage.setItem("role",userData.role)
      } else {
        // no doc found
        alert("User Not Found Please Create Account")
      }
    } catch (err) {
      console.error(err);
      setError('Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="login-wrapper">
      <div className="login-left">
        <div className='left-login-container' >
          <h1 className="login-title">Welcome To Allynet</h1>

          <form onSubmit={handleLogin}>
            <div className="login-inputs">
              <input
                className="login-input"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="login-input"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <a style={{ color: "blue" }}>Forget Password ?</a>
            </div>

            {error && <p style={{ color: 'red', marginTop: '8px' }}>{error}</p>}

            <div className="login-buttons">
              <button
                type="submit"
                className="login-btn login-btn-primary"
                disabled={loading}
              >
                {loading ? 'Logging in…' : 'Log In'}
              </button>

              <button
                type="button"
                onClick={() => navigate('/loginas')}
                className="login-btn login-btn-secondary"
              >
                Create New Account
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="right-section">
        <img src="/assets/login.png" alt="login" />
      </div>
    </section>
  );
}

export default LoginPage;
