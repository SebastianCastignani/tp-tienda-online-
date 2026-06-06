import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ModeProvider } from './context/ModeContext.jsx'
import { CarritoProvider } from "./context/CarritoContext";
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ModeProvider>
      <CarritoProvider>
        <StrictMode>
          <App />
        </StrictMode>
      </CarritoProvider>
    </ModeProvider>
  </BrowserRouter>,
)
