import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../Assets/Css/Navbar.css"; 

const Navbar = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <div className="nav-navbar">
            <Link to="/about" className="nav-navbar-link">
                <h2>ABOUT</h2>
            </Link>
            <div 
                className="nav-navbar-item" 
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
                style={{ position: 'relative' }} /* Ensure parent is positioned relative */
            >
                <h2 className="nav-services">SERVICES</h2>
                {showDropdown && (
                    <div className="nav-dropdown">
                        <Link to="/corporate" className="nav-dropdown-item">
                            <p>Corporate Events</p>
                        </Link>
                        <Link to="/wedding" className="nav-dropdown-item">
                            <p>Weddings</p>
                        </Link>
                        <Link to="/socialgathering" className="nav-dropdown-item">
                            <p>Social Gatherings</p>
                        </Link>
                    </div>
                )}
            </div>
            <h1>MOMENTOUS</h1>
            <Link to="/letstalk" className="nav-navbar-link">
                <h2>LET'S TALK</h2>
            </Link>
            <Link to="/register" className="nav-navbar-link">
                <h2>GET STARTED</h2>
            </Link>
        </div>
    );
}

export default Navbar;
