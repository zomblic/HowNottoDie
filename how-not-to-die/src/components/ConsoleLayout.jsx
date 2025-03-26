// src/components/ConsoleLayout.jsx
import React from 'react';
import styles from '../styles/ConsoleLayout.module.css';

const ConsoleLayout = ({ children }) => {
  return (
    <div className={styles.consoleBackground}>
      <div className={styles.consoleScreen}>
        {children}
      </div>
    </div>
  );
};

export default ConsoleLayout;