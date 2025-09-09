import { useNavigate } from 'react-router-dom';
import './downloadPage.css';


const DownloadPage = () => {

  const navigate = useNavigate();

  return (
    <div className="download-main-content">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <span onClick={()=>navigate(-1)} className="breadcrumb-inactive">Notes & Resources /</span>
        <span className="breadcrumb-active">Resource Name</span>
      </div>

      {/* Hero Image */}
      <div
        className="hero-image"
        style={{ backgroundImage: `url(https://i.pinimg.com/736x/a3/a9/6a/a3a96a5deae56a1a3709e669ea073209.jpg)` }}
      />

      <div className="content-wrapper">
        {/* Left Content Section */}
        <div className="left-content">
          <h2 className="content-title">Content</h2>

          {/* File Items */}
          <div className="file-item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-icon lucide-file"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /></svg>
            <div className="file-info">
              <div className="file-name">File Name here</div>
              <div className="file-size">200 MB</div>
            </div>
          </div>

          <div className="file-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-icon lucide-file"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /></svg>
            <div className="file-info">
              <div className="file-name">File Name here</div>
              <div className="file-size">200 MB</div>
            </div>
          </div>
        </div>

        {/* Right Details Section */}
        <div className="right-content">
          <h1 className="resource-title">M2 Notes Every Unit</h1>
          <p className="resource-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book
          </p>

          <div className="date-badge">07 Sept 2025</div>

          {/* Author Section */}
          <div className="author-section">
            <div className="author-name">Alumni's Name</div>
            <div className="author-label">Author</div>
          </div>

          {/* Price Section */}
          <div className="price-section">
            <div className="price">$320</div>
            <div className="price-label">Price</div>
          </div>

          {/* Divider */}
          <div className="divider">
          </div>

          {/* Stats Section */}
          <div className="stats-section">
            <div className="stat-item">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20ZM13 12H16L12 16L8 12H11V8H13V12Z"></path></svg>
              <span className="stat-label">Downloads</span>
              <span className="stat-value">34</span>
            </div>

            <div className="stat-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-icon lucide-file"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /></svg>
              <span className="stat-label">File type</span>
              <span className="stat-value">PDF</span>
            </div>

            <div className="stat-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-paperclip-icon lucide-paperclip"><path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551" /></svg>
              <span className="stat-label">Total Size</span>
              <span className="stat-value">1.2GB</span>
            </div>
          </div>

          {/* Download Button */}
          <button className="download-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-icon lucide-file"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /></svg>
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default DownloadPage;