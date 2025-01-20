import logo from '../images/wti_logo_circular.png';
import React, { useState } from 'react';
import './NavBar.css';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
    // State to toggle the menu visibility
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation(); // Get the current path
    const [activeTab, setActiveTab] = useState(location.pathname);

    // Toggle function to open/close the menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = (path) => {
        setActiveTab(path); // Set active tab to the clicked path
        toggleMenu(); // Close menu if required
    };

    const navigate = useNavigate();

    const redirect = () => {
        setActiveTab('/');
        navigate('/');
    };

    return (
        <header>
            <img src={logo} onClick={redirect} className="logo" alt="logo" />
            <div>
                <h1>Woodgreen Training Institute</h1>
            </div>

            <nav>
                <button className="hamburger" aria-label="Toggle Menu" onClick={toggleMenu}>
                    ☰
                </button>
                <ul className={isOpen ? 'show' : ''}>
                    <li>
                        <Link to="/" onClick={() => handleLinkClick('/')}
                            className={`nav-link ${activeTab === '/' ? 'active' : ''}`}>HOME</Link>
                    </li>
                    <li>
                        <Link to="/courses" onClick={() => handleLinkClick('/courses')}
                            className={`nav-link ${activeTab === '/courses' ? 'active' : ''}`} >COURSES</Link>
                    </li>
                    <li>
                        <Link to="/about" onClick={() => handleLinkClick('/about')}
                            className={`nav-link ${activeTab === '/about' ? 'active' : ''}`}>ABOUT</Link>
                    </li>
                    <li>
                        <Link to="/contact" onClick={() => handleLinkClick('/contact')}
                            className={`nav-link ${activeTab === '/contact' ? 'active' : ''}`}>CONTACT</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
