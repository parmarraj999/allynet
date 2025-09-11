import React from 'react';
import './coursePage.css';

const CoursePage = () => {
  const courses = [
    {
      id: 1,
      category: 'DEVELOPMENTS',
      title: 'Complete Blender Creator: Learn 3D Modelling for Beginners',
      students: '435,671',
      price: '$16.00',
      rating: 3.5,
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=200&fit=crop&crop=center'
    },
    {
      id: 2,
      category: 'DEVELOPMENTS',
      title: 'SQLBG 2025 for NEWBS: Weekender Crash Course',
      students: '435,671',
      price: '$13.00',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=200&fit=crop&crop=center'
    },
    {
      id: 3,
      category: 'DEVELOPMENTS',
      title: 'SEO 2021: Complete SEO Training + SEO for WordPress Websites',
      students: '435,671',
      price: '$13.00',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=200&fit=crop&crop=center'
    },
    {
      id: 4,
      category: 'DESIGN',
      title: 'Graphic Design Masterclass - Learn about great Design',
      students: '435,671',
      price: '$13.00',
      rating: 3.5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop&crop=center'
    },
    {
      id: 5,
      category: 'DEVELOPMENTS',
      title: '[NEW] Ultimate AWS Certified Cloud Practitioner - 2021',
      students: '435,671',
      price: '$13.00',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=200&fit=crop&crop=center'
    },
    {
      id: 6,
      category: 'DEVELOPMENTS',
      title: '2021 Complete Python Bootcamp From Zero to Hero in Python',
      students: '435,671',
      price: '$13.00',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1515378791036-0648a814c963?w=400&h=200&fit=crop&crop=center'
    }
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="star filled">★</span>);
    }

    if (hasHalfStar) {
      stars.push(<span key="half" className="star half">★</span>);
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<span key={`empty-${i}`} className="star empty">★</span>);
    }

    return stars;
  };

  return (
    <div className="courses-page">
      <div className="courses-header">
        <div className="header-left">
          <h1>Courses</h1>
        </div>
        <div className="header-right">
          {/* <button className="add-content-btn">
            <span className="plus-icon">+</span>
            Add Content
          </button> */}
        </div>
      </div>

      <div className="courses-controls">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search in your courses..."
            className="search-input"
          />
          <span className="search-icon">🔍</span>
        </div>
        
        <div className="filters">
          <select className="filter-select">
            <option>Sort by Latest</option>
            <option>Sort by Price</option>
            <option>Sort by Rating</option>
          </select>
          
          <select className="filter-select">
            <option>All Category</option>
            <option>Developments</option>
            <option>Design</option>
          </select>
        </div>
      </div>

      <div className="courses-grid">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <div className="course-image">
              <img src={course.image} alt={course.title} />
            </div>
            
            <div className="course-content">
              <div className="course-category-rating">
                <span className="course-category">{course.category}</span>
                <div className="rating">
                  {renderStars(course.rating)}
                  <span className="rating-number">{course.rating}</span>
                </div>
              </div>
              
              <h3 className="course-title">{course.title}</h3>
              
              <div className="course-footer">
                <div className="course-students">
                  <svg style={{width:"15px"}} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users-icon lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M16 3.128a4 4 0 0 1 0 7.744"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/></svg>
                  <span>{course.students} students</span>
                </div>
                <div className="course-price">{course.price}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursePage;