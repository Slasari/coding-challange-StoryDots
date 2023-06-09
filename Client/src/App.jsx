import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/loginPage/LoginPage";
import Register from "./components/registerPage/RegisterPage";
import Home from "./components/home/Home";
import { AddProduct } from "./components/admin/addProduct/AddProduct";
import ProductDetail from "./components/productDetails/ProductDetail";
import { AddBrand } from "./components/admin/addBrand/AddBrand";
import { LoadingPage } from "./components/loadingPage/LoadingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/addBrand" element={<AddBrand />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
