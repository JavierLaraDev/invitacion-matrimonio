"use client";
import Image from "next/image";

interface EventBlockProps {
  icon: string;
  title: string;
  time: string;
  location: React.ReactNode;
  mapUrl?: string; // URL opcional para el botón de ubicación
  mapLabel?: string; // Texto del botón (opcional)
}

export default function EventBlock({
  icon,
  title,
  time,
  location,
  mapUrl,
  mapLabel = "Ver Ubicación",
}: EventBlockProps) {
  return (
    <div className="flex flex-col items-center gap-8 lg:grid lg:grid-cols-2 lg:items-center lg:gap-20 py-4">
      
      {/* ICONO */}
      <div className="flex justify-center lg:justify-end">
        <Image
          src={icon}
          alt={`icono ${title}`}
          width={140}
          height={140}
          sizes="(max-width: 768px) 120px, 140px"
          className="opacity-80 w-40 sm:w-40 lg:w-40"
        />
      </div>

      {/* INFORMACIÓN */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left">

        <h3 className="font-[cinzel] text-[#c78c3a] text-lg sm:text-xl lg:text-3xl mb-6">
          {title}
        </h3>

        <div className="flex items-center gap-6 mb-10">
          <div className="text-[#c78c3a] text-lg sm:text-xl lg:text-2xl whitespace-nowrap">
            {time}
          </div>

          <div className="w-[2px] h-12 sm:h-16 bg-[#c78c3a]" />

          <div className="text-gray-600 text-base sm:text-lg leading-snug">
            {location}
          </div>
        </div>

        {/* BOTÓN UBICACIÓN */}
        {mapUrl && (
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#ffb9bd] text-white px-10 py-2 rounded-tr-[150px] rounded-bl-[150px] rounded-tl-[35px] rounded-br-[35px] text-base sm:text-lg shadow-md hover:bg-[#ffa1a6] transition"
          >
            {mapLabel}
          </a>
        )}

      </div>
    </div>
  );
}