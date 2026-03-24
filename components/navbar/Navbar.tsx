"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {

  const [open, setOpen] = useState(false)

  const toggleMenu = () => setOpen(!open)
  const closeMenu = () => setOpen(false)

  // bloquear scroll cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto"

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [open])

  // cerrar con ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu()
    }

    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [])

  // enlaces reutilizables
  const links = [
    { href: "#inicio", label: "Inicio" },
    { href: "#fecha", label: "Fecha" },
    { href: "#nuestros-padres", label: "Nuestros Padres" },
    { href: "#ubicacion", label: "Ubicación" },
    { href: "#vestimenta", label: "Vestimenta" },
    { href: "#itinerario", label: "Itinerario" },
    { href: "#album", label: "Álbum" },
    { href: "#confirmacion", label: "Confirmación" },
  ]

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow z-50 transition-all duration-300">

        {/* CONTENEDOR */}
        <div className="max-w-[1200px] mx-auto px-6 py-8 md:py-4 relative">

          {/* MENU DESKTOP */}
          <div className="hidden md:flex justify-center gap-12">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-black hover:text-[#c59d5f] transition font-['Alex_Brush']"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* BOTON MOVIL */}
          <button
            onClick={toggleMenu}
            aria-label="Abrir menú"
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="md:hidden absolute right-6 top-1/2 -translate-y-1/2 text-black"
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
        id="mobile-menu"
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
          pt-28
          px-8
          shadow-xl
          z-50
          transform
          transition-transform
          duration-300
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={closeMenu}
            className="font-[Alex_Brush] text-black"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </>
  )
}