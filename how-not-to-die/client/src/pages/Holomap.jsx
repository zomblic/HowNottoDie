import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../assets/css/Holomap.module.css';
import PlanetCard from '../components/PlanetCard'; // Add this line

const Holomap = () => {
  const navigate = useNavigate();

  // Add code below this line: state for selected planet
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
      {/* Clickable planets */}
      {/* Planet One "Doubt" */}
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
      {/* Planet Two "Brune" */}
        Brune
      </button>
      <button
        className={styles.planet}
        style={{ top: '70%', left: '75%' }}
        onClick={() => handlePlanetClick('planethree')}
      >
      {/* Planet Three "Ocean 12B" */}
        Ocean 12B
      </button>

      {/* Spinning Planet One */}
      <div
        className={styles.planetOneSpinner}
        style={{ top: '20%', left: '20.5%' }}
        onClick={() => handlePlanetClick('planetone')}
        title="Planet One"
      />

      {/* Spinning Planet Two */}
      <div
        className={styles.planetTwoSpinner}
        style={{ top: '35%', left: '45.5%' }}
        onClick={() => handlePlanetClick('planettwo')}
        title="Planet Two"
      />

      {/* Spinning Planet Three */}
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
