"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {

  const [open, setOpen] = useState(false)

  const toggleMenu = () => setOpen(!open)
  const closeMenu = () => setOpen(false)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [open])

  return (
    <>
      {/* NAVBAR */}
      <nav
        className="
        fixed
        top-0
        left-0
        w-full
        bg-white
        shadow
        z-50
        "
      >

        {/* CONTENEDOR */}
        <div className="flex items-center justify-between px-6 py-4 md:justify-center">

          {/* DESKTOP MENU */}
          <div className="hidden md:flex gap-12">

            <a href="#inicio" className="text-black hover:text-[#c59d5f] transition font-['Alex_Brush']">Inicio</a>
            <a href="#fecha" className="text-black hover:text-[#c59d5f] transition font-['Alex_Brush']">Fecha</a>
            <a href="#nuestros-padres" className="text-black hover:text-[#c59d5f] transition font-['Alex_Brush']">Nuestros Padres</a>
            <a href="#ubicacion" className="text-black hover:text-[#c59d5f] transition font-['Alex_Brush']">Ubicacion</a>
            <a href="#vestimenta" className="text-black hover:text-[#c59d5f] transition font-['Alex_Brush']">Vestimenta</a>
            <a href="#itinerario" className="text-black hover:text-[#c59d5f] transition font-['Alex_Brush']">Itinerario</a>
            <a href="#album" className="text-black hover:text-[#c59d5f] transition font-['Alex_Brush']">Album</a>
            <a href="#regalos" className="text-black hover:text-[#c59d5f] transition font-['Alex_Brush']">Regalos</a>
            <a href="#confirmacion" className="text-black hover:text-[#c59d5f] transition font-['Alex_Brush']">Confirmacion</a>

          </div>

          {/* BOTON MOVIL */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-black focus:outline-none"
          >
            {open ? <X size={28}/> : <Menu size={28}/>}
          </button>

        </div>

      </nav>


      {/* OVERLAY */}
      <div
        onClick={closeMenu}
        className={`
        md:hidden
        fixed
        inset-0
        bg-black/40
        z-40
        transition-opacity
        duration-300
        ${open ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      />



      {/* MENU MOVIL */}
      <nav
        className={`
        md:hidden
        fixed
        top-0
        right-0
        h-full
        w-[50%]
        max-w-[300px]
        bg-white
        flex
        flex-col
        gap-6
        pt-24
        px-8
        shadow-xl
        z-50
        transform
        transition-transform
        duration-300
        ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >

        <a href="#inicio" className="text-black font-[Alex_Brush]" onClick={closeMenu}>Inicio</a>
        <a href="#fecha" className="text-black font-[Alex_Brush]" onClick={closeMenu}>Fecha</a>
        <a href="#nuestros-padres" className="text-black font-[Alex_Brush]" onClick={closeMenu}>Nuestros Padres</a>
        <a href="#ubicacion" className="text-black font-[Alex_Brush]" onClick={closeMenu}>Ubicacion</a>
        <a href="#vestimenta" className="text-black font-[Alex_Brush]" onClick={closeMenu}>Vestimenta</a>
        <a href="#itinerario" className="text-black font-[Alex_Brush]" onClick={closeMenu}>Itinerario</a>
        <a href="#album" className="text-black font-[Alex_Brush]" onClick={closeMenu}>Album</a>
        <a href="#regalos" className="text-black font-[Alex_Brush]" onClick={closeMenu}>Regalos</a>
        <a href="#confirmacion" className="text-black font-[Alex_Brush]" onClick={closeMenu}>Confirmacion</a>

      </nav>
    </>
  )
}