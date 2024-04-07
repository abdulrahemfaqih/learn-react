import React from "react";
import ReactDOM from "react-dom/client";
import LoginPage from "./pages/login.jsx";
import RegisterPage from "./pages/register.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/404.jsx";

const router = createBrowserRouter([
   {
      path: "/",
      element: <div>Halo</div>,
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

]);

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>
);
