import React, { useState } from 'react';
import '../../Assets/Css/LetsTalk.css'; 
import Navbar from '../../Components/Ui/Navbar';
import Footer from '../../Components/Ui/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';

function LetsTalk() {
  const initialFormData = {
    fullName: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    eventVenue: '',
    howHeard: '',
    message: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Data:', formData);

    // Save formData to localStorage
    const storedEvents = JSON.parse(localStorage.getItem('events')) || [];
    storedEvents.push(formData);
    localStorage.setItem('events', JSON.stringify(storedEvents));

    // Display alert message
    window.alert('Thank you for your submission! We will get back to you soon.');

    // Reset form fields
    setFormData(initialFormData);

    // Open modal or perform any other operations if needed
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="lt-App">
      <Navbar />
      <header className="lt-App-header">
        <h1>REACH US</h1> 
        <h2>Turn Your Vision to Reality</h2>
      </header>
      <main>
        <section className="lt-main-container">
          <div className="lt-contact-details">
            <h1>"We would be delighted to be part of your extraordinary event."</h1>
            <div className="lt-contact-info">
              <div className="lt-info-item lt-email">
                <i className="fas fa-envelope"></i>
                <span>momentous@admin.in</span>
              </div>
              <div className="lt-info-item lt-phone">
                <i className="fas fa-phone"></i>
                <span>+91-8610212991 <br/> +91-9911002299 <br/> +91-9992228883</span>
              </div>
              <div className="lt-info-item lt-address">
                <i className="fas fa-map-marker-alt"></i>
                <span>EVENT PHASE - 2 ,<br />Near by Party Hall<br />Event World</span>
              </div>
              <br/>
              <div className='lt-addinfo'>
                <h3>Inquiries and correspondence are generally addressed during business hours Monday – Friday. We may not respond to new inquiries over the weekend, as we are typically working fabulous events at that time.  momentous@admin.in</h3>
              </div>
              <br/>
              <div className='lt-socialmedia'>
                <ul>
                  <li><a href="https://www.facebook.com/"><i className="fab fa-facebook" aria-hidden="true"></i></a></li>
                  <li><a href="https://www.twitter.com/"><i className="fab fa-twitter" aria-hidden="true"></i></a></li>
                  <li><a href="https://www.google.com/"><i className="fab fa-google-plus-g" aria-hidden="true"></i></a></li>
                  <li><a href="https://www.instagram.com/"><i className="fab fa-instagram" aria-hidden="true"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
          <form className="lt-contact-form" onSubmit={handleSubmit}>
            <h1>Contact us today and let’s create magic together!</h1>
            <div className="lt-form-group">
              <label htmlFor="fullName">Full Name:</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="lt-form-group">
              <label htmlFor="email">Email Address:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="lt-form-group">
              <label htmlFor="phone">Phone No:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="lt-form-group">
              <label htmlFor="eventType">Event Type:</label>
              <select
                id="eventType"
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                required
              >
                <option value="">Select Event Type</option>
                <option value="Wedding">Wedding</option>
                <option value="Corporate">Corporate</option>
                <option value="Social Gathering">Social Gathering</option>
              </select>
            </div>
            <div className="lt-form-group">
              <label htmlFor="eventDate">Event Date:</label>
              <input
                type="date"
                id="eventDate"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleChange}
              />
            </div>
            <div className="lt-form-group">
              <label htmlFor="eventVenue">Event Timing:</label>
              <input
                type="text"
                id="eventVenue"
                name="eventVenue"
                value={formData.eventVenue}
                onChange={handleChange}
              />
            </div>
            <div className="lt-form-group">
              <label htmlFor="howHeard">How did you hear about us?:</label>
              <select
                id="howHeard"
                name="howHeard"
                value={formData.howHeard}
                onChange={handleChange}
              >
                <option value="">Select Source</option>
                <option value="Instagram">Instagram</option>
                <option value="Facebook">FaceBook</option>
                <option value="Friend">A Friend</option>
                <option value="Google">While Surfing The Google</option>
              </select>
            </div>
            <div className="lt-form-group">
              <label htmlFor="message">We love to create personal experiences. Tell us your story!</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <button type="submit">SUBMIT</button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default LetsTalk;
