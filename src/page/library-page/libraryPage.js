import React, { useState } from "react";
import './libraryPage.css';
import { dummyNotes } from '../../data/notesData';
import { useNavigate } from "react-router-dom";

function LibraryPage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");

  const filteredNotes = dummyNotes
    .filter(note => 
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter(note => 
      filterCategory === "All" || note.category === filterCategory
    );

  const getTimeAgo = (dateString) => {
    const createdDate = new Date(dateString);
    const today = new Date();
    const diffTime = today - createdDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return "Today";
    if (diffDays < 30) return `${diffDays} day${diffDays > 1 ? "s" : ""} ago`;

    const diffMonths = Math.floor(diffDays / 30);
    if (diffMonths < 12) return `${diffMonths} month${diffMonths > 1 ? "s" : ""} ago`;

    const diffYears = Math.floor(diffMonths / 12);
    return `${diffYears} year${diffYears > 1 ? "s" : ""} ago`;
  };

  const formatFileSize = (bytes) => {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
    if (bytes < 1024 * 1024 * 1024) return (bytes / (1024 * 1024)).toFixed(1) + " MB";
    return (bytes / (1024 * 1024 * 1024)).toFixed(2) + " GB";
  };

  return (
    <div className="library-page">
      <div className="heading">E-Library : Notes & Resources</div>
      <div className="sub-heading">
        Explore, analyze, and share quality data about data types, creating, and collaborating.
      </div>

      <div className="search-filter-container">
  {/* Search Box */}
  <div className="search-container">
    <svg 
      className="search-icon" 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="currentColor"
    >
      <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"/>
    </svg>

    <input 
      type="text" 
      placeholder="Search e-material..." 
      value={searchQuery} 
      onChange={(e) => setSearchQuery(e.target.value)}
      className="search-input"
    />
  </div>

  {/* Filter Button */}
  <button 
    className="filter-btn"
    onClick={() => console.log("Open filter modal or dropdown")}
  >
    <svg 
      className="filter-icon"
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="currentColor"
    >
      <path d="M10 18H14V16H10V18ZM3 6V8H21V6H3ZM6 13H18V11H6V13Z"/>
    </svg>
    Filter
  </button>
</div>

      <div className="notes-grid">
        {filteredNotes.map(note => (
          <div key={note.id} className="note-card">
            <img className="libimg" src="/assets/libimg.png" alt="background" />
            <h3>{note.title}</h3>
            <p className="description">{note.description}</p>
            <p className="meta">
              <svg className="clock"
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM13 12H17V14H11V7H13V12Z"></path></svg>
              {getTimeAgo(note.createdAt)}
            </p>
            <div className="download-container">
              <button
                className="download-btn"
                onClick={() => navigate(`/download/${note.id}`)}
              >
                <svg className="download-icon"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 13V18.585L14.8284 16.7574L16.2426 18.1716L12 22.4142L7.75736 18.1716L9.17157 16.7574L11 18.585V13H13ZM12 2C15.5934 2 18.5544 4.70761 18.9541 8.19395C21.2858 8.83154 23 10.9656 23 13.5C23 16.3688 20.8036 18.7246 18.0006 18.9776L18.0009 16.9644C19.6966 16.7214 21 15.2629 21 13.5C21 11.567 19.433 10 17.5 10C17.2912 10 17.0867 10.0183 16.8887 10.054C16.9616 9.7142 17 9.36158 17 9C17 6.23858 14.7614 4 12 4C9.23858 4 7 6.23858 7 9C7 9.36158 7.03838 9.7142 7.11205 10.0533C6.91331 10.0183 6.70879 10 6.5 10C4.567 10 3 11.567 3 13.5C3 15.2003 4.21241 16.6174 5.81986 16.934L6.00005 16.9646L6.00039 18.9776C3.19696 18.7252 1 16.3692 1 13.5C1 10.9656 2.71424 8.83154 5.04648 8.19411C5.44561 4.70761 8.40661 2 12 2Z"></path></svg>
                Download
              </button>
              <span className="file-size">{formatFileSize(note.size)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LibraryPage;