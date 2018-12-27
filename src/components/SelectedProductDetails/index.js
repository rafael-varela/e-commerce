import React, { Component, Fragment } from 'react';
import ProductForm from '../ProductForm'
import './styles.css';

class ProductDetailsList extends Component {

  render() {
    const { data, addToCart, goBack } = this.props
    return (
      <Fragment>
        <div className="go-back">
          <a onClick={goBack}>Go back</a>
        </div>
        <div className='selected-product-wrapper'>
          <div className='selected-product-details'>
            <div className='selected-product-image'>
              <img alt={data.name} src={data.picture}/>
            </div>
            <div className='selected-product-description'>
              <p><strong>{data.name}</strong> - {data.company}</p>
              <p>{data.description}</p>
              <div className='selected-product-price-wrapper'>
                <div className='selected-product-price'>
                  <p>{data.price}</p>
                </div>
                <div className='selected-product-form'>
                  <ProductForm stock={data.stock} addToCart={(n) => addToCart(data, n)}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default ProductDetailsList;