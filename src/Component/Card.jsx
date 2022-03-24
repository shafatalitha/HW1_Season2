import React from 'react';




const Card=({title,artist,img})=> {
  return (
    <div className='Card'>
      <div className='card-wrapper'>
        <img src={img} alt={title} className="card_img"/>

        <h3 className="card_album">{title}</h3>
        <h3 className="card_artist">{artist}</h3>
      </div>
      <div className='btn-wrapper'>
      <input type="submit" id="btn-submit" values="Search" />
      </div>
    
    </div>
  )
}
export default Card;


