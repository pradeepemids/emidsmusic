import { Circle } from "@mui/icons-material";
import {
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Album from "./Album";

const albums = ["6461440", "6461440", "6461440", "6461440", "6461440"];

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
    return (
      <>
        <CircularProgress />
      </>
    );
  } else {
    return (
      <div style={{ padding: "20px", width: "100%" }}>
        <Grid container spacing={[16, 16]}>
          {playlist?.tracks?.data.map((al) => (
            <Grid item>
              {" "}
              <Album key={al.id} album={al} />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

export default Playlist;
