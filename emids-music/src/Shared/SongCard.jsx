import React from "react";
import { CircularProgress } from "@mui/material";

function SongCard({ songsdata }) {
  if (!songsdata && !!songsdata.length) {
    return <CircularProgress />;
  } else {
    return (
      <div
        key={songsdata.album.id}
        className="col"
        style={{ marginBottom: "20px", marginTop: "20px" }}>
        <div className="card" style={{ width: "12rem" }}>
          <img
            src={songsdata.album.cover_small}
            className="card-img-top"
            alt="..."
            width="190" // Set the default width
            height="190"
          />
          <div className="card-body">
            <h5
              className="card-title"
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}>
              {songsdata.title}
            </h5>
            <p className="card-text">Some quick example text</p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default SongCard;
