// file path: src/pages/ShuttleBreak.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import VeraQuote from '../components/vera-quotes/VeraBreakQuote';
import styles from '../assets/css/end-demo/ShuttleBreak.module.css';

const ShuttleBreak = () => {
  const navigate = useNavigate();
  const [isFading, setIsFading] = useState(false);

  const handleDistressSignal = () => {
    setIsFading(true);
    setTimeout(() => {
      navigate('/enddemo');
    }, 1000);
  };

  return (
    <div className={`${styles.shuttleBreakContent} ${isFading ? styles.fadeOut : ''}`}>
      <h2 className={styles.title}>Diagnostic Report</h2>

      <div className={styles.diagnosticsGrid}>
        <div className={styles.diagnosticRow}>
          <span>Life Support Systems</span>
          <span className={styles.check}>✅</span>
          <button onClick={() => navigate('/lifesupport')}>Examine</button>
        </div>
        <div className={styles.diagnosticRow}>
          <span>Communication Array</span>
          <span className={styles.check}>✅</span>
          <button onClick={() => navigate('/comms')}>Examine</button>
        </div>
        <div className={styles.diagnosticRow}>
          <span>Navigation Core</span>
          <span className={styles.x}>❌</span>
          <button onClick={() => navigate('/shipnav')}>Examine</button>
        </div>
        <div className={styles.diagnosticRow}>
          <span>Propulsion Matrix</span>
          <span className={styles.x}>❌</span>
          <button onClick={() => navigate('/propulsion')}>Examine</button>
        </div>
      </div>

      <div className={styles.veraBox}>
        <VeraQuote />
        <button className={styles.distressButton} onClick={handleDistressSignal}>
          Send Distress Signal
        </button>
      </div>
    </div>
  );
};

export default ShuttleBreak;
