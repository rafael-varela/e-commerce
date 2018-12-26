import React, { Component } from 'react';

import Header from './containers/Header';
import ProductsList from './containers/ProductsList'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <ProductsList/>
      </div>
    );
  }
}

export default App;

