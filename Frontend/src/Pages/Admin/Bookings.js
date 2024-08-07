import React, { useState, useEffect } from 'react';
import Sidebar from '../../Components/Ui/Sidebar';
import '../../Assets/Css/Bookings.css'; // Import your CSS file

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [filter, setFilter] = useState({
    status: '',
    event: ''
    });

  useEffect(() => {
    const storedBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    setBookings(storedBookings);
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter({
      ...filter,
      [name]: value
    });
  };

  const filteredBookings = bookings.filter(booking => {
    return (
      (filter.status ? booking.status.toLowerCase() === filter.status.toLowerCase() : true) &&
      (filter.event ? booking.event.toLowerCase().includes(filter.event.toLowerCase()) : true) 
    );
  });

  return (
    <div className="bookings">
      <Sidebar />
      <h1>Bookings</h1>
      <div className="filter-section">
        <label>
          Status:
          <select name="status" value={filter.status} onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="Confirmed">Confirmed</option>
            <option value="Pending">Pending</option>
          </select>
        </label>
        <label>
          Event:
          <input
            type="text"
            name="event"
            value={filter.event}
            onChange={handleFilterChange}
            placeholder="Filter by event"
          />
        </label>
        
      </div>
      {filteredBookings.length > 0 ? (
        <table className='bookings-table'>
          <thead>
            <tr>
              <th>Bookee</th>
              <th>Event</th>
              <th>Number</th>
              <th>Event Date</th>
              <th>Event Timing</th>
              <th>No. of Days</th>
              <th>Venue</th>
              <th>Address</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredBookings.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.bookee}<br /><small>{booking.email}</small></td>
                <td>{booking.event}</td>
                <td>{booking.number}</td>
                <td>{booking.eventDate}</td>
                <td>{booking.eventTiming}</td>
                <td>{booking.noOfDays}</td>
                <td>{booking.venue}</td>
                <td>{booking.address}</td>
                <td className={booking.status.toLowerCase()}>{booking.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="no-events">No events found</p>
      )}
    </div>
  );
};

export default Bookings;
