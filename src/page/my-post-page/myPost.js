import React, { useState } from 'react';
import './myPost.css';

const MyPost = () => {
    const [likeCount, setLikeCount] = useState(12);
    const [commentCount, setCommentCount] = useState(5);

    return (
        <div className="posts-container">
            <h1 className="posts-header">My Posts ( 2 )</h1>

            <div className="my-post-card">
                <div style={{ display: "flex", flexDirection: 'column', width: "50%", justifyContent: 'space-between' }}>
                    <div className="post-header">
                        <div className="alumni-date">
                            <svg style={{ width: '16px', color: '#7B7B7B' }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-fold-icon lucide-calendar-fold"><path d="M8 2v4" /><path d="M16 2v4" /><path d="M21 17V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11Z" /><path d="M3 10h18" /><path d="M15 22v-4a2 2 0 0 1 2-2h4" /></svg>
                            20 Jan 2025
                        </div>
                        <button className="post-menu">⋯</button>
                    </div>

                    <div className="post-content">
                        <div className="post-text">
                            Description of post come here with this font styleDescription of post come here with this font styleDescription of post come here with this font styleDescription of post come here with this font styleDescription of post come here with this font styleDescription of post come here with this font styleDescription of post come here with this font styleDescription of post come here with this font style
                        </div>


                    </div>

                    <div className="post-actions">
                        <button className="action-button" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart-icon lucide-heart"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" /></svg>
                            <span className="action-count">{likeCount}</span>
                        </button>

                        <button className="action-button" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle-icon lucide-message-circle"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" /></svg>
                            <span className="action-count">{commentCount}</span>
                        </button>
                    </div>
                </div>
                <div className="my-post-image">
                    <img src='https://i.pinimg.com/1200x/00/b1/6a/00b16aaa49791fd7850299b658c7bccd.jpg' alt="Post content" />
                </div>

            </div>
        </div>
    );
}

export default MyPost;