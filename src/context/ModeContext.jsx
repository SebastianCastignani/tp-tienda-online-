import { createContext, useContext, useState, useEffect } from "react";

const ModeContext = createContext();

export function ModeProvider({ children }) {
  const [tema, setTema] = useState(() => {
    return localStorage.getItem("tema") || "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", tema === "dark");
    localStorage.setItem("tema", tema);
  }, [tema]);

  const toggleTema = () => setTema(prev => prev === "light" ? "dark" : "light");

  return (
    <ModeContext.Provider value={{ tema, toggleTema }}>
      {children}
    </ModeContext.Provider>
  );
}

export const useTheme = () => useContext(ModeContext);