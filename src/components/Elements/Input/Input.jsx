import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
   const { placeholder, type, name, id } = props;
   return (
      <input
         id={id}
         type={type}
         className="w-full rounded border px-3 py-2 text-sm text-slate-700 opacity-70 focus:outline-blue-700"
         placeholder={placeholder}
         name={name}
         ref={ref}
      />
   );
});
export default Input;
