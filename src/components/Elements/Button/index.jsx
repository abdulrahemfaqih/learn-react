const Button = (props) => {
   const {
      classname = "bg-black",
      children,
      onClick = () => {},
      type = "button",
   } = props;
   return (
      <button
         type={type}
         className={`h-9 px-6 ${classname} rounded-md text-white`}
         onClick={onClick}
      >
         {children}
      </button>
   );
};

export default Button;
