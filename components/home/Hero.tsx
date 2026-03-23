"use client";

import Image from "next/image";
import { cldHero } from "@/lib/cloudinary";

export default function Hero() {
  return (
    <section className="relative w-full h-[420px] lg:h-full overflow-visible">

      {/* FOTO */}
      <div className="relative w-full h-full">
        <Image
          src={cldHero("pareja_bq6zk8.webp")}
          alt="foto de la pareja"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 600px"
          className="object-cover object-center"
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
          src={cldHero("adorno-boda_isn4kk.webp")}
          alt="adorno decorativo boda"
          width={1200}
          height={300}
          className="w-full"
          priority
        />
      </div>

    </section>
  );
}