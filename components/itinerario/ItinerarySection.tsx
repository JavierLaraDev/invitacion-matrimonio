"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import TimelineItem from "./TimelineItem";
import { cldIcon, cldFlower } from "@/lib/cloudinary";

export type Event = {
  time: string;
  title: string;
  icon: string;
};

const events: Event[] = [
  { time: "14:00", title: "Ceremonia Religiosa", icon: cldIcon("iglesia-icon_dpf917.webp") },
  { time: "15:40", title: "Ceremonia Civil", icon: cldIcon("civil-icon_oeyfuq.webp") },
  { time: "16:00", title: "Recepción Social", icon: cldIcon("recepcion-icon_hvsd6z.webp") },
  { time: "17:00", title: "Ingreso de los novios", icon: cldIcon("ingreso-icon_knuwsw.webp") },
  { time: "17:30", title: "Brindis", icon: cldIcon("brindis-icon_czhtaa.webp") },
  { time: "18:30", title: "Servicio Gastronomico", icon: cldIcon("comida-icon_sfckgy.webp") },
  { time: "19:00", title: "Tanda Bailable", icon: cldIcon("baile-icon_qyxayp.webp") },
  { time: "20:00", title: "Mariachi", icon: cldIcon("mariachi-icon_ivpf3c.webp") },
  { time: "21:00", title: "Tanda Bailable", icon: cldIcon("baile-icon_qyxayp.webp") },
  { time: "22:00", title: "Bouquet", icon: cldIcon("bouquet-icon_j8gn3r.webp") },
  { time: "23:00", title: "Tanda Bailable", icon: cldIcon("baile-icon_qyxayp.webp") },
  { time: "00:00", title: "Torta", icon: cldIcon("torta-icon_ljt8hd.webp") },
  { time: "00:30", title: "Tanda Bailable", icon: cldIcon("baile-icon_qyxayp.webp") },
  { time: "01:30", title: "Despedida", icon: cldIcon("despedida-icon_mf0gzh.webp") },
];

export default function ItinerarySection() {
  return (
    <section
      id="itinerario"
      className="relative py-16 px-6 bg-[#fdfaf7] overflow-hidden"
    >
      {/* FLORES */}
      <Image
        src={cldFlower("flor-rosa_shcxm1.webp")}
        alt="flor decorativa"
        width={180}
        height={180}
        sizes="(max-width: 768px) 120px, 180px"
        className="absolute right-[-80px] top-10 w-44 opacity-60 pointer-events-none select-none"
      />

      <Image
        src={cldFlower("pimpollo_jd5ls8.webp")}
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
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center text-5xl font-[Alex_Brush] text-[#c58a3c] mb-10"
      >
        Itinerario
      </motion.h2>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6">

        {/* LINEA CENTRAL */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[3px] h-full bg-gradient-to-b from-transparent via-[#c58a3c] to-transparent opacity-40" />

        {/* EVENTOS */}
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