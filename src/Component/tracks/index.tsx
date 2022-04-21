import React, { useState } from "react";
import "./index.css";
import Button from "@mui/material/Button";

interface IProps {
  img: string;
  title: string;
  artist: string;
  duration: string;
  toggleSelect: () => void;
}

const Tracks: React.FC<IProps> = ({ title, artist, img,duration, toggleSelect }) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const handleToggleSelect: () => void = () => {
    setIsSelected(!isSelected);
    toggleSelect();
  };

  const ButtonStyles = {
    fontSize: '0.6rem',
    fontWeight: 600,
    textTransform: 'capitalize',
    borderRadius: 2.5,
    '&.MuiButton-contained': {
        backgroundColor: "rgb(30, 215, 96)",
        '&:hover': {
            backgroundColor: "rgb(29, 185, 84)",
        }
    }};
  return (
    <div datatest-id="playlist-tracks" className="card">
      <img src={img} alt={title} className="card_img" />

      <div className="card-wrapper">
        <h3 className="card_album">{title}</h3>
        <h3 className="card_artist">{artist}</h3>
        <h3 className="card_duration">{duration}</h3>

        <Button
          className="btn-select"
          onClick={handleToggleSelect}
          type="submit"
          size="small"
          variant="contained"
          sx={ButtonStyles}
        >
          {isSelected ? "Deselect" : "Select"}
        </Button>
      </div>
    </div>
  );
};
export default Tracks;
