import React from 'react';
import './navbar.css';
import { Link, useLocation } from 'react-router-dom';


function Navbar() {

  const { pathname } = useLocation();

  const hideNavbarRoutes = ["/login", "/register"]; // agar aur bhi routes h
  const postHideNavbar =
    pathname.startsWith("/post/");
  const courseHideNavbar =
    pathname.startsWith("/courses/");
  const libraryHideNavbar =
    pathname.startsWith("/library/");
  const eventHideNavbar =
    pathname.startsWith("/events/");

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1 className="logo">ALLYNET</h1>
      </div>

      <div className="navbar-right">
        <button className="create-button">
          Create
          <svg style={{ width: '24px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>
        </button>
        <svg style={{ width: '26px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20 17H22V19H2V17H4V10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10V17ZM18 17V10C18 6.68629 15.3137 4 12 4C8.68629 4 6 6.68629 6 10V17H18ZM9 21H15V23H9V21Z"></path></svg>

        <Link to='/profile/1232' className="profile-indicator" />
      </div>

      {!postHideNavbar && !eventHideNavbar && !libraryHideNavbar && !courseHideNavbar && !hideNavbarRoutes.includes(pathname) && (
        <div className='mobile-navbar' >
          {/* home route  */}
          <Link to='/' className='mobile-navbar-item' >
            <svg style={{ width: "28px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21 20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9.48907C3 9.18048 3.14247 8.88917 3.38606 8.69972L11.3861 2.47749C11.7472 2.19663 12.2528 2.19663 12.6139 2.47749L20.6139 8.69972C20.8575 8.88917 21 9.18048 21 9.48907V20ZM19 19V9.97815L12 4.53371L5 9.97815V19H19Z"></path></svg>
          </Link>
          {/* resource route  */}
          <Link to='/library' className='mobile-navbar-item' >
            <svg style={{ width: "28px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 18.5V5C3 3.34315 4.34315 2 6 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22H6.5C4.567 22 3 20.433 3 18.5ZM19 20V17H6.5C5.67157 17 5 17.6716 5 18.5C5 19.3284 5.67157 20 6.5 20H19ZM5 15.3368C5.45463 15.1208 5.9632 15 6.5 15H19V4H6C5.44772 4 5 4.44772 5 5V15.3368Z"></path></svg>
          </Link>
          {/* alumni route  */}
          <Link to='/alumni' className='mobile-navbar-item' >
            <svg style={{ width: "28px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.78307 2.82598L12 1L20.2169 2.82598C20.6745 2.92766 21 3.33347 21 3.80217V13.7889C21 15.795 19.9974 17.6684 18.3282 18.7812L12 23L5.6718 18.7812C4.00261 17.6684 3 15.795 3 13.7889V3.80217C3 3.33347 3.32553 2.92766 3.78307 2.82598ZM5 4.60434V13.7889C5 15.1263 5.6684 16.3752 6.7812 17.1171L12 20.5963L17.2188 17.1171C18.3316 16.3752 19 15.1263 19 13.7889V4.60434L12 3.04879L5 4.60434ZM12 11C10.6193 11 9.5 9.88071 9.5 8.5C9.5 7.11929 10.6193 6 12 6C13.3807 6 14.5 7.11929 14.5 8.5C14.5 9.88071 13.3807 11 12 11ZM7.52746 16C7.77619 13.75 9.68372 12 12 12C14.3163 12 16.2238 13.75 16.4725 16H7.52746Z"></path></svg>
          </Link>
          {/* course route  */}
          <Link to='/courses' className='mobile-navbar-item' >
            <svg style={{ width: "28px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 15.2454V22.1169C17 22.393 16.7761 22.617 16.5 22.617C16.4094 22.617 16.3205 22.5923 16.2428 22.5457L12 20L7.75725 22.5457C7.52046 22.6877 7.21333 22.6109 7.07125 22.3742C7.02463 22.2964 7 22.2075 7 22.1169V15.2454C5.17107 13.7793 4 11.5264 4 9C4 4.58172 7.58172 1 12 1C16.4183 1 20 4.58172 20 9C20 11.5264 18.8289 13.7793 17 15.2454ZM9 16.4185V19.4676L12 17.6676L15 19.4676V16.4185C14.0736 16.7935 13.0609 17 12 17C10.9391 17 9.92643 16.7935 9 16.4185ZM12 15C15.3137 15 18 12.3137 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9C6 12.3137 8.68629 15 12 15Z"></path></svg>
          </Link>
          {/* event route  */}
          <Link to='/events' className='mobile-navbar-item' >
            <svg style={{ width: "28px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-fold-icon lucide-calendar-fold"><path d="M8 2v4" /><path d="M16 2v4" /><path d="M21 17V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11Z" /><path d="M3 10h18" /><path d="M15 22v-4a2 2 0 0 1 2-2h4" /></svg>
          </Link>
          {/* <div className='mobile-navbar-item' >
            <svg style={{width:'28px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-round-plus-icon lucide-user-round-plus"><path d="M2 21a8 8 0 0 1 13.292-6"/><circle cx="10" cy="8" r="5"/><path d="M19 16v6"/><path d="M22 19h-6"/></svg>
          </div> */}
        </div>
      )}

    </nav>
  );
}

export default Navbar;