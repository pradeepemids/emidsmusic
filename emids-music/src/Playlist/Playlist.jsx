import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import PlaylistTable from "./PlaylistTable";

function Playlist() {
  const [playlist, setPlaylist] = useState();
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    setLoading(true);
    const url = "https://deezerdevs-deezer.p.rapidapi.com/playlist/6461440";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "737e6259admsh65458ca394fcb68p17eae4jsn1b6ed0f63593",
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setPlaylist(result);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return <CircularProgress />;
  } else {
    return <PlaylistTable playlist={playlist} />;
  }
}

export default Playlist;
