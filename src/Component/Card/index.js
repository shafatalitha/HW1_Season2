import React, { useState } from "react";
import "./index.css";


const Card = ({ title, artist, img, albumname, toggleSelect }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleToggleSelect = () => {
    setIsSelected(!isSelected);
    toggleSelect();
  };
  return (
    <div className="card">
      <img src={img} alt={title} className="card_img" />

      <div className="card-wrapper">
        <h3 className="card_album">{title}</h3>
        <h3 className="card_artist">{artist}</h3>
        <h3 className="card_name_album">{albumname}</h3>

        <button className="btn-select" onClick={handleToggleSelect}>
          {isSelected ? "Deselect" : "Select"}
        </button>
      </div>
    </div>
  );
};
export default Card;
