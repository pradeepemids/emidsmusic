import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Login from "./Login/Login";
import Register from "./Login/Register";
import AddPlaylist from "././Playlist/AddPlaylist";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/layout/*" element={<Layout />} />
      <Route path="/addPlaylist" element={<AddPlaylist />} />
    </Routes>
  );
}

export default App;
