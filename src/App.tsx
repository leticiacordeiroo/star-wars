import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { StarWarsRest } from './pages/star-wars-rest';
import { StarWars } from './pages/star-wars';
import './global.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StarWars/>} />
        <Route path="/StarWarsRest" element={<StarWarsRest />} />
      </Routes>
    </Router>
  );
}

export default App;
