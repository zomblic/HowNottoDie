// file path: src/app.jsx 

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
// This is where you add other pages/Alexis

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes> 
      <Route path="/" element={<Home />} /> 
      </Routes>
      <Footer />
    </Router>
  );
};

// example of what a route looks like:
// <Route path="/" element={<Home />} /> /Alexis

export default App;