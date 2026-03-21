"use client";

import Image from "next/image";

export default function DressCodeSection() {
  return (
    <section
      id="vestimenta"
      className="
      relative
      w-full
      max-w-[420px]
      lg:max-w-[1200px]
      mx-auto
      bg-white
      py-16
      px-6
      overflow-hidden
      "
    >

      {/* FLOR DERECHA */}
      <Image
        src="https://res.cloudinary.com/dncrzrttk/image/upload/f_auto/q_auto,w_250/flor-rosa_shcxm1.webp"
        alt="flor decorativa"
        width={160}
        height={160}
        sizes="(max-width: 768px) 120px, 160px"
        className="absolute right-[-50px] -top-[10px] w-40 opacity-90 pointer-events-none select-none"
      />

      {/* FLOR IZQUIERDA */}
      <Image
        src="https://res.cloudinary.com/dncrzrttk/image/upload/f_auto/q_auto,w_250/pimpollo_jd5ls8.webp"
        alt="flor decorativa"
        width={160}
        height={160}
        sizes="(max-width: 768px) 120px, 160px"
        className="absolute left-[-50px] bottom-20 w-40 opacity-90 pointer-events-none select-none"
      />

      {/* CONTENIDO */}
      <div className="flex flex-col items-center text-center relative z-10">

        {/* ICONO */}
        <Image
          src="https://res.cloudinary.com/dncrzrttk/image/upload/f_auto/q_auto,w_250/corbatin_wyglxn.webp"
          alt="icono de vestimenta formal"
          width={256}
          height={256}
          sizes="(max-width: 768px) 192px, 256px"
          className="w-48 sm:w-64 mb-6"
        />

        {/* TITULO */}
        <h2
          className="
          font-[Alex_Brush]
          text-[#c78c3a]
          text-4xl
          sm:text-5xl
          mb-2
          "
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
          src="https://res.cloudinary.com/dncrzrttk/image/upload/c_scale,w_300/f_auto/q_auto/arreglo-flores_gceljq.webp"
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