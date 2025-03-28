// file path: how-not-to-die/client/src/App.jsx

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import LayoutRouter from './components/LayoutRouter';
import CursorTrail from './components/CursorTrail'; // 👈 Import the trail component

const App = () => {
  return (
    <Router>
      <CursorTrail /> {/* 👈 This renders the trailing glow */}
      <LayoutRouter />
    </Router>
  );
};

export default App;
