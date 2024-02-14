import React from "react";
import "./Dashboard.css";
import { useState, useEffect } from "react";
import axios from "axios";
import SongCard from "./../Shared/SongCard";
import ApiManager from "../Shared/ApiManager";

export default function Dashboard() {
  const [songs, setSongs] = useState([]);
  const [seachText, setSearchText] = useState("");
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
  return (
    <>
      <nav className="navbar">
        <div className="container-fluid">
          <form className="d-flex" role="search" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{ width: "900px" }}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button
              className="btn btn-outline-success"
              type="submit"
              style={{ color: "white" }}>
              Search
            </button>
          </form>
        </div>
      </nav>
      <div className="main-dashboardBody">
        <div className="songs-dashboard" style={{ height: "100%" }}>
          <div className="col">
            <div className="row">
              {songs.map((song, index) => {
                return (
                  <SongCard key={index} songsdata={song} />
                  /*  <div key={songsdata.album.id} className="col">
                    <div className="card" style={{ width: "12rem" }}>
                      <img
                        src={songsdata.album.cover_small}
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <a href="#" className="btn btn-primary">
                          Go somewhere
                        </a>
                      </div>
                    </div>
                  </div>*/
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
