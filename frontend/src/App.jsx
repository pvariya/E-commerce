import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import LayoutUser from "./components/Layout/LayoutUser";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutUser />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
