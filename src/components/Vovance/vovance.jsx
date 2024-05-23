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

            <div className="width design-details">
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
                    number of users accessing the site via smartphones and tablets. <br /><br />
                    <div style={{ lineHeight: 2 }}>
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

                <div className="design-text1">The Plan</div>
                <div className="design-text2">First things first, I started by evaluating the existing homepage. I asked myself a few key questions:
                    <ul>
                        <li>Is the navigation clear and user-friendly?</li>
                        <li>Does the content make sense and provide value?</li>
                        <li>Is the design visually engaging and reflective of the brand? </li>
                    </ul>
                </div>

                <div className="design-text1">Goals</div>
                <div className="design-text2">
                    <ul>
                        <li>Simplify Navigation: Create an intuitive and user-friendly navigation structure.</li>
                        <li>Enhance Content Flow: Organize content in a way that tells a cohesive story and highlights Vovance’s key services and value proposition.</li>
                        <li>Modernize Design: Develop a visually appealing design that reflects Vovance’s brand identity and appeals to a modern audience.</li>
                        <li>Optimize for Mobile: Ensure the website is fully responsive, providing an excellent user experience across all devices.</li>
                        <li>Increase Engagement: Incorporate interactive elements and clear calls-to-action to boost user engagement and conversions.</li>
                    </ul>
                </div>

                <div className="design-text1">The Redesign</div>
                <div className="design-text2">
                    <ul>
                        <li>Clear Navigation: One of the primary issues with the original design was the navigation. I restructured the navigation bar to be more intuitive, ensuring that users could easily find what they were looking for without feeling overwhelmed. I grouped similar services and information together, making the site more coherent.</li>
                        <li>Engaging Content: Next up was the content. I worked closely with the content team to rewrite and reorganize the content across the entire website. We highlighted Vovance’s key services and unique value proposition right at the top, ensuring visitors understood what Vovance was all about within seconds of landing on the site.</li>
                        <li>Visual Appeal: For the design, I wanted to keep it clean but visually engaging. I incorporated high-quality images and a modern color palette that aligned with Vovance’s brand identity. I also made sure the design was responsive, providing an excellent user experience across all devices.</li>
                        <li>Interactive Elements: To boost engagement, I added interactive elements such as sliders, animated transitions, and clear calls-to-action. These elements not only made the site more dynamic but also guided users towards key actions like contacting Vovance or exploring services.</li>
                        <li>Mobile Optimization: Ensuring the website looked and functioned perfectly on mobile devices was a top priority. I used a mobile-first approach, optimizing images, simplifying navigation, and ensuring all interactive elements worked seamlessly on smaller screens.</li>
                    </ul>
                </div>

            </div>
            <div className='design-images flex flex-col'>
                <img src="assets/vovance1.png" alt='LandingPage' />
                <img src="assets/vovance2.png" alt='LandingPage' />
                <img src="assets/vovance3.png" alt='LandingPage' />
                <img src="assets/vovance4.png" alt='LandingPage' />
                <img src="assets/vovance5.png" alt='LandingPage' />
                {/* <img src="assets/vovance6.png" alt='LandingPage' /> */}
            </div>

            <div class="project-navigation">
                <Link to="/carzzy" className="button1">Previous Project</Link>
                <Link to="/ambli" className="button1">Next Project</Link>
            </div>

            <Footer />

        </div>

    )
}

export default Vovance