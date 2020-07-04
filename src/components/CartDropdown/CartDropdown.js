import React from 'react';
import CustomButton from '../Custom/CustomButton';
import './CartDropdown.scss';
const CartDropdown = () => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'></div>
      <CustomButton>Go to Checkout</CustomButton>
    </div>
  );
};

export default CartDropdown;
