// file path: how-not-to-die/client/src/pages/Holomap.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../assets/css/Holomap.module.css';

const Holomap = () => {
  const navigate = useNavigate();

  return (
    <div
      className={styles.holomapWrapper}
      style={{ backgroundImage: `url(/assets/images/GalaxyMapPixel.png)` }}
    >
      {/* Clickable planets */}
      <button
        className={styles.planet}
        style={{ top: '30%', left: '20%' }}
        onClick={() => navigate('/planetone')}
      >
        Planet One
      </button>
      <button
        className={styles.planet}
        style={{ top: '50%', left: '45%' }}
        onClick={() => navigate('/planettwo')}
      >
        Planet Two
      </button>
      <button
        className={styles.planet}
        style={{ top: '70%', left: '75%' }}
        onClick={() => navigate('/planethree')}
      >
        Planet Three
      </button>

      {/* Spinning Planet One */}
      <div
        className={styles.planetOneSpinner}
        style={{ top: '20%', left: '20.5%' }}
        onClick={() => navigate('/planetone')}
        title="Planet One"
      />

      {/* Spinning Planet Two */}
      <div
        className={styles.planetTwoSpinner}
        style={{ top: '35%', left: '45.5%' }}
        onClick={() => navigate('/planetone')}
        title="Planet Two"
      />

      {/* Spinning Planet Three */}
      <div
        className={styles.planetThreeSpinner}
        style={{ top: '50%', left: '73.5%' }}
        onClick={() => navigate('/planetone')}
        title="Planet Three"
      />

      {/* Return to console */}
      <button className={styles.backButton} onClick={() => navigate('/planettravel')}>
        ↩ Return to Console
      </button>
    </div>
  );
};

export default Holomap;
