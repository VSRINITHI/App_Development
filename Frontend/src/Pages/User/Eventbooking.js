import React, { useState } from 'react';
import '../../Assets/Css/Eventbooking.css'; // Import your CSS file
import Navbar from '../../Components/Ui/Navbar';
import Footer from '../../Components/Ui/Footer';

const Eventbooking = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    bookee: '',
    email: '',
    event: '',
    status: '',
    number: '',
    eventDate: '',
    eventTiming: '',
    noOfDays: '',
    venue: '',
    address: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    const newBooking = {
      ...formData,
      price: parseFloat(formData.price) || 0, // Ensure price is a number
      id: existingBookings.length + 1
    };
    const updatedBookings = [...existingBookings, newBooking];
    
    localStorage.setItem('bookings', JSON.stringify(updatedBookings));
    
    onSubmit(formData);
    setFormData({
      bookee: '',
      email: '',
      event: '',
      status: '',
      number: '',
      eventDate: '',
      eventTiming: '',
      noOfDays: '',
      venue: '',
      address: ''
    });
  };
  

  return (
    <div className="eb-app">
      <Navbar />
      <form className="eb-booking-form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="bookee" value={formData.bookee} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>Event Type:</label>
        <select
          name="eventType"
          value={formData.eventType}
          onChange={handleChange}
          required >
          <option value="">Select Event Type</option>
          <option value="Wedding">Wedding</option>
          <option value="Corporate">Corporate</option>
          <option value="Social Gathering">Social Gathering</option>
        </select>
        <label>
          Event:
          <input type="text" name="event" value={formData.event} onChange={handleChange} required />
        </label>
        <label>
          Number:
          <input type="text" name="number" value={formData.number} onChange={handleChange} required />
        </label>
        <label>
          Event Date:
          <input type="date" name="eventDate" value={formData.eventDate} onChange={handleChange} required />
        </label>
        <label>
          Event Timing:
          <input type="time" name="eventTiming" value={formData.eventTiming} onChange={handleChange} required />
        </label>
        <label>
          No. of Days:
          <input type="number" name="noOfDays" value={formData.noOfDays} onChange={handleChange} required />
        </label>
        <label>
          Venue:
          <input type="text" name="venue" value={formData.venue} onChange={handleChange} required />
        </label>
        <label>
          Address:
          <input type="text" name="address" value={formData.address} onChange={handleChange} required />
        </label>
        <button type="submit">Book Event</button>
      </form>
      <Footer />
    </div>
  );
};

export default Eventbooking;
