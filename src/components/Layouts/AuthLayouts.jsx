import React, { useContext } from "react";
import InputForm from "../Elements/Input";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkMode";

const AuthLayouts = (props) => {
   const { children, title, type } = props;
   const { isDarkMode, setIsDarkMode } = useContext(DarkModeContext);
   console.log(isDarkMode);
   return (
      <div
         className={`flex min-h-screen items-center justify-center gap-2 bg-white font-poppins ${isDarkMode && "bg-slate-900"}`}
      >
         <div className="w-full max-w-xs">
            <button
               className="absolute right-6 top-6 rounded bg-blue-600 p-2 text-sm font-semibold text-white"
               onClick={() => setIsDarkMode(!isDarkMode)}
            >
               {isDarkMode ? "Light" : "Dark"}
            </button>
            <h1 className="mb-6 text-3xl font-bold text-blue-600">{title}</h1>
            <p className="mb-6 font-medium text-slate-500">
               Welcome, please enter your details
            </p>
            {children}
            <NavigationAuth type={type} />
         </div>
      </div>
   );
};

const NavigationAuth = ({ type }) => {
   if (type === "login") {
      return (
         <p className="mt-5 text-center text-sm ">
            Don't have an account?{" "}
            <Link
               to="/register"
               className="font-bold text-blue-600 hover:underline"
            >
               Register
            </Link>
         </p>
      );
   } else {
      return (
         <p className="mt-5 text-center text-sm ">
            Already have an account?{" "}
            <Link
               to="/login"
               className="font-bold text-blue-600 hover:underline"
            >
               Login
            </Link>
         </p>
      );
   }
};

export default AuthLayouts;
