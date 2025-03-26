// file path: how-not-to-die/src/components/Navigation.jsx
// Top nav bar

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from "../assets/css/Navigation.module.css";

const Navigation = () => {
    const location = useLocation();
  
    const isActive = (path) => location.pathname === path;
  
    return (
        <nav className={styles.navbar}>
          <div className={styles.leftNav}>
            <Link to="/" className={styles.homeLink}>Sign In</Link>
          </div>
          <ul className={styles.rightNav}>
            <li className={isActive('/dashboard') ? styles.active : ''}>
              <Link to="/dashboard">
                {isActive('/dashboard') && '✦ '}Command Center
              </Link>
            </li>
            <li className={isActive('/personallogs') ? styles.active : ''}>
              <Link to="/personallogs">
                {isActive('/personallogs') && '✦ '}Personal Logs
              </Link>
            </li>
            <li className={isActive('/survivalguide') ? styles.active : ''}>
              <Link to="/survivalguide">
                {isActive('/survivalguide') && '✦ '}Survival Guide
              </Link>
            </li>
            <li className={isActive('/planettravel') ? styles.active : ''}>
              <Link to="/planettravel">
                {isActive('/planettravel') && '✦ '}Galaxy Map
              </Link>
            </li>
          </ul>
        </nav>
      );
    };
    
    export default Navigation;

