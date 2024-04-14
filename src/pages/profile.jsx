import { useLogin } from "../hooks/useLogin";

const ProfilePage = () => {

   const username = useLogin()
   return (
      <div>
         <h1 className="text-center text-3xl">Halaman Profile</h1>
         <h1 className="text-center text-xl">{username}</h1>
      </div>
   )
};

export default ProfilePage;
