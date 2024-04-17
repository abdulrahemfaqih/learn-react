import { createContext, useState } from "react";

const darkModeContext = createContext();

const DarkModeContextProvider = ({ children }) => {
   const [isDarkMode, setIsDarkMode] = useState(false);

   return (
      <darkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
         {children}
      </darkModeContext.Provider>
   );
};

export const DarkModeContext = darkModeContext;
export default DarkModeContextProvider;
