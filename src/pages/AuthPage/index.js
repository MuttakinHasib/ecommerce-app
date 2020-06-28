import React from 'react';
import SignIn from '../../components/SignIn/SignIn';
import './SignIn_SignUp_Page.scss';
import SignUp from '../../components/SignUp/SignUp';

const index = () => {
  return (
    <div className='sign-in-and-sign-up'>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default index;
