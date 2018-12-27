import React, { Component } from 'react';

import Header from './containers/Header';
import Filters from './containers/Filters'
import ProductsList from './containers/ProductsList'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Filters/>
        <ProductsList/>
      </div>
    );
  }
}

export default App;

