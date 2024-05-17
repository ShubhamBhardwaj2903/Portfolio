import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import '../../components/Navbar/navbar.css';

import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Carzzy = () => {
  useEffect(() => {

    gsap.to('.design-section-title', { y: 100, duration: 1, ease: 'power3.inOut', });
    gsap.to('.design_hero_image', { scale: 0.85, duration: 1, ease: 'power3.inOut', });
    // gsap.from('.process-texts', 
    // { 
    //   scrollTrigger: {
    //     trigger: '.process-texts', // Element that triggers the animation
    //     start: 'top 80%', // Start the animation when the trigger reaches 80% of the viewport height
    //     end: 'top 10%', // End the animation when the trigger reaches 50% of the viewport height
    //     scrub: true, // Smoothly animate when scrolling
    //     markers: true, // Show markers for debugging
    //   },
    //   y: 100, duration: 1, ease: 'power3.inOut', });

  }, []);


  return (
    <div className="design-section-wrapper screen max-width" style={{ padding: 0}}>
      <Navbar/>
      <div className="design-section flex absolute-center" style={{ background: 'linear-gradient(to bottom, #D2001D 0%, #CC4154 56%, #FF6277 100%)' }}>
        <div className="design-section-title">
          <div className="design-num">01</div>
          <div className="design-title">CARZZY</div>
          <div className="design-subtitle">"Discover, Book, and Drive Your Car Rental Made Easy!"</div>
        </div>
        <div className='design_hero_image'>
          <img src='assets/carzzy_hero_section.png' alt="projectImage" />
        </div>
      </div>

      <div className="width design-details">
        <div className="design-text1">Exploring the Problem</div>
        <div className="design-text2">As someone who's been through the hassle of booking rides and renting
          cars online, I can tell you firsthand – it's far from smooth sailing. The interfaces
          are clunky, the pricing is often a mystery until the last minute, and don't even get
          me started on the lack of options for customization. It's like trying to navigate
          through a maze blindfolded! So here's the thing: there's a real need for a
          platform that gets it – that understands the frustrations of users like me and puts
          simplicity, transparency, and choice front and center. Because let's face it, booking
          a ride or renting a car should be as easy as ordering pizza on a Friday night. And
          until someone steps up to the plate and fixes these issues, we're all stuck in traffic
          – both literally and figuratively.</div>
        <div className="design-text1">What does Carzzy do</div>
        <div className="design-text2">Alright, let me give you the lowdown on Carzzy – your new best friend for all
          things transportation. Picture this: a sleek, user-friendly app that puts the power of booking rides
          and renting cars right in the palm of your hand. With Carzzy, you're in the driver's seat. Whether you
          need a quick ride to the airport or a stylish set of wheels for a weekend getaway, we've got you covered. And
          the best part? It's all done with just a few taps on your smartphone. But Carzzy isn't just about
          convenience – it's about choice. We've curated a diverse fleet of vehicles to suit every need and budget, from
          compact cars to luxury SUVs. And with transparent pricing and customizable options, you'll never be left guessing.
          So say goodbye to the days of frustrating booking experiences and hello to the future of transportation. Welcome to
          Carzzy – where every journey is smooth, seamless, and downright enjoyable.</div>
        <div className="design-text1">Goals</div>
        <div className="images">
          <img src='assets/goal1.png' alt='User Satisfaction' />
          <img src='assets/goal2.png' alt='User Satisfaction' />
          <img src='assets/goal3.png' alt='User Satisfaction' />
          <img src='assets/goal4.png' alt='User Satisfaction' />
          <img src='assets/goal5.png' alt='User Satisfaction' />
        </div>

        <div className="design-text1">Design Process</div>
        <div className="process flex absolute-center">
          <div className="process-num num1" >1</div>
          <div className="process-texts">
            <div className="process-text1">Research Phase</div>
            <div className="process-text2">So, first things first – I dove headfirst into the research pool. I chatted with
              potential users, dug through some juicy data, and even stalked a few competitors (in the most professional way,
              of course). Basically, I wanted to get inside the heads of our future Carzzy users and figure out what makes
              them tick.</div>
          </div>
        </div>
        <div className="process flex absolute-center">
          <div className="process-num">2</div>
          <div className="process-texts">
            <div className="process-text1">Conceptualization</div>
            <div className="process-text2">Once I had a good grasp on what our users wanted, it was time to get creative. I busted out the whiteboard, grabbed some markers, and let the ideas flow. Brainstormed like crazy, exploring different concepts and envisioning what the ultimate Carzzy experience could look like.</div>
          </div>
        </div>
        <div className="process flex absolute-center">
          <div className="process-num">3</div>
          <div className="process-texts">
            <div className="process-text1">Wireframes</div>
            <div className="process-text2">With a bunch of ideas bouncing around, it was time to start putting pen to paper – or rather, mouse to screen. I whipped up some wireframes to map out the basic structure and layout of the app. It was like building the skeleton of our design – laying the foundation for what was to come.</div>
          </div>
        </div>
        <div className="process flex absolute-center">
          <div className="process-num">4</div>
          <div className="process-texts">
            <div className="process-text1">Prototypes</div>
            <div className="process-text2">This was where things really started to come to life. I took those wireframes and added some meat to the bones, creating interactive prototypes that we could actually click through and play with. It was like taking our design out for a test drive – seeing how it handled and tweaking things as we went along.</div>
          </div>
        </div>
        <div className="process flex absolute-center">
          <div className="process-num">5</div>
          <div className="process-texts">
            <div className="process-text1">Visual Design</div>
            <div className="process-text2">I refined the visual designs, incorporating brand elements, color schemes, and typography. High-fidelity mockups were crafted to provide a pixel-perfect representation of the final product, ready for development handoff.</div>
          </div>
        </div>
      </div>
      <div className='design-images flex flex-col'>
        <img src="assets/carzzy1.png" alt='LandingPage' />
        <img src="assets/carzzy2.png" alt='LandingPage' />
        <img src="assets/carzzy3.png" alt='LandingPage' />
        <img src="assets/carzzy4.png" alt='LandingPage' />
        <img src="assets/carzzy5.png" alt='LandingPage' />
      </div>

      <div class="project-navigation">
        <a href="link1" target="_blank" rel="noopener noreferrer" class="button1" style={{visibility: 'hidden'}}>Previous Project</a>
        <Link to='/ambli' rel="noopener noreferrer" class="button1">Next Project</Link>
      </div>

<Footer/>
    </div>
  )
}

export default Carzzy

