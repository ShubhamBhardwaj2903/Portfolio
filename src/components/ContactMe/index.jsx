// import React, { useEffect } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger'; 
// import './contactMe.css'

// gsap.registerPlugin(ScrollTrigger);

// const ContactMe = () => {
    
//     useEffect(() => {

//         gsap.to('.contact-title1 span', {
//           scrollTrigger: {
//             trigger: '.contact-me-section-title', 
//             start: 'top 50%', 
//             end: '+=400', 
//             scrub: true, 
//           },
//           translateY: '0%', 
//           duration: 1,
//           stagger: 0.2,
//           ease: 'power3.out',
//         });
//     }, []);

//     return (
//         <div className="contact-me-section-wrapper dark screen max-width flex flex-col absolute-center">
//             <div className="contact-me-section pad">
//                 <div className="contact-me-section-title heading">
//                     <div className="contact-title1"><span>Don’t be shy, say Hi !!!</span> </div>

//                 </div>
//                 <div className="contact-me-section-sub-text sub-text">My Keyboard Is Lonely, And So Am I</div>
//                 <div className="contact-details flex flex-col absolute-center">
//                     <input type="text" className="contact-name" placeholder="your name, cause Awesome human was already taken" />
//                     <input type="email" className="contact-email" placeholder="letsworktogether@gmail.com" />
//                     <input type="message" className="contact-message" placeholder="Your thoughts go here..." />
//                     <button className="contact-button">Send the Pigeon – Just Kidding, It's an Email!</button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default ContactMe

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
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
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="from_name" />
      <label>Email</label>
      <input type="email" name="from_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};