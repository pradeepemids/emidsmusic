import React from "react";
import "./Dashboard.css";
import { useState, useEffect } from "react";
import SongCard from "./../Shared/SongCard";
import ApiManager from "../Shared/ApiManager";

export default function Dashboard() {
  const [songs, setSongs] = useState([]);
  const [seachText, setSearchText] = useState("");
  const [CurrentPlayingsong, setcurrentplayingSong] = useState("");

  const getSongs = (searchInput) => {
    ApiManager.getSongs(searchInput).then((result) => {
      console.log('result from API ====>', result)
      setSongs(result);
    });
  };
  useEffect(() => {
    getSongs("trending");
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
    getSongs(seachText);
  }

  const pauseCardAudio = (id) => {
    if(CurrentPlayingsong!="")
    {
      if(CurrentPlayingsong!=id)
      {
        document.getElementById(CurrentPlayingsong).pause();
        setcurrentplayingSong(id);
      }     
    }
    else{
      setcurrentplayingSong(id);
    }
  }

  return (
    <div className="dashboard-container">
      <div className="container-fluid" style={{ background: "#0A1172" }}>
        <form className="d-flex" role="search" aria-label="search-form" onSubmit={handleSearch}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className="btn btn-outline-success" type="submit" style={{ color: "white", background: "#23c785" }}>
            Search
          </button>
        </form>
      </div>

      <div className="main-dashboardBody">
        <div className="songs-dashboard">
        <p className="Trending-Txt">Trending Songs</p>
          <div className="col">
            <div className="row">
              {songs.map((song, index) => {
                return (
                  <SongCard key={index} songsdata={song} parentFunction={pauseCardAudio}/>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
