"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import TimelineItem from "./TimelineItem";

export type Event = {
  time: string;
  title: string;
  icon: string;
};

const events: Event[] = [
  { time: "14:00", title: "Ceremonia Religiosa", icon: "/images/iglesia-icon.webp" },
  { time: "16:00", title: "Recepción Social", icon: "/images/recepcion-icon.webp" },
  { time: "17:15", title: "Ingreso de los novios y Brindis", icon: "/images/ingreso-icon.webp" },
  { time: "18:00", title: "Tanda Bailable", icon: "/images/baile-icon.webp" },
];

export default function ItinerarySection() {
  return (
    <section
      id="itinerario"
      className="relative py-16 px-6 bg-[#fdfaf7] overflow-hidden"
    >

      {/* FLORES */}
      <Image
        src="/images/flor-rosa.webp"
        alt="flor decorativa"
        width={180}
        height={180}
        sizes="(max-width: 768px) 120px, 180px"
        className="absolute right-[-80px] top-10 w-44 opacity-60 pointer-events-none select-none"
      />

      <Image
        src="/images/pimpollo.webp"
        alt="flor decorativa"
        width={180}
        height={180}
        sizes="(max-width: 768px) 120px, 180px"
        className="absolute left-[-50px] bottom-0 w-44 opacity-60 pointer-events-none select-none"
      />

      {/* TITULO */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} // 🔥 evita animaciones repetidas
        transition={{ duration: 0.6 }}
        className="text-center text-5xl font-[Alex_Brush] text-[#c58a3c] mb-10"
      >
        Itinerario
      </motion.h2>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6">

        {/* LINEA */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[3px] h-full bg-gradient-to-b from-transparent via-[#c58a3c] to-transparent opacity-40" />

        <div className="flex flex-col gap-16 sm:gap-20">
          {events.map((event, index) => (
            <TimelineItem
              key={index}
              event={event}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>

      </div>
    </section>
  );
}