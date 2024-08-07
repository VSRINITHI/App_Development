import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Footer from "../../Components/Ui/Footer";
import Navbar from "../../Components/Ui/Navbar";
import '../../Assets/Css/Corporate.css';
import corptext from '../../Assets/Images/Corporatetext3.jpg';
import eventimage from '../../Assets/Images/coprotatetextcont1.jpg';
import pressimage from '../../Assets/Images/PressMeets.jpg';
import awardimg from '../../Assets/Images/award.jpg';

function Corporate() {
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
        <div className="corporate-body">
            <Navbar />
            <div className="corporate-content">
                <h1>CORPORATE EVENT PLANNING</h1>
                <h4>CUSTOMIZED EVENT PLANNING TO MAKE YOUR BUSINESS SHINE.</h4>
            </div>
            <div className="corporate-content-texts">
                <div className="corporate-partition">
                    <h2>EVENT SERVICES</h2>
                    <ul>
                        <li>On-site Coordination & Management</li>
                        <li>Destination Management</li>
                        <li>Meeting Planning</li>
                        <li>Brand Integration</li>
                        <li>Rentals & Vendor Coordination</li>
                        <li>Floor Plan Design</li>
                        <li>Security & Staffing</li>
                        <li>Budget Management</li>
                        <li>Transportation & Parking</li>
                    </ul>
                </div>
                <div className="corporate-partition">
                    <img src={corptext} alt="Corporate Event Services" />
                </div>
                <div className="corporate-partition">
                    <h2>TYPES OF EVENTS</h2>
                    <ul>
                        <li>Meetings, Seminars, Training</li>
                        <li>Company announcements, Product launches</li>
                        <li>Milestone Celebrations</li>
                        <li>Conferences, Trade shows</li>
                        <li>Fundraisers, Auctions, Charity events</li>
                        <li>Annual parties, Employee appreciation</li>
                        <li>Industry-specific networking events</li>
                        <li>Anything Else You Need</li>
                    </ul>
                </div>
            </div>
            <div className="corporate-eventlists">
                <div className="corporate-event-content">
                    <p>Corporate conferences are pivotal events for companies looking to network, share knowledge, and drive their industry forward. These conferences provide a platform for businesses to present their latest innovations, discuss industry trends, and forge new partnerships. </p>
                    <p>Whether you are hosting a small, intimate gathering or a large-scale event, we provide comprehensive solutions that cover logistics, audiovisual equipment, catering, and more. Let us help you create an impactful conference that leaves a lasting impression on your audience.</p>
                </div>
                <div className="corporate-event-image">
                    <Card className="corporate-horizontal-card">
                        <Card.Img variant="left" src={eventimage} />
                        <Card.Body>
                            <h3>Corporate</h3>
                            <h3>Conference</h3>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <div className="corporate-eventlist2">
                <div className="corporate-event-image">
                    <Card className="corporate-horizontal-card">
                        <Card.Img variant="left" src={pressimage} />
                        <Card.Body>
                            <h3>Press</h3>
                            <h3>Meet</h3>
                        </Card.Body>
                    </Card>
                </div>
                <div className="corporate-event-content">
                    <p>We manage any kind of press meets. Our partnership with reputed allows us to target industry specific and main stream press for events.</p>
                    <p>Whether you are hosting a small, intimate gathering or a large-scale event, we provide comprehensive solutions that cover logistics, audiovisual equipment and more. Let us help you create an impactful pressmeets that leaves a lasting impression on your audience.</p>
                </div>
            </div>
            <div className="corporate-eventlists">
                <div className="corporate-event-content">
                    <p>Award Ceremonies are a way of rewarding people for the efforts put and also positioning your company to become a thought leader amongst every one in the company eco-system. </p>
                    <p>We work with different industries and companies to organize private and industry award ceremonies for our clients.</p>
                </div>
                <div className="corporate-event-image">
                    <Card className="corporate-horizontal-card">
                        <Card.Img variant="left" src={awardimg} />
                        <Card.Body>
                            <h3>Award</h3>
                            <h3>Ceremonies</h3>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <div className="corporate-Rating">
                <h2>CLIENT RATINGS</h2>
                <div className="corporate-rating-stars">
                    <span className="corporate-star filled">&#9733;</span>
                    <span className="corporate-star filled">&#9733;</span>
                    <span className="corporate-star filled">&#9733;</span>
                    <span className="corporate-star filled">&#9733;</span>
                    <span className="corporate-star ">&#9733;</span>
                </div>
                <p>4 / 5</p>
            </div>
            <div className={`corporate-call-to-action ${isBlinking ? 'corporate-blinking' : ''}`}>
                <Button variant="primary" size="lg">
                    Schedule A Call Now
                </Button>
            </div>
            <Footer />
        </div>
    )
}

export default Corporate;
