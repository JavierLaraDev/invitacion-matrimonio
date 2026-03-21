"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  src: string;
  alt: string;
  className?: string;
  sizes: string;
  contain?: boolean;
};

export default function AlbumPhoto({
  src,
  alt,
  className,
  sizes,
  contain = false,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`relative rounded-xl overflow-hidden group ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className={`
          ${contain ? "object-contain" : "object-cover"}
          transition duration-500 group-hover:scale-110
        `}
      />

      {/* Overlay elegante */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-500" />
    </motion.div>
  );
}