import { Link } from 'react-router-dom';

export default function ProductoCard({ producto }) {
  const formatter = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0,
  });

  const envioGratis = producto.precio > 100000;

  return (
    <article className="flex flex-col gap-3 rounded-[14px] border border-slate-200 bg-white p-4 shadow-[0_12px_28px_rgba(15,23,42,0.08)] transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(15,23,42,0.12)]">
      <img
        className="h-[170px] w-full rounded-xl bg-slate-100 object-cover"
        src={producto.imagen}
        alt={producto.nombre}
        loading="lazy"
      />
      <div className="flex flex-col gap-1.5">
        <p className="text-[12px] uppercase tracking-[0.08em] text-slate-500">
          {producto.marca}
        </p>
        <h3 className="text-[16px] font-semibold text-slate-900">
          {producto.nombre}
        </h3>
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-[18px] font-bold text-slate-900">
            {formatter.format(producto.precio)}
          </p>
          {envioGratis && (
            <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-semibold uppercase text-slate-700">
              Envio gratis
            </span>
          )}
        </div>
      </div>
      <Link
        className="mt-auto rounded-[10px] bg-hover-light px-3 py-2 text-center font-semibold text-white transition-colors hover:bg-hover-dark"
        to={`/productos/${producto.id}`}
      >
        Ver producto
      </Link>
    </article>
  );
}
