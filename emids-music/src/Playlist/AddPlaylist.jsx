import React, { useState, useEffect } from "react";
import "./AddPlaylist.css";
import playlistData from "../Json/playlistData.json";
import { useNavigate, useLocation } from "react-router-dom";
import ApiManager from "../Shared/ApiManager";
import Select from "react-select";

function AddPlaylist({}) {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state;
  const getPrefilledData = () => {
    const matchingPlaylist = playlistData.playlists.find(
      (playlist) => playlist.id === state
    );

    return matchingPlaylist
      ? {
          playlistName: matchingPlaylist.title,
          genre: matchingPlaylist.genre[0],
          song: [],
          coverImage: matchingPlaylist.image,
        }
      : {
          playlistName: "",
          genre: "",
          song: [],
          coverImage: "",
        };
  };

  const [formData, setFormData] = useState(getPrefilledData());
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [genres, setGenres] = useState(null);
  const [songsTest, setSongsTest] = useState([]);
  const [skills, setSkills] = useState([]);

  const handleInputChange = (event) => {
    const { name, value, options } = event.target;
    if (!options) {
      setFormData({ ...formData, [name]: value });
      return;
    }

    const songList = Array.from(options).filter((option) => option.selected);
    let selectedSong = songsTest.filter(
      (x) => x.id == Number(songList[0]?.value)
    );
    setFormData({ ...formData, [name]: selectedSong });
  };

  const handleSongsChange = (skills) => {
    let data = [];
    skills.forEach((element) => {
      const filteredSongs = songsTest.filter((x) => x.id == element.value);
      data.push(...filteredSongs);
    });
    console.log(skills, "skills");
    setSkills(skills || []);
    setFormData({ ...formData, name: data });
  };

  const handleGenreInputChange = (event) => {
    const { name, value, options } = event.target;
    if (!options) {
      setFormData({ ...formData, [name]: value });
      return;
    }

    const selectedSongs = Array.from(options)
      .filter((option) => option.selected)
      .map((option) => ({
        id: option.value,
        title: option.text,
      }));

    setFormData({ ...formData, [name]: selectedSongs });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { playlistName, genre, coverImage } = formData;
    if (!playlistName || !genre) {
      setSuccessMessage(null);
      setErrorMessage("Please provide both playlist name, genre, and song.");
      return;
    }
    let mm = Array.isArray(genre) ? genre[0] : genre;

    const newEntry = {
      id: !!state ? Number(state) : playlistData.playlists.length + 1,
      title: playlistName,
      genre: [{ id: mm.id, title: mm.title }],
      image:
        coverImage ||
        "https://pixabay.com/photos/guitar-player-music-guitarist-5043613/",
      tracks: formData.name,
    };

    if (!!state) {
      let updatedArray = playlistData.playlists.map((obj) => {
        if (obj.id == state) {
          return newEntry;
        } else {
          return obj;
        }
      });
      playlistData.playlists = updatedArray;
    } else {
      playlistData.playlists.push(newEntry);
    }
    setSuccessMessage("Playlist added successfully!");
    setErrorMessage(null);
    setFormData({
      playlistName: "",
      genre: "",
      song: [],
      coverImage: "",
    });
    navigate(-1);
  };

  const getGenres = () => {
    const genresWithIds = playlistData.playlists.map((playlist) => ({
      id: playlist.id,
      title: playlist.genre[0].title,
    }));
    setGenres(genresWithIds);
  };

  const getSongs = (searchInput) => {
    ApiManager.getSongs(searchInput).then((result) => {
      console.log("result from API ====>", result);
      setSongsTest(result);
    });
  };

  const options = songsTest.map((songItem) => ({
    value: songItem.id,
    label: songItem.title,
  }));

  useEffect(() => {
    getGenres();
    getSongs("trending");
  }, []);

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
            value={formData.genre.id}
            onChange={(event) => handleGenreInputChange(event)}>
            <option value="">Select a genre</option>
            {genres &&
              genres.map((genreItem) => {
                return (
                  <option key={genreItem.id} value={genreItem.id}>
                    {genreItem.title}
                  </option>
                );
              })}
          </select>
        </div>

        <div className="form-group mb-3">
          <label htmlFor="song" style={{ color: "white" }}>
            Songs<span style={{ color: "red" }}>*</span>:
          </label>
          <Select
            className="form-control"
            id="song"
            name="song"
            options={options}
            onChange={handleSongsChange}
            value={skills}
            isMulti
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
        <button
          type="submit"
          className="btn btn-primary neon-hover"
          style={{ background: "#23c785" }}>
          Add
        </button>
      </form>
    </div>
  );
}

export default AddPlaylist;
