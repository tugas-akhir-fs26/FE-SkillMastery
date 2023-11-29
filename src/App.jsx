import React from 'react';
import Instruktur from './pages/instruktur';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Instruktur />} />
      </Routes>
    </Router>
  );
};

export default App;
