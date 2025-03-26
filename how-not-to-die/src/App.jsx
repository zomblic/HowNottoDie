// file path: src/app.jsx 

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import SurvivalGuide from './pages/SurvivalGuide';
import PersonalLogs from './pages/PersonalLogs';
import PlanetTravel from './pages/PlanetTravel';
import PlanetOne from './pages/PlanetOne';
import PlanetTwo from './pages/PlanetTwo';
// This is where you add other pages or components/Alexis

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes> 
      <Route path="/" element={<Home />} /> 
      <Route path="/dashboard" element={<Dashboard />} /> 
      <Route path="/survivalguide" element={<SurvivalGuide />} />
      <Route path="/personallogs" element={<PersonalLogs />} />
      <Route path="/planettravel" element={<PlanetTravel />} />
      <Route path="/planetone" element={<PlanetOne />} />
      <Route path="/planettwo" element={<PlanetTwo />} />
      </Routes>
    </Router>
  );
};

export default App;