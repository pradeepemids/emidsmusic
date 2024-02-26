import * as React from "react";
import "./playlistStyles.css";
import SongCard from "./../Shared/SongCard";
import { useLocation } from "react-router-dom";
import ApiManager from "../Shared/ApiManager";

export default function Songs() {
  const [songs, setSongs] = React.useState([]);
  const [seachText, setSearchText] = React.useState("");

  var songsData = null;

  const location = useLocation();
    const state = location.state;

  const getSongs = (searchInput) => {
    ApiManager.getSongs(searchInput).then((result) => {
      console.log('result from API ====>', result)
      setSongs(result);
    });
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setQ();
    }
  };


  function setQ() {
    getSongs(seachText);
  }

  return (
    <>
      <h1
        style={{
          color: "#fff",
          align: "centre",
          margin: "auto",
          width: "18%",
          padding: "10px",
          paddingBottom: "40px",
        }}>
        {state.title}
      </h1>

        <div className="container-fluids">
          <div className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{ width: "800px" }}
              onChange={(e) => setSearchText(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button
              className="btn btn-outline-success"
              type="submit"
              onClick={setQ}
              style={{ color: "white" , background: "#23c785"}}>
              Search
            </button>
          </div>
        </div>
      <div className="main-songsBody">
        <div className="songs-dashboard" style={{ height: "100%" }}>
          <div className="col">
            <div className="row">
              { (songs.length==0)?
              state.tracks.map((song, index) => {
                return <SongCard key={index} songsdata={song} />;
              }) : songs.map((song, index) => {
                return <SongCard key={index} songsdata={song} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
