import React, { Component } from 'react';
import './styles.css';

class ProductForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      value: 1
    }
  }

  onChange = e => {
    const value = Number(e.target.value);
    this.setState({ value });
  }

  render() {
    const { value } = this.state;
    const { stock, addToCart } = this.props
    return (
      <div className='product-form'>
        <input
          type='number'
          value={value}
          min='1'
          max={stock}
          onChange={this.onChange}
        />
        <button onClick={() => addToCart(value)}>Add to cart</button>
      </div>
    )
  }
}

export default ProductForm;