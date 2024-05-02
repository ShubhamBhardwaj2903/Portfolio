import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 
import './experienceSection.css'

gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {

    useEffect(() => {

        gsap.to('.exp-title1 span', {
          scrollTrigger: {
            trigger: '.exp-title', 
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
        <div className="exp-wrapper dark screen max-width flex flex-col absolute-center">
            <div className="exp-section width">
                <div className="exp-texts">
                    <div className="exp-title">
                        <div className="exp-title1"> <span>Through the Lens</span> </div>
                        <div className="exp-title1"> <span>of Experience</span> </div>
                    </div>
                    <div className="exp-sub-text sub-text">Trust Me It’s Hectic - But In a Good Way</div>
                </div>
                <div className="work">
                    <div className="flex work-title">
                        <div className="work-title-text">Ambli AI</div>
                        <img src="/assets/arrow.svg" alt="arrow" />
                        <div className="work-designation">Product Designer</div>
                    </div>
                    <hr className="underline" />
                    <div className="work-duration">December 2023 - Feb 2024</div>
                    <div className="work-description">
                        Led a team of 36+ ambassadors, overseeing strategic planning, campaign execution, and user engagement initiatives.<br />
                        Successfully managed campaigns involving more than 1000 users, strategically maximizing brand reach and impact.<br />
                        Demonstrated strong communication and social skills, fostering seamless task execution.
                    </div>
                    <a href="https://ambli.ai/" target="_blank" rel="noopener noreferrer">
                        <button className="button">Visit Website</button>
                    </a>
                </div>
                <div className="work max-width">
                    <div className="flex work-title">
                        <div className="work-title-text">Vovance</div>
                        <img src="/assets/arrow.svg" alt="arrow" />
                        <div className="work-designation">UI/UX Designer</div>
                    </div>
                    <hr className="underline" />
                    <div className="work-duration">August 2023 - November 2023</div>
                    <div className="work-description">
                        Led a team of 36+ ambassadors, overseeing strategic planning, campaign execution, and user engagement initiatives.<br />
                        Successfully managed campaigns involving more than 1000 users, strategically maximizing brand reach and impact.<br />
                        Demonstrated strong communication and social skills, fostering seamless task execution.
                    </div>
                    <a href="https://www.vovance.com/" target="_blank" rel="noopener noreferrer">
                        <button className="button">Visit Website</button>
                    </a>
                </div>
                <div className="work max-width">
                    <div className="flex work-title">
                        <div className="work-title-text">Viral Fission</div>
                        <img src="/assets/arrow.svg" alt="arrow" />
                        <div className="work-designation">Team Leader</div>
                    </div>
                    <hr className="underline" />
                    <div className="work-duration">Nov 2022 - July 2023</div>
                    <div className="work-description">
                        Led a team of 36+ ambassadors, overseeing strategic planning, campaign execution, and user engagement initiatives.<br />
                        Successfully managed campaigns involving more than 1000 users, strategically maximizing brand reach and impact.<br />
                        Demonstrated strong communication and social skills, fostering seamless task execution.
                    </div>
                    <a href="https://www.vovance.com/" target="_blank" rel="noopener noreferrer">
                        <button className="button">Download LOR</button>
                    </a>
                </div>
                <div className="work max-width">
                    <div className="flex work-title">
                        <div className="work-title-text">IEEE & GRSS</div>
                        <img src="/assets/arrow.svg" alt="arrow" />
                        <div className="work-designation">Technical Officer</div>
                    </div>
                    <hr className="underline" />
                    <div className="work-duration">June 2023 - Present</div>
                    <div className="work-description">
                        Led a team of 36+ ambassadors, overseeing strategic planning, campaign execution, and user engagement initiatives.<br />
                        Successfully managed campaigns involving more than 1000 users, strategically maximizing brand reach and impact.<br />
                        Demonstrated strong communication and social skills, fostering seamless task execution.
                    </div>
                    <img className="ieee-grss-img" src="assets/ieee-grss.png" />
                    <a href="https://www.vovance.com/" target="_blank" rel="noopener noreferrer">
                        <button className="button">View Event</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ExperienceSection