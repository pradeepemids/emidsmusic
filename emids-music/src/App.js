import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Layout from './Layout/Layout';
import Login from './Login/Login';
import Register from './Login/Register';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/layout/*" element={<Layout />} />
    </Routes>
  )
}

export default App;
