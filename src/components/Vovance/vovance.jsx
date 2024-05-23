import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Vovance = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {

        gsap.to('.design-section-title', { y: 100, duration: 1, ease: 'power3.inOut', });
        gsap.to('.design_hero_image', { scale: 0.85, duration: 1, ease: 'power3.inOut', });
    }, []);

    return (
        <div className="design-section-wrapper screen max-width" style={{ padding: 0 }}>
            <Navbar />
            <div className="design-section flex absolute-center" style={{ background: 'linear-gradient(to bottom, #0C1357, #26A0DA)' }}>
                <div className="design-section-title">
                    <div className="design-num">03</div>
                    <div className="design-title">VOVANCE</div>
                    <div className="design-subtitle">"Redesign website for Vovance"</div>
                </div>
                <div className='design_hero_image'>
                    <img src='assets/vovance_hero_section.png' alt="projectImage" />
                </div>
            </div>

            <div className="width ">
                <div className="design-text1">Case Study: Redesigning Vovance’s Website</div>
                <div className="design-text2">Hey there! I’m excited to share a project I recently
                    worked on that I’m particularly proud of—redesigning the website for Vovance. Let
                    me walk you through the journey, from the initial evaluation to the final polished product.</div>
                <div className="design-text1">The Challenge</div>
                <div className="design-text2">
                    When I first took a look at Vovance’s homepage, I noticed a few things were missing.
                    The navigation wasn’t as intuitive as it could be, the content was a bit scattered,
                    and overall, the design didn’t quite capture the essence of what Vovance stands for.
                    My goal was clear: to create a homepage that was visually appealing, easy to navigate,
                    and effectively communicated Vovance’s services and value proposition. Additionally,
                    the site lacked responsiveness on mobile devices, which was crucial given the increasing
                    number of users accessing the site via smartphones and tablets. <br/><br/>
                    <div style={{lineHeight: 2}}>
                        1. Complex Navigation: The existing navigation structure was cluttered, making it difficult
                        for users to find the information they needed quickly. <br />
                        2. Disjointed Content: The content across various pages didn’t have a cohesive flow,
                        and important information was buried too deep within the site. <br />
                        3. Outdated Design: The visual design was not aligned with modern web design trends and didn’t
                        reflect Vovance’s innovative spirit. <br />
                        4. Poor Mobile Experience: The website wasn’t fully optimized for mobile devices, leading to a
                        subpar user experience on smartphones and tablets. <br />
                        5. Lack of User Engagement: There were few interactive elements to engage visitors and encourage
                        them to explore more about Vovance’s services.
                    </div>

                </div>

                <div className="design-text1">Design Process</div>
                <div className="process flex absolute-center">
                    <div className="process-num">1</div>
                    <div className="process-texts">
                        <div className="process-text1">Research and Discovery</div>
                        <div className="process-text2">
                            Conducted thorough research to understand user needs, market trends, and competitors. Gathered insights through user interviews, surveys, and data analysis
                        </div>
                    </div>
                </div>
                <div className="process flex absolute-center">
                    <div className="process-num">2</div>
                    <div className="process-texts">
                        <div className="process-text1">Defined Goals and Requirements</div>
                        <div className="process-text2">
                            Clearly defined project goals, objectives, and requirements based on research findings. Established success metrics to measure the effectiveness of the design solution.
                        </div>
                    </div>
                </div>
                <div className="process flex absolute-center">
                    <div className="process-num">3</div>
                    <div className="process-texts">
                        <div className="process-text1">Ideated and Conceptualized</div>
                        <div className="process-text2">
                            Generated ideas and concepts through brainstorming sessions, sketching, and wireframing. Explored different design approaches to address user needs and achieve project goals.
                        </div>
                    </div>
                </div>
                <div className="process flex absolute-center">
                    <div className="process-num">4</div>
                    <div className="process-texts">
                        <div className="process-text1">Prototypes</div>
                        <div className="process-text2">Created interactive prototypes to visualize and test design concepts. Used Figma to iterate on design ideas and gathered feedback from stakeholders and users.
                        </div>
                    </div>
                </div>
                <div className="process flex absolute-center">
                    <div className="process-num">5</div>
                    <div className="process-texts">
                        <div className="process-text1">Conducted User Testing and Gathered Feedback</div>
                        <div className="process-text2">
                            Conducted usability testing sessions with target users to evaluate the effectiveness and usability of the design. Gathered feedback and insights to identify areas for improvement.
                        </div>
                    </div>
                </div>
                <div className="process flex absolute-center">
                    <div className="process-num">6</div>
                    <div className="process-texts">
                        <div className="process-text1">Iterated on Design</div>
                        <div className="process-text2">
                            Iterated on the design based on user feedback and testing results. Refined and enhanced the design to address any usability issues or challenges identified during testing.
                        </div>
                    </div>
                </div>
                <div className="process flex absolute-center">
                    <div className="process-num">7</div>
                    <div className="process-texts">
                        <div className="process-text1">Developed Visual Design and Branding</div>
                        <div className="process-text2">
                            Developed visual designs that aligned with Ambli's brand identity and guidelines. Used typography, color schemes, and imagery to create visually appealing and cohesive designs.
                        </div>
                    </div>
                </div>
                <div className="process flex absolute-center">
                    <div className="process-num">8</div>
                    <div className="process-texts">
                        <div className="process-text1">Collaborated on Development and Implementation</div>
                        <div className="process-text2">
                            Collaborated with developers to translate design concepts into functional prototypes or production-ready solutions. Ensured seamless integration of design elements into the final product.
                        </div>
                    </div>
                </div>
                <div className="process flex absolute-center">
                    <div className="process-num">9</div>
                    <div className="process-texts">
                        <div className="process-text1">Launched and Evaluated Post-launch</div>
                        <div className="process-text2">
                            Launched the design solution and monitored its performance post-launch. Gathered user feedback and analytics data to assess the impact of the design on user experience and business objectives.
                        </div>
                    </div>
                </div>
            </div>
            <div className='design-images flex flex-col'>
                <img src="assets/ambli1.png" alt='LandingPage' />
                <img src="assets/ambli2.png" alt='LandingPage' />
                <img src="assets/ambli3.png" alt='LandingPage' />
                <img src="assets/ambli4.png" alt='LandingPage' />
                <img src="assets/ambli5.png" alt='LandingPage' />
                <img src="assets/ambli6.png" alt='LandingPage' />
            </div>

            <div class="project-navigation">
                <Link to="/carzzy" className="button1">Previous Project</Link>
                <Link to="https://cred-clone-shubham-bhardwaj.onrender.com" target="_blank" className="button1">Next Project</Link>
            </div>

            <Footer />

        </div>

    )
}

export default Vovance