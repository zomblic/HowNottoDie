// file path: how-not-to-die/src/pages/PlanetTwo.jsx
// Second planet details + logs

import React from 'react';
// import styles from '../assets/css/on-planet/PlanetTwo.module.css'; 
import VeraQuote from '../components/vera-quotes/VeraQuote';
import PersonalLogs from './PersonalLogs';
import VeraPlanetMessage from '../components/vera-quotes/VeraPlanetMessage';

const PlanetTwo = () => {
  return (
    <div>
      <h1>Welcome to the Cloudy Mountain Planet</h1>

        <VeraQuote />

        <VeraPlanetMessage />

        <PersonalLogs />
    </div>
    
  );
};

export default PlanetTwo;