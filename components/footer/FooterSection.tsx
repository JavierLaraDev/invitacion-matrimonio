"use client";

import { MessageCircle } from "lucide-react";

export default function FooterSection() {
  const year = new Date().getFullYear();

  const devPhone = "59169522726";
  const devMessage =
    "Hola Javier, me gustaría una invitación digital como la de Dyland y Giancarla";

  const devUrl = `https://wa.me/${devPhone}?text=${encodeURIComponent(
    devMessage
  )}`;

  return (
    <footer
      className="
        w-full
        bg-[#0a0a0a]
        px-6
        py-10
      "
    >
      {/* SEPARADOR */}
      <div className="w-full h-px bg-white/10 mb-6" />

      {/* CONTENIDO */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

        {/* IZQUIERDA */}
        <div className="text-center sm:text-left">
          <p className="text-white/30 text-xs tracking-widest uppercase">
            Invitación digital
          </p>

          <p className="text-white/60 text-sm mt-1">
            Desarrollado por Javier Lara Solís
          </p>
        </div>

        {/* DERECHA */}
        <a
          href={devUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex
            items-center
            gap-2
            border
            border-white/10
            text-white/60
            px-4
            py-2
            rounded-md
            hover:border-[#c59d5f]
            hover:text-[#c59d5f]
            transition
          "
        >
          <MessageCircle size={16} />
          Contacto
        </a>
      </div>

      {/* COPYRIGHT */}
      <div className="mt-6 text-center">
        <p className="text-white/20 text-xs">
          © {year} Javier Lara Solís
        </p>
      </div>
    </footer>
  );
}