import React, { Component } from 'react';
import { connect } from 'react-redux';
import { testAction } from './actions';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            onClick={this.props.getHelloWorldMessage}
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getHelloWorldMessage: () => dispatch(testAction())
});

export default connect(null, mapDispatchToProps)(App);

