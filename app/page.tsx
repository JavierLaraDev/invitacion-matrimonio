"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Alex_Brush } from "next/font/google";


const alexBrush = Alex_Brush({
  weight: "400",
  subsets: ["latin"],
})
export default function Home() {
  const router=useRouter();
  const handleButtonClick = () => {
    router.push("/invitacion");
  }
  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-[#fff9ef] px-4">

      {/* Fondo acuarela */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#ffe4dd_10%,transparent_70%)] opacity-80"></div>

      {/* Contenedor principal */}
      <div className="relative flex flex-col items-center z-10">

        {/* Círculo con iniciales e imágenes */}
        <div className="relative w-[300px] h-[300px] flex items-center justify-center">

          {/* Círculo dorado */}
          <div className="absolute inset-0 rounded-full border-[3px] border-[#d59739]"></div>

          {/* Flores arriba */}
          <img
            src="images/flores-arriba.webp"
            className="absolute w-44"
            style={{
              top: "-10px",
              right: "-25px",
              transform: "rotate(20deg)",
            }}
            alt="Flores arriba"
          />

          {/* Flores abajo */}
          <img
            src="images/flores-abajo.webp"
            className="absolute w-44"
            style={{
              bottom: "-10px",
              left: "-25px",
              transform: "rotate(20deg)",
            }}
            alt="Flores abajo"
          />

          {/* Iniciales */}
          <div className="text-center">
            <h1 className={`text-[#c59d5f] text-6xl font-['Alex Brush'] italic ${alexBrush.className}`} >
              D y G
            </h1>

            <p className="mt-3 text-[#c59d5f] tracking-widest text-sm font-semibold">
              28 . 03 . 2026
            </p>
          </div>
        </div>

        {/* Flecha animada */}
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
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Óvalo */}
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="#c59d5f"
              strokeWidth="4"
              fill="none"
            />

            {/* Flechas */}
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

        <motion.button
  whileTap={{ scale: 0.95 }}
  onClick={handleButtonClick}
  className="
    mt-6
    bg-[#e9a3a8]
    text-white
    
    px-6 sm:px-4 md:px-4
    py-3 sm:py-3 md:py-3
    
    text-base sm:text-base md:text-base
    
    rounded-tr-none
    rounded-bl-none
    rounded-tl-[35px] sm:rounded-tl-[40px] md:rounded-tl-[35px]
    rounded-br-[35px] sm:rounded-br-[40px] md:rounded-br-[35px]

    shadow-md
    transition-all duration-300 ease-in-out
    hover:bg-[#59040e]
    hover:scale-105
  "
>
  Ingresar a mi invitación
</motion.button>

      </div>
    </section>
  );
}
