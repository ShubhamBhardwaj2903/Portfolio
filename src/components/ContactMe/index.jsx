import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './contactMe.css';
import emailjs from '@emailjs/browser';

gsap.registerPlugin(ScrollTrigger);

const ContactMe = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_dvp2gxf', 'template_zy2f4pd', form.current, {
                publicKey: 'PLkQYA7OvS5mc7oUB',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    // alert('Message sent! Shubham will contact you shortly.');
                    alert('Boom! Message sent. Shubham will reach out quicker than you can say Supercalifragilisticexpialidocious');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    useEffect(() => {

        gsap.to('.contact-title1 span', {
            scrollTrigger: {
                trigger: '.contact-me-section-title',
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
        <div className="contact-me-section-wrapper dark screen max-width flex flex-col absolute-center">
            <div className="contact-me-section pad" >
                <div className="contact-me-section-title heading">
                    <div className="contact-title1"><span>Don’t be shy, say Hi !!!</span> </div>

                </div>
                <div className="contact-me-section-sub-text sub-text">My Keyboard Is Lonely, And So Am I</div>
                <form className="contact-details flex flex-col absolute-center" ref={form} onSubmit={sendEmail}>
                    <input type="text" name="from_name" className="contact-name" placeholder="your name, cause Awesome human was already taken" />
                    <input type="email" name="from_email" className="contact-email" placeholder="letsworktogether@gmail.com" />
                    <textarea type="message" name="message" className="contact-message" placeholder="Your thoughts go here..." />
                    <button type="submit" value="Send" className="contact-button">Send the Pigeon – Just Kidding, It's an Email!</button>
                </form>
            </div>
        </div>
    )
}

export default ContactMe
