import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import PlaylistTable from "./PlaylistTable";
import playlistData from "./playlistData.json"; // Import the JSON file
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Playlist() {
  const navigate = useNavigate();
  const [playlistTest, setPlaylistTest] = useState();
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    setLoading(true);
    setTimeout(() => {
      setPlaylistTest(playlistData);
      console.log(playlistTest);
      setLoading(false);
    }, 1); // Adjust timeout as per your requirement
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return <CircularProgress />;
  } else {
    return (
      <>
        <div>
          <PlaylistTable />;
        </div>
        {/* <div>
          <button
            color="primary"
            style={{ marginLeft: "25px" }}
            className="px-4 btn btn-primary "
            onClick={routeChange}>
            Add PlayList
          </button>
        </div> */}
      </>
    );
  }
}

export default Playlist;
