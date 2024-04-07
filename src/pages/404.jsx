import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
   const error = useRouteError();
   return (
      <div className=" font-poppins flex flex-col gap-3 bg-black items-center justify-center h-screen ">
         <h1 className="text-4xl font-bold text-blue-600">404</h1>
         <p className="text-white">
            {error.status === 404
               ? "Page not found"
               : "An error occurred"}
         </p>
      </div>
   );
};

export default ErrorPage;
