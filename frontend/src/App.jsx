import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import LayoutUser from "./components/Layout/LayoutUser";
import Home from "./pages/Home";
import { Toaster } from "sonner";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<LayoutUser />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
