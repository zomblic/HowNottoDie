// file path: how-not-to-die/src/components/Navigation.jsx
// Login / Register console screen

import React from 'react';
import ConsoleLayout from '../components/ConsoleLayout';
// import LoginForm from '../components/LoginForm';
// import RegisterForm from '../components/RegisterForm';
// import AuthWrapper from '../components/AuthWrapper';

const Home = () => {
  return (
    <ConsoleLayout>
      <h2>Welcome, Commander</h2>
      <p>VERA is watching...</p>
    </ConsoleLayout>
  );
};

export default Home;