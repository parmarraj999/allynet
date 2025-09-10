import React, { useState } from 'react'
import './alumniPage.css';



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
    </div>
  )
}

export default AlumniPage