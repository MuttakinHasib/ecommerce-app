import React, { useState } from 'react';
import './SignUp.scss';
import FormInput from '../Form/FormInput';
import CustomButton from '../Custom/CustomButton';
import { auth, createUserProfileDocument } from '../../Firebase/Utils';

const SignUp = () => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    inputFiledEmpty();

    if (password !== confirmPassword) {
      alert(`Password don't match`);
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      createUserProfileDocument(user, { displayName });
    } catch (err) {
      console.log(err);
    }
  };

  const inputFiledEmpty = () => {
    setDisplayName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className='sign-up'>
      <h2 className='title'>I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit} className='sign-up-form'>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          handleChange={e => setDisplayName(e.target.value)}
          label='Display Name'
          required
        />
        <FormInput
          type='text'
          name='email'
          value={email}
          handleChange={e => setEmail(e.target.value)}
          label='Email'
          required
        />
        <FormInput
          type='text'
          name='password'
          value={password}
          handleChange={e => setPassword(e.target.value)}
          label='Password'
          required
        />
        <FormInput
          type='text'
          name='confirmPassword'
          value={confirmPassword}
          handleChange={e => setConfirmPassword(e.target.value)}
          label='Confirm Password'
          required
        />
        <CustomButton type='submit'>Sign up with Email</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
