import React from "react";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";

function App() {
   return (
      <div className="font-poppins flex justify-center gap-2 bg-white items-center min-h-screen">
         {/* <LoginPage /> */}
         <RegisterPage/>
      </div>
   );
}


export default App;
