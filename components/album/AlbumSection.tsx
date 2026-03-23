"use client";

import { motion } from "framer-motion";
import { cldPhoto } from "@/lib/cloudinary";
import AlbumGrid from "./AlbumGrid";
import { Alex_Brush } from "next/font/google";

const alexBrush = Alex_Brush({
  weight: "400",
  subsets: ["latin"],
});

const photos = [
  cldPhoto("album-dos_1_ofjyen.webp"),
  cldPhoto("album-tres_1_kktwk8.webp"),
  cldPhoto("album-cuatro_pp52vj.webp"),
  cldPhoto("album-cinco_mkb52o.webp"),

];

export default function AlbumSection() {
  return (
    <section
      id="album"
      className="relative w-full py-16 px-6 bg-white overflow-hidden"
    >

      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`${alexBrush.className} text-center text-4xl md:text-5xl text-[#c58a3c] mb-12`}
      >
        Álbum de Fotos
      </motion.h2>

      <div className="max-w-6xl mx-auto">
        <AlbumGrid photos={photos} />
      </div>

    </section>
  );
}