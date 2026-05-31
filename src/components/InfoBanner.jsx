import React, { useState, useEffect } from 'react';

const InfoBanner = () => {
      const mensajes = [
        "🚚 Envíos a todo el país",
        "💳 Múltiples opciones de pago: tarjetas, transferencias y cuotas",
        "✅ Garantía oficial y soporte técnico post-venta en todos los productos"
      ];

      const [indice, setIndice] = useState(0);

      useEffect(() => {
        const intervalo = setInterval(() => {
          setIndice((prevIndice) => (prevIndice + 1) % mensajes.length);
        }, 3000);
        return () => clearInterval(intervalo);
      }, []);

      return (
        <div className="bg-hover-dark text-white py-5 w-full">
          <div className="flex justify-center items-center h-6">
            <p className="text-light md:text-sm font-serif font-black uppercase tracking-widest animate-fade-in-out">
              {mensajes[indice]}
            </p>
          </div>
        </div>
      );
    };

export default InfoBanner