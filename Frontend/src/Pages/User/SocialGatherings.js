import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Footer from "../../Components/Ui/Footer";
import Navbar from "../../Components/Ui/Navbar";
import '../../Assets/Css/SocialGatherings.css';
import corptext from '../../Assets/Images/Corporatetext3.jpg';
import bdy from '../../Assets/Images/bdy.jpg';
import reunion from '../../Assets/Images/socialgathering.jpg';
import babyshower from '../../Assets/Images/babyshower.jpeg';
import surprise from '../../Assets/Images/surprise.jpg';

function SocialGatherings() {
    const [isBlinking, setIsBlinking] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 300) { // Adjust this value as needed
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
        <div className="sg-body">
            <Navbar />
            <div className="sg-content">
                <h1>SOCIAL GATHERINGS</h1>
                <h4>WHERE CONNECTION SPARKS, LAUGHTER FLOWS, AND MEMORIES ARE MADE.</h4>
            </div>
            <div className="sg-content-texts">
                <div className="sg-partition">
                    <h2>EVENT SERVICES</h2>
                    <ul>
                        <li>Ceremony Coordination</li>
                        <li>Food and Beverages</li>
                        <li>Rentals & Vendor Coordination</li>
                        <li>Day Timeline</li>
                        <li>Floor Plan Design</li>
                        <li>Concept & Design</li>
                        <li>Photography</li>
                        <li>Budget Management</li>
                        <li>Transportation & Parking</li>
                    </ul>
                </div>
                <div className="sg-partition">
                    <img src={corptext} alt="Corporate Event Services" />
                </div>
                <div className="sg-partition">
                    <h2>TYPES OF EVENTS</h2>
                    <ul>
                        <li>Baby Showers</li>
                        <li>Birthday Celebrations</li>
                        <li>Reunion</li>
                        <li>Surprise Parties</li>
                        <li>Costume Parties</li>
                        <li>Cultural Celebrations</li>
                        <li>New Year</li>
                        <li>Anything Else You Need</li>
                    </ul>
                </div>
            </div>
            <div className="sg-eventlists">
                <div className="sg-event-content">
                    <p>An occasion where refined grace meets boundless joy, as hearts converge in a celebration of exquisite elegance and pure delight.</p>
                    <p>A celebration of birth filled with boundless fulfillment and joy.</p>
                </div>
                <div className="sg-event-image">
                    <Card className="sg-horizontal-card">
                        <Card.Img variant="left" src={bdy} />
                        <Card.Body>
                            <h3>Birthday</h3>
                            <h3>Party</h3>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <div className="sg-eventlist2">
                <div className="sg-event-image">
                    <Card className="sg-horizontal-card">
                        <Card.Img variant="left" src={reunion} />
                        <Card.Body>
                            <h3>Reunion</h3>
                            <h3>Celebrations</h3>
                        </Card.Body>
                    </Card>
                </div>
                <div className="sg-event-content">
                    <p>A reunion celebration brims with profound happiness, where every heartfelt embrace and shared memory rekindles connections and celebrates the joy of togetherness.</p>
                    <p>Whether you are hosting a small, intimate gathering or a large-scale event, we provide comprehensive solutions that cover logistics, audiovisual equipment, and more. Let us help you create impactful press meets that leave a lasting impression on your audience.</p>
                </div>
            </div>
            <div className="sg-eventlists">
                <div className="sg-event-content">
                    <p>A new life’s arrival that deepens the meaning and joy in their lives.</p>
                    <p>A baby shower is a heartwarming celebration of new beginnings, where joy and anticipation come together to honor the imminent arrival of a new life with love and cherished moments.</p>
                </div>
                <div className="sg-event-image">
                    <Card className="sg-horizontal-card">
                        <Card.Img variant="left" src={babyshower} />
                        <Card.Body>
                            <h3>Baby</h3>
                            <h3>Shower</h3>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <div className="sg-eventlist2">
                <div className="sg-event-image">
                    <Card className="sg-horizontal-card">
                        <Card.Img variant="left" src={surprise} />
                        <Card.Body>
                            <h3>Surprise</h3>
                            <h3>Parties</h3>
                        </Card.Body>
                    </Card>
                </div>
                <div className="sg-event-content">
                    <p>Surprises are the spark that transforms the mundane into the magical. They weave a tapestry of excitement and wonder, turning everyday moments into unforgettable memories. With each unexpected twist, they infuse joy and anticipation, creating experiences that linger long after the moment has passed.</p>
                </div>
            </div>
            <div className="sg-rating">
                <h2>CLIENT RATINGS</h2>
                <div className="sg-rating-stars">
                    <span className="sg-star sg-filled">&#9733;</span>
                    <span className="sg-star sg-filled">&#9733;</span>
                    <span className="sg-star sg-filled">&#9733;</span>
                    <span className="sg-star sg-filled">&#9733;</span>
                    <span className="sg-star">&#9733;</span>
                </div>
                <p>4 / 5</p>
            </div>
            <div className={`sg-call-to-action ${isBlinking ? 'sg-blinking' : ''}`}>
                <Button variant="primary" size="lg">
                    Schedule A Call Now
                </Button>
            </div>
            <Footer />
        </div>
    );
}

export default SocialGatherings;
