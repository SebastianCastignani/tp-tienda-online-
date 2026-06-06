import { FiTrash2 } from "react-icons/fi";

export default function CarritoItem({ producto, onEliminar }) {
  const formatter = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  });

  return (
    <article className="flex items-center gap-3 p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 w-full">
      <img
        src={producto.imagen}
        alt={producto.nombre}
        className="w-20 h-20 rounded-lg object-cover"
      />

      <div className="flex-1">
        <h3 className="font-semibold text-text-light dark:text-text-dark">
          {producto.nombre}
        </h3>

        <p className="font-bold text-hover-light">
          {formatter.format(producto.precio)}
        </p>
      </div>

      <button
        onClick={() => onEliminar(producto.id)}
        className="text-red-500 hover:text-red-700 cursor-pointer"
      >
        <FiTrash2 size={20} />
      </button>
    </article>
  );
}