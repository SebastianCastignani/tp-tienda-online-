import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from "../context/ModeContext";
import { useState, useEffect } from "react"; 
import InfoBanner from '../components/InfoBanner';
import SobreNosotros from './SobreNosotros';
import logoParaFondoClaro from "../assets/logo-claro.png";
import logoParaFondoOscuro from "../assets/logo-oscuro.png";

const Inicio = () => {
  const {tema, toggleTema} = useTheme();
  
  return (
    <div className="min-h-screen bg-white dark:bg-bg-dark text-text-light dark:text-text-dark">
      <InfoBanner /> 
      {/* BANNER PRINCIPAL */}
      <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
        {/* Imagen de fondo */}
        <img 
          src="https://images.unsplash.com/photo-1547119957-637f8679db1e?q=80&w=1200&auto=format&fit=crop" 
          alt="Banner Principal" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Capa oscura*/}
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-4xl md:text-6xl font-black mb-4 tracking-tighter">
            BIENVENIDOS A 1001
          </h1>
          <p className="text-gray-200 text-lg md:text-xl max-w-xl mb-8">
            Teclados mecánicos, mouses de alta precisión y todo lo que tu PC necesita para el siguiente nivel.          </p>
          <Link 
            to="/productos" 
            className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors uppercase tracking-widest text-sm"
          >
            Explorar Catálogo
          </Link>
        </div>
      </div>

      <section className="mt-4 mb-20">
        <h3 className="text-3xl font-black italic tracking-tighter text-center mb-12 uppercase">
          Nuestros productos estrella 
        </h3>

        <section className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5"> 
            <p className="text-center"> ELEGIR 3 PARA MOSTRAR ACA</p>
            <p className="text-center"> ELEGIR 3 PARA MOSTRAR ACA</p>
            <p className="text-center"> ELEGIR 3 PARA MOSTRAR ACA</p>
        </section>

      </section>




        <section className="py-16 px-6 max-w-4xl mx-auto text-center">
          <div className="w-24 h-24 bg-bg-dark dark:bg-bg-light mx-auto mb-6 rounded-2xl flex items-center justify-center shadow-xl rotate-3 hover:rotate-0 transition-transform">
              <Link to="/">
                       <img 
                         src={tema === "light" ? logoParaFondoClaro : logoParaFondoOscuro} 
                         alt="Logo de la tienda" 
                         className="w-21 h-21 object-contain rounded-xl shadow-sm" 
                       />
              </Link> 
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-tight">
            Sobre nosotros
          </h2>
          
          <div className="w-20 h-1 bg-black dark:bg-white mx-auto mb-6"></div>

          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed italic">
            Tu setup, tus reglas. 
            <br/> Nos dedicamos a equipar tu espacio con periféricos de alto rendimiento y hardware de última generación.
          </p>

          <div className="mt-6">
              <Link to="/sobre-nosotros">
                      <button className="px-6 py-2 border-2 border-hover-light text-hover-light dark:border-hover-dark dark:text-hover-dark font-bold rounded-lg hover:bg-hover-light hover:text-white dark:hover:bg-hover-dark transition-all">
                        Conocé nuestra historia
                      </button>
              </Link>
          </div>
        </section>

      </div>
  );
};

export default Inicio;