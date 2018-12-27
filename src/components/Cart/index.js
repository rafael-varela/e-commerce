import React from 'react';
import './styles.css';

const getSubtotal = (price, quantity) => {
  const p = Number(price.replace('$', '').replace(',',''))
  const q = Number(quantity)
  return `$${q*p}`;
}

const getTotal = (data) => {
  let total = 0;
  data.forEach(product => {
    total += Number(getSubtotal(product.price, product.quantity).replace('$', ''))
  })
  return `$${total}`;
}

const Cart = ({ data }) => (
  <div className='cart-container'>
    {data.map(product => (
      <div className='cart-product' key={product._id}>
        <div className='cart-product-image'>
          <img alt={product.name} src={product.picture}/>
        </div>
        <div className='cart-product-description'>
          <p><strong>{product.name}</strong> - {product.company}</p>
          <p>Price: {product.price}</p>
          <p>Quantity: {product.quantity}</p>
          <p>Subtotal: {getSubtotal(product.price, product.quantity)}</p>
        </div>
      </div>
    ))}
    <div className='cart-total'>
      <p>Total: {getTotal(data)}</p>
      <button className='cart-button'>Buy</button>
    </div>
  </div>
)

export default Cart;