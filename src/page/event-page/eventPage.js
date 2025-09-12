import React from 'react';
import { Calendar, List, Search, MapPin } from 'lucide-react';
import './eventPage.css'
import { Link } from 'react-router-dom';

const EventPage = () => {
  const events = [
    {
      date: 'Sep 29',
      day: 'Monday',
      time: '8:00 AM',
      title: 'Zurich AI Festival Workspace',
      organizers: 'By Valeria Bella, Lisa Brandenberger & Jeanique',
      location: 'FlexOffice Zürich Dino - Office Space & Workspace f...',
      attendees: '+297',
      attendeeAvatars: [
        'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=32&h=32&fit=crop&crop=face',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face',
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face',
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face'
      ],
      bannerColor: '#9333EA',
      bannerText: 'ZURICH\nAI FESTIVAL\nWORKSPACE',
      bannerSubtext: 'SEP 29 - OCT 6\n8:00-20:00\nFLEXOFFICE ZÜRICH DINO'
    },
    {
      date: 'Sep 30',
      day: 'Tuesday',
      time: '2:00 PM',
      title: 'Bridging the gap between theory and practice in Responsible AI',
      organizers: 'By Ricardo Chavarriaga & Valeria Bella',
      location: 'Zürich, Zürich',
      waitlist: true,
      bannerColor: '#EA580C',
      bannerText: 'BRIDGING THE\nGAP BETWEEN\nTHEORY AND\nPRACTICE IN\nRESPONSIBLE AI',
      bannerSubtext: 'SEP 30\n14:00-17:00\nETH MEETING CENTER'
    },
    {
      date: 'Oct 1',
      day: 'Wednesday',
      time: '4:00 PM',
      title: 'Hello, Self-Writing Internet: Caffeine AI',
      organizers: 'By Tech Innovation Team',
      location: 'Online Event',
      bannerColor: '#059669',
      bannerText: 'HELLO, SELF-\nWRITING INTERNET:\nCAFFEINE AI',
      bannerSubtext: 'OCT 1\n16:00-18:00\nVIRTUAL EVENT'
    }
  ];

  return (
    <div className="events-page">
    
      {/* Header */}
      <div className="events-header">
        <h1 className="events-title">Events</h1>
        
        <div className="header-actions">
          <button className="action-btn">
            <Calendar size={20} />
          </button>
          <button className="action-btn">
            <List size={20} />
          </button>
          <button className="action-btn">
            <Search size={20} />
          </button>
        </div>
      </div>

      {/* Events List */}
      <div className="events-container">
        {events.map((event, index) => (
          <div key={index}>
            {/* Date Header */}
            {(index === 0 || events[index-1].date !== event.date) && (
              <div className="date-header">
                <div className="date-indicator" />
                <h2 className="date-text">
                  {event.date}
                  <span className="day-text">{event.day}</span>
                </h2>
              </div>
            )}

            {/* Event Card */}
            <Link to='/events/1232' className="event-card">
              <div className="event-content">
                <div className="event-time">{event.time}</div>
                
                <h3 className="event-title">{event.title}</h3>
                
                <div className="event-organizers">
                  <div className="organizer-info">
                    <div className="organizer-icon">👤</div>
                    {event.organizers}
                  </div>
                </div>
                
                <div className="event-location">
                  <MapPin size={16} />
                  {event.location}
                </div>
                
                {event.attendees && (
                  <div className="attendees-section">
                    <div className="attendee-avatars">
                      {event.attendeeAvatars.map((avatar, i) => (
                        <img
                          key={i}
                          src={avatar}
                          alt="Attendee"
                          className={`attendee-avatar ${i > 0 ? 'overlapped' : ''}`}
                        />
                      ))}
                      <div className="attendee-count">{event.attendees}</div>
                    </div>
                  </div>
                )}
                
                {event.waitlist && (
                  <div className="waitlist-section">
                    <span className="waitlist-badge">Waitlist</span>
                  </div>
                )}
              </div>

              {/* Event Banner */}
              <div 
                className="event-banner"
                style={{
                  backgroundColor: event.bannerColor,
                  backgroundImage: `linear-gradient(135deg, ${event.bannerColor} 0%, ${event.bannerColor}dd 100%)`
                }}
              >
                <div className="banner-badge">flexoffice</div>
                
                <div className="banner-text">{event.bannerText}</div>
                
                <div className="banner-subtext">{event.bannerSubtext}</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventPage;