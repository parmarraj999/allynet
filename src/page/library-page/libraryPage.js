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
        <input 
          type="text" 
          placeholder="Search e-material..." 
          value={searchQuery} 
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
        <button 
          className="filter-btn"
          onClick={() => console.log("Open filter modal or dropdown")}
        >
          <img src="/assets/filter.png" alt="filter" className="filter-icon" />
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
              <img src="/assets/clock.png" alt="clock" className="clock-icon" />
              {getTimeAgo(note.createdAt)}
            </p>
            <div className="download-container">
              <button
                className="download-btn"
                onClick={() => navigate(`/download/${note.id}`)}
              >
                <img src='/assets/download-cloud.png' alt="download" className="download-icon" />
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