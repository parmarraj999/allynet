import React, { useContext, useState } from "react";
import "./editDetail.css";
import { useNavigate } from "react-router-dom";
import { updateUserProfile } from "../../functions/updateUserDetail";
import { UserDataContext } from "../../context/UserDataContext";

const ProfileForm = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [bannerImage, setBannerImage] = useState(null);
  const [profileFile, setProfileFile] = useState(null);
  const [bannerFile, setBannerFile] = useState(null);
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [institute, setInstitute] = useState("");
  const [about, setAbout] = useState("");
  const [skillInput, setSkillInput] = useState("");
  const [skills, setSkills] = useState([]);

  const { fetchUserData, userData } = useContext(UserDataContext);
  const navigate = useNavigate();

  const handleProfileUpload = (e) => {
    if (e.target.files[0]) {
      setProfileImage(URL.createObjectURL(e.target.files[0])); // preview
      setProfileFile(e.target.files[0]); // actual file
    }
  };

  const handleBannerUpload = (e) => {
    if (e.target.files[0]) {
      setBannerImage(URL.createObjectURL(e.target.files[0]));
      setBannerFile(e.target.files[0]);
    }
  };

  const handleAddSkill = (e) => {
    if (e.key === "Enter" && skillInput.trim()) {
      setSkills([...skills, skillInput.trim()]);
      setSkillInput("");
      e.preventDefault();
    }
  };

  const removeSkill = (idx) => {
    setSkills(skills.filter((_, i) => i !== idx));
  };

  const handleSave = async () => {
    const data = {
      name: name || userData.name,
      tagline: tagline || userData.tagline,
      institute: institute || userData.institute,
      about: about || userData.about,
      skills: skills.length ? skills : userData.skills || [],
      profileImage: profileImage || userData.profileImage,
      bannerImage: bannerImage || userData.bannerImage,
      profileFile,
      bannerFile,
    };
    const ok = await updateUserProfile(data);
    if (ok) fetchUserData();
  };

  return (
    <div className="edit-alumni-wrapper">
      <div className="edit-alumni-container">
        <div className="edit-alumni-header">
          <div className="back-btn" onClick={() => navigate(-1)}>
            <svg
              style={{ width: "25px" }}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-left-icon"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </div>
          <h2>Edit Profile</h2>
          <div></div>
        </div>

        {/* Banner Upload */}
        <div className="banner-section">
          <div className="banner-preview">
            {bannerImage || userData.bannerImage ? (
              <img src={bannerImage || userData.bannerImage} alt="banner" />
            ) : (
              <div className="banner-placeholder">Banner</div>
            )}
          </div>
          <input
            type="file"
            accept="image/*"
            id="bannerInput"
            onChange={handleBannerUpload}
            style={{ display: "none" }}
          />
          <label htmlFor="bannerInput" className="upload-btn">
            Upload Banner
          </label>
        </div>

        {/* Profile Upload */}
        <div className="profile-section">
          <div className="profile-preview">
            {profileImage || userData.profileImage ? (
              <img src={profileImage || userData.profileImage} alt="profile" />
            ) : (
              <div className="profile-placeholder">+</div>
            )}
          </div>
          <input
            type="file"
            accept="image/*"
            id="profileInput"
            onChange={handleProfileUpload}
            style={{ display: "none" }}
          />
          <label htmlFor="profileInput" className="upload-btn">
            Upload Profile
          </label>
        </div>

        <label>
          Full Name
          <input
            type="text"
            value={name || userData.name || ""}
            onChange={(e) => setName(e.target.value)}
            placeholder="Alumni Name"
          />
        </label>

        <label>
          Tagline
          <input
            type="text"
            value={tagline || userData.tagline || ""}
            onChange={(e) => setTagline(e.target.value)}
            placeholder="Your tagline"
          />
        </label>

        <label>
          Institute Name
          <input
            type="text"
            value={institute || userData.institute || ""}
            onChange={(e) => setInstitute(e.target.value)}
            placeholder="Institute Name"
          />
        </label>

        <label>
          About
          <textarea
            value={about || userData.about || ""}
            onChange={(e) => setAbout(e.target.value)}
            placeholder="Tell something about yourself"
          />
        </label>

        <label>
          Skills (press Enter to add)
          <div className="skills-input">
            {(skills.length ? skills : userData.skills || []).map(
              (skill, idx) => (
                <span className="skill-tag" key={idx}>
                  {skill}
                  <button onClick={() => removeSkill(idx)}>
                    <svg
                      style={{ width: "20px" }}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-x-icon"
                    >
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                  </button>
                </span>
              )
            )}
            <input
              type="text"
              value={skillInput}
              onChange={(e) => setSkillInput(e.target.value)}
              onKeyDown={handleAddSkill}
              placeholder="Type skill and press Enter"
            />
          </div>
        </label>

        <div className="actions">
          <button className="save-btn" onClick={handleSave}>
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
