// file path: how-not-to-die/src/pages/PlanetTwo.jsx
// Second planet details + logs

import React from 'react';
import VeraQuote from '../components/VeraQuote';
import PersonalLogs from './PersonalLogs';
import VeraPlanetMessage from '../components/VeraPlanetMessage';

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