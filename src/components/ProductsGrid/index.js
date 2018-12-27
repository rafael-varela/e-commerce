import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import ProductDetails from '../ProductDetails'

const ProductsGrid = ({data, addToCart}) => (
  <div className='products-list-wrapper'>
    <div className='products-list'>
      {data.map(product => (
        <ProductDetails
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