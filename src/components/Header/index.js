import React, { Component } from 'react';
import Cart from '../Cart'
import './style.css';

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showCart: false
    }
  }

  onClick = () => {
    const { showCart } = this.state
    this.setState(() => ({ showCart: !showCart }))
  }

  render() {
    const { showCart } = this.state;
    return (
      <div className="header">
        <h1>e-Commerce</h1>
        <div>
          <i
            className="fas fa-shopping-cart fa-2x"
            onClick={this.onClick}
          />
          {showCart && (
            <Cart
              buyProducts={this.props.buyProducts}
              data={this.props.cart}
            />
          )}
        </div>
      </div>
    )
  }
}

export default Header;