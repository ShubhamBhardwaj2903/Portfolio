import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './page/homePage';
import Carzzy from './components/Carzzy/carzzy';
import Ambli  from './components/Ambli/ambli'; 
import Vovance from './components/Vovance/vovance';
import AllProjects from './components/AllProjects/allProject';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/carzzy" element={<Carzzy/>} />
        <Route path="/ambli" element={<Ambli />} />
        <Route path="/vovance" element={<Vovance />} />
        <Route path="/allProject" element={<AllProjects />} />
      </Routes>
    </Router>
  );
};

export default App;
