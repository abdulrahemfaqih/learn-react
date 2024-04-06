const Label = (props) => {
   const { children, htmlFor } = props;
   return (
      <label htmlFor={htmlFor} className="block text-slate-700 text-sm mb-2">
         {children}
      </label>
   );
};
export default Label;
