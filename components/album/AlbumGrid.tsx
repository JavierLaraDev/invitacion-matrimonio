"use client";

import AlbumPhoto from "./AlbumPhoto";

type Props = {
  photos: string[];
};

export default function AlbumGrid({ photos }: Props) {
  return (
    <div className="grid grid-cols-2 gap-3 md:gap-4">

      {/* FOTO 1 — grande izquierda en desktop, full en móvil */}
      <AlbumPhoto
        src={photos[0]}
        alt="foto pareja"
        sizes="(max-width: 768px) 100vw, 50vw"
        className="
          col-span-2 aspect-[4/3]
          md:col-span-1 md:row-span-2 md:aspect-auto md:min-h-[480px]
        "
      />

      {/* FOTO 2 — derecha arriba en desktop, mitad en móvil */}
      <AlbumPhoto
        src={photos[1]}
        alt="foto pareja"
        sizes="(max-width: 768px) 50vw, 25vw"
        className="
          col-span-1 aspect-square
          md:col-span-1 md:aspect-[16/9]
        "
      />

      {/* FOTO 3 — derecha abajo izquierda en desktop, mitad en móvil */}
      <AlbumPhoto
        src={photos[2]}
        alt="foto pareja"
        sizes="(max-width: 768px) 50vw, 25vw"
        className="
          col-span-1 aspect-square
          md:col-span-1 md:grid md:grid-cols-2
        "
      />

      {/* FOTO 4 — derecha abajo derecha en desktop, oculta en móvil o combinada */}
      <AlbumPhoto
        src={photos[3]}
        alt="foto pareja"
        sizes="(max-width: 768px) 100vw, 25vw"
        className="
          col-span-2 aspect-[4/3]
          md:col-span-1 md:aspect-square
          md:hidden
        "
      />

      {/* Fila de dos fotos pequeñas — solo desktop */}
      <div className="hidden md:contents">
        <AlbumPhoto
          src={photos[3]}
          alt="foto pareja"
          sizes="25vw"
          className="col-span-1 aspect-square"
        />
        <AlbumPhoto
          src={photos[2]}
          alt="foto pareja"
          sizes="25vw"
          className="col-span-1 aspect-square"
        />
      </div>

      {/* FOTO FINAL — panorámica full width */}
      <AlbumPhoto
        src={photos[4]}
        alt="foto pareja"
        sizes="100vw"
        className="col-span-2 aspect-[16/9]"
      />
    </div>
  );
}