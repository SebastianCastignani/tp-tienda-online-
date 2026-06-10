import Header from './components/Header'
import Footer from './components/Footer'
import Inicio from './pages/Inicio'
import SobreNosotros from './pages/SobreNosotros'
import Productos from './pages/Productos'
import Contacto  from './pages/Contacto'
import DetalleProducto from './pages/DetalleProducto'
import Carrito from './pages/Carrito'
import Pago from './pages/Pago';
import PagoExitoso from './pages/PagoExitoso';
import { Routes, Route } from 'react-router-dom';
import './App.css'

function App() {
  return (
<>
      <Header /> {/* Se mantiene fijo en todas las páginas */}
      
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/productos/:id" element={<DetalleProducto />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/pago" element={<Pago />} />
        <Route path="/pago-exitoso" element={<PagoExitoso />} />
      </Routes>

      <Footer /> {/* Se mantiene fijo en todas las páginas */}
    </>
  )
}

export default App
