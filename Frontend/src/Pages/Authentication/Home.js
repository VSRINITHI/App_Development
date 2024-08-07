import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../Assets/Css/Home.css';
import Footer from "../../Components/Ui/Footer"; 
import Navbar from "../../Components/Ui/Navbar";
import img1 from '../../Assets/Images/confrence1.jpeg';
import img2 from '../../Assets/Images/confrence2.jpeg';
import img3 from '../../Assets/Images/conference3.jpeg';
import img4 from '../../Assets/Images/wedding1.jpg';
import img5 from '../../Assets/Images/wedding2.jpg';
import img6 from '../../Assets/Images/wedding3.jpg';
import img7 from '../../Assets/Images/corporate1.jpg';
import img8 from '../../Assets/Images/corporate2.jpg';
import img9 from '../../Assets/Images/corporate3.jpg';
import img10 from '../../Assets/Images/party1.jpeg';
import img11 from '../../Assets/Images/party2.jpg';
import img12 from '../../Assets/Images/party3.jpg';

// Define your slides
const cardSlides = [
    [img1, img2, img3],
    [img4, img5, img6],
    [img7, img8, img9],
    [img10, img11, img12],
];

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
};

const Home = () => {
    const words = ["Industries.", "Corporates.", "Conferences.", "Occasions."];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalValid = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 5000);

        return () => clearInterval(intervalValid);
    }, []);

    return (
        <div className="home-body">
            <Navbar />
            <br/><br/><br/>
            <div className="home-part1">
                <i>Powerful, Enterprise-Grade Event</i>
                <br />
                <i className="home-line2">Operating System for </i>
                <div className="home-slidingwords">
                    <p>{words[index]}</p>
                </div>
            </div>
            <div className="home-part2">
                {cardSlides.map((slides, index) => (
                    <div key={index} className="home-card">
                        <Slider {...settings}>
                            {slides.map((slide, slideIndex) => (
                                <img src={slide} alt={`Card ${index + 1} Slide ${slideIndex + 1}`} key={slideIndex} />
                            ))}
                        </Slider>
                    </div>
                ))}
            </div>
            <div className="home-part3">
                <h2>UNPARALLELED, STRESS-FREE</h2>
                <h1>EVENT PLANNING & DESIGN</h1>
                <h3>The MOMENTOUS experience is unlike any other. Our full-service event planning and design team will</h3>
                <h3>guide you every step of the way, ensuring a stress-free experience from start to finish.</h3>
                <h3>With us, customization is guaranteed. You'll be paired with an Infinity Event Team who will</h3>
                <h3>work with you to create a unique experience that reflects your brand and vision. We will team up with some of the best vendors</h3>
                <h3>and take care of all the details like meeting scheduling, delivery dates, payments, day-of</h3>
                <h3>setup, and more.</h3>
            </div>
            <div className="home-part4">
                <div className="home-container">
                    <div className="home-section1 home-section">
                        <div className="home-section-title">WANT TO CONTACT US?</div>
                        <div className="home-section-subtitle">SEND US A MESSAGE</div>
                        <p>
                            Whether you are planning a wedding, a corporate meeting or a social gathering, the diverse scope of Infinity Hospitality Group allows for the creation of unique events for all occasions.
                        </p>
                        <Link to="/letstalk" className="nav-dropdown-item">

                        <div className="home-arrow-right" />
                        </Link>
                    </div>
                    <div className="home-section2 home-section">
                        <div className="home-section-title">STAY IN THE LOOP</div>
                        <div className="home-section-subtitle">SIGN UP FOR OUR NEWSLETTER</div>
                        <p>
                            Sign up for our Infinity Newsletter to receive wedding inspiration, helpful tips and tricks, see the hottest trends in Nashville weddings, and more delivered straight to your inbox!
                        </p>
                        <Link to="/register" className="nav-dropdown-item">
                        <div className="home-arrow-right" />
                        </Link>
                    </div>
                </div>
            </div>            
            <Footer />
        </div>
    );
}

export default Home;
