import React, { Component } from 'react';

import Header from './containers/Header';
import Filters from './containers/Filters'
import Products from './containers/Products'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Filters/>
        <Products/>
      </div>
    );
  }
}

export default App;

