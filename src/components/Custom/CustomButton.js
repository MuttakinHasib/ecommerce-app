import React from 'react';
import './CustomButton.scss';
const CustomButton = ({ children,inverted, isGoogleSignIn, ...others }) => {
  return (
    <button
      className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
      {...others}
    >
      {children}
    </button>
  );
};

export default CustomButton;
