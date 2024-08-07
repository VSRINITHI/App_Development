import React, { useEffect, useState } from 'react';
import '../../Assets/Css/Dashboard.css';
import Sidebar from '../../Components/Ui/Sidebar';

const Dashboard = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem('events')) || [];
    setEvents(storedEvents);
  }, []);

  return (
    <div className="db-body">
      <Sidebar />
      <div className="db-content">
        <div className="db-overview">
          <h2 className="db-section-title">Popular Bookings</h2>
          <div className="db-activities">
            <div className="db-activity-card">Meetings</div>
            <div className="db-activity-card">Wedding</div>
            <div className="db-activity-card">Birthday</div>
            <div className="db-activity-card">BabyShower</div>
            <div className="db-activity-card">Conferences</div>
          </div>

          <h2 className="db-section-title">Call Schedules</h2>
          <div className="db-weekly-schedule">
            <div className="db-schedule-card">
              <div className="db-schedule-date">
                <span className="db-day">13</span>
                <span className="db-day-name">MON</span>
              </div>
              <div className="db-schedule-info">
                <span className="db-activity-name">SRINITHI</span>
                <div className="db-participants">
                  {/* Add participant images here */}
                </div>
              </div>
              <button className="db-join-button">ACCEPT</button>
            </div>
            <div className="db-schedule-card">
              <div className="db-schedule-date">
                <span className="db-day">15</span>
                <span className="db-day-name">TUES</span>
              </div>
              <div className="db-schedule-info">
                <span className="db-activity-name">AMIRTA</span>
                <div className="db-participants">
                  {/* Add participant images here */}
                </div>
              </div>
              <button className="db-join-button">ACCEPT</button>
            </div>
          </div>

          <h2 className="db-section-title">Recent Updated Events</h2>
          <div className="db-personal-bests">
            {events.length > 0 ? (
              events.map((event, index) => (
                <div className="db-best-card" key={index}>
                  <p>Event Type: {event.eventType}</p>
                  <p>Event Date: {new Date(event.eventDate).toLocaleDateString()}</p>
                  <p>UserName: {event.fullName}</p>
                </div>
              ))
            ) : (
              <p>No events found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
