import React from "react";
import PlaylistTable from "../PlaylistTable/PlaylistTable";

function Playlist() {
  return (
    <>
      <div data-testid="playlist-table">
        <h1
          style={{
            color: "#fff",
            align: "centre",
            margin: "auto",
            width: "18%",
            padding: "10px",
            paddingBottom: "50px",
          }}>
          PlayLists
        </h1>
        <PlaylistTable />;
      </div>
    </>
  );
}

export default Playlist;
