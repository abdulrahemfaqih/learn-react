import InputForm from "../Elements/Input";
import { Link } from "react-router-dom";

const AuthLayouts = (props) => {
   const { children, title, type } = props;
   return (
      <div className="font-poppins flex justify-center gap-2 bg-white items-center min-h-screen">
         <div className="w-full max-w-xs">
            <h1 className="text-3xl mb-6 font-bold text-blue-600">{title}</h1>
            <p className="font-medium text-slate-500 mb-6">
               Welcome, please enter your details
            </p>
            {children}
            <NavigationAuth type={type} />
         </div>
      </div>
   );
};

const NavigationAuth = ({type}) => {
   if (type === "login") {
      return (
         <p className="text-sm mt-5 text-center ">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-600 font-bold hover:underline">
               Register
            </Link>
         </p>
      );
   } else {
      return (
         <p className="text-sm mt-5 text-center ">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 font-bold hover:underline">
               Login
            </Link>
         </p>
      );
   }
};

export default AuthLayouts;
