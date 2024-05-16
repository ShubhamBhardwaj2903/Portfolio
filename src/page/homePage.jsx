import React from 'react';
import HeroSection from '../components/HeroSection';
import Services from '../components/Services';
import IntroSection from '../components/IntroSection';
import ProjectSection from '../components/ProjectsSection';
import ExperienceSection from '../components/ExperienceSection';
import ContactMe from '../components/ContactMe';
import MobileDesignSection from '../components/MobileDesignSection';
import LaptopDesignSection from '../components/LaptopDesignSection';
import Preloader from '../components/Preloader';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FigmaPrototype from '../components/FigmaProjects';

const HomePage = () => {
    return (
        <>
            <Navbar />
            <Preloader />
            <section id="hero">
                <HeroSection />
            </section>
            <section id="services">
                <Services />
            </section>
            <section id="intro">
                <IntroSection />
            </section>
            <MobileDesignSection />
            <section id="projects">
                <ProjectSection />
            </section>
            <LaptopDesignSection />
            <section id="experience">
                <ExperienceSection />
            </section>
            <section id="contact">
                <ContactMe />
            </section>
            <Footer />

            {/* <FigmaPrototype/> */}
        </>
    );
};

export default HomePage;
