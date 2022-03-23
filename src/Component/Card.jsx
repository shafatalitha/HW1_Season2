import React from 'react';
import data from '../data/data';

const Card=()=> {
  return (
    <div className='Card'>
      <div className='card-wrapper'>
        <img src={data.album.images[0].url} alt={data.album.name} className="card_img"/>

        <h3 className="card_album">{data.name}</h3>
        <h3 className="card_artist">{data.artists[0].name}</h3>
      </div>
      <div className='btn-wrapper'>
      <input type="submit" id="btn-submit" values="Search" />
      </div>
    
    </div>
  )
}
export default Card;


