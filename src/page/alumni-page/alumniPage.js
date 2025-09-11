import React, { useState } from 'react'
import './alumniPage.css';
import { Link } from 'react-router-dom';



function AlumniPage() {

  const [searchTerm, setSearchTerm] = useState
    ('');
  const [selectedFilters, setSelectedFilters] = useState({
    branch: '',
    skills: '',
    experience: '',
    roll: '',
    availability: ''
  });

  const FilterDropdown = ({ label, options, value, onChange }) => {
    return (
      <div className="filter-box">
        <select
          style={{ border: "none" }}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="filter-select"
        >
          <option value="">{label}</option>
          {options.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>
    );
  };

  const handleFilterChange = (filterType, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };


  return (
    <div className='alunni-page-container' >
      <div className='alumni-filter-container' >
        <div style={{ display: 'flex', alignItems: 'center', gap: '.8rem' }} >
          <FilterDropdown
            label="Branch"
            options={['Computer Science', 'Electronics', 'Mechanical', 'Civil']}
            value={selectedFilters.branch}
            onChange={(value) => handleFilterChange('branch', value)}
          />
          <FilterDropdown
            label="Skills"
            options={['JavaScript', 'Python', 'React', 'Node.js', 'Java']}
            value={selectedFilters.skills}
            onChange={(value) => handleFilterChange('skills', value)}
          />
          <FilterDropdown
            label="Experience"
            options={['0-2 years', '2-5 years', '5-10 years', '10+ years']}
            value={selectedFilters.experience}
            onChange={(value) => handleFilterChange('experience', value)}
          />
          <FilterDropdown
            label="Roll"
            options={['Student', 'Alumni', 'Faculty']}
            value={selectedFilters.roll}
            onChange={(value) => handleFilterChange('roll', value)}
          />
          <FilterDropdown
            label="Availability"
            options={['Available', 'Busy', 'Away']}
            value={selectedFilters.availability}
            onChange={(value) => handleFilterChange('availability', value)}
          />
        </div>
        <div className="alumni-search-container">
          <input
            type="text"
            placeholder="Search"
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <h3 className='alumni-result-count'>12 Result</h3>
      <div className='alumni-user-card-container' >
        <Link to='/alumni/123' className="alumni-card">
          <div className="alumni-header">
            <img src='https://i.pinimg.com/736x/dc/35/f0/dc35f072bec66d3634937f2ef96520b7.jpg' className="alumni-avatar" />
            <div className="alumni-info">
              <div className="alumni-name">
                Raj Parmar <span className="alumni-badge">Alumni</span>
              </div>
              <div className="alumni-email">developerSucks@gmail.com</div>
            </div>
            <div className="alumni-date">
              <svg style={{ width: '16px', color: '#7B7B7B' }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-fold-icon lucide-calendar-fold"><path d="M8 2v4" /><path d="M16 2v4" /><path d="M21 17V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11Z" /><path d="M3 10h18" /><path d="M15 22v-4a2 2 0 0 1 2-2h4" /></svg>
              20 Jan 2025
            </div>
          </div>

          <div className="alumni-description">A very long description of the alumni about themself and adskjhcsidch ald</div>

          <div className="alumni-footer">
            <div className="alumni-count">
              <svg style={{ width: '16px', color: "#797979ff" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13Z"></path></svg>
              239
            </div>
            <button className="alumni-connect-btn">
              <svg style={{width:"20px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M14 14.252V16.3414C13.3744 16.1203 12.7013 16 12 16C8.68629 16 6 18.6863 6 22H4C4 17.5817 7.58172 14 12 14C12.6906 14 13.3608 14.0875 14 14.252ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11ZM18 17V14H20V17H23V19H20V22H18V19H15V17H18Z"></path></svg>
              Connect
            </button>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default AlumniPage