// file path: how-not-to-die/src/pages/SurvivalGuide.jsx
// View/edit user’s own logs

import React from 'react';
import styles from '../assets/css/SurvivalGuide.module.css';

const SurvivalGuide = () => {
  return (
    <div className={styles.container}>
      <h2>Survival Guide</h2>
      <p>Everything you need to stay alive on this alien rock...</p>

      {/* Placeholder content */}
      <ul className={styles.guideList}>
        <li>☠️ Check your oxygen levels regularly</li>
        <li>🍄 Don’t eat the glowing mushrooms (again)</li>
        <li>🛠 Repair your gear before the sun sets</li>
        <li>📡 Keep your radio charged in case of storms</li>
      </ul>
    </div>
  );
};

export default SurvivalGuide;
