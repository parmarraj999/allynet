import React from 'react'
import './mentorRequest.css'

function MentorRequest() {
    return (
        <div className='mentor-page-container' >
            <div className='mentor-table-container' >
                <h1>Requests</h1>

                <div className='mentor-request' >
                    <div className='mentor-request-profile' >
                        <img src='https://i.pinimg.com/736x/ab/75/77/ab7577fdeaa18d0b018d834c28435c5c.jpg' />
                    </div>

                    <div className='request-alumni-detail' >
                        <h2>Alumni Name</h2>
                        <h3>Tag line of the alumni here</h3>
                        <h4>232 connections</h4>
                    </div>

                    <div className='request-action' >
                        <div className='ignore-btn' >Ignore</div>
                        <div className='accept-btn' >
                            <svg style={{ width: "20px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M14 14.252V16.3414C13.3744 16.1203 12.7013 16 12 16C8.68629 16 6 18.6863 6 22H4C4 17.5817 7.58172 14 12 14C12.6906 14 13.3608 14.0875 14 14.252ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11ZM18 17V14H20V17H23V19H20V22H18V19H15V17H18Z"></path></svg>
                            Accept
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MentorRequest