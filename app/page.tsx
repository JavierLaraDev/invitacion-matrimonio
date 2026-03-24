"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Alex_Brush } from "next/font/google";
import { cldFlower } from "@/lib/cloudinary";

const alexBrush = Alex_Brush({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/invitacion");
  };

  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-[#fff9ef] px-4">

      {/* Fondo acuarela */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#ffe4dd_10%,transparent_70%)] opacity-80" />

      {/* CONTENEDOR */}
      <div className="relative flex flex-col items-center z-10">

        {/* CIRCULO */}
        <div className="relative w-[280px] h-[280px] sm:w-[300px] sm:h-[300px] flex items-center justify-center">

          {/* CÍRCULO DORADO */}
          <div className="absolute inset-0 rounded-full border-[3px] border-[#d59739]" />

          {/* FLORES ARRIBA */}
          <Image
            src={cldFlower("flores-arriba_iblawe.webp")}
            alt="flores decorativas arriba"
            width={250}
            height={250}
            priority
            className="
              absolute
              w-36 sm:w-44
              -top-2
              right-[-25px]
              rotate-[20deg]
              pointer-events-none
              select-none
            "
          />

          {/* FLORES ABAJO */}
          <Image
            src={cldFlower("flores-abajo_qoopna.webp")}
            alt="flores decorativas abajo"
            width={250}
            height={250}
            priority
            className="
              absolute
              w-36 sm:w-44
              -bottom-2
              left-[-25px]
              rotate-[20deg]
              pointer-events-none
              select-none
            "
          />

          {/* INICIALES */}
          <div className="text-center">
            <h1
              className={`
                text-[#c59d5f]
                text-5xl sm:text-6xl
                italic
                ${alexBrush.className}
              `}
            >
              D y G
            </h1>

            <p className="mt-3 text-[#c59d5f] tracking-widest text-sm font-semibold">
              02 . 05 . 2026
            </p>
          </div>
        </div>

        {/* FLECHA */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="mt-10"
        >
          <svg
            width="70"
            height="70"
            viewBox="0 0 100 100"
            fill="none"
          >
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="#c59d5f"
              strokeWidth="4"
            />

            <path
              d="M35 38 L50 53 L65 38"
              stroke="#c59d5f"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <path
              d="M35 50 L50 65 L65 50"
              stroke="#c59d5f"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <path
              d="M35 62 L50 77 L65 62"
              stroke="#c59d5f"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>

        {/* BOTON */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          onClick={handleButtonClick}
          className="
            mt-6
            bg-[#e9a3a8]
            text-white
            px-6
            py-3
            text-base
            rounded-tl-[35px]
            rounded-br-[35px]
            shadow-md
            transition-all duration-300
            hover:bg-[#59040e]
          "
        >
          Ingresar a mi invitación
        </motion.button>

      </div>
    </section>
  );
}