import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import ProductDetailsGrid from '../ProductDetailsGrid'

const ProductsGrid = ({data, addToCart, selectProduct}) => (
  <div className='products-grid-wrapper'>
    <div className='products-grid'>
      {data.map(product => (
        <ProductDetailsGrid
          selectProduct={selectProduct}
          data={product}
          addToCart={addToCart}
          key={product._id}
        />
      ))}
    </div>
  </div>
);

ProductsGrid.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  addToCart: PropTypes.func.isRequired
}

export default ProductsGrid;