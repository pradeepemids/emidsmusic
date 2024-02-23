import { CardMedia, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import playlistData from "../Json/playlistData.json"; // Import the JSON file

function PlaylistTable() {
  const [playlistTest, setPlaylistTest] = useState();

  const navigate = useNavigate();
  const handleDeletePlaylist = (event, id) => {
    const filteredPlaylists = {
      playlists: playlistTest.playlists.filter(
        (playlist) => playlist.id !== id
      ),
    };
    setPlaylistTest(filteredPlaylists);
    playlistData.playlists = playlistData.playlists.filter((x) => x.id != id);
  };

  const handleUpdatePlaylist = (event, id) => {
    navigate(`add-playlist`, {
      state: id,
    });
  };

  const getData = async () => {
    setTimeout(() => {
      if (!!playlistTest) {
        setPlaylistTest(playlistTest);
      } else {
        setPlaylistTest(playlistData);
      }
    }, 1); // Adjust timeout as per your requirement
  };

  useEffect(() => {
    getData();
  }, []);

  if (!!playlistTest) {
    return (
      <>
        <div
          className="mb-3"
          style={{
            paddingLeft: "25px",
            paddingTop: "10px",
            width: "900px",
          }}>
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
          <TableContainer
            style={{
              backgroundColor: "#292929",
              color: "#fff",
              borderRadius: "10px",
            }}
            component={Paper}>
            <Table
              sx={{
                "& .MuiTableRow-root": {
                  backgroundColor: "rgb(249, 249, 249, 0.7)",
                  transition: "background-color 0.3s", // Add transition for smooth color change
                  "&:hover": {
                    backgroundColor: "#e9ecef", // Change background color on hover
                  },
                },
                "& .MuiTableCell-root": {
                  color: "#212529",
                  borderBlock: "none",
                },
              }}
              aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell
                    style={{
                      color: "white",
                      fontSize: "17px",
                      fontWeight: "bold",
                      backgroundColor: "#0FE4BD",
                    }}>
                    Image
                  </TableCell>
                  <TableCell
                    style={{
                      color: "white",
                      fontSize: "17px",
                      fontWeight: "bold",
                      backgroundColor: "#0FE4BD",
                    }}
                    align="right">
                    Playlist Name
                  </TableCell>
                  <TableCell
                    style={{
                      color: "white",
                      fontSize: "17px",
                      fontWeight: "bold",
                      backgroundColor: "#0FE4BD",
                    }}
                    align="right">
                    Genre
                  </TableCell>
                  <TableCell
                    style={{
                      color: "white",
                      fontSize: "17px",
                      fontWeight: "bold",
                      backgroundColor: "#0FE4BD",
                    }}
                    align="right">
                    Tracks
                  </TableCell>{" "}
                  <TableCell
                    style={{
                      color: "white",
                      fontSize: "17px",
                      fontWeight: "bold",
                      backgroundColor: "#0FE4BD",
                    }}
                    align="right">
                    Actions
                  </TableCell>{" "}
                </TableRow>
              </TableHead>
              <TableBody>
                {playlistTest.playlists.map((al) => (
                  <TableRow
                    key={al.id}
                    onClick={() =>
                      navigate(`song`, {
                        state: al,
                      })
                    }
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                    <TableCell
                      key={al.id}
                      align="right"
                      style={{ height: 50, width: 50 }}>
                      <CardMedia
                        sx={{ height: 50, width: 50, borderRadius: "10px" }}
                        image={al?.image}
                        title="green iguana"
                      />
                    </TableCell>
                    <TableCell
                      key={al.id}
                      align="right"
                      style={{ height: 50, width: 50 }}>
                      {al.title}
                    </TableCell>
                    <TableCell
                      key={al.id}
                      align="right"
                      style={{ height: 50, width: 50 }}>
                      {al.genre[0].title}
                    </TableCell>
                    <TableCell
                      key={al.id}
                      align="right"
                      style={{ height: 50, width: 50 }}>
                      {al.tracks.length}
                    </TableCell>
                    <TableCell align="right" style={{ height: 50, width: 50 }}>
                      <IconButton
                        color="primary"
                        onClick={(event) => {
                          event.stopPropagation();
                          handleUpdatePlaylist(event, al.id);
                        }}>
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        color="secondary"
                        onClick={(event) => {
                          event.stopPropagation();
                          handleDeletePlaylist(event, al.id);
                        }}>
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>

        <button
          style={{ marginLeft: "25px" }}
          className="px-4 btn btn-success "
          onClick={() => navigate(`add-playlist`)}>
          Add Playlist
        </button>
      </>
    );
  }
}

export default PlaylistTable;
