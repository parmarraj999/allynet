import "./post.css";

export default function PostCard() {
    return (
        <div className="post-card">
            {/* Header */}
            <div className="header">
                <div className="user-info">
                    <div
                        className="avatar"
                        style={{ backgroundImage: `url(https://i.pinimg.com/1200x/cc/e3/8f/cce38f3517bcdee2986007c87213d691.jpg)` }}
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

            {/* Description */}
            <div className="description">
                Description of post come here with this font style
            </div>

            {/* Main Image */}
            <div
                className="main-image"
                style={{ backgroundImage: `url(https://i.pinimg.com/1200x/cc/e3/8f/cce38f3517bcdee2986007c87213d691.jpg)` }}
            />

            {/* Actions */}
            <div className="actions">
                <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
                    <div className="action-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart-icon lucide-heart"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" /></svg>
                        <div className="action-count">12</div>
                    </div>

                    <div className="action-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle-icon lucide-message-circle"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" /></svg>
                        <div className="action-count">5</div>
                    </div>

                </div>

                <div className="bookmark-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bookmark-icon lucide-bookmark"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" /></svg>
                </div>
            </div>
        </div>
    );
}