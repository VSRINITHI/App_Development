import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa'; // Menu icon
import { useNavigate, Link } from 'react-router-dom'; // Import useNavigate and Link hooks
import '../../Assets/Css/Sidebar.css';

const Sidebar = () => {
    const [sidebar, setSidebar] = useState(true); // Set initial state to true
    const navigate = useNavigate(); // Initialize useNavigate

    const showSidebar = () => setSidebar(!sidebar);

    const handleLogout = () => {
        const confirmLogout = window.confirm('Are you sure you want to logout?'); // Show confirmation dialog
        if (confirmLogout) {
            // Perform any necessary logout operations here
            navigate('/register'); // Navigate to the register page if confirmed
        }
    };

    return (
        <>
            <div className="side-navbar">
                <FaBars className="side-menu-bars" onClick={showSidebar} />
                <Link to="/dashboard" className="side-dashboard-link">
                    <h2>Dashboard</h2>
                </Link>
                <h1>Momentous</h1>
                <div className="side-logout" onClick={handleLogout}>
                    <h3>Logout</h3>
                </div>
            </div>
            <nav className={sidebar ? 'side-nav-menu active' : 'side-nav-menu'}>
                <ul className="side-nav-menu-items" onClick={showSidebar}>
                    <li className="side-navbar-toggle">
                        <span className="side-menu-bars">×</span>
                    </li>
                    <li className="side-nav-text">
                        <Link to="/event">Events</Link>
                    </li>
                    <li className="side-nav-text">
                        <Link to="/bookings">Bookings</Link>
                    </li>
                    <li className="side-nav-text">
                        <Link to="/user">Users</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Sidebar;
