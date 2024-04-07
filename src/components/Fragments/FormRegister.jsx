import InputForm from "../Elements/Input";
import Button from "../Elements/Button";

const FormRegister = () => {
   return (
      <form action="" method="post">
         <InputForm
            label="Fullname"
            htmlFor="fullname"
            id="fullname"
            type="text"
            placeholder="Fullname"
            name="fullname"
         />
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
         <InputForm
            htmlFor="confirm password"
            id="confirmPassword"
            label="Confirm Password"
            type="password"
            placeholder="********"
            name="confirmPassword"
         />
         <Button classname="bg-blue-600 w-full">Register</Button>
      </form>
   );
};
export default FormRegister;
