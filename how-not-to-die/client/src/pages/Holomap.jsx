// file path: how-not-to-die/src/pages/Holomap.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../assets/css/galaxy-map/Holomap.module.css';
import PlanetCard from '../components/holomap/PlanetCard';
import VeraHolomapQuote from '../components/vera-quotes/VeraHolomapQuote';

const Holomap = () => {
  const navigate = useNavigate();
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  const handlePlanetClick = (planetKey) => {
    setSelectedPlanet(planetKey);
  };

  const handleCloseCard = () => {
    setSelectedPlanet(null);
  };

  const handleTravelClick = (planetKey) => {
    navigate(`/travel?planet=${planetKey}`);
  };

  return (
    <div
      className={styles.holomapWrapper}
      style={{ backgroundImage: `url(/assets/images/GalaxyMapPixel.png)` }}
    >
      <VeraHolomapQuote />

      {/* Clickable planets */}
      <button
        className={styles.planet}
        style={{ top: '30%', left: '20%' }}
        onClick={() => handlePlanetClick('planetone')}
      >
        Doubt
      </button>
      <button
        className={styles.planet}
        style={{ top: '50%', left: '45%' }}
        onClick={() => handlePlanetClick('planettwo')}
      >
        Brune
      </button>
      <button
        className={styles.planet}
        style={{ top: '70%', left: '75%' }}
        onClick={() => handlePlanetClick('planethree')}
      >
        Ocean 12B
      </button>

      {/* Spinning Planets */}
      <div
        className={styles.planetOneSpinner}
        style={{ top: '20%', left: '20.5%' }}
        onClick={() => handlePlanetClick('planetone')}
        title="Planet One"
      />
      <div
        className={styles.planetTwoSpinner}
        style={{ top: '35%', left: '45.5%' }}
        onClick={() => handlePlanetClick('planettwo')}
        title="Planet Two"
      />
      <div
        className={styles.planetThreeSpinner}
        style={{ top: '50%', left: '73.5%' }}
        onClick={() => handlePlanetClick('planethree')}
        title="Planet Three"
      />

      {/* Return to console */}
      <button className={styles.backButton} onClick={() => navigate('/planettravel')}>
        ↩ Return to Console
      </button>

      {/* Show Planet Card */}
      {selectedPlanet && (
        <PlanetCard
          planetKey={selectedPlanet}
          onTravel={() => handleTravelClick(selectedPlanet)}
          onClose={handleCloseCard}
        />
      )}
    </div>
  );
};

export default Holomap;
