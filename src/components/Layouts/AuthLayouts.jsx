import InputForm from "../Elements/Input";

const AuthLayouts = (props) => {
   const { children, title } = props;
   return (
      <div className="font-poppins flex justify-center gap-2 bg-white items-center min-h-screen">
         <div className="w-full max-w-xs">
            <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
            <p className="font-medium text-slate-500 mb-6">
               Welcome, please enter your details
            </p>
            {children}
         </div>
      </div>
   );
};

export default AuthLayouts;
