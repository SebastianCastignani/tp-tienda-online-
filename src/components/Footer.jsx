import { useState, useEffect } from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const marcas = [
  "/img/marca1.svg",
  "/img/marca2.svg",
  "/img/marca3.svg",
  "/img/marca4.svg",
];

function Footer() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndex(prev => (prev + 1) % marcas.length);
    }, 3000);
    return () => clearInterval(intervalo);
  }, []);
    return (
        <footer className="bg-bg-light dark:bg-bg-dark">
            <div className="container mx-auto py-2 flex flex-col md:flex-row items-center justify-center">
                <div className="flex flex-col items-center gap-3 px-8 py-4 max-md:order-first">
                    <h3 className="font-bold text-text-light dark:text-text-dark mb-2">MARCAS</h3>
                    <img src={marcas[index]} alt={`Marca ${index + 1}`} className="h-20 w-20 transition-opacity duration-500 border-2 bg-bg-light p-2 rounded-md border-none" />
                </div>

                <div className="max-md:w-3/4 max-md:h-px md:w-px md:h-32 bg-text-light/30 dark:bg-text-dark/30 max-md:my-4"></div>

                <div className="flex flex-col items-center gap-3 px-8 py-4">
                    <Link to="/sobre-nosotros"><button className="text-text-dark dark:text-text-light hover:text-hover-dark dark:hover:text-hover-light bg-text-light dark:bg-text-dark border-none font-bold p-2 rounded-md cursor-pointer transition-all duration-300">NOSOTROS</button></Link>
                    <Link to=""><button className="text-text-dark dark:text-text-light hover:text-hover-dark dark:hover:text-hover-light bg-text-light dark:bg-text-dark border-none font-bold p-2 rounded-md cursor-pointer transition-all duration-300">CONTACTO</button></Link>
                    <a className="text-text-light dark:text-text-dark hover:text-hover-light dark:hover:text-hover-dark border-none font-bold underline cursor-pointer transition-all duration-300">Términos y Condiciones</a>
                </div>

                <div className="max-md:w-3/4 max-md:h-px md:w-px md:h-32 bg-text-light/30 dark:bg-text-dark/30 max-md:my-4"></div>

                <div className="flex flex-col items-center gap-3 px-8 py-4">
                    <h3 className="font-bold text-text-light dark:text-text-dark mb-2">SEGUINOS EN</h3>
                    <div className="flex gap-6">
                        <a href="#" className="text-text-light dark:text-text-dark hover:bg-text-light hover:text-bg-light dark:hover:bg-text-dark dark:hover:text-bg-dark border-2 border-text-light dark:border-text-dark rounded-full p-2 transition-all duration-300">
                            <FaInstagram className="w-6 h-6" />
                        </a>
                        <a href="#" className="text-text-light dark:text-text-dark hover:bg-text-light hover:text-bg-light dark:hover:bg-text-dark dark:hover:text-bg-dark border-2 border-text-light dark:border-text-dark rounded-full p-2 transition-all duration-300">
                            <FaFacebook className="w-6 h-6" />
                        </a>
                        <a href="#" className="text-text-light dark:text-text-dark hover:bg-text-light hover:text-bg-light dark:hover:bg-text-dark dark:hover:text-bg-dark border-2 border-text-light dark:border-text-dark rounded-full p-2 transition-all duration-300">
                            <FaTwitter className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="border-t border-text-light/30 dark:border-text-dark/30">
                <div className="container mx-auto py-6 text-center">
                    <p className="text-text-light/70 dark:text-text-dark/70 text-sm">© 2026 1001. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;