import { productos } from '../data/productos';
import ProductoCard from '../components/ProductoCard';

export default function Productos() {
  return (
    <main className="mx-auto max-w-[1200px] px-6 pb-12 pt-8 bg-white dark:bg-slate-800">
      <header className="mb-6">
        <h1 className="mb-2 text-[28px] font-semibold text-slate-900 dark:text-slate-100">
          Productos
        </h1>
        <p className="text-slate-600 dark:text-slate-300">
          Explora nuestra seleccion y entra al detalle de cada producto.
        </p>
      </header>
      <section className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5">
        {productos.map((producto) => (
          <ProductoCard key={producto.id} producto={producto} />
        ))}
      </section>
    </main>
  );
}

export default ProductoCard; 
