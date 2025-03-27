// file path: how-not-to-die/client/src/pages/Holomap.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../assets/css/Holomap.module.css';

const Holomap = () => {
  const navigate = useNavigate();

  return (
    <div
      className={styles.holomapWrapper}
      style={{ backgroundImage: `url(/images/unnamed.jpg)` }}
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
        style={{ top: '50%', left: '50%' }}
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

      {/* Return to console */}
      <button className={styles.backButton} onClick={() => navigate('/planettravel')}>
        ↩ Return to Console
      </button>
    </div>
  );
};

export default Holomap;
