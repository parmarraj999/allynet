import React, { useState, useRef, useEffect } from 'react';
import login from './assets/login.png';
import { Link } from 'react-router-dom';
import './signupPage.css';
import arrow2 from './assets/arrow2.png';

export default function SignupPage() {
  const [year, setYear] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const wrapperRef = useRef(null);

  // keep these here
  const years = ['1st', '2nd', '3rd', '4th'];

  const formatYear = (num) => {
    switch (num) {
      case '1': return '1st';
      case '2': return '2nd';
      case '3': return '3rd';
      case '4': return '4th';
      default: return num;
    }
  };

  // ✅ keep handleSelect defined
  const handleSelect = (option) => {
    setYear(option);
    setShowDropdown(false);
  };

  // click outside to close dropdown
  useEffect(() => {
    const onDocClick = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, []);

  // add state for deletion flag
  const [isDeleting, setIsDeleting] = useState(false);

  // key handlers (desktop)
  const handleKeyDown = (e) => {
    if (e.key === 'Backspace' || e.key === 'Delete') setIsDeleting(true);
  };
  const handleKeyUp = (e) => {
    if (e.key === 'Backspace' || e.key === 'Delete') {
      setTimeout(() => setIsDeleting(false), 0);
    }
  };

  // ✅ final handleYearChange (only once)
  const handleYearChange = (e) => {
    const val = e.target.value;
    const inputType = e.nativeEvent && e.nativeEvent.inputType;
    const deletingNow = isDeleting || (inputType && inputType.startsWith('delete'));

    if (!deletingNow && /^[1-4]$/.test(val)) {
      setYear(formatYear(val));
    } else {
      setYear(val);
    }
  };

  return (
    <section className="login-wrapper">
      <div className="left-section">
        <div className="blank-container">
          <div className="blank-box"></div>
          <div className="blank-box"></div>
        </div>
        <h1>Join Allynet As Student</h1>
        <div className="inputs">
          <input className="input1" type="text" placeholder="Name" />
          <input className="input2" type="text" placeholder="College" />
          <div className="subinputs">
            <input className="subinput1" type="text" placeholder="Branch" />

            <div className="year-input-wrapper" ref={wrapperRef}>
              <input
                className="subinput2"
                type="text"
                placeholder="Year"
                value={year}
                onChange={handleYearChange}
                onFocus={() => setShowDropdown(true)}
                onBlur={() => setTimeout(() => setShowDropdown(false), 150)}
                onKeyDown={handleKeyDown}
                onKeyUp={handleKeyUp}
                onInput={(e) => {
                  const it = e.nativeEvent && e.nativeEvent.inputType;
                  if (it && it.startsWith('delete')) {
                    setIsDeleting(true);
                    setTimeout(() => setIsDeleting(false), 0);
                  }
                }}
              />

              <button
                type="button"
                className="arrow"
                aria-label="Toggle year dropdown"
                onClick={() => setShowDropdown((s) => !s)}
              >
                <img src={arrow2} alt="Dropdown arrow" />
              </button>

              {showDropdown && (
                <div className="dropdown" role="listbox">
                  {years.map((option) => (
                    <div
                      key={option}
                      className="dropdown-item"
                      role="option"
                      aria-selected={year === option}
                      onMouseDown={(e) => {
                        e.preventDefault();
                        handleSelect(option);
                      }}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <input
            className="input3"
            type="text"
            placeholder="Goal ( e.g Placement, high school )"
          />
        </div>



        <div className="buttons">
          <Link to="/Home" className="button1">Create New Account</Link>
          <div className="subbuttons">
            <Link to="/loginas" className="subbutton1">Back</Link>
            <Link to="/login" className="subbutton2">Login</Link>
          </div>
        </div>
      </div>
      <div className="right-section">
        <img src={login} alt="" />
      </div>
    </section>
  );
}

