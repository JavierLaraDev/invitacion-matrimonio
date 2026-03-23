"use client";

import { cldFlower } from "@/lib/cloudinary";
import Image from "next/image";

export default function ParentsSection() {
  return (
    <section
      id="nuestros-padres"
      className="
        relative
        w-full
        bg-white
        py-16
        flex
        justify-center
        overflow-hidden
      "
    >
      {/* FLOR LATERAL IZQUIERDA */}
      <Image
        src={cldFlower("flores-lateral_ivvtun.webp")}
        alt="flor lateral"
        width={300}
        height={300}
        sizes="(max-width: 768px) 150px, 300px"
        className="
          absolute
          left-[-60px]
          top-[200px]
          md:top-[120px]
          lg:top-[140px]
          w-48 md:w-60 lg:w-72
          opacity-90
          pointer-events-none
          select-none
          rotate-[-40deg]
        "
      />

      {/* CONTENIDO */}
      <div
        className="
          w-full
          max-w-[900px]
          px-4
          text-center
          flex
          flex-col
          items-center
        "
      >
        
        {/* TITULO */}
        <h2
          className={`
            font-["Alex Brush", cursive]
            text-[#c78c3a]
            text-4xl
            leading-relaxed
          `}
        >
          Con la bendición de Dios
          <br />
          y nuestros padres
        </h2>

        {/* FLORES CENTRALES */}
        <Image
          src={cldFlower("arreglo-flores_gceljq.webp")}
          alt="flores decorativas"
          width={240}
          height={240}
          sizes="(max-width: 768px) 160px, 240px"
          className="w-40 md:w-48 lg:w-60 mt-3"
        />

        {/* PADRES */}
        <div
          className="
            w-full
            flex
            flex-col
            gap-12
            lg:grid
            lg:grid-cols-[1fr_auto_1fr]
            lg:items-center
            lg:gap-16
            mt-6
          "
        >
          {/* PADRES NOVIO */}
          <div className="flex flex-col gap-2 lg:text-right">

            <h3
              className={`
                font-["Alex Brush", cursive]
                text-[#c78c3a]
                text-3xl
              `}
            >
              Padres del novio
            </h3>

            <p className="text-gray-700 text-2xl">
              Jose Luis Brañez Rios ✝
            </p>

            <p className="text-gray-700 text-2xl">
              Sergia Rocha Rocha
            </p>

          </div>

          {/* LINEA */}
          <div className="hidden lg:flex justify-center">
            <div className="w-[2px] h-40 bg-gradient-to-b from-transparent via-[#c78c3a] to-transparent"></div>
          </div>

          {/* PADRES NOVIA */}
          <div className="flex flex-col gap-3 lg:text-left">

            <h3
              className={`
                font-["Alex Brush", cursive]
                text-[#c78c3a]
                text-3xl
              `}
            >
              Padres de la novia
            </h3>

            <p className="text-gray-700 text-2xl">
              Juan Bladimir Lara Coca
            </p>

            <p className="text-gray-700 text-2xl">
              María Luz Solis Teran
            </p>

          </div>
        </div>

        {/* FLORES INFERIORES */}
        <Image
          src={cldFlower("arreglo-flores_gceljq.webp")}
          alt="flores decorativas"
          width={240}
          height={240}
          sizes="(max-width: 768px) 160px, 240px"
          className="w-40 md:w-48 lg:w-60 mt-6"
        />

      </div>
    </section>
  );
}