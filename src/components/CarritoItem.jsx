import { FiTrash2 } from "react-icons/fi";
import SelectorCantidad from "./SelectorCantidad";

export default function CarritoItem({
  producto,
  onEliminar,
  onActualizarCantidad,
}){
  const formatter = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  });
  const subtotal = producto.precio * producto.cantidad;

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

        <p className="text-sm text-text-light dark:text-text-dark">
          Cantidad: {producto.cantidad}
        </p>

        <p className="font-bold text-hover-light">
          {formatter.format(subtotal)}
        </p>
      </div>
      
      <SelectorCantidad
        cantidad={producto.cantidad}
        setCantidad={(nuevaCantidad) =>
          onActualizarCantidad(producto.id, nuevaCantidad)
        }
        max={producto.stock}
      />

      <button
        onClick={() => onEliminar(producto.id)}
        className="text-red-500 hover:text-red-700 cursor-pointer"
      >
        <FiTrash2 size={20} />
      </button>
    </article>
  );
}