// file path: how-not-to-die/src/components/Navigation.jsx
// Top nav bar

import React from 'react';
import styles from "../assets/css/Navigation.module.css";

function Navigation() {
    return (
        <div className={styles.nav}>
            <ul>
                <li>
                    <a href='#section'>Survival Guide</a>
                </li>
                <li>
                    <a href='#section'>Logs</a>
                </li>
                <li>
                    <a href='#section'>Travel</a>
                </li>
                <li>
                    <a href='#section'>Logout</a>
                </li>
            </ul>
        </div>
    );
}
export default Navigation