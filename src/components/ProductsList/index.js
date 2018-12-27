import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import ProductDetailsList from '../ProductDetailsList'

const ProductsList = ({data, addToCart}) => (
  <div className='products-list-wrapper'>
    <div className='products-list'>
      {data.map(product => (
        <ProductDetailsList
          data={product}
          addToCart={addToCart}
          key={product._id}
        />
      ))}
    </div>
  </div>
);

ProductsList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  addToCart: PropTypes.func.isRequired
}

export default ProductsList;