import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/loginPage/LoginPage";
import Register from "./components/registerPage/RegisterPage";
import Home from "./components/home/Home";
import { AddProduct } from "./components/admin/addProduct/AddProduct";
import { Footer } from "./components/footer/Footer";
import ProductDetail from "./components/productDetails/ProductDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
      {/*    <Footer></Footer> */}
    </BrowserRouter>
  );
}

export default App;
