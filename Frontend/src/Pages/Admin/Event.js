import React, { useState } from 'react';
import '../../Assets/Css/Event.css';
import Sidebar from '../../Components/Ui/Sidebar';

const Event = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const events = [
    { event: 'Dj Night', name: 'Michael Jackson Greatest Concert Event', category: 'SocialGatherings', venueType: 'Arenas', venueName: 'Wembley Arenas', location: 'England', eventTime: '7/9/2024, 5:59:00 PM', status: 'Ongoing' },
    { event: 'Birthday Party', name: 'Sidhu Moosewala Royal Show', category: 'SocialGatherings', venueType: 'Outdoor Venues', venueName: 'Musa Ground', location: 'Punjab', eventTime: '8/9/2024, 5:00:00 PM', status: 'Upcoming' },
    { event: 'Sangeet', name: 'Sangeet Night', category: 'Wedding', venueType: 'Taj Hotel', venueName: 'Taj Hotel', location: 'Mumbai', eventTime: '6/30/2024, 5:00:00 PM', status: 'Tomorrow' },
    { event: 'Job Fair', name: 'Job Search Event', category: 'Educational', venueType: 'Hotels', venueName: 'Thane Best Hotel', location: 'Thane West', eventTime: '6/15/2024, 1:00:00 PM', status: 'Ongoing' }
  ];

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredEvents = events.filter(event =>
    event.status.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="me-body">
      <Sidebar />
      <h1 className="me-title">All Events</h1>
      <input
        type="text"
        placeholder="Search by Action..."
        className="me-search-input"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <table className="me-table">
        <thead>
          <tr>
            <th>Event</th>
            <th>Event Name</th>
            <th>Category</th>
            <th>Venue Type</th>
            <th>Venue Name</th>
            <th>Location</th>
            <th>Event Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event, index) => (
              <tr key={index}>
                <td>{event.event}</td>
                <td>{event.name}</td>
                <td>{event.category}</td>
                <td>{event.venueType}</td>
                <td>{event.venueName}</td>
                <td>{event.location}</td>
                <td>{event.eventTime}</td>
                <td>
                  <button className="me-action-button">{event.status}</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8">No events found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Event;
