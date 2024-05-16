import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './page/homePage';
import Carzzy from './components/Carzzy/carzzy';
import Ambli  from './components/Ambli/ambli'; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/carzzy" element={<Carzzy/>} />
        <Route path="/ambli" element={<Ambli />} />
      </Routes>
    </Router>
  );
};

export default App;
