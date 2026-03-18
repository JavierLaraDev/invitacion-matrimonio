"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-full overflow-visible">

      {/* FOTO */}
      <div className="relative w-full h-full">
        <Image
          src="/images/pareja.webp"
          alt="foto de la pareja"
          fill
          priority
          sizes="100vw"
          className="
            object-cover
            object-center
          "
          style={{
            WebkitMaskImage: `
              linear-gradient(to top, transparent 2%, black 20%),
              linear-gradient(to bottom, transparent 0%, black 1.5%),
              linear-gradient(to left, transparent 0%, black 2%),
              linear-gradient(to right, transparent 0%, black 2%)
            `,
            WebkitMaskComposite: "intersect",
            maskComposite: "intersect"
          }}
        />
      </div>

      {/* ADORNO */}
      <div className="absolute bottom-[-45px] left-1/2 -translate-x-1/2 w-full pointer-events-none select-none opacity-75">
        <Image
          src="/images/adorno-boda.webp"
          alt="adorno decorativo boda"
          width={1200}
          height={300}
          priority
          className="w-full max-w-none"
        />
      </div>

    </section>
  );
}