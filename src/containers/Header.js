import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';

class AppHeader extends Component {

  render() {
    return (
      <Header/>
    )
  }
}

export default connect(null, null)(AppHeader);