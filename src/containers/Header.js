import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { buyProducts } from '../actions'

const AppHeader = props => (
  <Header cart={props.cart} buyProducts={props.buyProducts}/>
)
const mapStateToProps = state => ({
  cart: state.cart
});

const mapDispatchToProps = dispatch => ({
  buyProducts: () => dispatch(buyProducts())
})

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);