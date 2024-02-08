import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function Album({ album }) {
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={album?.album?.cover}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {album?.title}
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
          {`Number of Tracks: ${album?.nb_tracks}`}
        </Typography> */}
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => {
            navigate(`${album?.title}`, { state: album?.album?.tracklist });
          }}>
          See Songs
        </Button>
      </CardActions>
    </Card>
  );
}

export default Album;
