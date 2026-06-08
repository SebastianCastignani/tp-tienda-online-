import { createContext, useContext, useState } from "react";

const CarritoContext = createContext();

export function CarritoProvider({ children }) {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto, cantidad = 1) => {
    setCarrito((prev) => {
      const existe = prev.find((item) => item.id === producto.id);

      if (existe) {
        const nuevaCantidad = Math.min(
          existe.cantidad + cantidad,
          producto.stock
        );

        return prev.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: nuevaCantidad }
            : item
        );
      }

      return [
        ...prev,
        {
          ...producto,
          cantidad: Math.min(cantidad, producto.stock),
        },
      ];
    });
  };

  const eliminarDelCarrito = (id) => {
    setCarrito((prev) => prev.filter((item) => item.id !== id));
  };

  const actualizarCantidad = (id, cantidad) => {
    setCarrito((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              cantidad: Math.max(1, Math.min(cantidad, item.stock)),
            }
          : item
      )
    );
  };

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        agregarAlCarrito,
        eliminarDelCarrito,
        actualizarCantidad,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
}

export const useCarrito = () => useContext(CarritoContext);