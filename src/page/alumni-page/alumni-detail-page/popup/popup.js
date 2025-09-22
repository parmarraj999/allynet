import React, { useState, useRef, useEffect, useContext } from "react";
import "./popup.css";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../../../firebase/firebase.config";
import { UserDataContext } from "../../../../context/UserDataContext";

const ProfileMenu = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
      window.localStorage.removeItem("userId")
      window.localStorage.removeItem("isLogged")
    } catch (err) {
      console.error('Error logging out:', err);
    }
  };

const { userData } = useContext(UserDataContext)


  return (
    <div className="profile-menu-container" ref={menuRef}>
      <button className="profile-icon-nav" onClick={() => setOpen(!open)}>
        <img src={userData?.profileImage} />
      </button>

      {open && (
        <div className="profile-dropdown">
          <Link to='/profile/123' className="menu-item">

            <svg style={{ width: '20px' }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-round-icon lucide-user-round"><circle cx="12" cy="8" r="5" /><path d="M20 21a8 8 0 0 0-16 0" /></svg> My Profile
          </Link>
          <Link to='/profile/details' className="menu-item">
            <svg style={{ width: '20px' }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil-line-icon lucide-pencil-line"><path d="M13 21h8" /><path d="m15 5 4 4" /><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" /></svg> Edit Details
          </Link>
          <div className="logout" onClick={handleLogout}>Log out
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
