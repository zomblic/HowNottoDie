// file path: src/pages/Dashboard.jsx

import React from 'react';
import styles from '../assets/css/Dashboard.module.css';

const Dashboard = () => {
    return (
      <div className={styles.consoleBackground}>
        <div className={styles.consoleScreen}>
          <h2>Welcome, Commander</h2>
          <p>VERA is watching...</p>
        </div>
      </div>
    );
  };
  
  export default Dashboard;