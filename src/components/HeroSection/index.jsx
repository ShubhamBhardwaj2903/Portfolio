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
                start: 'top 90%',
                end: 'top -400%',
                scrub: true
            },
        })
            .to('.rectangle', { opacity: 0, duration: 3, ease: 'power2.inOut' })
            .to('.hero-sub-section1', { y: -350, duration: 4, ease: 'power2.inOut' }, '-=4')
            .to('.hero-sub-section2', { y: -500, duration: 4, ease: 'power2.inOut' }, '-=4')
            .to('.hero-sub-section3', { y: -425, duration: 4, ease: 'power2.inOut' }, '-=4')
            .to('.hero-section', { y: 0, duration: 4, scale: 0.7, rotation: -10, ease: 'power2.inOut' }, '-=4')
            .to('.rectangle', { y: -500, opacity: 0.3, duration: 3, ease: 'power2.inOut' })
            .to('.hero-title span', {
                translateY: '0%', duration: 3, stagger: 2, ease: 'power3.out',
            });

        // gsap.to('.hero-title span', {
        //     scrollTrigger: {
        //         trigger: '.rectangle',
        //         start: 'top 0%',
        //         end: '+=400',
        //         scrub: true,
        //         markers: true
        //     },
        //     translateY: '0%',
        //     duration: 3,
        //     stagger: 0.2,
        //     ease: 'power3.out',
        // });

    }, []);

    return (

        <div className="hero-section-wrapper max-width">
            <div className="hero-title">
                <span>Shubham Bhardwaj</span>
            </div>
            <div className="flex hero-section">
                <div className="rectangle"></div>
                <div className="hero-sub-section1 flex-col max-width">
                    <div className='image'>
                        <img src='assets/frame 72.png' alt="projectImage" />
                    </div>
                    <div className='image'>
                        <img src='assets/frame 71.png' alt="projectImage" />
                    </div>
                    <div className='image'>
                        <img src='assets/frame 70.png' alt="projectImage" />
                    </div>
                    <div className='image'>
                        <img src='assets/frame 73.png' alt="projectImage" />
                    </div>
                    <div className='image'>
                        <img src='assets/frame 67.png' alt="projectImage" />
                    </div>
                    <div className='image'>
                        <img src='assets/carzzy.png' alt="projectImage" />
                    </div>
                    <div className='image'>
                        <img src='assets/carzzy.png' alt="projectImage" />
                    </div>
                </div>
                <div className="hero-sub-section2 flex-col max-width">
                    <div className='image'>
                        <img src='assets/carzzy.png' alt="projectImage" />
                    </div>
                    <div className='image'>
                        <img src='assets/frame 73.png' alt="projectImage" />
                    </div>
                    <div className='image'>
                        <img src='assets/frame 67.png' alt="projectImage" />
                    </div>
                    <div className='image'>
                        <img src='assets/frame 72.png' alt="projectImage" />
                    </div>
                    <div className='image'>
                        <img src='assets/frame 70.png' alt="projectImage" />
                    </div>
                    <div className='image'>
                        <img src='assets/frame 71.png' alt="projectImage" />
                    </div>
                    <div className='image'>
                        <img src='assets/frame 73.png' alt="projectImage" />
                    </div>
                    <div className='image'>
                        <img src='assets/carzzy.png' alt="projectImage" />
                    </div>
                    <div className='image'>
                        <img src='assets/carzzy.png' alt="projectImage" />
                    </div>
                </div>
                <div className="hero-sub-section3 flex-col max-width">
                    <div className='image'>
                        <img src='assets/frame 72.png' alt="projectImage" />
                    </div>
                    <div className='image'>
                        <img src='assets/frame 71.png' alt="projectImage" />
                    </div>
                    <div className='image'>
                        <img src='assets/frame 70.png' alt="projectImage" />
                    </div>
                    <div className='image'>
                        <img src='assets/frame 73.png' alt="projectImage" />
                    </div>
                    <div className='image'>
                        <img src='assets/frame 67.png' alt="projectImage" />
                    </div>
                    <div className='image'>
                        <img src='assets/carzzy.png' alt="projectImage" />
                    </div>
                    <div className='image'>
                        <img src='assets/carzzy.png' alt="projectImage" />
                    </div>
                    <div className='image'>
                        <img src='assets/carzzy.png' alt="projectImage" />
                    </div>
                    <div className='image'>
                        <img src='assets/carzzy.png' alt="projectImage" />
                    </div>
                </div>
                <div className="hero-sub-section4 flex-col max-width">
                <div className='image'>
                        <img src='assets/frame 72.png' alt="projectImage" />
                    </div>
                    <div className='image'>
                        <img src='assets/frame 71.png' alt="projectImage" />
                    </div>
                    <div className='image'>
                        <img src='assets/frame 70.png' alt="projectImage" />
                    </div>
                    <div className='image'>
                        <img src='assets/frame 73.png' alt="projectImage" />
                    </div>
                    <div className='image'>
                        <img src='assets/frame 67.png' alt="projectImage" />
                    </div>
                    <div className='image'>
                        <img src='assets/carzzy.png' alt="projectImage" />
                    </div>
                </div>
            </div>
            <div className="scroller"></div>
        </div>
    )
}

export default HeroSection