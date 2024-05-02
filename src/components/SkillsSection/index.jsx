import {useEffect} from 'react'
import './skillsSection.css'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SkillsSection = () => {

    useEffect(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: '.skills-section-wrapper',
                start: 'top 40%',
                end: 'top -50%',
                scrub: true
            },
        })
            .to('.skills-sub-section1', {x:-100, duration: 10, ease: 'power2.inOut' })

    }, []);

    return (
        <div className='skills-section-wrapper max-width'>
                <div className='skills-text1'>
                    FIGMA . HTML . CSS . JAVASCRIPT . REACTJS . GSAP . ADOBE-XD . VS CODE . ANDROID STUDIO . 
                    FIGMA . HTML . CSS . JAVASCRIPT . REACTJS . GSAP . ADOBE-XD . VS CODE . ANDROID STUDIO .
                    FIGMA . HTML . CSS . JAVASCRIPT . REACTJS . GSAP . ADOBE-XD . VS CODE . ANDROID STUDIO . 
                    FIGMA . HTML . CSS . JAVASCRIPT . REACTJS . GSAP . ADOBE-XD . VS CODE . ANDROID STUDIO .
                </div>
                <div className='skills-text2'>
                    FIGMA . HTML . CSS . JAVASCRIPT . REACTJS . GSAP . ADOBE-XD . VS CODE . ANDROID STUDIO . 
                    FIGMA . HTML . CSS . JAVASCRIPT . REACTJS . GSAP . ADOBE-XD . VS CODE . ANDROID STUDIO .
                    FIGMA . HTML . CSS . JAVASCRIPT . REACTJS . GSAP . ADOBE-XD . VS CODE . ANDROID STUDIO . 
                    FIGMA . HTML . CSS . JAVASCRIPT . REACTJS . GSAP . ADOBE-XD . VS CODE . ANDROID STUDIO .
                </div>
                <div className='skills-text'>
                    FIGMA . HTML . CSS . JAVASCRIPT . REACTJS . GSAP . ADOBE-XD . VS CODE . ANDROID STUDIO . 
                    FIGMA . HTML . CSS . JAVASCRIPT . REACTJS . GSAP . ADOBE-XD . VS CODE . ANDROID STUDIO
                </div>
                <div className='skills-text3'>
                    FIGMA . HTML . CSS . JAVASCRIPT . REACTJS . GSAP . ADOBE-XD . VS CODE . ANDROID STUDIO . 
                    FIGMA . HTML . CSS . JAVASCRIPT . REACTJS . GSAP . ADOBE-XD . VS CODE . ANDROID STUDIO .
                    FIGMA . HTML . CSS . JAVASCRIPT . REACTJS . GSAP . ADOBE-XD . VS CODE . ANDROID STUDIO . 
                    FIGMA . HTML . CSS . JAVASCRIPT . REACTJS . GSAP . ADOBE-XD . VS CODE . ANDROID STUDIO .
                </div>
                <div className='skills-text4'>
                    FIGMA . HTML . CSS . JAVASCRIPT . REACTJS . GSAP . ADOBE-XD . VS CODE . ANDROID STUDIO . 
                    FIGMA . HTML . CSS . JAVASCRIPT . REACTJS . GSAP . ADOBE-XD . VS CODE . ANDROID STUDIO .
                    FIGMA . HTML . CSS . JAVASCRIPT . REACTJS . GSAP . ADOBE-XD . VS CODE . ANDROID STUDIO . 
                    FIGMA . HTML . CSS . JAVASCRIPT . REACTJS . GSAP . ADOBE-XD . VS CODE . ANDROID STUDIO .
                </div>
        </div>
    )
}

export default SkillsSection