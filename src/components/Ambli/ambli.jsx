import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Ambli = () => {

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
      {/* <div className="design-section flex absolute-center" style={{ background: 'linear-gradient(to bottom, #00050B 0%, #080227 19%, #110A34 51%, #231B4D 77%, #3D3372 100%)' }}>
        <div className="design-section-title">
          <div className="design-num">02</div>
          <div className="design-title">AMBLI AI</div>
          <div className="design-subtitle">"Discover, Book, and Drive Your Car Rental Made Easy!</div>
        </div>
        <div className='design_hero_image'>
          <img src='assets/ambli_hero_section.png' alt="projectImage" />
        </div>
      </div> */}

      {/* <div className="width design-details">
        <div className="design-text1">Exploring the Problem</div>
        <div className="design-text2">Ever wondered what goes on behind the scenes of a game-changing AI-powered search platform? Well, wonder no more – because we're about to peel back the curtain and take you on a journey through the creation of Ambli.

          In this case study, we'll walk you through the challenges, triumphs, and lessons learned as we brought Ambli to life. From the initial spark of inspiration to the final product launch, you'll get an inside look at how Ambli is revolutionizing the way we search and discover information online.

          When we started working on Ambli, we noticed a common frustration among users – searching for information was often time-consuming and inefficient. People were overwhelmed by the sheer volume of data online and struggled to find what they were looking for quickly and easily.</div>
        <div className="design-text1">What does ambli do</div>
        <div className="design-text2">
          Ambli offers an intuitive and powerful AI-driven search platform, designed to revolutionize the way users interact with information. Through cutting-edge natural language processing (NLP) and machine learning algorithms, Ambli enables users to effortlessly explore and access diverse content formats, including text, images, videos, and documents. By simplifying the search process and delivering highly relevant results, Ambli enhances user experiences and empowers individuals to efficiently navigate the vast landscape of information available online.

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
      </div> */}

      <div className='details case_study flex flex-col'>
        <img src="assets/ambli.png" alt='Carzzy_Details' />
        {/* <img src="assets/carzzy_details2.png" alt='Carzzy_Details' />
        <img src="assets/carzzy_details3.png" alt='Carzzy_Details' />
        <img src="assets/carzzy_details4.png" alt='Carzzy_Details' />
        <img src="assets/carzzy_details5.png" alt='Carzzy_Details' /> */}
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
        <Link to="/vovance" className="button1">Previous Project</Link>
        <Link to="https://cred-clone-shubham-bhardwaj.onrender.com" target="_blank" className="button1">Next Project</Link>
      </div>

      <Footer />

    </div>

  )
}

export default Ambli