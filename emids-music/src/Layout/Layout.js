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

function Layout() {

  const logout = () => {
    localStorage.setItem('isUserActive', false);
  }

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
          <Route path="playlist/*" element={<Songs />} />
          <Route path="profile" element={<UserProfile />} />
        </Routes>
      </div>
    </div>
  );
}

export default Layout;
