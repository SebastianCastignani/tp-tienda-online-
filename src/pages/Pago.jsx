import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCarrito } from "../context/CarritoContext";

export default function Pago() {
  const [direccionSeleccionada, setDireccionSeleccionada] = useState("casa");
  const [metodoSeleccionado, setMetodoSeleccionado] = useState("visa");

  const { vaciarCarrito } = useCarrito();
  const navigate = useNavigate();

  const realizarPago = () => {
    vaciarCarrito();
    navigate("/pago-exitoso");
  };

  const estiloCard = (seleccionada) =>
    `border rounded-xl p-4 cursor-pointer transition
    ${
      seleccionada
        ? "border-green-500 bg-green-100"
        : "border-slate-300 hover:border-slate-500"
    }`;

  return (
    <main className="max-w-4xl mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-8">
        Finalizar compra
      </h1>

      {/* DIRECCIONES */}

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">
          Dirección de entrega
        </h2>

        <div className="grid gap-4">
          <div
            onClick={() => setDireccionSeleccionada("casa")}
            className={estiloCard(direccionSeleccionada === "casa")}
          >
            <h3 className="font-semibold">
              Dirección de tu casa
            </h3>

            <p>Av. Siempre Viva 742</p>
          </div>

          <div
            onClick={() => setDireccionSeleccionada("trabajo")}
            className={estiloCard(direccionSeleccionada === "trabajo")}
          >
            <h3 className="font-semibold">
              Dirección del trabajo
            </h3>

            <p>Av. Corrientes 1234, CABA</p>
          </div>

          <div
            onClick={() => setDireccionSeleccionada("otra")}
            className={estiloCard(direccionSeleccionada === "otra")}
          >
            <h3 className="font-semibold">
              Elegir otra dirección
            </h3>

            <p>Próximamente</p>
          </div>
        </div>
      </section>

      {/* PAGOS */}

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">
          Método de pago
        </h2>

        <div className="grid gap-4">
          <div
            onClick={() => setMetodoSeleccionado("visa")}
            className={estiloCard(metodoSeleccionado === "visa")}
          >
            <h3 className="font-semibold">
              Tarjeta VISA **** 1234
            </h3>
          </div>

          <div
            onClick={() => setMetodoSeleccionado("mercadopago")}
            className={estiloCard(
              metodoSeleccionado === "mercadopago"
            )}
          >
            <h3 className="font-semibold">
              Pagar con Mercado Pago
            </h3>
          </div>
        </div>
      </section>

      <button
        onClick={realizarPago}
        className="w-full bg-hover-light hover:bg-hover-dark text-white py-3 rounded-lg font-bold"
      >
        Realizar el pago
      </button>
    </main>
  );
}