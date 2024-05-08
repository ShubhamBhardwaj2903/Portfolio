import React, { useState, useEffect } from 'react';
import './preloader.css'; // Import CSS file for styling
import {gsap} from 'gsap';

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [texts, setTexts] = useState(['Creative', 'Designer', 'and', 'Developer', 'Shaping', 'Digital', 'Experiences']);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // Change the duration as needed
    return () => clearTimeout(timer);
  }, []);
  

  // Change text every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 300); // Change the duration as needed

    // Clear the interval when animation completes
    if (currentIndex === texts.length - 1) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [texts, currentIndex]);

  useEffect(() => {
    if (!loading) {
      gsap.to('.preloader', { duration: 2, height: -500, ease: 'power4.out' }); // Animate height using GSAP
    }
  }, [loading]);

  return (
    <div className={`preloader ${loading ? 'active' : ''}`}>
      <div className="loading-text">{texts[currentIndex]}</div>
    </div>
  );
};

export default Preloader;
