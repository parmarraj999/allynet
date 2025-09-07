import { useNavigate } from "react-router-dom";
import "./postDetail.css";
import 'react-medium-image-zoom/dist/styles.css'
import Zoom from 'react-medium-image-zoom'

export default function PostDetail() {

    const navigate = useNavigate();

    return (
        <div className="post-detail-container" >
            <div className="post-detail">

                {/* Post Header */}
                <div className="post-header">
                    <div className="user-info">
                        <div className="back-button" onClick={() => navigate(-1)}>
                            <svg style={{ width: "20px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path></svg>
                        </div>
                        <div
                            className="user-avatar"
                            style={{ backgroundImage: `url(https://i.pinimg.com/736x/dc/97/5a/dc975af246e7cb7bfecf418aa6a9225e.jpg)` }}
                        />
                        <div className="user-details">
                            <div className="username">John Doe</div>
                            <div className="timestamp-container">
                                <div className="dot" />
                                <div className="timestamp">1 Day ago</div>
                            </div>
                        </div>
                    </div>
                    <div className="more-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ellipsis-icon lucide-ellipsis"><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" /></svg>
                    </div>
                </div>

                {/* Post Description */}
                <div className="post-description">
                    Description of post come here with this font style
                </div>

                {/* Main Image */}
                <Zoom>
                    <div className="main-image" >
                        <img src="https://i.pinimg.com/736x/dc/97/5a/dc975af246e7cb7bfecf418aa6a9225e.jpg" className="image"
                            style={{
                                maxHeight: "500px"
                            }}
                        />
                    </div>
                </Zoom>

                {/* Action Buttons */}
                <div className="actions">
                    <div className="action-button">
                        <svg style={{ width: "25px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z"></path></svg>
                        <div className="action-count">12</div>
                    </div>

                    <div className="action-button">
                        <svg style={{ width: '25px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M10 3H14C18.4183 3 22 6.58172 22 11C22 15.4183 18.4183 19 14 19V22.5C9 20.5 2 17.5 2 11C2 6.58172 5.58172 3 10 3ZM12 17H14C17.3137 17 20 14.3137 20 11C20 7.68629 17.3137 5 14 5H10C6.68629 5 4 7.68629 4 11C4 14.61 6.46208 16.9656 12 19.4798V17Z"></path></svg>
                        <div className="action-count">5</div>
                    </div>

                    <div className="bookmark-button">
                        <svg style={{ width: "20px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5 2H19C19.5523 2 20 2.44772 20 3V22.1433C20 22.4194 19.7761 22.6434 19.5 22.6434C19.4061 22.6434 19.314 22.6168 19.2344 22.5669L12 18.0313L4.76559 22.5669C4.53163 22.7136 4.22306 22.6429 4.07637 22.4089C4.02647 22.3293 4 22.2373 4 22.1433V3C4 2.44772 4.44772 2 5 2ZM18 4H6V19.4324L12 15.6707L18 19.4324V4Z"></path></svg>
                    </div>
                </div>

                {/* Comment Input */}
                <input className="comment-input" placeholder="Join the Communication" />

                {/* Comment Section */}
                <div className="comment-section">

                    <div className="comment-content">
                        <div className="comment-header">
                            <img src="https://i.pinimg.com/736x/dc/97/5a/dc975af246e7cb7bfecf418aa6a9225e.jpg" style={{ width: "35px", height: "35px", borderRadius: "50%" }} />
                            <div className="comment-username">gFringe</div>
                            <div className="dot" />
                            <div className="comment-timestamp">1 Day ago</div>
                        </div>
                        <div className="comment-text">
                            this is the comment by this user on this post
                        </div>
                    </div>
                    <div className="comment-content">
                        <div className="comment-header">
                            <img src="https://i.pinimg.com/736x/dc/97/5a/dc975af246e7cb7bfecf418aa6a9225e.jpg" style={{ width: "35px", height: "35px", borderRadius: "50%" }} />
                            <div className="comment-username">gFringe</div>
                            <div className="dot" />
                            <div className="comment-timestamp">1 Day ago</div>
                        </div>
                        <div className="comment-text">
                            this is the comment by this user on this post
                        </div>
                    </div>
                    <div className="comment-content">
                        <div className="comment-header">
                            <img src="https://i.pinimg.com/736x/dc/97/5a/dc975af246e7cb7bfecf418aa6a9225e.jpg" style={{ width: "35px", height: "35px", borderRadius: "50%" }} />
                            <div className="comment-username">gFringe</div>
                            <div className="dot" />
                            <div className="comment-timestamp">1 Day ago</div>
                        </div>
                        <div className="comment-text">
                            this is the comment by this user on this post
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}