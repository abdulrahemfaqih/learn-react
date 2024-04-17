import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";

import LoginPage from "./pages/login.jsx";
import RegisterPage from "./pages/register.jsx";
import ErrorPage from "./pages/404.jsx";
import Cover from "./pages/cover.jsx";
import DetailProductPage from "./pages/detailProduct.jsx";
import ProfilePage from "./pages/profile.jsx";
import store from "./redux/store.js";
import Navbar from "./components/Layouts/Navbar.jsx";
import ProductsPage from "./pages/products.jsx";
import DarkModeContextProvider from "./context/darkMode.jsx";
import { TotalPriceProvider } from "./context/totalPriceContext.jsx";

import "./index.css";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Cover />,
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
      path: "/profile",
      element: <ProfilePage />,
   },
   {
      path: "/products",
      element: <ProductsPage />,
   },
   {
      path: "/product/:id",
      element: <DetailProductPage />,
   },
   {
      path: "*",
      element: <ErrorPage />,
   },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <Provider store={store}>
         <DarkModeContextProvider>
            <TotalPriceProvider>
               <RouterProvider router={router} />
            </TotalPriceProvider>
         </DarkModeContextProvider>
      </Provider>
   </React.StrictMode>,
);
