import React from "react";

const Button = (props) => {
   const {variant, text} = props;
   return (
      <button className={`p-4 ${variant} text-white rounded-md`}>
         {text}
      </button>
   );
};

function App() {
   return (
      <div className="font-poppins flex justify-center gap-2 bg-blue-900 items-center min-h-screen">
         <Button
            text="click me"
            variant="bg-black"
         />
      </div>
   );
}

export default App;
