import * as React from "react";
import "./playlistStyles.css";
import "./../Dashboard/Dashboard.css";
import { useEffect } from "react";
import axios from "axios";
import SongCard from "./../Shared/SongCard";

export default function Songs() {
  const [songs, setSongs] = React.useState([]);

  var songsData = null;

  const getSongs = async () => {
    const { data } = await axios.get(
      "https://deezerdevs-deezer.p.rapidapi.com/search",
      {
        headers: {
          "X-RapidAPI-Key":
            "1f098edf05msh22b8c9bc4a1753ep17ea78jsn2ab728790b37",
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        },
        params: { q: "trending" },
      }
    );

    setSongs(data.data);
    songsData = data.data;
  };
  useEffect(() => {
    getSongs();
  }, []);

  function setQ(data) {
    console.log(data);
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
          paddingBottom: "50px",
        }}>
        Songs
      </h1>

      <nav className="navbar">
        <div className="container-fluid ">
          <div className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{ width: "900px" }}
              onClick={(e) => setQ(e.target.value)}
            />
            <button
              className="btn btn-outline-success"
              type="submit"
              style={{ color: "white" }}>
              Search
            </button>
          </div>
        </div>
      </nav>
      <div className="main-dashboardBody">
        <div className="songs-dashboard" style={{ height: "100%" }}>
          <div className="col">
            <div className="row">
              {songs.map((song, index) => {
                return <SongCard key={index} songsdata={song} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
