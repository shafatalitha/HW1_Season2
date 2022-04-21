import React, { useState } from "react";
import { useSelector } from "react-redux";
import { addTracksToPlaylist, createPlaylist } from "../../lib/fetchApi";
import { Button } from "@mui/material";
import "./index.css"
const sendFormNetworkCall = (data) => console.log(data);

const Form = ({ uriTracks }) => {
  const accessToken = useSelector((state) => state.auth.accessToken);
  const userId = useSelector((state) => state.auth.user.id);
  const [form, setForm] = useState({
    title: "",
    description: "",
  });

  const handleForm = async (e) => {
    e.preventDefault();
    sendFormNetworkCall(form);

    try {
      const responseCreatePlaylist = await createPlaylist(accessToken, userId, {
        name: form.title,
        description: form.description,
      });

      await addTracksToPlaylist(
        accessToken,
        responseCreatePlaylist.id,
        uriTracks
      );

      alert("Playlist created successfully");

      setForm({ title: "", description: "" });
    } catch (error) {
      alert("error");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    console.log(form);
  };
  const ButtonStyles = {
    fontSize: "0.7rem",
    fontWeight: 700,
    textTransform: "capitalize",
    borderRadius: 2.5,
    "&.MuiButton-contained": {
      backgroundColor: "rgb(30, 215, 96)",
      "&:hover": {
        backgroundColor: "rgb(29, 185, 84)",
      },
    },
  };

  return (
    <form className="form" onSubmit={handleForm}>
      <div className="form__content">
        <div className="form__header">
          <h4 className="form__title">Create Playlist</h4>
        </div>
        <div className="form__body">
          <div className="title">
            <p htmlFor="title">Title</p>
            <input
              className="input"
              minLength={10}
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="desc">
            <p htmlFor="description">Description</p>
            <input
              className="input"
              type="text"
              name="description"
              value={form.description}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form__footer">
          <Button
            type="submit"
            size="small"
            sx={ButtonStyles}
            className="submit"
            variant="contained"
          >
            Create
          </Button>
        </div>
      </div>
    </form>
  );
};

export default Form;
