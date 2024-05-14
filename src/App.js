import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './page/homePage';
import Services from './components/Services';
import IntroSection from './components/IntroSection'; 
import ExperienceSection from './components/ExperienceSection';
import ContactMe from './components/ContactMe'; 
import Carzzy from './components/Carzzy/carzzy';
import Ambli  from './components/Ambli/ambli'; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        {/* <Route path="/services" element={<Services />} />
        <Route path="/intro" element={<IntroSection />} />
        <Route path="/experience" element={<ExperienceSection />} />
        <Route path="/contact" element={<ContactMe />} /> */}

        <Route path="/carzzy" element={<Carzzy/>} />
        <Route path="/ambli" element={<Ambli />} />
      </Routes>
    </Router>
  );
};

export default App;
