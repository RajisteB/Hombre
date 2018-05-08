import React from 'react';
import './Buttons.css'

const AddToCartBtn = () => {
  return (
    <button className='add-to-cart-btn btn'>
      <i className="fas fa-cart-plus"></i>
      Add to Cart
    </button>
  )
}

export default AddToCartBtn;