import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductsGrid from '../components/ProductsGrid';
import ProductsList from '../components/ProductsList';
import { getProductsData, addToCart } from '../actions'

class Products extends Component {

  componentDidMount() {
    this.props.getProductsData();
  }

  render() {
    const { grid, productsData, addToCart } = this.props
    return (
      grid ? (
        <ProductsGrid
          data={productsData}
          addToCart={addToCart}
        />
      ) : (
        <ProductsList
          data={productsData}
          addToCart={addToCart}
        />
      )
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