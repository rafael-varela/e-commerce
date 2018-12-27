import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';

const AppHeader = props => (
  <Header cart={props.cart}/>
)
const mapStateToProps = state => ({
  cart: state.cart
});

export default connect(mapStateToProps)(AppHeader);