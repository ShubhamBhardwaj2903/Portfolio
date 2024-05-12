import { useEffect } from 'react';
import './heroSection.css'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {

    useEffect(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: '.scroller',
                start: 'top 100%',
                end: 'top 0%',
                scrub: true,
                // markers: true
            },
        })
            // .to('.rectangle', { opacity: 0, duration: 1, ease: 'power2.inOut' })
            // .to('.hero-sub-section1', { y: -100, duration: 1, ease: 'power2.inOut' }, '-=1')
            // .to('.hero-sub-section2', { y: -50, duration: 1, ease: 'power2.inOut' }, '-=1')
            // .to('.hero-sub-section3', { y: -400, duration: 1, ease: 'power2.inOut' }, '-=1')
            // .to('.hero-section', { y: 0, duration: 1, scale: 0.7, rotation: -10, ease: 'power2.inOut' }, '-=1')
            .to('.rectangle', { y: -100, opacity: 0.3, duration: 1, ease: 'power2.inOut' }, '-=1')
            .to('.hero-title span', {
                translateY: '0%', duration: 0.5, stagger: 0.4, ease: 'power3.out',
            });

            const tl = gsap.timeline({ onComplete: reverseAnimation });

        // Animation for moving each sub-section in different directions

        tl.to(".hero-sub-section1", { y: "-70%", duration: 8 });
        tl.to(".hero-sub-section2", { y: "50%", duration: 8, delay: -8 });
        tl.to(".hero-sub-section3", { y: "-30%", duration: 8, delay: -8 });
        tl.to(".hero-sub-section4", { y: "50%", duration: 8, delay: -8 });

        // tl.to(".hero-sub-section1", { y: "30%", duration: 8 });
        // tl.to(".hero-sub-section2", { y: "-100%", duration: 8, delay: -8 });
        // tl.to(".hero-sub-section3", { y: "80%", duration: 8, delay: -8 });
        // tl.to(".hero-sub-section4", { y: "-50%", duration: 8, delay: -8 });

        function reverseAnimation() {
            tl.reverse();
        }
    }, []);

    return (

        <div className="hero-section-wrapper max-width">
            <div className="hero-title">
                <span>Shubham Bhardwaj</span>
            </div>
            {/* <div className='resume-button'>
                <a href="./public/assets/Shubham_Bhardwaj_Resume.pdf" download>
                    <button>Download Resume</button>
                </a>
            </div> */}
            <div className="flex hero-section" >
                <div className="rectangle"></div>
                <div className="hero-sub-section1 flex-col max-width">
                    <div className='image'>
                        <img src='assets/hero6.png' alt="projectImage" />
                    </div>
                    <div className='image'>
                        <img src='assets/hero8.png' alt="projectImage" />
                    </div>
                    <div className='image'>
                        <img src='assets/hero4.png' alt="projectImage" />
                    </div>
                    <div className='image'>
                        <img src='assets/hero6.png' alt="projectImage" />
                    </div>
                    <div className='image'>
                        <img src='assets/hero7.png' alt="projectImage" />
                    </div>
                    <div className='image'>
                        <img src='assets/hero1.png' alt="projectImage" />
                    </div>
                    <div className='image'>
                        <img src='assets/hero9.png' alt="projectImage" />
                    </div>
                </div>
                <div className="hero-sub-section2 flex-col max-width">
                    <div className='image'>
                        <img src='assets/hero2.png' alt="projectImage" />
                    </div>
                    <div className='image'>
                        <img src='assets/hero9.png' alt="projectImage" />
                    </div>
                    <div className='image'>
                        <img src='assets/hero1.png' alt="projectImage" />
                    </div>
                    <div className='image'>
                        <img src='assets/hero3.png' alt="projectImage" />
                    </div>
                    <div className='image'>
                        <img src='assets/hero2.png' alt="projectImage" />
                    </div>
                    <div className='image'>
                        <img src='assets/hero4.png' alt="projectImage" />
                    </div>
                    <div className='image'>
                        <img src='assets/hero7.png' alt="projectImage" />
                    </div>
                    <div className='image'>
                        <img src='assets/hero6.png' alt="projectImage" />
                    </div>
                    <div className='image'>
                        <img src='assets/hero5.png' alt="projectImage" />
                    </div>
                </div>
                <div className="hero-sub-section3 flex-col max-width">
                    <div className='image'>
                        <img src='assets/hero9.png' alt="projectImage" />
                    </div>
                    <div className='image'>
                        <img src='assets/hero3.png' alt="projectImage" />
                    </div>
                    <div className='image'>
                        <img src='assets/hero6.png' alt="projectImage" />
                    </div>
                    <div className='image'>
                        <img src='assets/hero5.png' alt="projectImage" />
                    </div>
                    <div className='image'>
                        <img src='assets/hero9.png' alt="projectImage" />
                    </div>
                    <div className='image'>
                        <img src='assets/hero1.png' alt="projectImage" />
                    </div>
                    <div className='image'>
                        <img src='assets/hero3.png' alt="projectImage" />
                    </div>
                    <div className='image'>
                        <img src='assets/hero2.png' alt="projectImage" />
                    </div>
                    <div className='image'>
                        <img src='assets/hero4.png' alt="projectImage" />
                    </div>
                </div>
                <div className="hero-sub-section4 flex-col max-width">
                    <div className='image'>
                        <img src='assets/hero1.png' alt="projectImage" />
                    </div>
                    <div className='image'>
                        <img src='assets/hero3.png' alt="projectImage" />
                    </div>
                    <div className='image'>
                        <img src='assets/hero2.png' alt="projectImage" />
                    </div>
                    <div className='image'>
                        <img src='assets/hero4.png' alt="projectImage" />
                    </div>
                    <div className='image'>
                        <img src='assets/hero5.png' alt="projectImage" />
                    </div>
                    <div className='image'>
                        <img src='assets/hero9.png' alt="projectImage" />
                    </div>
                </div>
            </div>
            <div className="scroller"></div>
        </div>
    )
}

export default HeroSection