import React from 'react';

const Flowers = ({ image, name, price, tags }) => {
  return (
    <div className='card' style={{ width: '18rem'}}>
      <img className='flowerImg' src={image} alt={name} />
      <div className='flowerHeader'>
        <h5 className='flowerName'>{name}</h5>
        <span className='price'>${price}</span>
      </div>
      {/* another for .map here? */}
      <span className='tag'>{tags[0]}</span>
      <span className='tag'>{tags[1]}</span>
      <span className='tag'>{tags[2]}</span>
      <span className='tag'>{tags[3]}</span>
    </div>
  );
}

export default Flowers;