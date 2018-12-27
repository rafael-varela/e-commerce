import React from 'react';
import './styles.css';

const ProductDetails = ({ data }) => (
  <div className='product-details'>
    <div className='product-image'>
      <img alt={data.name} src={data.picture}/>
    </div>
    <div className='product-description'>
      <p><strong>{data.name}</strong> - {data.company}</p>
    </div>
    <div className='product-price-wrapper'>
      <div className='product-price'>
        <p>{data.price}</p>
      </div>
    </div>
  </div>
);

export default ProductDetails;