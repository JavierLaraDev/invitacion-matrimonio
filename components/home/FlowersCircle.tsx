"use client";

import Image from "next/image";
import { cldFlower } from "@/lib/cloudinary";
import { Alex_Brush } from "next/font/google";

const alexBrush = Alex_Brush({
  weight: "400",
  subsets: ["latin"],
});

export default function FlowersCircle() {
  return (
    <section className="flex flex-col items-center">

      <div className="relative flex items-center justify-center">

        {/* CÍRCULO */}
        <div
          className="
          w-[260px] h-[260px]
          lg:w-[320px] lg:h-[320px]
          rounded-full
          border-[3px]
          border-[#c59d5f]
          flex
          items-center
          justify-center
          "
        >
          <h2
            className={`${alexBrush.className} text-[#c59d5f] text-5xl text-center`}
          >
            Dyland
            <br />
            &
            <br />
            Giancarla
          </h2>
        </div>

        {/* FLORES ARRIBA */}
        <Image
          src={cldFlower("flores-arriba_iblawe.webp")}
          alt="flores decorativas arriba"
          width={200}
          height={200}
          className="
          absolute
          w-32 sm:w-40 lg:w-44
          -top-6
          right-[-10px]
          rotate-[20deg]
          pointer-events-none
          "
        />

        {/* FLORES ABAJO */}
        <Image
          src={cldFlower("flores-abajo_qoopna.webp")}
          alt="flores decorativas abajo"
          width={200}
          height={200}
          className="
          absolute
          w-32 sm:w-40 lg:w-44
          -bottom-7
          left-[-10px]
          rotate-[20deg]
          pointer-events-none
          "
        />
      </div>

    </section>
  );
}