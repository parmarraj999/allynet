import React, { useState } from 'react';
import './eventDetail.css';

const EventDetailPage = () => {
  const [ticketCount, setTicketCount] = useState(1);

  const incrementTickets = () => setTicketCount(prev => prev + 1);
  const decrementTickets = () => setTicketCount(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="edp-container">
      <div className="edp-content">
        <div className="edp-image-section">
          <div className="edp-image-card">
            <img
              src="https://images.unsplash.com/photo-1521537634581-0dced2fee2ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWRtaW50b24lMjBzaHV0dGxlY29jayUyMHdoaXRlfGVufDF8fHx8MTc1NzY2MTU1Nnww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Shuttlecock"
              className="edp-shuttlecock-image"
            />
            <div className="edp-date-badge">
              SEP<br />14
            </div>
          </div>
        </div>

        <div className="edp-details">
          <h1 className="edp-title">Badminton Evening – Rohit Nagar</h1>

          <div className="edp-datetime">
            <div className="edp-date-text">Sunday, September 14</div>
            <div className="edp-time-text">3:30 PM • 6:00 PM</div>
          </div>

          <div className="edp-location">
            <div className="edp-location-text">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></svg>
              Bhopal, Madhya Pradesh
            </div>
          </div>

          <div className="edp-registration">
            <div className="edp-registration-title">Registration</div>

            <div className="edp-approval">
              <div className="edp-approval-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 21a8 8 0 0 1 13.292-6" /><circle cx="10" cy="8" r="5" /><path d="m16 19 2 2 4-4" /></svg>
              </div>
              <div className="edp-approval-text">
                <div className="edp-approval-title">Approval Required</div>
                <div className="edp-approval-subtitle">
                  Your registration is subject to approval by the host.
                </div>
              </div>
            </div>

            <div className="edp-join-wrapper">
              <button className="edp-join-button">Request to Join</button>
            </div>
          </div>

          <div className="edp-host">
            <div className="edp-host-label">Hosted By</div>
            <div className="edp-host-info">
              <div className="edp-host-avatar">G</div>
              <div className="edp-host-name">Glidr Social</div>
            </div>
          </div>

          <div className="edp-about">
            <h2 className="edp-about-title">About Event</h2>
            <p className="edp-about-text">
              A fun weekend badminton session for anyone who loves to play and meet new faces.
            </p>
            <p className="edp-about-text">
              Whether you're warming up for a big Monday or just looking to get active and unwind, join us for an hour session of casual, mixed-level badminton. Come solo or with a friend — we'll rotate players and keep the energy light and fun.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailPage;
