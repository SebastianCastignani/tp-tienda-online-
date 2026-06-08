import CarritoItem from "../components/CarritoItem";
import { useCarrito } from "../context/CarritoContext";

export default function Carrito() {
  const {
    carrito,
    eliminarDelCarrito,
    actualizarCantidad,
  } = useCarrito();

  const formatter = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  });

  const total = carrito.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );

  return (
    <main className="max-w-[1400px] mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-6 text-text-light dark:text-text-dark">
        Carrito
      </h1>

      <div className="grid lg:grid-cols-[1fr_320px] gap-6">
        <section className="flex flex-col gap-4">
          {carrito.length === 0 ? (
            <p className="text-text-light dark:text-text-dark">
              Tu carrito está vacío.
            </p>
          ) : (
            carrito.map((producto) => (
              <CarritoItem
                key={producto.id}
                producto={producto}
                onEliminar={eliminarDelCarrito}
                onActualizarCantidad={actualizarCantidad}
              />
            ))
          )}
        </section>

        <aside className="h-fit sticky top-6 p-5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900">
          <h2 className="font-bold text-xl mb-4 text-text-light dark:text-text-dark">
            Resumen
          </h2>

          <p className="mb-4 text-text-light dark:text-text-dark">
            Total:
            <span className="font-bold ml-2">
              {formatter.format(total)}
            </span>
          </p>

          <button
            className="w-full bg-hover-light hover:bg-hover-dark text-white py-3 rounded-lg font-semibold"
          >
            Proceder al pago
          </button>
        </aside>
      </div>
    </main>
  );
}