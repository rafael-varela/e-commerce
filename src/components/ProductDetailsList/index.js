import React from 'react';
import ProductForm from '../ProductForm'
import './styles.css';

const ProductDetailsList = ({ data, addToCart, selectProduct }) => (
  <div className='product-list-details'>
    <div className='product-list-image' onClick={() => selectProduct(data)}>
      <img alt={data.name} src={data.picture}/>
    </div>
    <div className='product-list-description'>
      <p onClick={() => selectProduct(data)}><strong>{data.name}</strong> - {data.company}</p>
      <div className='product-list-price-wrapper'>
        <div className='product-list-price'>
          <p>{data.price}</p>
        </div>
        <ProductForm stock={data.stock} addToCart={(n) => addToCart(data, n)}/>
      </div>
    </div>
  </div>
);

export default ProductDetailsList;