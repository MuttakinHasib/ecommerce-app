import React from 'react';
import './SignIn.scss';
import { useState } from 'react';
import FormInput from '../Form/FormInput';
import CustomButton from '../Custom/CustomButton';
import { signInWithGoogle, auth } from '../../Firebase/Utils';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setEmail('');
      setPassword('');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type='email'
          name='Email'
          value={email}
          required
          handleChange={e => {
            e.preventDefault();
            setEmail(e.target.value);
          }}
          label='Email'
        />
        <FormInput
          type='password'
          name='Password'
          handleChange={e => {
            e.preventDefault();
            setPassword(e.target.value);
          }}
          value={password}
          required
          label='Password'
        />
        <div className='buttons'>
          <CustomButton type='submit'>Sign in</CustomButton>
          <CustomButton isGoogleSignIn onClick={signInWithGoogle}>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
