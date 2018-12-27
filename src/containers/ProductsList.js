import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from '../components/ProductsList/index';
import { getProductsList } from '../actions'

class ProductsList extends Component {

  componentDidMount() {
    this.props.getProductsList();
  }

  render() {
    return (
      <Products
        data={this.props.productsList}
      />
    )
  }
}

const mapStateToProps = state => ({
  productsList: state.productsList
})

const mapDispatchToProps = dispatch => ({
  getProductsList: () => dispatch(getProductsList())
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);