import Label from "./Label";
import Input from "./Input";
import { forwardRef } from "react";

const InputForm = forwardRef((props, ref) => {
   const {label, name, type, placeholder, id} = props;
   return (
      <div className="mb-6">
         <Label htmlFor={name}>{label}</Label>
         <Input name={name} id={id} type={type} placeholder={placeholder} ref={ref} />
      </div>
   )
});
export default InputForm;
