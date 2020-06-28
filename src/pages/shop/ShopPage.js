import React, { useState, useEffect } from 'react';
import SHOP_DATA from './ShopData';
import PreviewCollection from '../../components/PreviewCollection/PreviewCollection';

const ShopPage = () => {
  const [collections, setCollections] = useState([]);
  useEffect(() => setCollections(SHOP_DATA), []);

  return (
    <div className='shop-page'>
      {collections.map(({ id, ...others }) => (
        <PreviewCollection key={id} {...others} />
      ))}
    </div>
  );
};

export default ShopPage;
