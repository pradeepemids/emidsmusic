import React, { useState } from "react";
import "./AddPlaylist.css"; // Import custom CSS for styling
import playlistData from "./playlistData.json"; // Import the JSON file
import { useNavigate } from "react-router-dom";

function AddPlaylist() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    playlistName: "",
    genre: "",
    song: "",
    description: "",
    coverImage: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [tracks, setTracks] = useState([]); // State to hold tracks extracted from JSON
  const [selectedTrack, setSelectedTrack] = useState(null); // State to hold selected track

  const handleInputChange = (event) => {
    console.log(event.target);
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload
    const { playlistName, genre, song, description, coverImage } = formData;
    if (!playlistName || !genre || !song) {
      setSuccessMessage(null);
      setErrorMessage("Please provide both playlist name and genre.");
      return;
    }
    const newEntry = {
      id: playlistData.playlists.length + 1,
      title: playlistName,
      genre: genre,
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

    setFormData({ name: "", genre: "", songs: "" });
    console.log(playlistData);

    navigate(-1);
  };

  return (
    <div className="container">
      <h2 style={{ color: "white" }}>Add Playlist</h2>
      <form
        onSubmit={handleSubmit}
        className="form"
        style={{ borderRadius: "10px" }}>
        <div className="form-group mb-3">
          <label htmlFor="playlistName" style={{ color: "white" }}>
            Playlist Name<span style={{ color: "red" }}>*</span>:
          </label>
          <input
            type="text"
            className="form-control"
            id="playlistName"
            name="playlistName"
            value={formData.playlistName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="genre" style={{ color: "white" }}>
            Genre<span style={{ color: "red" }}>*</span>:
          </label>
          <select
            className="form-control"
            id="genre"
            name="genre"
            value={formData.genre}
            onChange={handleInputChange}
            required>
            <option value="">Select a genre</option>
            <option value="pop">Pop</option>
            <option value="rock">Rock</option>
            <option value="hiphop">Hip Hop</option>
            <option value="jazz">Jazz</option>
          </select>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="song" style={{ color: "white" }}>
            Add Song<span style={{ color: "red" }}>*</span>:
          </label>
          <select
            className="form-control"
            id="song"
            name="song"
            value={formData.song}
            onChange={handleInputChange}
            required>
            <option value="">Select a song</option>
            <option value="song1">Song 1</option>
            <option value="song2">Song 2</option>
            <option value="song3">Song 3</option>
          </select>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="description" style={{ color: "white" }}>
            Description:
          </label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="coverImage" style={{ color: "white" }}>
            Cover Image URL:
          </label>
          <input
            type="text"
            className="form-control"
            id="coverImage"
            name="coverImage"
            value={formData.coverImage}
            onChange={handleInputChange}
          />
        </div>
        {errorMessage && (
          <div className="alert alert-danger">{errorMessage}</div>
        )}
        <button type="submit" className="btn btn-primary neon-hover" style={{background: "#23c785"}}>
          Add
        </button>
      </form>
    </div>
  );
}

export default AddPlaylist;
