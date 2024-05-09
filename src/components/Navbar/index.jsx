import React, { useState } from 'react';
import './navbar.css'; // Import CSS file for styling

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        // <nav className={`navbar ${isOpen ? 'open' : ''}`}>
        //   <button className="navbar-button" onClick={toggleNavbar}>
        //     <img src="/assets/hamburger.svg" alt="Menu Icon" className="hamburger-icon" />
        //   </button>
        //   <ul className="navbar-menu">
        //     <li><a href="#home">Home</a></li>
        //     <li><a href="#about">About</a></li>
        //     <li><a href="#services">Services</a></li>
        //     <li><a href="#portfolio">Portfolio</a></li>
        //     <li><a href="#contact">Contact</a></li>
        //   </ul>
        // </nav>
        <>
            <div className="Container">
                <div className="navbar">
                    <div className="site-logo">Plastic</div>
                    <div className="menu-toggle">
                        <div className="menu-toggle-btn">
                        <span></span>
                        </div>
                    </div>
                </div>

                <div className="nav-container">
                    <div className="nav">
                        <div className="col flex">
                            <div className="nav-logo">
                                
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Navbar;
