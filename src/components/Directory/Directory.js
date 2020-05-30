import React from 'react';
import './Directory.scss';
import MenuItem from '../MenuItem/MenuItem';

const Directory = () => {
  // const [sections, setSections] = useState([
  const sections = [
    {
      id: 1,
      title: 'Hats',
      imgUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      linkUrl: 'hats',
    },
    {
      id: 2,
      title: 'Jackets',
      imgUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      linkUrl: '',
    },
    {
      id: 3,
      title: 'Sneakers',
      linkUrl: '',
      imgUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    },
    {
      id: 4,
      linkUrl: '',
      title: 'Children',
      imgUrl:
        'https://www.actionagainsthunger.org/sites/default/files/styles/story_header_large/public/images/stories/JO_OTH_2017_Lys_Arango005.jpg?itok=D91i_UJY&timestamp=1521209745',
    },
    {
      id: 5,
      linkUrl: '',
      title: 'Mens',
      imgUrl:
        'https://www.unicefusa.org/sites/default/files/field-images/story-teaser/2014/syria-boys-water-420.jpg',
    },
  ];

  return (
    <div className='directory-menu'>
      {sections.map(({ id, ...otherProps }) => (
        <MenuItem key={id} {...otherProps} />
      ))}
    </div>
  );
};

export default Directory;
