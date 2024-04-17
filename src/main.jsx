import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import LoginPage from "./pages/login.jsx";
import RegisterPage from "./pages/register.jsx";
import ErrorPage from "./pages/404.jsx";
import Cover from "./pages/cover.jsx";
import ProductPage from "./pages/products.jsx";
import DetailProductPage from "./pages/detailProduct.jsx";
import ProfilePage from "./pages/profile.jsx";
import "./index.css";
import store from "./redux/store.js";
import { Provider } from "react-redux";

const App = () => (
   <BrowserRouter>
      <Routes>
         <Route path="/" element={<Cover />} />
         <Route path="/login" element={<LoginPage />} />
         <Route path="/register" element={<RegisterPage />} />
         <Route path="/products" element={<ProductPage />} />
         <Route path="/profile" element={<ProfilePage />} />
         <Route path="/product/:id" element={<DetailProductPage />} />
         <Route path="*" element={<ErrorPage />} />
      </Routes>
   </BrowserRouter>
);
ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <Provider store={store}>
         <App />
      </Provider>
   </React.StrictMode>,
);
