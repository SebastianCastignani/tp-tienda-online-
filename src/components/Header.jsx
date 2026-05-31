import { Link } from "react-router-dom";
import { useState } from "react";
import { useTheme } from "../context/ModeContext";
import { FiSearch, FiShoppingCart, FiMenu, FiMoon, FiSun } from "react-icons/fi";
import logoParaFondoClaro from "../assets/logo-claro.png";
import logoParaFondoOscuro from "../assets/logo-oscuro.png";
import { DiVim } from "react-icons/di";


function Header() {
  const {tema, toggleTema} = useTheme();
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [buscando, setBuscando] = useState(false);

  return (
    <header className="bg-bg-light dark:bg-bg-dark shadow-md">
      
      <div className="flex items-center justify-between px-4 py-3">
        {buscando ? (
          <div className="flex items-center gap-2 w-full md:hidden">
            <button className="font-bold text-text-light dark:text-text-dark" onClick={() => setBuscando(false)}>✕</button>
            <input type="text" placeholder="Buscar productos..."
                   className="w-full px-4 py-2 rounded-full border-2 border-bg-dark dark:border-bg-light text-text-light dark:text-text-dark" autoFocus />
          </div>
        ) : (
          <>
            
            <div className="flex r gap-10 flex-1">
        <Link to="/">
            <img 
              src={tema === "light" ? logoParaFondoClaro : logoParaFondoOscuro} 
              alt="Logo de la tienda" 
              className="w-12 h-12 object-contain rounded-xl shadow-sm"/>
        </Link>
            <div className="flex items-center gap-1">
              <h1 className="text-4xl font-black italic tracking-tighter text-text-light dark:text-text-dark"> 1001</h1>
            </div>


              <div className="hidden md:block flex-1">
                <input type="text" placeholder="Buscar productos..."
                       className="w-96 px-4 py-2 rounded-full border-2 border-bg-dark dark:border-bg-light text-text-light dark:text-text-dark" />
              </div>
            </div>

            
            <div className="flex items-center gap-6">
              {/* Cambiar links aca!!*/}
              <nav className="hidden md:flex items-center gap-4 text-sm font-bold">
                <Link to="/" className="text-text-light dark:text-text-dark hover:text-hover-light dark:hover:text-hover-dark">INICIO</Link>
                <Link to="#" className="text-text-light dark:text-text-dark hover:text-hover-light dark:hover:text-hover-dark">PRODUCTOS</Link>
                <Link to="#" className="text-text-light dark:text-text-dark hover:text-hover-light dark:hover:text-hover-dark">CONTACTO</Link>
              </nav>
              <button onClick={toggleTema}>{tema === "light" ? <FiMoon className="text-xl text-text-light dark:text-text-dark hover:text-hover-light dark:hover:text-hover-dark cursor-pointer" /> : <FiSun className="text-xl text-text-light dark:text-text-dark hover:text-hover-light dark:hover:text-hover-dark cursor-pointer" />}</button>
              <Link to="#" className="relative"><FiShoppingCart className="text-xl text-text-light dark:text-text-dark hover:text-hover-light dark:hover:text-hover-dark" /></Link>
              <button className="md:hidden" onClick={() => setBuscando(true)}><FiSearch className="text-xl text-text-light dark:text-text-dark hover:text-hover-light dark:hover:text-hover-dark cursor-pointer" /></button>
              <button className="md:hidden p-2" onClick={() => setMenuAbierto(!menuAbierto)}><FiMenu className="text-xl text-text-light dark:text-text-dark hover:text-hover-light dark:hover:text-hover-dark cursor-pointer" /></button>
            </div>
          </>
        )}
      </div>

      {/* Cambiar links aca!! (mobile)*/}
      {menuAbierto && (
        <div className="md:hidden border-t border-text-light/20 dark:border-text-dark/20 px-4 py-2">
          <Link to="/" className="font-bold block py-2 text-text-light dark:text-text-dark hover:text-hover-light dark:hover:text-hover-dark" onClick={() => setMenuAbierto(false)}>INICIO</Link>
          <Link to="#" className="font-bold block py-2 text-text-light dark:text-text-dark hover:text-hover-light dark:hover:text-hover-dark" onClick={() => setMenuAbierto(false)}>PRODUCTOS</Link>
          <Link to="#" className="font-bold block py-2 text-text-light dark:text-text-dark hover:text-hover-light dark:hover:text-hover-dark" onClick={() => setMenuAbierto(false)}>CONTACTO</Link>
        </div>
      )}
    </header>
  );
}

export default Header