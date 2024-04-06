const Input = (props) => {
   const { placeholder, type,name, id} = props;
   return (
      <input
         id={id}
         type={type}
         className="text-sm border rounded w-full py-2 px-3 text-slate-700 opacity-70"
         placeholder={placeholder}
         name={name}
      />
   );
};
export default Input;
