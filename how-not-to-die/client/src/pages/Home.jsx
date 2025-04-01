// file path: how-not-to-die/src/components/Navigation.jsx
// Login / Register console screen

import React from 'react';
import LoginForm from '../components/LoginForm';
import Modal from '../components/RegisterForm';
// import AuthWrapper from '../components/AuthWrapper';

const Home = () => {
  return (
    <>
      <h2>Welcome, Commander</h2>
      <p>Please Sign In</p>
      <LoginForm />
      <Modal/>
    </>
  );
};

export default Home;