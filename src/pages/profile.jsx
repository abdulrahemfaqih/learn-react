import { Fragment } from "react";
import { useLogin } from "../hooks/useLogin";
import Navbar from "../components/Layouts/Navbar";

const ProfilePage = () => {
   const username = useLogin();
   return (
      <Fragment>
         <Navbar />
         <div>
            <h1 className="text-center text-3xl">Halaman Profile</h1>
            <h1 className="text-center text-xl">{username}</h1>
         </div>
      </Fragment>
   );
};

export default ProfilePage;
