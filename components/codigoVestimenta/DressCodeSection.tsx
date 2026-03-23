"use client";

import Image from "next/image";
import { cldFlower, cldIcon } from "@/lib/cloudinary";
import { Alex_Brush } from "next/font/google";

const alexBrush = Alex_Brush({
  weight: "400",
  subsets: ["latin"],
});

export default function DressCodeSection() {
  return (
    <section
      id="vestimenta"
      className="
        relative
        w-full
        bg-white
        py-16
        px-6
        overflow-hidden
      "
    >

      {/* FLOR DERECHA */}
      <Image
        src={cldFlower("flor-rosa_shcxm1.webp")}
        alt="flor decorativa"
        width={160}
        height={160}
        sizes="(max-width: 768px) 120px, 160px"
        className="
          absolute
          right-[-40px]
          top-0
          w-36
          opacity-90
          pointer-events-none
        "
      />

      {/* FLOR IZQUIERDA */}
      <Image
        src={cldFlower("pimpollo_jd5ls8.webp")}
        alt="flor decorativa"
        width={160}
        height={160}
        sizes="(max-width: 768px) 120px, 160px"
        className="
          absolute
          left-[-40px]
          bottom-20
          w-36
          opacity-90
          pointer-events-none
        "
      />

      {/* CONTENIDO */}
      <div className="flex flex-col items-center text-center relative z-10">

        {/* ICONO */}
        <Image
          src={cldIcon("corbatin_wyglxn.webp")}
          alt="icono de vestimenta formal"
          width={256}
          height={256}
          sizes="(max-width: 768px) 192px, 256px"
          className="w-48 sm:w-64 mb-6"
        />

        {/* TITULO */}
        <h2
          className={`
            ${alexBrush.className}
            text-[#c78c3a]
            text-4xl
            sm:text-5xl
            mb-2
          `}
        >
          Código de Vestimenta
        </h2>

        {/* SUBTITULO */}
        <p className="text-3xl sm:text-4xl text-gray-700 mb-3">
          Formal
        </p>

        {/* TEXTO */}
        <p
          className="
            text-gray-500
            italic
            text-2xl
            sm:text-3xl
            max-w-[300px]
            leading-relaxed
          "
        >
          (Damas, el color blanco está reservado para la novia)
        </p>

      </div>

      {/* FLORES INFERIORES */}
      <div className="flex justify-center mt-8">
        <Image
          src={cldFlower("arreglo-flores_gceljq.webp")}
          alt="flores decorativas"
          width={256}
          height={256}
          sizes="(max-width: 768px) 192px, 256px"
          className="w-48 sm:w-64 opacity-90"
        />
      </div>

    </section>
  );
}