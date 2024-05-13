// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useEffect } from 'react';
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
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage = () => {

    return (
        <>
            <Navbar /> 
            <Preloader />
            <HeroSection />
            <Services />
            <IntroSection />
            <MobileDesignSection />
            <ProjectSection />
            <LaptopDesignSection />
            <ExperienceSection />
            <ContactMe />
            <Footer />
        </>
    );
};

export default HomePage;
