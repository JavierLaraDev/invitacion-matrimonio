"use client";

import AlbumPhoto from "./AlbumPhoto";

type Props = {
  photos: string[];
};

export default function AlbumGrid({ photos }: Props) {
  return (
    <div
      className="
        grid grid-cols-2 gap-4
        md:grid-cols-4 md:gap-5
      "
    >
      {/* FOTO PRINCIPAL */}
      <AlbumPhoto
        src={photos[0]}
        alt="foto pareja"
        sizes="(max-width: 768px) 100vw, 50vw"
        className="
          col-span-2 aspect-[4/3]
          md:col-span-2 md:row-span-2
        "
      />

      {/* FOTO HORIZONTAL */}
      <AlbumPhoto
        src={photos[1]}
        alt="foto pareja"
        sizes="(max-width: 768px) 50vw, 25vw"
        className="
          aspect-[1/1]
          md:col-span-2 md:aspect-[16/9]
        "
      />

      {/* FOTO 3 */}
      <AlbumPhoto
        src={photos[2]}
        alt="foto pareja"
        sizes="(max-width: 768px) 50vw, 25vw"
        className="aspect-[1/1]"
      />

      {/* FOTO 4 */}
      <AlbumPhoto
        src={photos[3]}
        alt="foto pareja"
        sizes="(max-width: 768px) 100vw, 25vw"
        className="
          col-span-2 aspect-[4/3]
          md:col-span-1 md:aspect-[1/1]
        "
      />

      {/* FOTO FINAL */}
      <AlbumPhoto
        src={photos[4]}
        alt="foto pareja"
        sizes="100vw"
        className="
          col-span-2 aspect-[16/9]
          md:col-span-4
        "
      />
    </div>
  );
}