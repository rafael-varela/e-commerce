import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductsGrid from '../components/ProductsGrid/index';
import { getProductsData, addToCart } from '../actions'

class Products extends Component {

  componentDidMount() {
    this.props.getProductsData();
  }

  render() {
    return (
      <ProductsGrid
        data={this.props.productsData}
        addToCart={this.props.addToCart}
      />
    )
  }
}

const mapStateToProps = state => ({
  productsData: state.productsData,
  grid: state.grid
})

const mapDispatchToProps = dispatch => ({
  getProductsData: () => dispatch(getProductsData()),
  addToCart: (data, n) => dispatch(addToCart(data, n))
})

export default connect(mapStateToProps, mapDispatchToProps)(Products);