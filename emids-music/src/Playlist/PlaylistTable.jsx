import { CardMedia } from "@mui/material";
import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";

function PlaylistTable({ playlist }) {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="mb-3"
        style={{
          paddingLeft: "25px",
          paddingTop: "10px",
          width: "100%",
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
              minWidth: 1000,
              "& .MuiTableRow-root": {
                backgroundColor: "#292929",
                transition: "background-color 0.3s", // Add transition for smooth color change
                "&:hover": {
                  backgroundColor: "#535353", // Change background color on hover
                },
              },
              "& .MuiTableCell-root": {
                color: "#fff",
                borderBlock: "none",
              },
            }}
            aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell align="right">Playlist Name</TableCell>
                <TableCell align="right">Genre</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {playlist.playlists.map((al) => (
                <TableRow
                  key={al.id}
                  onClick={() =>
                    navigate(`song`, {
                      state: al?.title,
                    })
                  }
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell
                    key={al.id}
                    align="right"
                    style={{ height: 50, width: 150 }}>
                    <CardMedia
                      sx={{ height: 50, width: 50 }}
                      image={al?.image}
                      title="green iguana"
                    />
                  </TableCell>
                  <TableCell
                    key={al.id}
                    align="right"
                    style={{ height: 50, width: 150 }}>
                    {al.title}
                  </TableCell>
                  <TableCell
                    key={al.id}
                    align="right"
                    style={{ height: 50, width: 150 }}>
                    {al.genre}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <button
        color="primary"
        style={{ marginLeft: "25px" }}
        className="px-4 btn btn-success "
        onClick={() => navigate(`add-playlist`)}>
        Add Playlist
      </button>
    </>
  );
}

export default PlaylistTable;
