// file path: src/pages/Dashboard.jsx

import React from 'react';
import ConsoleLayout from '../components/ConsoleLayout';
import Navigation from '../components/Navigation';

const Dashboard = () => {
  return (
    <ConsoleLayout>
      <h2>Welcome, Commander</h2>
      <p>VERA is watching...</p>
      <Navigation></Navigation>
    </ConsoleLayout>
  );
};

export default Dashboard;