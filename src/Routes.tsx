import React from 'react';
import {BrowserRouter, Routes as Rout, Route} from 'react-router-dom'
import { StarWarsRest } from './pages/star-wars-rest';
import { StarWars } from './pages/star-wars';
import './global.css';

function Routes() {
  return (
    <BrowserRouter>
      <Rout>
        <Route path="/" element={<StarWars/>} />
        <Route path="/StarWarsRest" element={<StarWarsRest />} />
      </Rout>
    </BrowserRouter>
  );
}

export default Routes;