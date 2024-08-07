import React from 'react';
import Navbar from '../../Components/Ui/Navbar';
import Footer from '../../Components/Ui/Footer';
import '../../Assets/Css/About.css';
import teamImage from '../../Assets/Images/teamimg.jpeg';

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="about-page-content">
        <header className="about-header">
          <h1>About Momentous</h1>
          <p>Innovative and Sustainable Event Solutions</p>
        </header>
        
        <section className="about-mission">
          <h2>Our Mission</h2>
          <p>
            At Momentous, our mission is to provide innovative and sustainable event solutions that 
            leave a lasting impact while minimizing our ecological footprint. We believe in creating 
            memorable experiences that are both exciting and environmentally responsible.
          </p>
        </section>

        <section className="about-team">
          <h2>Meet the Team</h2>
          <div className="team-intro">
            <img src={teamImage} alt="Our Team" className="team-image"/>
            <p>
              Our team is a group of passionate professionals dedicated to delivering exceptional 
              events. From planners to designers, each member brings unique skills and expertise 
              to ensure the success of every project we undertake.
            </p>
          </div>
          <div className="team-members">
            <div className="team-member">
              <h3>Srinithi</h3>
              <p>CEO & Founder</p>
              <p>Srinithi is the visionary behind Momentous, with over 20 years of experience in the event industry.</p>
            </div>
            <div className="team-member">
              <h3>Amirtha Varshini</h3>
              <p>Event Planner</p>
              <p>Amirta Varshini is our lead event planner, known for her meticulous attention to detail and creativity.</p>
            </div>
            <div className="team-member">
              <h3>Adish</h3>
              <p>Designer</p>
              <p>Adish brings events to life with stunning designs and innovative concepts.</p>
            </div>
            <div className="team-member">
              <h3>Raghavi</h3>
              <p>Managing Director</p>
              <p>Raghavi oversees the company's operations and ensures everything runs smoothly.</p>
            </div>
          </div>
        </section>

        <section className="about-values">
          <h2>Our Values</h2>
          <ul>
            <li><strong>Sustainability:</strong> We prioritize eco-friendly practices in all our events.</li>
            <li><strong>Innovation:</strong> We strive to bring fresh and creative ideas to the table.</li>
            <li><strong>Customer Satisfaction:</strong> Our clients are at the heart of everything we do.</li>
            <li><strong>Integrity:</strong> We conduct our business with honesty and transparency.</li>
          </ul>
        </section>

        <section className="about-history">
          <h2>Our History</h2>
          <p>
            Founded in 2010, Momentous started as a small event planning company with a big vision. Over 
            the years, we have grown into a leading provider of sustainable event solutions, serving 
            clients worldwide. Our journey has been fueled by a commitment to excellence and a passion 
            for creating unforgettable experiences.
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default About;