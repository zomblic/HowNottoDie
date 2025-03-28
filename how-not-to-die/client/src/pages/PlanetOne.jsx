// PlanetOne.jsx
// file path: how-not-to-die/client/src/pages/PlanetOne.jsx

import React, { useState } from 'react';
import styles from '../assets/css/PlanetOne.module.css'; // CSS module for layout/styling
import VeraPlanetMessage from '../components/VeraPlanetMessage'; // VERA sass
import OnSitePersonalLog from '../components/OnSitePersonalLog'; // shared personal log tool
import WeatherScanner from '../components/WeatherScanner'; // glitchy weather scanner
import { useNavigate } from 'react-router-dom';

const PlanetOne = () => {
  const navigate = useNavigate();

  // Local log state (could be shared in context or lifted higher later)
  const [logs, setLogs] = useState([]);

  const handleSaveLog = (newLog) => {
    const enrichedLog = {
      ...newLog,
      id: Date.now(),
      planetId: 1,
    };
    setLogs((prevLogs) => [...prevLogs, enrichedLog]);
    console.log('Log saved to state:', enrichedLog);
  };

  return (
    <div
      className={styles.planetOneWrapper}
      style={{
        backgroundImage: 'url(/assets/images/planet-one/landscape/PlanetOne.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative', // enable HUD positioning
        overflow: 'hidden',
      }}
    >
      {/* HUD Overlay - sits behind all content */}
      <div className={styles.hudOverlay} />

      {/* Randomized AI Quote */}
      <VeraPlanetMessage />

      {/* Planet content layout */}
      <section className={styles.content}>
        <h1 className={styles.title}>🌑 Planet One: The Shrouded Expanse</h1>

        {/* Weather Scanner */}
        <WeatherScanner planetId={1} />

        {/* Personal Log Tool */}
        <OnSitePersonalLog planetId={1} onSave={handleSaveLog} />
      </section>

      {/* Back to Dashboard */}
      <button className={styles.backButton} onClick={() => navigate('/dashboard')}>
        ↩ Return to Ship
      </button>
    </div>
  );
};

export default PlanetOne;
