import React from 'react';
import './PreviewCollection.scss';
import CollectionItem from '../CollectionItem/CollectionItem';

const PreviewCollection = ({ title, items }) => {
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title}</h1>
      <div className='preview'>
        {items
          .filter((_, id) => id < 4)
          .map(({ id, ...others }) => (
            <CollectionItem key={id} {...others} />
          ))}
      </div>
    </div>
  );
};

export default PreviewCollection;
