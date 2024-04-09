import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
import { useEffect, useRef, useState } from "react";
import { login } from "../../services/auth.service";

const FormLogin = () => {
   const [loginFailed, setLoginFailed] = useState("");
   const [loginSuccess, setLoginSuccess] = useState(false);

   const handleLogin = (e) => {
      e.preventDefault();
      const data = {
         username: e.target.username.value,
         password: e.target.password.value,
      };
      login(data, (status, res) => {
         if (status) {
            localStorage.setItem("token", res);
            setLoginFailed("");
            setLoginSuccess(true);
            setTimeout(() => {
               window.location.href = "/products"
            }, 500)
         } else {
            setLoginFailed(res.response.data);
            setLoginSuccess(false);

            e.target.reset();
         }
      });
   };

   const usernameRef = useRef(null);

   useEffect(() => {
      usernameRef.current.focus();
   }, []);

   return (
      <form onSubmit={handleLogin} autoComplete="off">
         {loginFailed && (
            <p className="mb-2 rounded-sm bg-red-300 px-2 py-1 text-sm font-semibold text-red-500">
               {loginFailed}
            </p>
         )}
         {loginSuccess && (
            <p className="mb-2 rounded-sm bg-green-300 px-2 py-1 text-sm font-semibold text-green-500">
               Login Berhasil
            </p>
         )}
         <InputForm
            htmlFor="username"
            id="username"
            label="username"
            type="text"
            placeholder="faqih1234"
            name="username"
            ref={usernameRef}
         />
         <InputForm
            htmlFor="password"
            id="password"
            label="password"
            type="password"
            placeholder="********"
            name="password"
         />
         <Button classname="bg-blue-600 w-full" type="submit">
            Login
         </Button>
      </form>
   );
};

export default FormLogin;
