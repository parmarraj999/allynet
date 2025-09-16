import React from 'react'
import './alumniDetail.css'
import { useNavigate } from 'react-router-dom'

function AlumniDetail() {

    const navigate = useNavigate();

    return (
        <div className='alumni-detail-container' >
            <div className='alumni-header-image' style={{
                backgroundImage: "url(https://i.pinimg.com/736x/21/ce/52/21ce5263171481886a153ad6ab9d9c92.jpg)"
            }} >
                <div className='back-btn' onClick={() => navigate(-1)}>
                    <svg style={{ width: "20px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path></svg>
                </div>
            </div>
            <div className='alumni-detail-wrapper' >
                <div className='alumni-profile' >
                    <img src='https://i.pinimg.com/736x/1b/07/84/1b07843b7d79a25555e8380c776c5ebe.jpg' />
                </div>
                <div className='alumni-details' >
                    <h2>Alumni Name</h2>
                    <h3>SDE at amazon and their tagline here</h3>
                    <h4>232 Connections</h4>
                    <h5>
                        <svg style={{ width: "25px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 19V5.70046C3 5.27995 3.26307 4.90437 3.65826 4.76067L13.3291 1.24398C13.5886 1.14961 13.8755 1.28349 13.9699 1.54301C13.9898 1.59778 14 1.65561 14 1.71388V6.6667L20.3162 8.77211C20.7246 8.90822 21 9.29036 21 9.72079V19H23V21H1V19H3ZM5 19H12V3.85543L5 6.40089V19ZM19 19V10.4416L14 8.77488V19H19Z"></path></svg>
                        Institue Name
                    </h5>
                    <button className="alumni-connect-btn" style={{width:'fit-content',marginTop:'10px',fontWeight:700}}>
                        <svg style={{ width: "20px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M14 14.252V16.3414C13.3744 16.1203 12.7013 16 12 16C8.68629 16 6 18.6863 6 22H4C4 17.5817 7.58172 14 12 14C12.6906 14 13.3608 14.0875 14 14.252ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11ZM18 17V14H20V17H23V19H20V22H18V19H15V17H18Z"></path></svg>
                        Connect
                    </button>
                </div>

                <div className='line' ></div>

                <div className='alumni-about' >
                    <h2>About</h2>
                    <p>Consumers want to know the team behind the brand they are supporting. An About Us page provides the perfect real estate to pull back the curtain and reveal who is working behind the scenes.</p>
                </div>

                <div className='line' ></div>

                <div className='alumni-experience' >
                    <h2>Experience</h2>
                    <div className='experience-box' >
                        <h1>Softwere Engineer / Microsoft</h1>
                        <h4>01/2024 - 05/2025</h4>
                    </div>
                    <div className='experience-box' >
                        <h1>Manager / Google</h1>
                        <h4>01/2024 - 05/2025</h4>
                    </div>
                </div>

                <div className='line' ></div>

                <div className='alumni-skills' >
                    <h2>Skills</h2>
                    <div className='skill-tags' >
                        <div className='skill-tag'>React Js</div>
                        <div className='skill-tag'>React Js</div>
                        <div className='skill-tag'>React Js</div>
                        <div className='skill-tag'>React Js</div>
                        <div className='skill-tag'>React Js</div>
                        <div className='skill-tag'>React Js</div>
                        <div className='skill-tag'>React Js</div>
                        <div className='skill-tag'>React Js</div>
                        <div className='skill-tag'>React Js</div>
                        <div className='skill-tag'>React Js</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AlumniDetail