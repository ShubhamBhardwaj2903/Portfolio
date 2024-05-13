import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 
import './services.css';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
    useEffect(() => {

        gsap.to('.services-title1 span', {
          scrollTrigger: {
            trigger: '.services-title1 span', 
            start: 'top 80%', 
            end: 'top 10%', 
            scrub: true, 
          },
          translateY: '0%', 
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
        });

        // gsap.from('.services-title1 span', {
        //     scrollTrigger: {
        //         trigger: '.services-title', 
        //         start: 'top 50%', 
        //         end: '+=400', 
        //         scrub: true,
        //         markers: true
        //     },
        //     translateY: '0%',
        //     duration: 5,
        //     stagger: 0.5,
        //     ease: 'power3.out',
        // });

        gsap.to('.service1', {
            scrollTrigger: {
              trigger: '.services', 
              start: 'top 90%', 
              end: 'top 10%', 
              scrub: true, 
            },
            // opacity: 0, y: 50, duration: 3, stagger: 0.8,
            translateY: '0%', 
            duration: 2,
            stagger: 0.8,
            ease: 'power3.out',
          });

        //   const curveTL = gsap.timeline({
        //     scrollTrigger: {
        //       trigger: '.services-wrapper',
        //       start: 'top top',
        //       end: 'bottom top',
        //       scrub: true,
        //     },
        //   });

        //   curveTL.to('.curve-path', {
        //     attr: {
        //       d: 'M0,0 C150,50 350,50 500,0 L500,0 L0,0 Z', 
        //     },
        //   });

    }, []);

    return (
        <div className="services-wrapper screen max-width flex flex-col absolute-center">
            <div className="services-section width pad">
                <div className="services-texts">
                    <div className="services-title">
                        <div className="services-title1"> <span>Designing Tomorrow's</span> </div>
                        <div className="services-title1"> <span>Interfaces, Today</span> </div>
                    </div>
                    <div className="services-sub-text sub-text">From Sketch to Code, Every Detail Matters</div>
                </div>
                <div className="services flex">
                    <div className="service1">
                        <div className="flex service-icon absolute-center">
                            <img src='assets/laptop.svg' alt='Web Designs' />
                        </div>
                        <div className="service-text sub-text">Design</div>
                    </div>
                    <div className="service1">
                        <div className="flex service-icon absolute-center">
                            <img src='assets/mobile.svg' alt='Mobile Branding' />
                        </div>
                        <div className="service-text sub-text">Branding</div>
                    </div>
                    <div className="service1">
                        <div className="flex service-icon absolute-center">
                            <img src='assets/develop.svg' alt='Code' />
                        </div>
                        <div className="service-text sub-text">Development</div>
                    </div>
                    <div className="service1">
                        <div className="flex service-icon absolute-center">
                            <img src='assets/wireframe.svg' alt='Wireframe' />
                        </div>
                        <div className="service-text sub-text">Wireframing</div>
                    </div>
                    {/* <div className="service1">
                        <div className="flex service-icon absolute-center">
                            <img src='assets/laptop.svg' alt='Web Designs' />
                        </div>
                        <div className="service-text sub-text">DESIGN</div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Services