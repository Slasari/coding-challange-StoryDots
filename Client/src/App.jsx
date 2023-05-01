import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/loginPage/LoginPage";
import Register from "./components/registerPage/RegisterPage";
import LandingPage from "./components/landingPage/LandingPage";
import Home from "./components/home/Home";
import { AddProduct } from "./components/admin/addProduct/AddProduct";
import { Footer } from "./components/footer/footer";
import ProductDetail from "./components/productDetails/ProductDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
