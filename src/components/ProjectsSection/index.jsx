import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './projectSection.css'
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const ProjectSection = () => {

    useEffect(() => {

        gsap.to('.project-title1 span', {
            scrollTrigger: {
                trigger: '.project-title',
                start: 'top 50%',
                end: '+=400',
                scrub: true,
            },
            translateY: '0%',
            duration: 1,
            stagger: 0.2,
            ease: 'power3.out',
        });
    }, []);

    return (
        <div className="project-wrapper dark screen max-width flex flex-col absolute-center">
            <div className="project-section width pad">
                <div className="project-texts">
                    <div className="project-title">
                        <div className="project-title1"> <span>In a World of Pixels,</span> </div>
                        <div className="project-title1"> <span>I'm Painting</span> </div>
                        <div className="project-title1"> <span>Masterpieces</span> </div>
                    </div>

                    <div className="project-sub-text sub-text">Innovative Designs, Seamless Experiences</div>
                </div>
                <div className="projects flex">
                    <div className="project project1">
                        <div className="num">01</div>
                        <div className="title">CARZZY</div>
                        <div className="subtext">"Discover, Book, and Drive
                            Your Car Rental Made Easy!"</div>
                        <img className="projectImage" src='assets/image 79.png' alt='Project_Image'></img>
                        <div className="cta-text flex absolute-center">
                            <p>Witness<br/> the Magic</p>
                            <img src="assets/nextButton.svg" alt='next_icon'></img>
                        </div>
                    </div>
                    <div className="project project2">
                        <div className="num">02</div>
                        <div className="title">AMBLI AI</div>
                        <div className="subtext">“An AI-powered Search Platform”</div>
                        <img className="projectImage" src='assets/image 80.png' alt='Project_Image'></img>
                        <div className="cta-text flex absolute-center">
                            <p>Witness<br/> the Magic</p>
                            <img src="assets/nextButton.svg" alt='next_icon'></img>
                        </div>
                    </div>
                    <div className="project project3">
                        <div className="num">03</div>
                        <div className="title">FASHIONISTA</div>
                        <div className="subtext">“Find The Best Fashion Style for you”</div>
                        <img className="projectImage" src='assets/image 79.png' alt='Project_Image'></img>
                        <div className="cta-text flex absolute-center">
                            <p>Witness<br/> the Magic</p>
                            <img src="assets/nextButton.svg" alt='next_icon'></img>
                        </div>
                    </div>
                    <div className="project">
                        <div className="num">01</div>
                        <div className="title">CARZZY</div>
                        <div className="subtext">"Discover, Book, and Drive
                            Your Car Rental Made Easy!</div>
                        <img className="projectImage" src='assets/image 79.png' alt='Project_Image'></img>
                        <div className="cta-text flex absolute-center">
                            <p>Witness<br/> the Magic</p>
                            <img src="assets/nextButton.svg" alt='next_icon'></img>
                        </div>
                    </div>
                    <div className="project">
                        <div className="num">01</div>
                        <div className="title">CARZZY</div>
                        <div className="subtext">"Discover, Book, and Drive
                            Your Car Rental Made Easy!</div>
                        <img className="projectImage" src='assets/image 79.png' alt='Project_Image'></img>
                        <div className="cta-text flex absolute-center">
                            <p>Witness<br/> the Magic</p>
                            <img src="assets/nextButton.svg" alt='next_icon'></img>
                        </div>
                    </div>
                    <div className="project">
                        <div className="num">01</div>
                        <div className="title">CARZZY</div>
                        <div className="subtext">"Discover, Book, and Drive
                            Your Car Rental Made Easy!</div>
                        <img className="projectImage" src='assets/image 79.png' alt='Project_Image'></img>
                        <div className="cta-text flex absolute-center">
                            <p>Witness<br/> the Magic</p>
                            <img src="assets/nextButton.svg" alt='next_icon'></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectSection