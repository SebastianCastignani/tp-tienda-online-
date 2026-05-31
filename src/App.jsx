import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Header from './components/Header'
import Inicio from './pages/Inicio'
import SobreNosotros from './pages/SobreNosotros'
import { Routes, Route } from 'react-router-dom';
import './App.css'

function App() {
  return (
<>
      <Header /> {/* Se mantiene fijo en todas las páginas */}
      
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
      </Routes>
    </>
  )
}

export default App
