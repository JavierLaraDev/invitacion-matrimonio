"use client";

import Image from "next/image";
import { cldFlower } from "@/lib/cloudinary";
import { Alex_Brush } from "next/font/google";
import { MessageCircle } from "lucide-react";

const alexBrush = Alex_Brush({
  weight: "400",
  subsets: ["latin"],
});

export default function ConfirmationSection() {
  const phone = "59177495345";
  const message = "Hola Giancarla, confirmo mi asistencia a la boda";

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  const flower = cldFlower("flor-rosa_shcxm1.webp");
  const leaf = cldFlower("pimpollo_jd5ls8.webp");

  return (
    <section
      className="
        relative
        w-full
        bg-[#fdfaf7]
        overflow-hidden
        pt-16
        pb-40
        px-6
      "
    >
      {/* FLOR LATERAL */}
      <Image
        src={leaf}
        alt=""
        width={130}
        height={130}
        aria-hidden
        className="absolute right-0 top-1/4 w-24 md:w-32 opacity-90 translate-x-1/3 rotate-180"
      />

      <Image
        src={leaf}
        alt=""
        width={130}
        height={130}
        aria-hidden
        className="absolute right-0 top-1/2 w-24 md:w-32 opacity-70 translate-x-1/4 rotate-180"
      />

      {/* CONTENIDO */}
      <div className="relative z-10 max-w-xs md:max-w-md mx-auto text-center flex flex-col items-center gap-5">

        {/* TEXTO */}
        <p
          className={`${alexBrush.className} text-gray-500 text-3xl md:text-4xl`}
        >
          Es muy importante que nos confirmes tu asistencia
        </p>

        {/* ICONO */}
        <svg
          width="56"
          height="56"
          viewBox="0 0 100 100"
          fill="none"
          className="mt-2"
        >
          <circle cx="50" cy="50" r="45" stroke="#c59d5f" strokeWidth="3" />
          <path
            d="M35 40 L50 55 L65 40"
            stroke="#c59d5f"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M35 52 L50 67 L65 52"
            stroke="#c59d5f"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>

        {/* TITULO */}
        <h2
          className={`${alexBrush.className} text-[#c58a3c] text-4xl`}
        >
          Confirma tu asistencia
        </h2>

        {/* SUBTITULO */}
        <p className="text-gray-500 italic text-lg leading-relaxed">
          Confirma tu asistencia hasta el 20 de Abril
        </p>

        {/* BOTON */}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="
            relative
            inline-flex
            items-center
            gap-2
            bg-[#f3a6a6]
            hover:bg-[#ee9090]
            text-white
            text-xl
            font-medium
            px-6
            py-3
            rounded-full
            shadow-md
            transition
            mt-3
            group
          "
        >
          <span
            className="
              absolute
              inset-0
              rounded-full
              bg-[#f3a6a6]
              opacity-40
              animate-ping
              group-hover:opacity-0
            "
          />

          <span className="relative flex items-center gap-2">
            <MessageCircle size={18} />
            Confirmar asistencia
          </span>
        </a>

        <p className="text-gray-400 italic text-lg">
          Confirma con los novios
        </p>

        <h2
          className={`${alexBrush.className} text-[#c58a3c] text-5xl mt-6`}
        >
          ¡Te Esperamos!
        </h2>
      </div>

      {/* FLORES INFERIORES */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none">

        <Image
          src={flower}
          alt=""
          width={260}
          height={260}
          aria-hidden
          className="absolute left-0 bottom-[-90px] w-52 md:w-64 opacity-95 -translate-x-8"
        />

        <Image
          src={flower}
          alt=""
          width={260}
          height={260}
          aria-hidden
          className="absolute right-0 bottom-[-90px] w-52 md:w-64 opacity-95 translate-x-8 scale-x-[-1]"
        />

      </div>
    </section>
  );
}