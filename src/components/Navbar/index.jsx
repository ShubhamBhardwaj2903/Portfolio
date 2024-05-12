import React, { useState } from 'react';
import './navbar.css';
import { gsap } from 'gsap/gsap-core';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
        animateNavbar(isOpen);
    };

    const animateNavbar = (isOpen) => {
        const tl = gsap.timeline();
        const navContainer = document.querySelector('.nav-container');

        if (isOpen) {
            tl.to(navContainer, { duration: 0.3, autoAlpha: 0, ease: 'power4.inOut' });
        } else {
            tl.to(navContainer, { duration: 0.3, autoAlpha: 1, ease: 'power4.inOut' });
        }
    };

    const navbarStyle = {
        backgroundColor: isOpen ? '#000' : '#fff',
        color: isOpen ? '#fff' : '#000'
    };

    return (
        <div className="container">
            <div className={`navbar ${isOpen ? 'open' : ''}`} style={navbarStyle}>

                <div className={`site-logo ${isOpen ? 'white' : ''}`} >Shubham</div>
                <div className="menu-toggle">
                <div className="menu-toggle-btn" onClick={toggleNavbar}>
                        <img src={isOpen ? "/assets/cross.png" : "/assets/hamburger.png"} alt="Menu" />
                    </div>
                </div>
            </div>

            <div className={`nav-container ${isOpen ? 'active' : ''}`}>
                    <div className="nav">
                        <div className="col flex">
                            <div className="nav-logo">c/</div>
                            <div className="nav-socials">
                                <a href="#">LinkedIn</a>
                                <a href="#">LinkedIn</a>
                                <a href="#">LinkedIn</a>
                                <a href="#">LinkedIn</a>
                                <a href="#">LinkedIn</a>
                            </div>
                        </div>
                        <div className="col">
                            <div className="nav-link">
                                <a href="#">Work</a>
                            </div>
                            <div className="nav-link">
                                <a href="#">Services</a>
                            </div>
                            <div className="nav-link">
                                <a href="#">About</a>
                            </div>
                            <div className="nav-link">
                                <a href="#">Manifesto</a>
                            </div>
                            <div className="nav-link">
                                <a href="#">Contact</a>
                            </div>
                        </div>
                    </div>
                    <div className="nav-footer">
                        <div className="links">
                            <a href="#">Privacy Policy</a>
                            <a href="#">Cookie Policy</a>
                            <a href="#">Terms & Condition</a>
                        </div>
                        <div className="contact">
                            <a href="#">bhardwajsb03@gmai.com</a>
                        </div>
                    </div>
                </div>
            
        </div>
    );
};

export default Navbar;
