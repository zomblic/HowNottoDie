// file path: how-not-to-die/src/pages/SurvivalGuide.jsx
// View/edit user’s own logs

import React, { useEffect, useState } from 'react';
import styles from '../assets/css/SurvivalGuide.module.css';

const SurvivalGuide = () => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/planets');
        const data = await response.json();
        setPlanets(data);
      } catch (error) {
        console.error('Error fetching planets:', error);
      }
    };

    fetchPlanets();
  }, []);

  return (
    <div className={styles.container}>
      <h2>Survival Guide</h2>
      <p>Everything you need to stay alive on this alien rock...</p>

      <ul className={styles.guideList}>
        {planets.map((planet) => (
          <li key={planet.planet_id}>
            <strong>{planet.planet_name}</strong><br />
            <strong>[flora]</strong> {planet.flora_name || 'Unknown'}<br />
            <strong>[fauna]</strong> {planet.fauna_name || 'Unknown'}<br />
            <strong>[description]</strong> {planet.planet_description}<br />
            <strong>[hostility]</strong> {planet.hostility}<br />
            <strong>[exploration]</strong> {planet.exploration}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SurvivalGuide;