import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './introSection.css'

gsap.registerPlugin(ScrollTrigger);

const IntroSection = () => {

    useEffect(() => {

        gsap.to('.intro-title1 span', {
            scrollTrigger: {
                trigger: '.intro-title',
                start: 'top 50%',
                end: '+=400',
                scrub: true,
            },
            translateY: '0%',
            duration: 5,
            stagger: 0.5,
            ease: 'power3.out',
        });

        // gsap.from('.image', {
        //     scrollTrigger: {
        //       trigger: '.intro-title', 
        //       start: 'top 70%', 
        //       end: '+=400', 
        //       scrub: true, 
        //     },
        //     y: 100, duration: 6, stagger: 0.8,
        //   });

    }, []);

    return (
        <div className="intro-wrapper screen max-width flex flex-col absolute-center">
            <div className="intro-section width flex">
                <div className="intro-texts">
                    <div className="intro-title">
                        <div className="intro-title1"> <span>The Intro</span> </div>
                        <div className="intro-title1"> <span>Might </span> </div>
                        <div className="intro-title1"> <span>Be Boring</span> </div>
                    </div>
                    <div className="intro-sub-text sub-text">But Definitely The Person Isn’t</div>
                    <div className="intro-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                </div>
                <img className="image" src="assets/image.svg" alt="Shubham Bhardwaj" />
            </div>
        </div>
    )
}

export default IntroSection