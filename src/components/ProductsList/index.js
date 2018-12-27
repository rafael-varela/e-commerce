import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import ProductDetails from '../ProductDetails'

const ProductsList = props => (
  <div className='products-list-wrapper'>
    <div className='products-list'>
      {props.data.map(product => (
        <ProductDetails data={product} key={product._id}/>
      ))}
    </div>
  </div>
);

ProductsList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default ProductsList;