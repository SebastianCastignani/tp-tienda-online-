import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { productos } from "../data/productos";
import ProductoCard from "../components/ProductoCard";

const marcas = [...new Set(productos.map((p) => p.marca))];
const categorias = [...new Set(productos.map((p) => p.categoria))];

export default function Productos() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [marcaFiltro, setMarcaFiltro] = useState("");
  const [categoriaFiltro, setCategoriaFiltro] = useState("");
  const [precioMin, setPrecioMin] = useState("");
  const [precioMax, setPrecioMax] = useState("");
  const [filtrosAbierto, setFiltrosAbierto] = useState(false);

  const productosFiltrados = productos.filter((p) => {
    const coincideBusqueda = p.nombre
      .toLowerCase()
      .includes(query.toLowerCase());
    const coincideMarca = !marcaFiltro || p.marca === marcaFiltro;
    const coincideCategoria =
      !categoriaFiltro || p.categoria === categoriaFiltro;
    const coincidePrecioMin = !precioMin || p.precio >= Number(precioMin);
    const coincidePrecioMax = !precioMax || p.precio <= Number(precioMax);
    return (
      coincideBusqueda &&
      coincideMarca &&
      coincideCategoria &&
      coincidePrecioMin &&
      coincidePrecioMax
    );
  });

  const productosOrdenados = [...productosFiltrados].sort((a, b) => {
    if (a.stock === 0 && b.stock > 0) return 1; // a va después
    if (a.stock > 0 && b.stock === 0) return -1; // a va antes
    return 0; // mantiene orden
  });

  return (
    <main className="mx-auto max-w-[1200px] px-6 pb-12 pt-8 bg-white dark:bg-slate-800 min-h-screen">
      <header className="mb-6">
        <h1 className="mb-2 text-[28px] font-semibold text-text-light dark:text-text-dark">
          Productos
        </h1>
        <p className="text-text-light/70 dark:text-text-dark/70">
          {query
            ? `Resultados para "${query}"`
            : "Explora nuestra seleccion y entra al detalle de cada producto."}
        </p>
      </header>

      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={() => setFiltrosAbierto(!filtrosAbierto)}
          className="flex items-center gap-2 px-4 py-2 bg-hover-light dark:bg-hover-dark text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-200 cursor-pointer"
        >
          {filtrosAbierto ? "✕" : "☰"} Filtros
        </button>
        {(marcaFiltro || categoriaFiltro || precioMin || precioMax) && (
          <button
            onClick={() => {
              setMarcaFiltro("");
              setCategoriaFiltro("");
              setPrecioMin("");
              setPrecioMax("");
            }}
            className="px-4 py-2 text-sm bg-red-400 hover:bg-red-500 text-white rounded-md transition-all duration-200 cursor-pointer"
          >
            Limpiar filtros
          </button>
        )}
      </div>

      {filtrosAbierto && (
        <div className="flex flex-wrap items-end gap-4 mb-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-text-light dark:text-text-dark">
              Marca
            </label>
            <select
              value={marcaFiltro}
              onChange={(e) => setMarcaFiltro(e.target.value)}
              className="px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-text-light dark:text-text-dark text-sm"
            >
              <option value="">Todas</option>
              {marcas.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-text-light dark:text-text-dark">
              Categoría
            </label>
            <select
              value={categoriaFiltro}
              onChange={(e) => setCategoriaFiltro(e.target.value)}
              className="px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-text-light dark:text-text-dark text-sm"
            >
              <option value="">Todas</option>
              {categorias.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-end gap-2">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-text-light dark:text-text-dark">
                Precio min
              </label>
              <input
                type="number"
                value={precioMin}
                onChange={(e) => setPrecioMin(e.target.value)}
                placeholder="$0"
                className="w-24 px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-text-light dark:text-text-dark text-sm"
              />
            </div>
            <span className="pb-2 text-text-light dark:text-text-dark">-</span>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-text-light dark:text-text-dark">
                Precio max
              </label>
              <input
                type="number"
                value={precioMax}
                onChange={(e) => setPrecioMax(e.target.value)}
                placeholder="$999999"
                className="w-24 px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-text-light dark:text-text-dark text-sm"
              />
            </div>
          </div>
        </div>
      )}

      {productosOrdenados.length === 0 ? (
        <p className="text-center text-text-light/70 dark:text-text-dark/70 py-12">
          No se encontraron productos con esos filtros.
        </p>
      ) : (
        <section className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5">
          {productosOrdenados.map((producto) => (
            <ProductoCard key={producto.id} producto={producto} />
          ))}
        </section>
      )}
    </main>
  );
}
