import React, { useState } from 'react';
import './courseDetail.css';

const CourseDetail = () => {
    const [activeTab, setActiveTab] = useState('description');

    const courseData = {
        title: "BLENDER 3D FUNDAMENTALS",
        subtitle: "Learn The Basics of 3D in Blender with a Project Based Approach",
        price: "$15.99",
        originalPrice: "$39.99",
        discount: "60% OFF",
        rating: 4.8,
        totalRatings: "1,890 ratings",
        students: "2,492 Students",
        instructor: {
            name: "Ryan Curtis",
            title: "Publisher",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face",
            description: "Hey! My name is Ryan. I'm 26 and I'm a freelance 3D Artist with around four years of experience.",
            rating: 4.8,
            reviews: "959 Reviews",
            students: "4,887 Students",
            courses: "6 Courses"
        },
        courseIncludes: [
            { icon: "", text: "56 hours on-demand video" },
            { icon: "📄", text: "5 Articles" },
            { icon: "📥", text: "8 Downloadable resources" },
            { icon: "📱", text: "Mobile version" }
        ],
        duration: "56h 28m",
        skillLevel: "Beginner",
        views: "12,620",
        description: "Welcome to the exciting world of Blender 3D! In this comprehensive course, we will dive into the fundamentals of Blender, equipping you with the essential knowledge and skills to create stunning 3D projects. Whether you're eager to explore the realm of 3D modeling or an experienced artist looking to expand your skills, this course will guide you every step of the way."
    };

    const suggestedCourses = [
        {
            title: "Stylized Character Workflow...",
            author: "By Julian Kaspar",
            image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=200&h=120&fit=crop"
        }
    ];

    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);

        for (let i = 0; i < fullStars; i++) {
            stars.push(<span key={i} className="star filled">★</span>);
        }

        if (rating % 1 !== 0) {
            stars.push(<span key="half" className="star half">★</span>);
        }

        const remainingStars = 5 - Math.ceil(rating);
        for (let i = 0; i < remainingStars; i++) {
            stars.push(<span key={`empty-${i}`} className="star empty">★</span>);
        }

        return stars;
    };

    return (
        <div className="course-detail-page">
            <div className="main-content">
                <div className="course-hero">

                </div>

                <div className="course-info-section">
                    <div className="instructor-info">
                        <img src={courseData.instructor.avatar} alt={courseData.instructor.name} className="instructor-avatar" />
                        <div className="instructor-details">
                            <h3>{courseData.instructor.name}</h3>
                            <span>{courseData.instructor.title}</span>
                        </div>
                        <div className="course-actions">
                            <span className="share-count">
                                <svg style={{ width: "20px" }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart-icon lucide-heart"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" /></svg>
                                962</span>
                            <button className="share-btn">
                                <svg style={{ width: "20px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-share2-icon lucide-share-2"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" x2="15.42" y1="13.51" y2="17.49" /><line x1="15.41" x2="8.59" y1="6.51" y2="10.49" /></svg>
                                Share</button>
                        </div>
                    </div>
                </div>

                <div className="course-detail-content">
                    <h2 className='description'>Description</h2>

                    <div className="tab-content">

                        <div className="description-content">
                            <p>{courseData.description}</p>
                            <div className="course-details">
                                <div className="detail-item">
                                    <span className="detail-label">Duration</span>
                                    <span className="detail-value">
                                        <svg style={{ width: "18px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock3-icon lucide-clock-3"><path d="M12 6v6h4" /><circle cx="12" cy="12" r="10" /></svg>
                                        {courseData.duration}</span>
                                </div>
                                <div className="detail-item">
                                    <span className="detail-label">Skill level</span>
                                    <span className="detail-value">
                                        <svg style={{ width: "18px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-column-increasing-icon lucide-chart-column-increasing"><path d="M13 17V9" /><path d="M18 17V5" /><path d="M3 3v16a2 2 0 0 0 2 2h16" /><path d="M8 17v-3" /></svg>
                                        {courseData.skillLevel}</span>
                                </div>
                                <div className="detail-item">
                                    <span className="detail-label">Views</span>
                                    <span className="detail-value">
                                        <svg style={{ width: '18px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye-icon lucide-eye"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" /><circle cx="12" cy="12" r="3" /></svg>
                                        {courseData.views}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="sidebar">
                <div className="price-section">
                    <div className="pricing">
                        <span className="current-price">{courseData.price}</span>
                        <span className="original-price">{courseData.originalPrice}</span>
                        <span className="discount-badge">{courseData.discount}</span>
                    </div>
                    <p className="full-course">Full course</p>
                </div>

                <div className="course-includes">
                    <h4>Course includes:</h4>
                    <ul className="includes-list">
                        <li className="include-item">
                            <svg style={{ width: '15px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-play-icon lucide-play"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" /></svg>
                            <span>56 hours on-demand video</span>
                        </li>
                        <li className="include-item">
                            <svg style={{ width: "15px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-icon lucide-file"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /></svg>
                            <span>6 articles</span>
                        </li>
                        <li className="include-item">
                            <svg style={{ width: "15px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-folder-icon lucide-folder"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" /></svg>
                            <span>8 Download Resource</span>
                        </li>
                        <li className="include-item">
                            <svg style={{ width: "15px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-smartphone-icon lucide-smartphone"><rect width="14" height="20" x="5" y="2" rx="2" ry="2" /><path d="M12 18h.01" /></svg>
                            <span>Mobile Version</span>
                        </li>
                    </ul>
                    <div className="action-buttons">
                        <button className="add-to-cart-btn">Add to cart</button>
                        <button className="buy-now-btn">Buy now</button>
                        <p className="guarantee">30-day money-back guarantee</p>
                    </div>
                </div>


                <div className="rating-section">
                    <div className="rating-stars">
                        {renderStars(courseData.rating)}
                        <span className="rating-number">{courseData.rating}</span>
                    </div>
                    <div className="rating-details">
                        
                        <span>{courseData.totalRatings}</span>
                    </div>
                </div>

                <div className="publisher-section">
                    <div className="publisher-header">
                        <h4>Publisher</h4>
                        <a href="#" className="view-profile">View profile →</a>
                    </div>
                    <div className="publisher-info">
                        <img src={courseData.instructor.avatar} alt={courseData.instructor.name} className="publisher-avatar" />
                        <div className="publisher-details">
                            <h5>{courseData.instructor.name}</h5>
                        </div>
                    </div>
                </div>

                <div className="suggested-courses">
                    <div className="suggested-header">
                        <h4>Suggested courses</h4>
                        <a href="#" className="view-profile">View profile →</a>
                    </div>
                    {suggestedCourses.map((course, index) => (
                        <div key={index} className="suggested-course">
                            <div className="suggested-image">
                                {course.image ? (
                                    <img src={course.image} alt={course.title} />
                                ) : (
                                    <div className="image-placeholder">Course Image</div>
                                )}
                            </div>
                            <div className="suggested-info">
                                <h5>{course.title}</h5>
                                <p>{course.author}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CourseDetail;