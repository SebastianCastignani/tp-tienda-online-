import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from "../context/ModeContext";
import logoParaFondoClaro from "../assets/logo-claro.png";
import logoParaFondoOscuro from "../assets/logo-oscuro.png";

function SobreNosotros() {
  const {tema, toggleTema} = useTheme();
  return (
    <main className="max-w-6xl bg-white dark:bg-bg-dark mx-auto px-4 pt-28 pb-16  text-text-light dark:text-text-dark ">
     <div> 
      <section className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter mb-4 uppercase">
          ¿Quiénes somos? <span className="text-hover-light">1001</span>
        </h2>
        <p className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto font-medium">
            Nacimos para romper los límites de tu escritorio y llevar tu rendimiento al siguiente nivel. </p>
      </section>
    
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24 bg-gray-50 dark:bg-slate-900/50 p-8 md:p-12 rounded-3xl border border-gray-100 dark:border-gray-800">
        <div>
          <h3 className="text-2xl font-black italic tracking-tight mb-4 uppercase text-hover-light">
            El Origen del Código
          </h3>
          <p className="opacity-80 leading-relaxed mb-4">
            En el mundo digital, todo se reduce a unos y ceros. <span className="text-hover-light font-black">1001</span> no es solo un número; es un guiño al código binario que da vida al hardware que amamos. 
          </p>
          <p className="opacity-80 leading-relaxed">
            Comenzamos como un grupo de amigos buscando el click perfecto y el audio más preciso. Hoy, ofrecemos la mejor tecnología para que tu rendimiento no tenga límites.
          </p>
        </div>
       
        <div className="relative h-64 bg-gradient-to-br from-purple-600 to-indigo-900 rounded-2xl flex items-center justify-center shadow-xl overflow-hidden relative group">
          <div className="absolute right-0 top-0 w-full h-full font-mono text-[20px] text-purple-300/10 leading-none select-none pointer-events-none break-all [mask-image:linear-gradient(to_left,white,transparent)] group-hover:scale-105 transition-transform duration-700 overflow-hidden text-right">
            1001010101010010101010101010101010101010101010101010010101010101010101
            0101010101010010101010101010101010101010101010101010010101010101010101
            1001010101010010101010101010101010101010101010101010010101010101010101
            0101010101010010101010101010101010101010101010101010010101010101010101
            1001010101010010101010101010101010101010101010101010010101010101010101
            0101010101010010101010101010101010101010101010101010010101010101010101
            1001010101010010101010101010101010101010101010101010010101010101010101
            0101010101010010101010101010101010101010101010101010010101010101010101
            </div>
        <div className="z-10 flex items-center justify-center bg-slate-950/40 p-2 rounded-2xl border border-white/5 backdrop-blur-sm shadow-inner">
            <img 
                src={tema === "light" ? logoParaFondoClaro : logoParaFondoOscuro} 
                alt="Logo de la tienda" 
                className="w-35 h-35 object-contain rounded-xl shadow-sm" 
                />
        </div>  
        <div className="z-10 p-10 text-right">
            <span className="block text-white font-black text-5xl italic tracking-tighter mb-1 drop-shadow-md">
            1001
            </span>
            <span className="block text-purple-200/60 font-mono text-xs uppercase tracking-widest font-bold">
            Binary Core
            </span>
        </div>
          
        </div>
      </section>

      <section className="mt-4 mb-20">
        <h3 className="text-3xl font-black italic tracking-tighter text-center mb-12 uppercase">
            ¿POR QUÉ ELEGIRNOS?
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="text-4xl mb-4">⚡</div>
            <h4 className="text-xl font-bold mb-2">Velocidad</h4>
            <p className="text-sm opacity-75 leading-relaxed">
              Procesamos tu pedido al instante. Olvidate de esperar semanas; despachamos en menos de 24 horas.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="text-4xl mb-4">🔒</div>
            <h4 className="text-xl font-bold mb-2">Garantía de Confianza</h4>
            <p className="text-sm opacity-75 leading-relaxed">
              Comprá sin miedo. Todos nuestros productos tienen garantía oficial y directa. Si algo falla, lo resolvemos rápido y sin vueltas.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="text-4xl mb-4">💡</div>
            <h4 className="text-xl font-bold mb-2">Innovación Constante</h4>
            <p className="text-sm opacity-75 leading-relaxed">
              Traemos lo último del mercado global. Si sale un mouse con el último sensor óptico o unos auriculares con audio espacial real, lo vas a encontrar acá primero.
            </p>
          </div>

        </div>
      </section>

      <section className="text-center bg-gradient-to-r from-hover-light/10 to-indigo-600/10 dark:from-slate-900 dark:to-slate-900 p-12 rounded-3xl border border-hover-light/20">
        <h3 className="text-3xl font-black italic tracking-tighter mb-4 uppercase">
          ¿Listo para subir de nivel?
        </h3>
        <p className="opacity-80 italic max-w-md mx-auto text-sm">
          Equipá tu espacio con las herramientas que usan los profesionales.  </p>
          <p className="opacity-80 font-black max-w-md mx-auto mb-5 text-sm">Tu próximo setup arranca acá.</p>
       

        <Link to="/productos">
          <button className="px-8 py-3 bg-hover-light text-white font-bold rounded-xl shadow-lg hover:bg-hover-light/90 hover:scale-105 active:scale-95 transition-all">
            Explorar Catálogo
          </button>
        </Link>
      </section>

    </div>
    </main>
  )
}

export default SobreNosotros

