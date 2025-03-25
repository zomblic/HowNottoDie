// file path: how-not-to-die/src/pages/Dashboard.jsx
// Commander’s main panel

import React from 'react';
import styles from "../assets/css/Dashboard.module.css";

// below is an example of how to set your jsx page up
// so that it grabs whatever component you need for this page /Alexis

import Dashboard from '../components/ExampleComponent'; 

const Dashboard = () => {
  return (
    <div>
      <ExampleComponent />
    </div>
  );
};

export default Dashboard;