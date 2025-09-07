import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { dummyNotes } from '../../data/notesData';
import './libraryPage.css';
import './downloadPage.css'
function DownloadPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const note = dummyNotes.find(n => n.id === parseInt(id));

  if (!note) return <div>Note not found.</div>;

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
    <div className="downloadpage">
      <div className="download-note-card">
        <img className="download-libimg" src="/assets/libimg.png" alt="background" />
        <h3>{note.title}</h3>
        <p className="description">{note.description}</p>
        <p className="uploader">Published by: {note.uploader}</p>
        

        <div className="download-download-container">
          <div className="container-left">
            <p className="meta">
          <img src="/assets/clock.png" alt="clock" className="clock-icon" />
          {getTimeAgo(note.createdAt)}
        </p></div>
        <div className="container-right">
          <button 
            className="cancel-btn" 
            onClick={() => navigate("/library")}
          >
            Cancel
          </button>
          <a 
            href={note.fileUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="download-btn"
          >
            <img src='/assets/download-cloud.png' alt="download" className="download-icon" />
            Download
          </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DownloadPage;