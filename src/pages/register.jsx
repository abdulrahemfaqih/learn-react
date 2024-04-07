import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormRegister from "../components/Fragments/FormRegister";
import {Link} from "react-router-dom"

const RegisterPage = () => {
   return (
      <AuthLayouts title="Register">
         <FormRegister />
         <p className="text-sm mt-5 text-center ">
            Have an account?{" "}
            <Link to="/login" className="font-bold text-blue-600">
               Login
            </Link>
         </p>
      </AuthLayouts>
   );
};
export default RegisterPage;
