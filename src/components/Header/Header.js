import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './Header.scss';
import { auth } from '../../Firebase/Utils';

const Header = ({ user }) => {
  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          Shop
        </Link>
        <Link className='option' to='/contact'>
          Contact
        </Link>
        {user ? (
          <Link className='option' to='/' onClick={() => auth.signOut()}>
            Sign out
          </Link>
        ) : (
          <Link className='option' to='/signin'>
            Sign in
          </Link>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({ user: state.user.user });

export default connect(mapStateToProps)(Header);
