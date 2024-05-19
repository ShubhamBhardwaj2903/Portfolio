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
                start: 'top 70%',
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
            <div className="exp-section width pad">
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
                        <ul>
                            <li>Collaborated closely with cross-functional teams, including developers, marketers, and product managers, to translate business requirements into intuitive and visually appealing designs.</li>
                            <li>Conducted user research, usability testing, and feedback sessions to gather insights and iterate on design solutions for continuous improvement.</li>
                            <li>Spearheaded the design and development of Ambli's website from inception to completion, demonstrating strong leadership and project management skills.</li>
                            <li>Created user-centric design solutions that enhanced the overall user experience and usability of the website.</li>
                        </ul>
                    </div>

                    <a href="https://ambli.ai/" target="_blank" rel="noopener noreferrer">
                        <button className="button">Download LOA</button>
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
                        <ul>
                            <li>As the Design Lead at Vovance, I spearheaded numerous projects, overseeing user research and testing phases to ensure optimal design outcomes.</li>
                            <li>Successfully managed and executed multiple UI/UX design projects for diverse clients, ensuring timely completion and delivery of high-quality solutions.</li>
                            <li>Collaborated closely with clients to understand their requirements, preferences, and goals, translating them into effective design solutions.</li>
                        </ul>
                    </div>

                    <a href="/assets/VOVANCE_INTERNSHIP COMPLETION LETTER_SHUBHAM BHARDWAJ.pdf" download="Shubham LOA.pdf">
                        <button className="button">Download LOA</button>
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
                        <ul>
                            <li>Led a team of 36+ ambassadors, overseeing strategic planning, campaign execution, and user engagement initiatives.</li>
                            <li>Successfully managed campaigns involving more than 1000 users, strategically maximizing brand reach and impact.</li>
                            <li>Demonstrated strong communication and social skills, fostering seamless task execution.</li>
                        </ul>
                    </div>
                    <div style={{ margin: 0, padding: 0 }}>
                        <a href="https://www.vovance.com/" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", margin: 0, padding: 0, textDecoration: "none" }}>
                            <button className="button">Download LOA</button>
                        </a>
                    </div>

                </div>
                <div className="work max-width">
                    <div className="flex work-title">
                        <div className="work-title-text">IEEE & GRSS</div>
                        <img src="/assets/arrow.svg" alt="arrow" />
                        <div className="work-designation">Chief Technical Officer</div>
                    </div>
                    <hr className="underline" />
                    <div className="work-duration">June 2023 - Present</div>
                    <div className="work-description">
                        <ul>
                            <li>Demonstrated exceptional leadership, effective communication, and strategic planning skills, resulting in the successful accomplishment of committee missions and goals.</li>
                            <li>Notably, contributed to the success of the Renaissance Tech Fest at KJSIT in 2023-2024, where approximately 1000 students participated in various tech events.</li>
                            <li>Played a pivotal role in organizing and speaking at STEM events, impacting over 250 young minds and fostering innovation within the community.</li>
                            <li>Initiated and facilitated the smooth establishment of the GRSS chapter at the college, showcasing proactive leadership, dedication, and strong coordination abilities.</li>
                        </ul>
                    </div>
                    <a href="https://www.vovance.com/" target="_blank" rel="noopener noreferrer">
                        <button className="button">View Event</button>
                    </a>
                    <img className="ieee-grss-img" src="assets/ieee-grss.png" />

                </div>
            </div>
        </div>
    )
}

export default ExperienceSection