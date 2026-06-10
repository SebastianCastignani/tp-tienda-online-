import { createContext, useContext, useState, useEffect } from "react";

const CarritoContext = createContext();

export function CarritoProvider({ children }) {
  const [carrito, setCarrito] = useState(() => {
    const guardado = localStorage.getItem("carrito");
    return guardado ? JSON.parse(guardado) : [];
  });

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  const agregarAlCarrito = (producto, cantidad = 1) => {
    setCarrito((prev) => {
      const existe = prev.find((item) => item.id === producto.id);

      if (existe) {
        const nuevaCantidad = Math.min(
          existe.cantidad + cantidad,
          producto.stock,
        );

        return prev.map((item) =>
          item.id === producto.id ? { ...item, cantidad: nuevaCantidad } : item,
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
          : item,
      ),
    );
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        agregarAlCarrito,
        eliminarDelCarrito,
        actualizarCantidad,
        vaciarCarrito,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
}

export const useCarrito = () => useContext(CarritoContext);
