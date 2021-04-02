/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import './Products.css';

class Products extends Component {
  render() {
    return(
      <div className="product">
        <div className="container">
          <div className="products">
            <h1>Portfólio</h1>
            <div className="product-boxs">
              <img src="/Img/box01.png" />
              <img src="/Img/box01.png" />
              <img src="/Img/box01.png" />
              <img src="/Img/box01.png" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Products;