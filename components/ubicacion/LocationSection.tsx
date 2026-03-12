export default function LocationSection() {
  return (
    <section
      id="ubicacion"
      className="
      relative
      w-full
      max-w-[420px]
      lg:max-w-[1200px]
      mx-auto
      bg-white
      py-8
      sm:py-16
      px-6
      overflow-hidden
      "
    >
      {/* FLOR DERECHA */}
      <img
        src="/images/flor-rosa.webp"
        className="absolute right-[-70px] top-20 w-36 opacity-90 pointer-events-none select-none"
        alt="flor"
      />

      {/* FLOR IZQUIERDA */}
      <img
        src="/images/pimpollo.webp"
        className="absolute left-[-40px] bottom-100 w-36 opacity-90 pointer-events-none select-none"
        alt="flor"
      />
      {/* FLOR DERECHA */}
      <img
        src="/images/flor-rosa.webp"
        className="absolute right-[-70px] top-230 sm:top-160 md:top-160 w-36 opacity-90 pointer-events-none select-none"
        alt="flor"
      />

      {/* TEXTO SUPERIOR */}
      <p
        className="
        text-gray-600
        text-2xl
        font-['Alex_Brush']
        leading-relaxed
        text-center
        max-w-[420px]
        mx-auto
        mb-10
        lg:mb-16
        "
      >
        Con alegría te invitamos a ser parte de este día tan especial
        en nuestras vidas
      </p>

      {/* CONTENEDOR */}
      <div
        className="
        flex
        flex-col
        items-center
        gap-8

        lg:grid
        lg:grid-cols-2
        lg:items-center
        lg:gap-24
        py-8
        "
      >
        {/* ICONO IGLESIA */}
        <div className="flex justify-center lg:justify-end">
          <img
            src="/images/templo.webp"
            className="w-32 lg:w-52 opacity-80"
            alt="iglesia"
          />
        </div>

        {/* INFORMACIÓN */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">

          {/* TITULO */}
          <h3
            className="
            font-[cinzel]
            text-[#c78c3a]
            text-xl
            lg:text-3xl
            mb-6
            "
          >
            CEREMONIA RELIGIOSA
          </h3>

          {/* INFO */}
          <div className="flex items-center gap-6 mb-10">

            {/* HORA */}
            <div className="text-[#c78c3a] text-xl lg:text-2xl whitespace-nowrap">
              14:00 Hrs.
            </div>

            {/* LINEA */}
            <div className="w-[5px] h-30 sm:h-16 md:h-16 bg-[#c78c3a]" />

            {/* DIRECCION */}
            <div className="text-gray-600 text-lg leading-snug">
              Parroquia Nuestra Señora del Carmen Y San Maximiliano Kolbe <br />
              Av.MAximiliano Kolbe y Eucaliptos <br />

            </div>

          </div>

          {/* BOTON */}
          <a
            href="https://maps.app.goo.gl/vncLUuC5tYV5QNi58"
            target="_blank"
            className="
            bg-[#ffb9bd]
            text-white
            px-15
            py-2
            rounded-tr-[150px]
            rounded-bl-[150px] 
            rounded-tl-[35px]
            rounded-br-[35px]
            text-xl
            shadow-md
            hover:bg-[#ffa1a6]
            transition
            "
          >
            Ver Ubicación
          </a>

        </div>
      </div>
      {/* CONTENEDOR */}
      <div
        className="
        flex
        flex-col
        items-center
        gap-8

        lg:grid
        lg:grid-cols-2
        lg:items-center
        lg:gap-24
        "
      >
        {/* ICONO recepcion */}
        <div className="flex justify-center lg:justify-end">
          <img
            src="/images/recepcion.webp"
            className="w-32 lg:w-52 opacity-80"
            alt="iglesia"
          />
        </div>

        {/* INFORMACIÓN */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left py-8">

          {/* TITULO */}
          <h3
            className="
            font-[cinzel]
            text-[#c78c3a]
            text-xl
            lg:text-3xl
            mb-6
            "
          >
            RECEPCIÓN SOCIAL
          </h3>

          {/* INFO */}
          <div className="flex items-center gap-6 mb-10">

            {/* HORA */}
            <div className="text-[#c78c3a] text-xl lg:text-2xl whitespace-nowrap">
              16:00 Hrs.
            </div>

            {/* LINEA */}
            <div className="w-[2px] h-16 bg-[#c78c3a]" />

            {/* DIRECCION */}
            <div className="text-gray-600 text-lg leading-snug">
              Salon de Eventos Nelly's <br />
              Av. Villazon km 6 <span className="text-sm">1/2</span>  <br />
            </div>

          </div>

          {/* BOTON */}
          <a
            href="https://maps.app.goo.gl/vncLUuC5tYV5QNi58"
            target="_blank"
            className="
            bg-[#ffb9bd]
            text-white
            px-15
            py-2
            rounded-tr-[150px]
            rounded-bl-[150px] 
            rounded-tl-[35px]
            rounded-br-[35px]
            text-xl
            shadow-md
            hover:bg-[#ffa1a6]
            transition
            "
          >
            Ver Ubicación
          </a>

        </div>
      </div>
      
    </section>
  );
}