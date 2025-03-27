// file path: src/app.jsx 

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import LayoutRouter from './components/LayoutRouter';

const App = () => {
  return (
    <Router>
      <LayoutRouter />
    </Router>
  );
};

export default App;
