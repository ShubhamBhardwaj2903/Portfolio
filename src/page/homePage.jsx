// eslint-disable-next-line no-unused-vars
import React from 'react'
import HeroSection from '../components/HeroSection'
// import HeadlineSection from '../components/HeadlineSection'
// import SkillsSection from '../components/SkillsSection'
// import TextMask from '../components/TextMask'
import Services from '../components/Services'
import IntroSection from '../components/IntroSection'
import ProjectSection from '../components/ProjectsSection'
import ExperienceSection from '../components/ExperienceSection'
import ContactMe from '../components/ContactMe'
import MobileDesignSection from '../components/MobileDesignSection'
import LaptopDesignSection from '../components/LaptopDesignSection'

const HomePage = () => {
    return (
        <>
            <HeroSection/>
            {/* <HeadlineSection/> */}
            {/* <SkillsSection/> */}
            {/* <TextMask/> */}
            <Services/>
            <IntroSection/>
            <MobileDesignSection/>
            <ProjectSection/>
            <LaptopDesignSection/>
            <ExperienceSection/>
            <ContactMe/>
        </>
    )
}

export default HomePage