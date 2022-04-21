import React, { ChangeEventHandler, FormEventHandler, useState } from "react";
import { searchTrack } from "../../lib/fetchApi";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
import { TRootState } from "../../store";
import "./index.css"
interface IProps {
  onSuccess: (tracks: any[], text: string) => void;
}

const Search: React.FC<IProps> = ({ onSuccess }) => {
  const accessToken: string = useSelector(
    (state: TRootState) => state.auth.accessToken
  );

  const [text, setText] = useState<string>("");

  const handleInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    setText(e.target.value);
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    try {
      const response = await searchTrack(text, accessToken);

      const tracks = response.tracks.items;
      onSuccess(tracks, text);
    } catch (e) {
      alert(e);
    }
  };

  const ButtonStyles = {
    fontSize: '0.7rem',
    fontWeight: 700,
    textTransform: 'capitalize',
    borderRadius: 2.5,
    '&.MuiButton-contained': {
        backgroundColor: "rgb(30, 215, 96)",
        '&:hover': {
            backgroundColor: "rgb(29, 185, 84)",
        }
    }};

  return (
    <form className="form-search" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Search..."
        className="form-search-input"
        required
        onChange={handleInput}
        data-testid="input-search"
      />
    
      <Button
        type="submit"
        size="medium"
        variant="contained"
        className="btn-search"
        data-testid="button-search"
        sx={ButtonStyles}
      >
        Search
      </Button>
    </form>
  );
};

export default Search;
