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
import Carzzy from '../components/Carzzy/carzzy'
import Ambli from '../components/Ambli AI/ambli'
import Preloader from '../components/Preloader'

const HomePage = () => {
    return (
        <>
            <Preloader/>
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
            <Carzzy/>
            {<Ambli/> }
        </>
    )
}

export default HomePage