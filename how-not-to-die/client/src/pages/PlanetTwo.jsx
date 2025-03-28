// file path: how-not-to-die/src/pages/PlanetTwo.jsx
// Second planet details + logs

import React from 'react';
import VeraQuote from '../components/VeraQuote';
import PersonalLogs from './PersonalLogs';
import VeraPlanetMessage from '../components/VeraPlanetMessage';
import styles from '../assets/css/PlanetTwo.module.css';
import { useNavigate } from 'react-router-dom';

const PlanetTwo = () => {
    const navigate = useNavigate();
    return (
      <><div
        className={styles.planetTwoWrapper}
        style={{ backgroundImage: `url(/assets/images/planet-two/landscape/Cloudy Mountains.png)` }}>
        <h1>Welcome to the Cloudy Mountain Planet</h1>

        <VeraQuote />

        <VeraPlanetMessage />

        <PersonalLogs />
      </div><button className={styles.backButton} onClick={() => navigate('/dashboard')}>
          ↩ Return to Console
        </button></>
    );
  };

export default PlanetTwo;