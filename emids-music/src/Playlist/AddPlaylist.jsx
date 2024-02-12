import React, { useState } from "react";
import "./AddPlaylist.css";
import playlistData from "./playlistData.json"; // Import the JSON file
import musicImg from "../music.jpg";

const AddPlaylist = () => {
  const [formData, setFormData] = useState({ name: "", genre: "" });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    const { name, genre } = formData;

    if (!name || !genre) {
      setSuccessMessage(null);
      setErrorMessage("Please provide both playlist name and genre.");
      return;
    }

    const newEntry = {
      id: playlistData.playlists.length + 1,
      title: name,
      image: "https://source.unsplash.com/user/c_v_r/1900x800",
      tracks: [
        {
          id: 1,
          title: "Track 1",
          artist: "Artist 1",
          image: "https://source.unsplash.com/user/c_v_r/1900x800",
          duration: "3:45",
        },
      ],
    };

    playlistData.playlists.push(newEntry);
    setSuccessMessage("Playlist added successfully!");
    setErrorMessage(null);

    setFormData({ name: "", genre: "" });
    console.log(playlistData);
  };

  return (
    <div className="login">
      <div className="base-container">
        <div>
          <img src={musicImg} alt="Emids Music" className="image" />
        </div>
        <div className="login-form">
          <div className="header">Add Playlist</div>
          <div className="content">
            <div className="form">
              <div className="form-group">
                <label htmlFor="name">Playlist name</label>
                <input
                  value={formData.name}
                  onChange={handleInputChange}
                  type="text"
                  name="name"
                  placeholder="Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="genre">Genre</label>
                <input
                  value={formData.genre}
                  onChange={handleInputChange}
                  type="text"
                  name="genre"
                  placeholder="Genre"
                />
              </div>
            </div>
          </div>
          <div className="footer">
            <button type="button" className="btn" onClick={handleSubmit}>
              Add Playlist
            </button>
          </div>
          {successMessage && (
            <p className="success-message">{successMessage}</p>
          )}
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default AddPlaylist;
