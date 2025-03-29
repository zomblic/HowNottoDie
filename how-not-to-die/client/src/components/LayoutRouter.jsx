// file path: how-not-to-die/client/src/components/LayoutRouter.jsx
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import ConsoleLayout from './ConsoleLayout';
import Navigation from './Navigation';

import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import SurvivalGuide from '../pages/SurvivalGuide';
import PersonalLogs from '../pages/PersonalLogs';
import PlanetTravel from '../pages/PlanetTravel';
import Holomap from '../pages/Holomap';
import TravelAnimation from '../pages/TravelAnimation';
import PlanetOne from '../pages/PlanetOne';
import PlanetTwo from '../pages/PlanetTwo';

const LayoutRouter = () => {
  const location = useLocation();
  const isPlanetView =
    location.pathname === '/holomap' ||
    location.pathname === '/travel' ||
    location.pathname === '/planetone' ||
    location.pathname === '/planettwo';

  return (
    <>
      {isPlanetView ? (
        <Routes>
          <Route path="/planetone" element={<PlanetOne />} />
          <Route path="/planettwo" element={<PlanetTwo />} />
          <Route path="/holomap" element={<Holomap />} />
          <Route path="/travel" element={<TravelAnimation />} />
        </Routes>
      ) : (
        <ConsoleLayout>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/survivalguide" element={<SurvivalGuide />} />
            <Route path="/personallogs" element={<PersonalLogs />} />
            <Route path="/planettravel" element={<PlanetTravel />} />
          </Routes>
        </ConsoleLayout>
      )}
    </>
  );
};

export default LayoutRouter;
