import React from 'react';
import axios from 'axios';
import './App.css';
import SelectPizza from '../SelectPizza/SelectPizza'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

function App() {

  return (
    <Router>

      <div className='App'>
        <div className='links'>
          <Link to='/api'>Home</Link>
          <Link to='/api/pizza'>Pizza Selection</Link>
          <Link to='/api/order'>Checkout</Link>
        </div>
        <header className='App-header'>
          <h1 className='App-title'>Prime Pizza</h1>
        </header>
        <Route path='/api' exact>
          <img src='images/pizza_photo.png' />
          <p>Pizza is great.</p>
        </Route>
        <Route path='/api/pizza'>
          <SelectPizza />
        </Route>
        <Route path='api/order'>
          {/* put customer details component here
        customer details will lead to the checkout page, 
        but I don't think there should be a link for the checkout page specifically */}
        </Route>
      </div>
    </Router>
  );
}

export default App;
