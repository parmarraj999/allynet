import React from "react";
import './libraryPage.css';

function LibraryPage() {
  const [searchQuery, setSearchQuery] = React.useState("");
const [filterCategory, setFilterCategory] = React.useState("All");
  const dummyNotes = [
    {
      id: 1,
      title: "Quantum Mechanics Notes",
      description: "Covers basics of wave functions and probability theory.",
      uploader: "Guest User",
      createdAt: "2025-01-05T10:30:00Z",
      fileUrl: "#",
      size: 2_500_000, // bytes (~2.5 MB)
    },
    {
      id: 2,
      title: "Data Structures Cheat Sheet",
      description: "Quick revision for arrays, linked lists, stacks, and queues.",
      uploader: "Guest User",
      createdAt: "2024-09-03T08:00:00Z",
      fileUrl: "#",
      size: 1_100_000000, // bytes (~1.1 MB)
    },
    {
      id: 3,
      title: "Organic Chemistry Notes",
      description: "Covers hydrocarbons, alcohols, phenols, and ethers.",
      uploader: "Guest User",
      createdAt: "2025-09-01T14:15:00Z",
      fileUrl: "#",
      size: 3_600_0000, // bytes (~3.6 MB)
    },
    {
      id: 4,
      title: "Database Management Systems",
      description: "Normalization, ER diagrams, SQL basics with examples.",
      uploader: "Guest User",
      createdAt: "2025-08-28T09:45:00Z",
      fileUrl: "#",
      size: 5_000_000, // bytes (~5 MB)
    }
  ];
  const filteredNotes = dummyNotes
  .filter(note => 
    (note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
     note.description.toLowerCase().includes(searchQuery.toLowerCase()))
  )
  .filter(note => 
    filterCategory === "All" || note.category === filterCategory
  );

  // helper function to get "x days/months/years ago"
  const getTimeAgo = (dateString) => {
    const createdDate = new Date(dateString);
    const today = new Date();
    const diffTime = today - createdDate; // in ms
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return "Today";
    if (diffDays < 30) return `${diffDays} day${diffDays > 1 ? "s" : ""} ago`;

    const diffMonths = Math.floor(diffDays / 30);
    if (diffMonths < 12)
      return `${diffMonths} month${diffMonths > 1 ? "s" : ""} ago`;

    const diffYears = Math.floor(diffMonths / 12);
    return `${diffYears} year${diffYears > 1 ? "s" : ""} ago`;
  };

  // helper function to format bytes into KB, MB, GB
  const formatFileSize = (bytes) => {
    if (bytes < 1024) return bytes + " B";
    else if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
    else if (bytes < 1024 * 1024 * 1024) return (bytes / (1024 * 1024)).toFixed(1) + " MB";
    else return (bytes / (1024 * 1024 * 1024)).toFixed(2) + " GB";
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
    placeholder="Search e-material...." 
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
        {dummyNotes.map(note => (
          <div key={note.id} className="note-card">
            <img className="libimg" src='/assets/libimg.png' alt="background" />
            <h3>{note.title}</h3>
            <p className="description">{note.description}</p>
            <p className="meta">
              <img src="/assets/clock.png" alt="clock" className="clock-icon" />
              {getTimeAgo(note.createdAt)}
            </p>
            <div className="download-container">
  <button 
    className="download-btn" 
    onClick={() => window.open(note.fileUrl, "_blank")}
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