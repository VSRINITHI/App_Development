import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Footer from "../../Components/Ui/Footer";
import Navbar from "../../Components/Ui/Navbar";
import '../../Assets/Css/Wedding.css'
import corptext from '../../Assets/Images/Corporatetext3.jpg';
import sangeet from '../../Assets/Images/sangeet.jpg';
import invi from '../../Assets/Images/weddingcommunication.jpeg';
import engagement from '../../Assets/Images/engagement.jpeg';
import destiny from '../../Assets/Images/destiny.jpeg';

function Wedding() {
    const [isBlinking, setIsBlinking] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 300) {
                setIsBlinking(true);
            } else {
                setIsBlinking(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="wedding-body">
            <Navbar />
            <div className="wedding-content">
                <h1>WEDDING STORIES</h1>
                <h4>FOR YOUR EVER HAPPY MOMENTS.</h4>
            </div>
            <div className="wedding-content-texts">
                <div className="wedding-partition">
                    <h2>EVENT SERVICES</h2>
                    <ul>
                        <li>Ceremony & Reception Coordination</li>
                        <li>Food and Beverages</li>
                        <li>Rentals & Vendor Coordination</li>
                        <li>Wedding Day Timeline</li>
                        <li>Floor Plan Design</li>
                        <li>Wedding Concept & Design</li>
                        <li>Photography</li>
                        <li>Budget Management</li>
                        <li>Transportation & Parking</li>
                    </ul>
                </div>
                <div className="wedding-partition">
                    <img src={corptext} alt="Corporate Event Services" />
                </div>
                <div className="wedding-partition">
                    <h2>TYPES OF EVENTS</h2>
                    <ul>
                        <li>Sangeet</li>
                        <li>Pre Wedding Celebrations</li>
                        <li>Engagement</li>
                        <li>The Grand Day</li>
                        <li>Entertainment</li>
                        <li>Reception</li>
                        <li>DJ'S</li>
                        <li>Anything Else You Need</li>
                    </ul>
                </div>
            </div>
            <div className="wedding-eventlists">
                <div className="wedding-event-content">
                    <p>Under the stars, amidst the music and laughter, we come together to celebrate love, joy, and the beautiful journey of two souls destined to dance through life as one. Welcome to an evening of melody and magic.</p>
                </div>
                <div className="wedding-event-image">
                    <Card className="wedding-horizontal-card">
                        <Card.Img variant="left" src={sangeet} />
                        <Card.Body>
                            <h3>Sangeet</h3>
                            <h3>Party</h3>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <div className="wedding-eventlist2">
                <div className="wedding-event-image">
                    <Card className="wedding-horizontal-card">
                        <Card.Img variant="left" src={invi} />
                        <Card.Body>
                            <h3>Wedding</h3>
                            <h3>Communication</h3>
                        </Card.Body>
                    </Card>
                </div>
                <div className="wedding-event-content">
                    <p>A wedding invitation is a keepsake that guests will cherish long after the wedding day. It represents the couple’s love story and their desire to celebrate this momentous occasion with their nearest and dearest. It sets the tone for the wedding, giving guests a sense of what to expect and building anticipation for the event.</p>
                </div>
            </div>
            <div className="wedding-eventlists">
                <div className="wedding-event-content">
                    <p>Where the Journey of Two Souls Merges Into One World. </p>
                    <p>A night where refined elegance dances with boundless joy, marking the union of hearts in an atmosphere of sublime sophistication and happiness.</p>
                </div>
                <div className="wedding-event-image">
                    <Card className="wedding-horizontal-card">
                        <Card.Img variant="left" src={engagement} />
                        <Card.Body>
                            <h3>Engagement</h3>
                            <h3>Ceremonies</h3>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <div className="wedding-eventlist2">
                <div className="wedding-event-image">
                    <Card className="wedding-horizontal-card">
                        <Card.Img variant="left" src={destiny} />
                        <Card.Body>
                            <h3>Destiny</h3>
                            <h3>Wedding</h3>
                        </Card.Body>
                    </Card>
                </div>
                <div className="wedding-event-content">
                    <p>Our weddings speak for themselves, our destination choices have it in them to leave an indelible impression on our brides, bridegrooms and their family and guests. Finding the right venue at the right terms at the selected destination is an expert area where we excel.</p>
                </div>
            </div>
            <div className="wedding-rating">
                <h2>CLIENT RATINGS</h2>
                <div className="wedding-rating-stars">
                    <span className="wedding-star filled">&#9733;</span>
                    <span className="wedding-star filled">&#9733;</span>
                    <span className="wedding-star filled">&#9733;</span>
                    <span className="wedding-star filled">&#9733;</span>
                    <span className="wedding-star">&#9733;</span>
                </div>
                <p>4 / 5</p>
            </div>
            <div className={`wedding-call-to-action ${isBlinking ? 'wedding-blinking' : ''}`}>
                <Button variant="primary" size="lg">
                    Schedule A Call Now
                </Button>
            </div>
            <Footer />
        </div>
    )
}

export default Wedding;
