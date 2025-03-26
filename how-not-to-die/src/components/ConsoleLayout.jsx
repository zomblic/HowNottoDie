// file path: how-not-to-die/src/components/ConsoleLayout.jsx

import React from 'react';
import styles from '../assets/css/ConsoleLayout.module.css';

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