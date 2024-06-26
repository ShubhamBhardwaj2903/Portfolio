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
                start: 'top 70%',
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
                    <div className="intro-desc">I'm a product designer and front-end developer 
                    based in Mumbai. I like taking complex ideas and turning them into designs that are 
                    intuitive and user-friendly. 

                    I've been fortunate to work on a wide range of projects for different clients, delivering over 
                    20 solutions that really made a difference for users and businesses. I'm all about 
                    learning and teamwork, which has been key to launching successful products and leaving 
                    clients happy with the results.
                    </div>
                </div>
                <img className="image" src="assets/image.svg" alt="Shubham Bhardwaj" />
            </div>
        </div>
    )
}
// A Product Designer and Front-end developer from Mumbai with 7 months experience, 
// studied electronics and telecommunication engineering from KJSIT.
export default IntroSection