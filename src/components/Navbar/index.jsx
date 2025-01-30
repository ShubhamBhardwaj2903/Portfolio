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
                <a href="/assets/Shubham-Bhardwaj-Resume.pdf" download="Shubham_Bhardwaj_Product_Designer_Resume.pdf">
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
                                <a href="#services" onClick={toggleNavbar}>Services</a>
                            </div>
                            <div className="nav-link">
                                <a href="#intro" onClick={toggleNavbar}>About</a>
                            </div>
                            <div className="nav-link">
                                <a href="#projects" onClick={toggleNavbar}>Projects</a>
                            </div>
                            <div className="nav-link">
                                <a href="#experience" onClick={toggleNavbar}>Experience</a>
                            </div>
                            <div className="nav-link">
                                <a href="#contact" onClick={toggleNavbar}>Contact</a>
                            </div>
                        </div>

                    </div>
                    <div className="nav-footer">
                        <div className="links">
                            <Link to="https://www.linkedin.com/in/shubham-bhardwaj-designer/" target="_blank">
                                <img src="assets/linkedin.svg" alt="LinkedIn" />
                            </Link>
                            <Link to="https://join.skype.com/invite/ypX10Y4KidFH" target="_blank">
                                <img src="assets/skype.svg" alt="Skype" />
                            </Link>
                            <Link to="https://www.instagram.com/shubhambhardwaj257" target="_blank">
                                <img src="assets/instagram.svg" alt="Instagram" />
                            </Link>
                        </div>
                        <div className="email">
                            <p>bhardwajsb03@gmail.com</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
