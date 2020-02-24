import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import { Home, About, Contact, Navigation } from './components';

const App = () => (
  <div>
    <Navigation />
    <Route exact path='/'>Home Content</Route>
    <Route path='/about'>About Content</Route>
    <Route path='/contact'>Contact Content</Route>
  </div>
);

export default App;
