"use client";

import React from "react";
import Image from "next/image";
import { Calendar } from "lucide-react";
import { cldFlower } from "@/lib/cloudinary";
import { Alex_Brush } from "next/font/google";
import { DateFrame } from "./DateFrame";
import { Counter } from "./Counter";

const alexBrush = Alex_Brush({
  weight: "400",
  subsets: ["latin"],
});

export default function DateSection() {
  const handleCalendar = () => {
    const title = encodeURIComponent("Matrimonio Dyland y Giancarla ❤️");
    const details = encodeURIComponent("Te esperamos para celebrar nuestro gran día");
    const location = encodeURIComponent("Salon de Eventos Nelly's");

    const url =
      `https://calendar.google.com/calendar/render?action=TEMPLATE` +
      `&text=${title}` +
      `&dates=20260502T140000/20260502T190000` +
      `&details=${details}` +
      `&location=${location}`;

    window.open(url, "_blank");
  };

  return (
    <section id="fecha" className="relative w-full bg-white overflow-hidden">
      {/* FLORES DECORATIVAS */}
      <Image
        src={cldFlower("flor-left_xzibqx.webp")}
        alt="flor decorativa izquierda"
        width={200}
        height={200}
        sizes="(max-width: 768px) 120px, 200px"
        className="absolute left-0 top-0 w-32 md:w-40 xl:w-52 -translate-x-2/3 pointer-events-none"
      />
      <Image
        src={cldFlower("flor-right_zmckyt.webp")}
        alt="flor decorativa derecha"
        width={200}
        height={200}
        sizes="(max-width: 768px) 120px, 200px"
        className="absolute right-0 bottom-0 w-32 md:w-40 xl:w-52 translate-x-2/3 pointer-events-none"
      />

      {/* CONTENIDO */}
      <div className="w-full max-w-[500px] mx-auto text-center px-4 md:px-6 py-16 flex flex-col items-center justify-center">
        <div className="text-[#ffb9bd] text-4xl mb-6 animate-[heartbeat_1.5s_ease-in-out_infinite] drop-shadow-[0_0_8px_rgba(255,182,193,0.8)]">
          ❤
        </div>

        <DateFrame />
        <Counter />

        <div className="mt-10">
          <button
            type="button"
            onClick={handleCalendar}
            className={`${alexBrush.className} flex items-center gap-3 border border-[#c59d5a] text-black px-7 py-3 rounded hover:bg-[#c59d5a] hover:text-white transition text-xl`}
          >
            <Calendar className="w-6 h-6 text-[#ffb9bd] stroke-[1.5]" />
            Agendar en el calendario
          </button>
        </div>
      </div>
    </section>
  );
}