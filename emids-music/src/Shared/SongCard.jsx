import React from "react";
import { CircularProgress } from "@mui/material";

function SongCard({ songsdata }) {
  if (!songsdata && !!songsdata.length) {
    return <CircularProgress />;
  } else {
    return (
      <div key={songsdata.album.id} className="col">
        <div
          className="card"
          style={{ width: "16rem", alignItems: "left", height: "100%" }}>
          <img
            src={songsdata.album.cover_medium}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5
              className="card-title"
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                fontSize: "15px",
              }}>
              {songsdata.title}
            </h5>
            <p className="card-text">Artist: {songsdata.artist.name}</p>
            {
              <audio
                src={songsdata.preview}
                controls
                className="audio-play"
                style={{ width: "230px" }}></audio>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default SongCard;
