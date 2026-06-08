import { useState } from 'react'

export default function Contacto() {
  const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")
  const [email, setEmail] = useState("")
  const [mensaje, setMensaje] = useState("")
  const [errores, setErrores] = useState({})
  const [enviado, setEnviado] = useState(false)

  function validarFormulario() {
    const nuevosErrores = {}

    if (!nombre.trim()) {
      nuevosErrores.nombre = "El nombre es obligatorio"
    }
    if (!apellido.trim()) {
      nuevosErrores.apellido = "El apellido es obligatorio"
    }
    if (!email.trim()) {
      nuevosErrores.email = "El correo electrónico es obligatorio"
    } else if (!email.includes("@")) {
      nuevosErrores.email = "El correo electrónico no es válido"
    }
    if (!mensaje.trim()) {
      nuevosErrores.mensaje = "El mensaje es obligatorio"
    }

    setErrores(nuevosErrores)
    return Object.keys(nuevosErrores).length === 0
  }

  function manejarEnvio(e) {
    e.preventDefault()

    if (validarFormulario()) {
      console.log("Nombre:", nombre)
      console.log("Apellido:", apellido)
      console.log("Email:", email)
      console.log("Mensaje:", mensaje)
      setEnviado(true)
    }
  }

  return (
    <div className="min-h-screen bg-bg-light dark:bg-bg-dark flex items-center justify-center">
      <div className="w-full bg-white dark:bg-gray-900 md:px-96 md:py-12 px-6 py-8">
        <h1 className="text-3xl font-bold text-center text-text-light dark:text-text-dark mb-2">Contacto</h1>
        <p className="text-center text-gray-500 dark:text-gray-400 mb-8">Ante cualquier duda o inconveniente, complete el siguiente formulario para comunicarse con nosotros</p>

        <form className="space-y-5" onSubmit={manejarEnvio} noValidate>
          <div className="flex gap-4">
            <div className="flex-1">
              <label htmlFor="nombre" className="block text-sm font-medium text-text-light dark:text-text-dark mb-1">Nombre</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={nombre}
                onChange={(e) => { setNombre(e.target.value); setErrores(prev => ({...prev, nombre: ""})) }}
                className={`w-full px-4 py-2.5 rounded-lg border bg-white dark:bg-gray-800 text-text-light dark:text-text-dark focus:ring-2 focus:ring-hover-light dark:focus:ring-hover-dark focus:border-transparent outline-none transition-all duration-200 ${errores.nombre ? "border-red-500" : "border-gray-300 dark:border-gray-600"}`}
              />
              {errores.nombre && <p className="text-red-500 text-sm mt-1">{errores.nombre}</p>}
            </div>
            <div className="flex-1">
              <label htmlFor="apellido" className="block text-sm font-medium text-text-light dark:text-text-dark mb-1">Apellido</label>
              <input
                type="text"
                id="apellido"
                name="apellido"
                value={apellido}
                onChange={(e) => { setApellido(e.target.value); setErrores(prev => ({...prev, apellido: ""})) }}
                className={`w-full px-4 py-2.5 rounded-lg border bg-white dark:bg-gray-800 text-text-light dark:text-text-dark focus:ring-2 focus:ring-hover-light dark:focus:ring-hover-dark focus:border-transparent outline-none transition-all duration-200 ${errores.apellido ? "border-red-500" : "border-gray-300 dark:border-gray-600"}`}
              />
              {errores.apellido && <p className="text-red-500 text-sm mt-1">{errores.apellido}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-text-light dark:text-text-dark mb-1">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setErrores(prev => ({...prev, email: ""})) }}
              className={`w-full px-4 py-2.5 rounded-lg border bg-white dark:bg-gray-800 text-text-light dark:text-text-dark focus:ring-2 focus:ring-hover-light dark:focus:ring-hover-dark focus:border-transparent outline-none transition-all duration-200 ${errores.email ? "border-red-500" : "border-gray-300 dark:border-gray-600"}`}
            />
            {errores.email && <p className="text-red-500 text-sm mt-1">{errores.email}</p>}
          </div>

          <div>
            <label htmlFor="mensaje" className="block text-sm font-medium text-text-light dark:text-text-dark mb-1">Mensaje</label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows={5}
              value={mensaje}
              onChange={(e) => { setMensaje(e.target.value); setErrores(prev => ({...prev, mensaje: ""})) }}
              className={`w-full px-4 py-2.5 rounded-lg border bg-white dark:bg-gray-800 text-text-light dark:text-text-dark focus:ring-2 focus:ring-hover-light dark:focus:ring-hover-dark focus:border-transparent outline-none resize-none transition-all duration-200 ${errores.mensaje ? "border-red-500" : "border-gray-300 dark:border-gray-600"}`}
            ></textarea>
            {errores.mensaje && <p className="text-red-500 text-sm mt-1">{errores.mensaje}</p>}
          </div>

          {enviado && <p className="font-bold text-green-500 text-center mb-6">¡Mensaje enviado con éxito!</p>}

          <button
            type="submit"
            className="w-full py-3 bg-hover-light dark:bg-hover-dark text-white font-bold rounded-lg hover:opacity-90 transition-all duration-200 cursor-pointer"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </div>
  )
}
