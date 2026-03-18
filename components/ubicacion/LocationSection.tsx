import Image from "next/image";
import EventBlock from "./EventBlock";

export default function LocationSection() {
  return (
    <section
      id="ubicacion"
      className="
      relative
      w-full
      max-w-[1200px]
      mx-auto
      bg-white
      py-16
      sm:py-16
      px-6
      sm:px-8
      lg:px-12
      overflow-hidden
      "
    >

      {/* FLORES DECORATIVAS */}

      <Image
        src="/images/flor-rosa.webp"
        width={150}
        height={150}
        alt="flor"
        className="absolute right-[-50px] top-22 w-36 sm:w-36 opacity-90 pointer-events-none select-none"
      />

      <Image
        src="/images/pimpollo.webp"
        width={150}
        height={150}
        alt="flor"
        className="absolute left-[-20px] bottom-270 sm:bottom-360 lg:bottom-380 w-36 sm:w-36 opacity-90 pointer-events-none select-none"
      />

      <Image
        src="/images/flor-rosa.webp"
        width={150}
        height={150}
        alt="flor"
        className="absolute right-[-50px] top-[950px] sm:top-[550px] lg:top-[560px] w-36 sm:w-36 opacity-90 pointer-events-none select-none"
      />

      {/* TEXTO SUPERIOR */}

      <p
        className="
        text-gray-600
        text-2xl
        sm:text-2xl
        lg:text-3xl
        font-['Alex_Brush']
        leading-relaxed
        text-center
        max-w-[500px]
        mx-auto
        mb-2
        sm:mb-4
        lg:mb-8
        "
      >
        Con alegría te invitamos a ser parte de este día tan especial
        en nuestras vidas
      </p>

      {/* CEREMONIA */}

      <EventBlock
        icon="/images/templo.webp"
        title="CEREMONIA RELIGIOSA"
        time="14:00 Hrs."
        location={
          <>
            Parroquia Nuestra Señora del Carmen <br />
            y San Maximiliano Kolbe <br />
            Av. Maximiliano Kolbe y Eucaliptos
          </>
        }
      />

      {/* RECEPCIÓN */}

      <EventBlock
        icon="/images/recepcion.webp"
        title="RECEPCIÓN SOCIAL"
        time="16:00 Hrs."
        location={
          <>
            Salón de Eventos Nelly's <br />
            Av. Villazón km 6 <span className="text-sm">1/2</span>
          </>
        }
      />

{/* FOTO + ONDA */}
<div className="relative mt-16 -mx-6 sm:-mx-8 lg:-mx-12">

  <Image
    src="/images/pareja-horizontal.webp"
    width={1200}
    height={900}
    alt="novios"
    className="w-full h-[350px] sm:h-[420px] md:h-[520px] lg:h-[820px] object-cover block"
  />

  {/* ONDA SUPERIOR — pegada al fondo de la imagen */}
  <div className="absolute -bottom-px left-0 w-full">
    <svg
      viewBox="0 0 500 60"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full block"
      preserveAspectRatio="none"
    >
      <path
        d="M0 60 L0 30 Q150 60 250 35 Q350 10 500 25 L500 60 Z"
        fill="#d6b48a"
      />
    </svg>
  </div>

</div>

{/* MENSAJE */}
<div className="-mx-6 sm:-mx-8 lg:-mx-12 bg-[#d6b48a] text-white text-center font-['Alex_Brush'] leading-relaxed sm:px-16 lg:px-32 py-12 sm:py-16 text-xl sm:text-2xl lg:text-3xl">
  Hoy, todo lo vivido nos ha llevado a este momento,
  donde nuestros corazones se entrelazan para siempre
  listos para escribir juntos el resto de nuestras vidas.
</div>

{/* ONDA INFERIOR */}
<div className="-mx-6 sm:-mx-8 lg:-mx-12 -mt-1">
  <svg
    viewBox="0 0 500 60"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full block"
    preserveAspectRatio="none"
  >
    <path
      d="M0 0 L500 0 L500 35 Q375 10 250 35 Q125 60 0 35 Z"
      fill="#d6b48a"
    />
  </svg>
</div>


    </section>
  );
}
