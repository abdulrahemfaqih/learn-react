import InputForm from "../Elements/Input";
import Button from "../Elements/Button";

const FormLogin = () => {
   return (
      <form action="" method="post" autoComplete="off">
         <InputForm
            htmlFor="email"
            id="email"
            label="email"
            type="email"
            placeholder="example@mail.com"
            name="email"
         />
         <InputForm
            htmlFor="password"
            id="password"
            label="password"
            type="password"
            placeholder="********"
            name="password"
         />
         <Button classname="bg-blue-600 w-full">Login</Button>
      </form>
   );
};
export default FormLogin;
