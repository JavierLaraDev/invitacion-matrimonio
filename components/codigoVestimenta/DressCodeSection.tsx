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
      <img
        src="/images/flor-rosa.webp"
        className="absolute right-[-50px] -top-[10px] w-40 opacity-90 pointer-events-none"
        alt="flor"
      />

      {/* FLOR IZQUIERDA */}
      <img
        src="/images/pimpollo.webp"
        className="absolute left-[-50px] bottom-20 w-40 opacity-90 pointer-events-none"
        alt="flor"
      />

      {/* CONTENIDO */}
      <div className="flex flex-col items-center text-center relative z-10">

        {/* ICONO */}
        <img
          src="/images/corbatin.webp"
          className="w-48 sm:w-64 mb-6"
          alt="moño"
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
        <img
          src="/images/arreglo-flores.webp"
          className="w-48 sm:w-64 opacity-90"
          alt="flores"
        />
      </div>

    </section>
  );
}