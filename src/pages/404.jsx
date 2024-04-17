import { useLocation } from "react-router-dom";

const ErrorPage = () => {
   const location = useLocation();
   const { pathname } = location;

   return (
      <div className="font-poppins flex flex-col gap-3 bg-black items-center justify-center h-screen">
         <h1 className="text-4xl font-bold text-blue-600">404</h1>
         <p className="text-white">{pathname} not found</p>
      </div>
   );
};

export default ErrorPage;

