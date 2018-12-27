import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductsGrid from '../components/ProductsGrid';
import ProductsList from '../components/ProductsList';
import SelectedProductDetails from '../components/SelectedProductDetails';
import { getProductsData, addToCart, selectProduct } from '../actions'

class Products extends Component {

  componentDidMount() {
    this.props.getProductsData();
  }

  render() {
    const { grid, productsData, addToCart, selectedProduct, selectProduct } = this.props
    return (
      selectedProduct ? (
        <SelectedProductDetails
          data={selectedProduct}
          addToCart={addToCart}
          goBack={() => selectProduct(null)}
        />
      ) : grid ? (
        <ProductsGrid
          data={productsData}
          addToCart={addToCart}
          selectProduct={selectProduct}
        />
      ) : (
        <ProductsList
          data={productsData}
          addToCart={addToCart}
          selectProduct={selectProduct}
        />
      )
    )
  }
}

const mapStateToProps = state => ({
  productsData: state.productsData,
  grid: state.grid,
  selectedProduct: state.selectedProduct
})

const mapDispatchToProps = dispatch => ({
  getProductsData: () => dispatch(getProductsData()),
  addToCart: (data, n) => dispatch(addToCart(data, n)),
  selectProduct: (data) => dispatch(selectProduct(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Products);