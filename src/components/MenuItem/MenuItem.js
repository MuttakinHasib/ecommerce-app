import React from 'react';
import './MenuItem.scss';
import { withRouter } from 'react-router-dom';

const MenuItem = ({ title, imgUrl, linkUrl, history, match }) => {
  return (
    <div
      className='menu-item'
      style={{ backgroundImage: `url(${imgUrl})` }}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div className='content'>
        <h1 className='title'>{title}</h1>
        <span className='subtitle'>Shop Now</span>
      </div>
    </div>
  );
};
export default withRouter(MenuItem);
