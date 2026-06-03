import { Link, useParams } from 'react-router-dom';
import { productos } from '../data/productos';

export default function DetalleProducto() {
  const { id } = useParams();
  const producto = productos.find((item) => item.id === Number(id));

  if (!producto) {
    return (
      <main className="mx-auto max-w-[1100px] px-6 pb-12 pt-8">
        <p className="mb-3 text-slate-900">Producto no encontrado.</p>
        <Link className="text-blue-600" to="/productos">
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
    <main className="mx-auto max-w-[1100px] px-6 pb-12 pt-8">
      <Link className="mb-4 inline-block font-semibold text-blue-600" to="/productos">
        Volver a productos
      </Link>
      <section className="grid gap-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_12px_28px_rgba(15,23,42,0.08)] lg:grid-cols-[minmax(260px,1fr)_1.2fr]">
        <img
          className="h-[280px] w-full rounded-xl bg-slate-100 object-cover"
          src={producto.imagen}
          alt={producto.nombre}
        />
        <div className="flex flex-col gap-2">
          <p className="text-[12px] uppercase tracking-[0.08em] text-slate-500">
            {producto.marca}
          </p>
          <h1 className="text-[26px] font-semibold text-slate-900">
            {producto.nombre}
          </h1>
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-[22px] font-bold text-slate-900">
              {formatter.format(producto.precio)}
            </p>
            {envioGratis && (
              <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-semibold uppercase text-slate-700">
                Envio gratis
              </span>
            )}
          </div>
          <p className="text-slate-600">{producto.descripcion}</p>
          <p className="font-semibold text-slate-900">
            Stock: {producto.stock}
          </p>
          <button
            className="mt-2 w-fit rounded-[10px] bg-hover-light px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-hover-dark"
            type="button"
          >
            Añadir al carrito
          </button>
        </div>
      </section>
    </main>
  );
}
