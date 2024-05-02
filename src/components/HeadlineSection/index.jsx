import { useEffect } from 'react'
import './headlineSection.css'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HeadlineSection = () => {

    useEffect(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: '.title-texts',
                start: 'top 40%',
                end: 'top -50%',
                scrub: true
            },
        })
            .to('.title-text-hover', {width: '100%', duration: 10, ease: 'power2.inOut' })

    }, []);
  

    return (
        <div className="overlap-screen screen max-width">
            <div className='title-texts'>
                <div className='title-text'>
                    making the web a better place <br/>- one pixel at a time <br/>and with a lot of caffeine
                </div>
                <div className='title-text-hover'>
                    making the web a better place <br/>- one pixel at a time <br/>and with a lot of caffeine
                </div>  
            </div>
        </div>

    )
}

export default HeadlineSection