import './Layout.css';
import Dashboard from '../Dashboard/Dashboard';
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import ReceiptRoundedIcon from "@mui/icons-material/ReceiptRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Playlist from '../Playlist/Playlist';
import UserProfile from '../UserProfile/UserProfile';
import React from 'react';

function Layout() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar className="app">
        <Menu>
          <MenuItem className="menu1" component={<Link to="dashboard" className="link" />} icon={<MenuRoundedIcon />}>
            <h2>EMIDS MUSIC</h2>
          </MenuItem>
          <MenuItem icon={<GridViewRoundedIcon />} component={<NavLink to="dashboard" className="link"   />}> Dashboard </MenuItem>
          <MenuItem icon={<ReceiptRoundedIcon />} component={<NavLink to="playlist" className="link" />}> My Playlist </MenuItem>
          <MenuItem icon={<AccountCircleRoundedIcon />} component={<NavLink to="profile" className="link" />}> Profile </MenuItem>
          <MenuItem icon={<LogoutRoundedIcon />}> Logout </MenuItem>
        </Menu>
      </Sidebar>
      <div className="main-div"> 
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="dashboard" element={<Dashboard/>} />
          <Route path="playlist" element={<Playlist />} />
          <Route path="profile" element={<UserProfile />} />
        </Routes>
      </div>
    </div>
  );
}

export default Layout;
