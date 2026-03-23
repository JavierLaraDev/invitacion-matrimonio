"use client";

import AlbumPhoto from "./AlbumPhoto";

type AlbumGridProps = {
  photos: string[]; // solo 4 fotos
};

export default function AlbumGrid({ photos }: AlbumGridProps) {
  return (
    <div className="grid grid-cols-2 gap-3 md:gap-4">

      {/* FOTO 1 — grande izquierda en desktop, full en móvil */}
      <AlbumPhoto
        src={photos[0]}
        alt="Foto pareja 1"
        sizes="(max-width: 768px) 100vw, 50vw"
        className="col-span-2 aspect-[4/3] md:col-span-1 md:row-span-2 md:aspect-auto md:min-h-[480px]"
      />

      {/* FOTO 2 — derecha arriba en desktop */}
      <AlbumPhoto
        src={photos[1]}
        alt="Foto pareja 2"
        sizes="(max-width: 768px) 50vw, 25vw"
        className="col-span-1 aspect-square md:col-span-1 md:aspect-[16/9]"
      />

      {/* FOTO 3 — derecha abajo izquierda en desktop */}
      <AlbumPhoto
        src={photos[2]}
        alt="Foto pareja 3"
        sizes="(max-width: 768px) 50vw, 25vw"
        className="col-span-1 aspect-square md:col-span-1 md:aspect-[16/9]"
      />

      {/* FOTO 4 — panorámica, ocupa todo el ancho */}
      <AlbumPhoto
        src={photos[3]}
        alt="Foto pareja 4"
        sizes="100vw"
        className="col-span-2 aspect-[16/9]"
      />

    </div>
  );
}