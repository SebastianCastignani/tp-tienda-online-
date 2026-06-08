import { Link, useParams } from 'react-router-dom';
import { productos } from '../data/productos';
import { useCarrito } from "../context/CarritoContext";
import { useState } from "react";
import SelectorCantidad from "../components/SelectorCantidad";

export default function DetalleProducto() {
  const { id } = useParams();
  const producto = productos.find((item) => item.id === Number(id));
  const { agregarAlCarrito } = useCarrito();
  const [cantidad, setCantidad] = useState(1);

  if (!producto) {
    return (
      <main className="mx-auto max-w-[1100px] px-6 pb-12 pt-8 bg-white dark:bg-slate-800">
        <p className="mb-3 text-slate-900 dark:text-slate-100">Producto no encontrado.</p>
        <Link className="text-blue-600 dark:text-blue-400" to="/productos">
          Volver a productos
        </Link>
      </main>
    );
  }

  const formatter = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0,
  });

  const envioGratis = producto.precio > 100000;

  return (
    <main className="mx-auto max-w-[1100px] px-6 pb-12 pt-8 bg-white dark:bg-slate-800">
      <Link className="mb-4 inline-block font-semibold text-blue-600 dark:text-blue-400" to="/productos">
        Volver a productos
      </Link>
      <section className="grid gap-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_12px_28px_rgba(15,23,42,0.08)] lg:grid-cols-[minmax(260px,1fr)_1.2fr] dark:border-slate-700 dark:bg-slate-800 dark:shadow-[0_12px_28px_rgba(0,0,0,0.28)]">
        <div className="flex min-h-[280px] items-center justify-center overflow-hidden rounded-xl bg-slate-100 p-4 dark:bg-slate-700">
          <img
            className="h-full w-full object-contain"
            src={producto.imagen}
            alt={producto.nombre}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-[12px] uppercase tracking-[0.08em] text-slate-500 dark:text-slate-300">
            {producto.marca}
          </p>
          <h1 className="text-[26px] font-semibold text-slate-900 dark:text-slate-100">
            {producto.nombre}
          </h1>
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-[22px] font-bold text-slate-900 dark:text-slate-100">
              {formatter.format(producto.precio)}
            </p>
            {envioGratis && (
              <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-semibold uppercase text-slate-700 dark:bg-slate-700 dark:text-slate-200">
                Envio gratis
              </span>
            )}
          </div>
          <p className="text-slate-600 dark:text-slate-300">{producto.descripcion}</p>
          <p className="font-semibold text-slate-900 dark:text-slate-100">
            Stock: {producto.stock}
          </p>
          <div className="mt-2 flex items-center gap-3">
            <SelectorCantidad
              cantidad={cantidad}
              setCantidad={setCantidad}
              max={producto.stock}
            />

            <button
              className="rounded-[10px] bg-hover-light px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-hover-dark dark:bg-blue-500 dark:hover:bg-blue-600"
              type="button"
              onClick={() => agregarAlCarrito(producto, cantidad)}
            >
              Añadir al carrito
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
