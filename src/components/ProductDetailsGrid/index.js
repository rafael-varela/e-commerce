import React from 'react';
import ProductForm from '../ProductForm'
import './styles.css';

const ProductDetailsGrid = ({ data, addToCart, selectProduct }) => (
  <div className='product-details'>
    <div className='product-image' onClick={() => selectProduct(data)}>
      <img alt={data.name} src={data.picture}/>
    </div>
    <div className='product-description' onClick={() => selectProduct(data)}>
      <p><strong>{data.name}</strong> - {data.company}</p>
    </div>
    <div className='product-price-wrapper'>
      <div className='product-price'>
        <p>{data.price}</p>
      </div>
      <ProductForm stock={data.stock} addToCart={(n) => addToCart(data, n)}/>
    </div>
  </div>
);

export default ProductDetailsGrid;