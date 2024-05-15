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
import Carzzy from '../components/Carzzy/carzzy';

const HomePage = () => {

    return (
        <>
            <Navbar /> 
            {/* <Preloader /> */}
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
