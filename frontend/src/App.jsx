import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import LayoutUser from "./components/Layout/LayoutUser";
import Home from "./pages/Home";
import { Toaster } from "sonner";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import CollectionPage from "./pages/CollectionPage";
import ProductDetails from "./components/Products/ProductDetails";
import Checkout from "./components/Cart/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<LayoutUser />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
          <Route path="/collection/:collection" element={<CollectionPage />} />
          <Route path="product/:id" element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="order-confirmation" element={<OrderConfirmation/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
