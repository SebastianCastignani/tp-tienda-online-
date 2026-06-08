import { Link } from 'react-router-dom';
import { useCarrito } from "../context/CarritoContext";

export default function ProductoCard({ producto }) {
  const { agregarAlCarrito } = useCarrito();
  const formatter = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0,
  });

  const envioGratis = producto.precio > 100000;

  return (
    <article className="flex flex-col gap-3 rounded-[14px] border border-slate-200 bg-white p-4 shadow-[0_12px_28px_rgba(15,23,42,0.08)] transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(15,23,42,0.12)] dark:bg-slate-800 dark:border-slate-700 dark:text-slate-100">
      <div className="flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-xl bg-slate-100 p-2 dark:bg-slate-700">
        <img
          className="h-full w-full object-contain"
          src={producto.imagen}
          alt={producto.nombre}
          loading="lazy"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <p className="text-[12px] uppercase tracking-[0.08em] text-slate-500 dark:text-slate-300">
          {producto.marca}
        </p>
        <h3 className="text-[16px] font-semibold text-slate-900 dark:text-slate-100">
          {producto.nombre}
        </h3>
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-[18px] font-bold text-slate-900 dark:text-slate-100">
            {formatter.format(producto.precio)}
          </p>
          {envioGratis && (
            <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-semibold uppercase text-slate-700 dark:bg-slate-700 dark:text-slate-200">
              Envio gratis
            </span>
          )}
        </div>
      </div>
      <div className="mt-auto flex gap-3">
        <button
          onClick={() => agregarAlCarrito(producto)}
          className="flex-1 rounded-[10px] bg-blue-500 px-3 py-2 text-center font-semibold text-white transition-colors hover:bg-blue-600 dark:bg-blue-400 dark:hover:bg-blue-500"
          type="button"
        >
          Agregar al carrito
        </button>
        <Link
          className="flex-1 rounded-[10px] bg-purple-600 px-3 py-2 text-center font-semibold text-white transition-colors hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-800"
          to={`/productos/${producto.id}`}
        >
          Ver producto
        </Link>
      </div>
    </article>
  );
}
