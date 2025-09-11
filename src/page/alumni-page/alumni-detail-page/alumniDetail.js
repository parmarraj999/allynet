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
                <div className='back-btn' onClick={()=>navigate(-1)}>
                    <svg style={{width:"20px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path></svg>
                </div>
            </div>
            <div className='alumni-detail-wrapper' >
                <div className='alumni-profile' ></div>
                <div className='alumni-details' >
                    <h2>Alumni Name</h2>
                    <h3>SDE at amazon and their tagline here</h3>
                    <h4>232 Connections</h4>
                    <h5>
                        <svg style={{ width: "25px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 19V5.70046C3 5.27995 3.26307 4.90437 3.65826 4.76067L13.3291 1.24398C13.5886 1.14961 13.8755 1.28349 13.9699 1.54301C13.9898 1.59778 14 1.65561 14 1.71388V6.6667L20.3162 8.77211C20.7246 8.90822 21 9.29036 21 9.72079V19H23V21H1V19H3ZM5 19H12V3.85543L5 6.40089V19ZM19 19V10.4416L14 8.77488V19H19Z"></path></svg>
                        Institue Name
                    </h5>
                    <div className='verified-badge' >
                        <svg style={{ width: "22px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2.00488 19H22.0049V21H2.00488V19ZM2.00488 5L7.00488 8.5L12.0049 2L17.0049 8.5L22.0049 5V17H2.00488V5ZM4.00488 8.84131V15H20.0049V8.84131L16.5854 11.2349L12.0049 5.28024L7.42435 11.2349L4.00488 8.84131Z"></path></svg>
                        Verified
                    </div>
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
                        <h4>2024-2025</h4>
                    </div>
                    <div className='experience-box' >
                        <h1>Manager / Google</h1>
                        <h4>2024-2025</h4>
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