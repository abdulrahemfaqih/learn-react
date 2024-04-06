import Label from "./Label";
import Input from "./Input";

const InputForm = (props) => {
   const {label, name, type, placeholder, id} = props;
   return (
      <div className="mb-6">
         <Label htmlFor={name}>{label}</Label>
         <Input name={name} id={id} type={type} placeholder={placeholder} />
      </div>
   )
};
export default InputForm;
