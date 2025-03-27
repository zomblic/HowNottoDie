// file path: how-not-to-die/src/pages/PlanetTravel.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../assets/css/PlanetTravel.module.css';

const PlanetTravel = () => {
  const navigate = useNavigate();

  return (
    <>
      <button className={styles.holomapButton} onClick={() => navigate('/holomap')}>
        Initiate Holomap Projection?
      </button>
    </>
  );
};

export default PlanetTravel;