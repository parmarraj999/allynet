import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './signupPage.css';

// firebase imports
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../../firebase/firebase.config';

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: '',
    college: '',
    branch: '',
    year: '',
    goal: '',
    email: '',
    password: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      // 1. Create user in Auth
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const user = userCredential.user;

      // 2. Create user doc in Firestore
      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        name: formData.name,
        email: formData.email,
        college: formData.college,
        branch: formData.branch,
        year: formData.year,
        goal: formData.goal,
        role: 'student',
        createdAt: new Date()
      })
      .then(()=>{
        window.localStorage.setItem("userId",user.uid)
        window.localStorage.setItem("role",user.role)
        window.localStorage.setItem("isLogged",true)
      })
      alert('Account created successfully!');
      navigate('/'); // ya jahan tu redirect karna chahe
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="allynet-student-signup-wrapper">
  <div className="allynet-student-left">
    <div className="allynet-student-container">
      <div className="allynet-student-progress">
        <div className="progress-bar">
          <div className="progress-fill-complete"></div>
        </div>
        <div className="progress-bar">
          <div className="progress-fill-complete"></div>
        </div>
      </div>

      <div className="allynet-student-content">
        <h1 className="allynet-student-title">Join Allynet As Student</h1>

        <form className="allynet-student-form" onSubmit={handleSignup}>
          {error && <p className="allynet-student-error" style={{ color: 'red' }}>{error}</p>}

          <input
            type="text"
            name="name"
            placeholder="Name"
            className="form-input"
            value={formData.name}
            onChange={handleInputChange}
          />

          <input
            type="text"
            name="college"
            placeholder="College"
            className="form-input"
            value={formData.college}
            onChange={handleInputChange}
          />

          <div className="allynet-student-form-row">
            <input
              type="text"
              name="branch"
              placeholder="Branch"
              className="form-input form-input-half"
              value={formData.branch}
              onChange={handleInputChange}
            />

            <select
              name="year"
              className="allynet-student-form-select"
              value={formData.year}
              onChange={handleInputChange}
            >
              <option value="">Year</option>
              <option value="1st">1st Year</option>
              <option value="2nd">2nd Year</option>
              <option value="3rd">3rd Year</option>
              <option value="4th">4th Year</option>
            </select>
          </div>

          <input
            type="text"
            name="goal"
            placeholder="Goal (e.g Placement, higher studies)"
            className="form-input"
            value={formData.goal}
            onChange={handleInputChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="form-input"
            value={formData.email}
            onChange={handleInputChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="form-input"
            value={formData.password}
            onChange={handleInputChange}
          />

          <button type="submit" className="allynet-student-create-account" disabled={loading}>
            {loading ? 'Creating…' : 'Create Account'}
          </button>

          <div className="allynet-student-bottom-buttons">
            <button
              onClick={() => navigate(-1)}
              type="button"
              className="allynet-student-back-button"
            >
              Back
            </button>
            <button
              type="button"
              className="allynet-student-login-button"
              onClick={() => navigate('/login')}
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div className="allynet-student-right">
    <img src="/assets/login.png" alt="login illustration" />
  </div>
</section>
  );
}
