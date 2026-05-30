import React from 'react';
import { Link } from 'react-router-dom';
import milogo from "../assets/logo.png"

const Inicio = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-bg-dark text-text-light dark:text-text-dark">
      
      {/* SECCIÓN 1: BANNER PRINCIPAL (HERO) */}
      <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
        {/* Imagen de fondo */}
        <img 
          src="https://images.unsplash.com/photo-1547119957-637f8679db1e?q=80&w=1200&auto=format&fit=crop" 
          alt="1001" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Capa oscura para que el texto resalte */}
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
  {/* SECCIÓN 2: IDENTIDAD */}
        <section className="py-16 px-6 max-w-4xl mx-auto text-center">
          {/* Placeholder de Logo */}
          <div className="w-24 h-24 bg-bg-dark dark:bg-bg-light mx-auto mb-6 rounded-2xl flex items-center justify-center shadow-xl rotate-3 hover:rotate-0 transition-transform">
            <Link to="/"><img src={milogo} alt="Logo Pagina" className="w-16 h-16" object-contain/></Link>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-tight">
            Sobre nosotros
          </h2>
          
          <div className="w-20 h-1 bg-black dark:bg-white mx-auto mb-6"></div>

          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed italic">
            "Nacimos con la idea de llevar tecnología de punta a cada rincón, priorizando 
            siempre la honestidad y la rapidez en el servicio. Somos más que una tienda, 
            somos tu aliado digital."
          </p>
        </section>
      </div>
  );
};

export default Inicio;