import "./Layout.css";
import Dashboard from "../Dashboard/Dashboard";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import ReceiptRoundedIcon from "@mui/icons-material/ReceiptRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Playlist from "../Playlist/Playlist";
import UserProfile from "../UserProfile/UserProfile";
import React from "react";
import Logo from "../emids-icon.png";
import Songs from "../Playlist/Songs";
import AddPlayList from "../Playlist/AddPlaylist";

function Layout() {
  const activeUser = JSON.parse(localStorage.getItem("activeUser"));
  const index = activeUser.findIndex(
    (user) => user.email === localStorage.getItem("currentUser")
  );

  const logout = () => {
    activeUser[index].isActive = false;
    localStorage.setItem("activeUser", JSON.stringify(activeUser));
  };

  if (index === -1 || !activeUser[index].isActive) {
    window.location.href = "/";
  } else {
    return (
      <div
        style={{ display: "flex", height: "100%", backgroundColor: "#121212" }}>
        <Sidebar className="app">
          <Menu>
            <MenuItem
              className="menu1"
              component={<Link to="dashboard" className="link" />}
              icon={<img src={Logo} />}>
              <h2>EMIDS MUSIC</h2>
            </MenuItem>
            <MenuItem
              icon={<GridViewRoundedIcon />}
              component={<NavLink to="dashboard" className="link" />}>
              {" "}
              Dashboard{" "}
            </MenuItem>
            <MenuItem
              icon={<ReceiptRoundedIcon />}
              component={<NavLink to="playlist" className="link" />}>
              {" "}
              My Playlist{" "}
            </MenuItem>
            <MenuItem
              icon={<AccountCircleRoundedIcon />}
              component={<NavLink to="profile" className="link" />}>
              {" "}
              Profile{" "}
            </MenuItem>
            <MenuItem
              icon={<LogoutRoundedIcon />}
              component={<NavLink to="/" className="link" onClick={logout} />}>
              {" "}
              Logout{" "}
            </MenuItem>
          </Menu>
        </Sidebar>
        <div className="main-div">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="playlist" element={<Playlist />} />
            <Route path="playlist/song" element={<Songs />} />
            <Route path="playlist/add-playlist" element={<AddPlayList />} />
            <Route path="profile" element={<UserProfile />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default Layout;
