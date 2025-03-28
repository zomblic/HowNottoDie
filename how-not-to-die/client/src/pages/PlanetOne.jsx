// file path: how-not-to-die/src/pages/PlanetOne.jsx
// Planet 1 details + logs

// PlanetOne.jsx
import React from 'react';
import styles from '../assets/css/PlanetOne.module.css'; // make this if it doesn't exist yet
import VeraQuote from '../components/VeraQuote'; // update path as needed
import OnSitePersonalLog from '../pages/PersonalLogs'; // shared component
import WeatherScanner from '../components/WeatherScanner'; // glitchy weather tool
import { useNavigate } from 'react-router-dom';

const PlanetOne = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.planetOneWrapper}>
      {/* Randomized AI Quote */}
      <VeraQuote />

      {/* Planet content layout */}
      <section className={styles.content}>
        <h1 className={styles.title}>🌑 Planet One: The Shrouded Expanse</h1>

        {/* Weather Scanner */}
        <WeatherScanner planetId={1} />

        {/* Personal Log Tool */}
        <PersonalLogs planetId={1} />
      </section>

      {/* Back to Dashboard */}
      <button className={styles.backButton} onClick={() => navigate('/dashboard')}>
        ↩ Return to Ship
      </button>
    </div>
  );
};

export default PlanetOne;
