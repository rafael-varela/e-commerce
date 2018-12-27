import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from '../components/ProductsList/index';
import { getProductsList, addToCart } from '../actions'

class ProductsList extends Component {

  componentDidMount() {
    this.props.getProductsList();
  }

  render() {
    return (
      <Products
        data={this.props.productsList}
        addToCart={this.props.addToCart}
      />
    )
  }
}

const mapStateToProps = state => ({
  productsList: state.productsList
})

const mapDispatchToProps = dispatch => ({
  getProductsList: () => dispatch(getProductsList()),
  addToCart: (data, n) => dispatch(addToCart(data, n))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);