import React from "react";
import Header from "./components/appbar/Header";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate replace to="/login" />} />
      </Routes>
    </div>
  );
}

export default App;
