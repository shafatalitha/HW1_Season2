import React, { useState } from "react";
import "./index.css";

interface IProps{
  img: string,
  title: string,
  artist: string,
  toggleSelect :()=>void;
}

const Tracks : React.FC<IProps> = ({ title, artist, img,  toggleSelect }) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const handleToggleSelect : () =>void=()=> {
    setIsSelected(!isSelected);
    toggleSelect();
  };
  return (
    <div datatest-id="playlist-tracks" className="card">
      <img src={img} alt={title} className="card_img" />

      <div className="card-wrapper">
        <h3 className="card_album">{title}</h3>
        <h3 className="card_artist">{artist}</h3>
       

        <button className="btn-select" onClick={handleToggleSelect}>
          {isSelected ? "Deselect" : "Select"}
        </button>
      </div>
    </div>
  );
};
export default Tracks;
