"use client";

import Image from "next/image";

export default function ParentsSection() {
  return (
    <section
      id="nuestros-padres"
      className="relative w-full max-w-[420px] lg:max-w-[1200px] bg-white py-16 sm:py-16 flex justify-center overflow-hidden mx-auto"
    >
      {/* FLOR LATERAL IZQUIERDA */}
      <Image
        src="/images/flores-lateral.webp"
        alt="flor lateral"
        width={400}
        height={400}
        sizes="(max-width: 768px) 200px, (max-width: 1024px) 320px, 400px"
        className="
          absolute
          left-[-90px]
          top-[250px]
          md:top-[100px]
          lg:top-[120px]
          w-80 md:w-80 lg:w-96
          opacity-90
          pointer-events-none
          select-none
          rotate-[-40deg]
        "
      />

      <div className="w-full max-w-[420px] lg:max-w-[900px] px-4 text-center flex flex-col items-center">
        
        {/* TITULO */}
        <h2 className="text-[#c78c3a] text-4xl font-['Alex_Brush'] leading-relaxed">
          Con la bendición de Dios
          <br />
          y nuestros padres
        </h2>

        {/* FLORES CENTRALES */}
        <Image
          src="/images/arreglo-flores.webp"
          alt="flores decorativas"
          width={240}
          height={240}
          sizes="(max-width: 768px) 160px, (max-width: 1024px) 200px, 240px"
          className="w-40 md:w-48 lg:w-60 mt-2"
        />

        {/* CONTENEDOR PADRES */}
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
          mt-4
        "
        >
          {/* PADRES NOVIO */}
          <div className="flex flex-col gap-2 lg:text-right">
            <h3 className="text-[#c78c3a] text-3xl font-['Alex_Brush']">
              Padres del novio
            </h3>

            <p className="text-gray-700 text-2xl">
              Jose Luis Brañez Rios ✝
            </p>

            <p className="text-gray-700 text-2xl">
              Sergia Rocha Rocha
            </p>
          </div>

          {/* LINEA CENTRAL */}
          <div className="hidden lg:flex justify-center">
            <div className="w-[2px] h-40 bg-gradient-to-b from-transparent via-[#c78c3a] to-transparent"></div>
          </div>

          {/* PADRES NOVIA */}
          <div className="flex flex-col gap-3 lg:text-left">
            <h3 className="text-[#c78c3a] text-3xl font-['Alex_Brush']">
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
          src="/images/arreglo-flores.webp"
          alt="flores decorativas"
          width={240}
          height={240}
          sizes="(max-width: 768px) 160px, (max-width: 1024px) 200px, 240px"
          className="w-40 md:w-48 lg:w-60 mt-4"
        />
      </div>
    </section>
  );
}