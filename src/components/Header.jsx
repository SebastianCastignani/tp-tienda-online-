import {
  Link,
  useSearchParams,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { productos } from "../data/productos";
import { useState } from "react";
import { useTheme } from "../context/ModeContext";
import {
  FiSearch,
  FiShoppingCart,
  FiMenu,
  FiMoon,
  FiSun,
} from "react-icons/fi";
import logoParaFondoClaro from "../assets/logo-claro.png";
import logoParaFondoOscuro from "../assets/logo-oscuro.png";
import { DiVim } from "react-icons/di";
import { useRef, useEffect } from "react";
import { useCarrito } from "../context/CarritoContext";
import CarritoItem from "./CarritoItem";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [busqueda, setBusqueda] = useState("");
  const [resultadosBusqueda, setResultadosBusqueda] = useState([]);
  const { tema, toggleTema } = useTheme();
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [buscando, setBuscando] = useState(false);
  const [carritoAbierto, setCarritoAbierto] = useState(false);
  const { carrito, eliminarDelCarrito } = useCarrito();
  const carritoRef = useRef();

  const busquedaProductos = (e) => {
    const valor = e.target.value;
    setBusqueda(valor);
    const filtrados = productos.filter((p) =>
      p.nombre.toLowerCase().includes(valor.toLowerCase()),
    );
    setResultadosBusqueda(filtrados);
  };

  {
    /*Cerrar y limpiar busqueda al cambiar de pagina */
  }
  useEffect(() => {
    setBusqueda("");
    setResultadosBusqueda([]);
  }, [location.pathname]);

  useEffect(() => {
    const cerrar = (e) => {
      if (carritoRef.current && !carritoRef.current.contains(e.target)) {
        setCarritoAbierto(false);
      }
    };

    document.addEventListener("mousedown", cerrar);

    return () => {
      document.removeEventListener("mousedown", cerrar);
    };
  }, []);

  return (
    <header className="bg-bg-light dark:bg-bg-dark shadow-md">
      <div className="flex items-center justify-between px-4 py-3">
        {buscando ? (
          <div className="relative flex items-center gap-2 w-full md:hidden">
            <button
              className="font-bold text-text-light dark:text-text-dark"
              onClick={() => setBuscando(false)}
            >
              ✕
            </button>
            <input
              type="text"
              placeholder="Buscar productos..."
              value={busqueda}
              onChange={busquedaProductos}
              className="w-full px-4 py-2 rounded-full border-2 border-bg-dark dark:border-bg-light text-text-light dark:text-text-dark"
              autoFocus
            />
            {resultadosBusqueda.length > 0 && (
              <div className="absolute top-full left-0 right-0 bg-bg-white dark:bg-bg-dark border rounded-lg shadow-xl z-50 max-h-60 overflow-y-auto">
                {resultadosBusqueda.map((p) => (
                  <Link
                    to={`/productos/${p.id}`}
                    key={p.id}
                    className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <img
                      src={p.imagen}
                      alt={p.nombre}
                      className="w-10 h-10 object-cover rounded"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-text-light dark:text-text-dark truncate">
                        {p.nombre}
                      </p>
                    </div>
                    {p.stock === 0 ? (
                      <span className="text-sm font-semibold text-red-500">
                        Sin stock
                      </span>
                    ) : (
                      <span className="text-sm font-semibold text-hover-light dark:text-hover-dark">
                        ${p.precio}
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ) : (
          <>
            <div className="flex r gap-10 flex-1 relative">
              <Link to="/">
                <img
                  src={
                    tema === "light" ? logoParaFondoClaro : logoParaFondoOscuro
                  }
                  alt="Logo de la tienda"
                  className="w-12 h-12 object-contain rounded-xl shadow-sm"
                />
              </Link>
              {/* Agregue el nombre de la tienda, puede cambiar */}
              <div className="flex items-center gap-1">
                <h1 className="text-4xl font-black italic tracking-tighter text-text-light dark:text-text-dark">
                  {" "}
                  1001
                </h1>
              </div>

              <div className="hidden md:block flex-1">
                <input
                  type="text"
                  placeholder="Buscar productos..."
                  value={busqueda}
                  onChange={busquedaProductos}
                  className="w-96 px-4 py-2 rounded-full border-2 border-bg-dark dark:border-bg-light text-text-light dark:text-text-dark"
                />
              </div>
              {resultadosBusqueda.length > 0 && (
                <div className="absolute top-full left-0 right-0 bg-bg-white dark:bg-bg-dark border rounded-lg shadow-xl z-50 max-h-60 overflow-y-auto">
                  {resultadosBusqueda.map((p) => (
                    <Link
                      to={`/productos/${p.id}`}
                      key={p.id}
                      className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <img
                        src={p.imagen}
                        alt={p.nombre}
                        className="w-10 h-10 object-cover rounded"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-text-light dark:text-text-dark truncate">
                          {p.nombre}
                        </p>
                      </div>
                      {p.stock === 0 ? (
                        <span className="text-sm font-semibold text-red-500">
                          Sin stock
                        </span>
                      ) : (
                        <span className="text-sm font-semibold text-hover-light dark:text-hover-dark">
                          ${p.precio}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="flex items-center gap-6">
              {/* Cambiar links aca!!*/}
              <nav className="hidden md:flex items-center gap-4 text-sm font-bold">
                <Link
                  to="/"
                  className="text-text-light dark:text-text-dark hover:text-hover-light dark:hover:text-hover-dark"
                >
                  INICIO
                </Link>
                <Link
                  to="/productos"
                  className="text-text-light dark:text-text-dark hover:text-hover-light dark:hover:text-hover-dark"
                >
                  PRODUCTOS
                </Link>
                <Link
                  to="/contacto"
                  className="text-text-light dark:text-text-dark hover:text-hover-light dark:hover:text-hover-dark"
                >
                  CONTACTO
                </Link>
              </nav>
              <button onClick={toggleTema}>
                {tema === "light" ? (
                  <FiMoon className="text-xl text-text-light dark:text-text-dark hover:text-hover-light dark:hover:text-hover-dark cursor-pointer" />
                ) : (
                  <FiSun className="text-xl text-text-light dark:text-text-dark hover:text-hover-light dark:hover:text-hover-dark cursor-pointer" />
                )}
              </button>
              <div className="relative" ref={carritoRef}>
                <button
                  onClick={() => setCarritoAbierto(!carritoAbierto)}
                  className="relative flex items-center cursor-pointer"
                >
                  <FiShoppingCart className="text-xl text-text-light dark:text-text-dark hover:text-hover-light dark:hover:text-hover-dark" />

                  {carrito.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] rounded-full px-1.5 py-0.5">
                      {carrito.length}
                    </span>
                  )}
                </button>

                {carritoAbierto && (
                  <div className="absolute right-0 mt-3 w-[350px] max-h-[500px] overflow-y-auto bg-bg-light dark:bg-bg-dark border border-slate-300 dark:border-slate-700 rounded-xl shadow-xl p-3 z-50">
                    <Link
                      to="/carrito"
                      onClick={() => setCarritoAbierto(false)}
                      className="block w-full text-center mb-3 bg-hover-light hover:bg-hover-dark text-white py-2 rounded-lg font-semibold"
                    >
                      Ver carrito
                    </Link>

                    <div className="flex flex-col gap-2">
                      {carrito.length === 0 ? (
                        <p className="text-center text-text-light dark:text-text-dark">
                          Carrito vacío
                        </p>
                      ) : (
                        carrito.map((producto) => (
                          <CarritoItem
                            key={producto.id}
                            producto={producto}
                            onEliminar={eliminarDelCarrito}
                          />
                        ))
                      )}
                    </div>
                  </div>
                )}
              </div>
              <button className="md:hidden" onClick={() => setBuscando(true)}>
                <FiSearch className="text-xl text-text-light dark:text-text-dark hover:text-hover-light dark:hover:text-hover-dark cursor-pointer" />
              </button>
              <button
                className="md:hidden p-2"
                onClick={() => setMenuAbierto(!menuAbierto)}
              >
                <FiMenu className="text-xl text-text-light dark:text-text-dark hover:text-hover-light dark:hover:text-hover-dark cursor-pointer" />
              </button>
            </div>
          </>
        )}
      </div>

      {/* Cambiar links aca!! (mobile)*/}
      {menuAbierto && (
        <div className="md:hidden border-t border-text-light/20 dark:border-text-dark/20 px-4 py-2">
          <Link
            to="/"
            className="font-bold block py-2 text-text-light dark:text-text-dark hover:text-hover-light dark:hover:text-hover-dark"
            onClick={() => setMenuAbierto(false)}
          >
            INICIO
          </Link>
          <Link
            to="/productos"
            className="font-bold block py-2 text-text-light dark:text-text-dark hover:text-hover-light dark:hover:text-hover-dark"
            onClick={() => setMenuAbierto(false)}
          >
            PRODUCTOS
          </Link>
          <Link
            to="/contacto"
            className="font-bold block py-2 text-text-light dark:text-text-dark hover:text-hover-light dark:hover:text-hover-dark"
            onClick={() => setMenuAbierto(false)}
          >
            CONTACTO
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
