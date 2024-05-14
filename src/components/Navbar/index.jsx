import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="container">
            <div className={`navbar ${isOpen ? 'open' : ''}`}>
                <div className={`site-logo ${isOpen ? 'white' : ''}`} onClick={toggleNavbar}>Shubham</div>
                <div className="menu-toggle-btn" onClick={toggleNavbar}>
                    <img src={isOpen ? "/assets/cross.png" : "/assets/hamburger.png"} alt="Menu" />
                </div>
            </div>

            <div className="resume-btn">
                <a href="/assets/Shubham-Bhardwaj-Resume.pdf" download="resume.pdf">
                    <img src='assets/resume.png' alt='Resume' />
                </a>
            </div>


            {isOpen && (
                <div className="nav-container">
                    <div className="nav">
                        {/* <div className="flex flex-col">
                            <div className="nav-logo">Shubham</div>
                            <div className="nav-socials">
                                <a href="#">LinkedIn</a>
                                <a href="#">Skype</a>
                                <a href="#">Instagram</a>
                            </div>
                        </div> */}
                        <div className="col">
                            <div className="nav-link">
                                <Link to="/services">Services</Link>
                            </div>
                            <div className="nav-link">
                                <Link to="/intro">About</Link>
                            </div>
                            <div className="nav-link">
                                <Link to="/projects">Projects</Link>
                            </div>
                            <div className="nav-link">
                                <Link to ="/experience">Experience </Link>
                            </div>
                            <div className="nav-link">
                                <Link to="/contact">Contact</Link>
                            </div>
                        </div>
                    </div>
                    <div className="nav-footer">
                        <div className="links">
                            <a href="#">LinkedIn</a>
                            <a href="#">Skype</a>
                            <a href="#">Instagram</a>
                        </div>
                        <div className="contact">
                            <a href="#">bhardwajsb03@gmai.com</a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
