import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import LoginPage from "./pages/login.jsx";
import RegisterPage from "./pages/register.jsx";
import ErrorPage from "./pages/404.jsx";
import Cover from "./pages/cover.jsx";
import ProductPage from "./pages/product.jsx";
import "./index.css";

const router = createBrowserRouter([
   {
      path: "/",
      element: <LoginPage />,
      errorElement: <ErrorPage />,
   },
   {
      path: "/login",
      element: <LoginPage />,
   },
   {
      path: "/register",
      element: <RegisterPage />,
   },
   {
      path: "/products",
      element: <ProductPage />,
   },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>
);
