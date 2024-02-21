import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import PlaylistTable from "./PlaylistTable";
import playlistData from "../Json/playlistData.json"; // Import the JSON file
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
      </>
    );
  }
}

export default Playlist;
