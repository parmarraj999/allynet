import React, { useState, useEffect } from 'react';
import './alumniPage.css';
import users from '../../data/userData.js';

function AlumniPage() {
  const [branch, setBranch] = useState("Branch");
  const [skills, setSkills] = useState("Skills");
  const [experience, setExperience] = useState("Experience");
  const [roles, setRoles] = useState("Roles");
  const [availability, setAvailability] = useState("Availability");
  const [query, setQuery] = useState("");      
  const [results, setResults] = useState(users);

  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const closeDropdown = () => setOpenDropdown(null);

  // Filter users whenever dropdowns or search query changes
  useEffect(() => {
    const q = query.toLowerCase();

    const filtered = users.filter(user => {
      const matchBranch = branch === "Branch" || user.branch === branch;
      const matchSkills = skills === "Skills" || user.skills?.includes(skills);
      const matchExperience = experience === "Experience" || user.experience === experience;
      const matchRoles = roles === "Roles" || user.role === roles;
      const matchAvailability = availability === "Availability" || user.availability === availability;

      const matchQuery =
        !query ||
        (user.username?.toLowerCase().includes(q)) ||
        (user.email?.toLowerCase().includes(q)) ||
        (user.role?.toLowerCase().includes(q)) ||
        (user.description?.toLowerCase().includes(q)) ||
        (user.branch?.toLowerCase().includes(q)) ||
        (user.availability?.toLowerCase().includes(q)) ||
        (user.experience?.toLowerCase().includes(q)) ||
        (user.skills?.some(skill => skill.toLowerCase().includes(q)));

      return matchBranch && matchSkills && matchExperience && matchRoles && matchAvailability && matchQuery;
    });

    setResults(filtered);
  }, [branch, skills, experience, roles, availability, query]);

  return (
    <div className="AlumniPage">
      <div className="btn-search">
        <div className="button-row">

        {/* Branch Dropdown */}
          <div className="dropdown">
          <button id="branchBtn" onClick={() => toggleDropdown("branch")}>
            {branch}{" "}
            <svg
              className="branch-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="16"
              height="16"
              style={{
                marginLeft: '5px',
                transform: openDropdown === "branch" ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: '0.2s',
              }}
            >
              <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z" />
            </svg>
          </button>
          {openDropdown === "branch" && (
            <div className="dropdown-content">
              <div onClick={() => { setBranch("CSE"); closeDropdown(); }}>CSE</div>
              <div onClick={() => { setBranch("AIML"); closeDropdown(); }}>AIML</div>
              <div onClick={() => { setBranch("AIDS"); closeDropdown(); }}>AIDS</div>
            </div>
          )}
        </div>

        {/* Skills Dropdown */}
          <div className="dropdown">
          <button id="branchBtn" onClick={() => toggleDropdown("skills")}>
            {skills}{" "}
            <svg
              className="branch-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="16"
              height="16"
              style={{
                marginLeft: '5px',
                transform: openDropdown === "skills" ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: '0.2s',
              }}
            >
              <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z" />
            </svg>
          </button>
          {openDropdown === "skills" && (
            <div className="dropdown-content">
              <div onClick={() => { setSkills("JavaScript"); closeDropdown(); }}>JavaScript</div>
              <div onClick={() => { setSkills("Python"); closeDropdown(); }}>Python</div>
              <div onClick={() => { setSkills("React"); closeDropdown(); }}>React</div>
            </div>
          )}
        </div>

        {/* Experience Dropdown */}
          <div className="dropdown">
          <button id="branchBtn" onClick={() => toggleDropdown("experience")}>
            {experience}{" "}
            <svg
              className="branch-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="16"
              height="16"
              style={{
                marginLeft: '5px',
                transform: openDropdown === "experience" ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: '0.2s',
              }}
            >
              <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z" />
            </svg>
          </button>
          {openDropdown === "experience" && (
            <div className="dropdown-content">
              <div onClick={() => { setExperience("1-2 years"); closeDropdown(); }}>1-2 years</div>
              <div onClick={() => { setExperience("3-5 years"); closeDropdown(); }}>3-5 years</div>
              <div onClick={() => { setExperience("5+ years"); closeDropdown(); }}>5+ years</div>
            </div>
          )}
        </div>

        {/* Roles Dropdown */}
          <div className="dropdown">
          <button id="branchBtn" onClick={() => toggleDropdown("roles")}>
            {roles}{" "}
            <svg
              className="branch-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="16"
              height="16"
              style={{
                marginLeft: '5px',
                transform: openDropdown === "roles" ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: '0.2s',
              }}
            >
              <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z" />
            </svg>
          </button>
          {openDropdown === "roles" && (
            <div className="dropdown-content">
              <div onClick={() => { setRoles("Developer"); closeDropdown(); }}>Developer</div>
              <div onClick={() => { setRoles("Designer"); closeDropdown(); }}>Designer</div>
              <div onClick={() => { setRoles("Manager"); closeDropdown(); }}>Manager</div>
            </div>
          )}
        </div>

        {/* Availability Dropdown */}
          <div className="dropdown">
          <button id="branchBtn" onClick={() => toggleDropdown("availability")}>
            {availability}{" "}
            <svg
              className="branch-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="16"
              height="16"
              style={{
                marginLeft: '5px',
                transform: openDropdown === "availability" ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: '0.2s',
              }}
            >
              <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z" />
            </svg>
          </button>
          {openDropdown === "availability" && (
            <div className="dropdown-content">
              <div onClick={() => { setAvailability("Full-time"); closeDropdown(); }}>Full-time</div>
              <div onClick={() => { setAvailability("Part-time"); closeDropdown(); }}>Part-time</div>
              <div onClick={() => { setAvailability("Freelance"); closeDropdown(); }}>Freelance</div>
            </div>
          )}
        </div>
        </div>

        {/* Search Input */}
        <div className="sch">
  <div className="search-wrapper">
    <svg
      className="search-icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"/>
    </svg>
    <input
      className="search"
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search users..."
    />
  </div>
</div>
</div>
      
      {/* Results Section */}
      <div className="results">
  {results.map(user => (
    <div key={user.id} className="user-card">
      {/* Left side: image */}
      <img src={user.profilePhoto} alt={user.username} className="profile-pic" />

      {/* Middle content */}
      <div className="card-content">
        <div className="top-row">
          <h3 className="username">{user.username}</h3>
          <span className="badge">{user.tag}</span>
        </div>
        <p className="email">{user.email}</p>
      <p className="description">{user.description}</p>
        <div className="connections">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 
            1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 
            2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 
            3zm0 2c-2.33 0-7 1.17-7 
            3.5V19h14v-2.5C15 14.17 10.33 13 8 
            13zm8 0c-.29 0-.62.02-.97.05C15.68 
            13.69 17 14.79 17 16.5V19h5v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
          </svg>
          {user.connections}
        </div>
      </div>

      {/* Right side: date + button */}
      <div className="right-section">
        <div className="date-badge">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7 2v2H5a2 2 0 0 0-2 
            2v2h18V6a2 2 0 0 0-2-2h-2V2h-2v2H9V2H7zm12 
            8H5v10a2 2 0 0 0 2 2h10a2 2 0 0 0 
            2-2V10z"/>
          </svg>
          {user.date}
        </div>
        <button className="connect-btn">Connect</button>
      </div>
    </div>
  ))}

  {results.length === 0 && <p>No users found.</p>}
</div>
    </div>
  
  );
}

export default AlumniPage;