const Button = (props) => {
   const { classname = "bg-black", children } = props;
   return (
      <button className={`h-10 px-6 ${classname} text-white rounded-md`}>{children}</button>
   );
};

export default Button;
