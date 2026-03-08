import React from 'react'
import { DateFrame } from './DateFrame'
import { Counter } from './Counter'
import { Calendar } from "lucide-react";

export default function DateSection() {

  return (

    <section
      id="fecha"
      className="
  relative
  w-full
  max-w-[420px]
  lg:max-w-[1200px]
  mx-auto
  bg-white
  shadow-xl
  overflow-hidden
  "
    >

      {/* FLOR IZQUIERDA */}
      <img
        src="/images/flor-left.png"
        className="
  absolute
  left-0
  top-0
  w-30 md:w-40 xl:w-64
  -translate-x-2/3
  opacity-60
  pointer-events-none
  "
      />

      {/* FLOR DERECHA */}
      <img
        src="/images/flor-right.png"
        className="
  absolute
  right-0
  bottom-0
  w-30 md:w-40 xl:w-64
  translate-x-2/3
  opacity-60
  pointer-events-none
  "
      />
      {/* CONTENIDO */}
      <div
        className="
    w-full
    max-w-[500px]
    mx-auto
    text-center
    px-4 md:px-6
    py-3 md:py-16
    flex
    flex-col
    items-center
    justify-center
    "
      >

        <div className="text-pink-300 text-4xl mb-6 animate-[heartbeat_1.5s_ease-in-out_infinite] drop-shadow-[0_0_8px_rgba(255,182,193,0.8)]">
          ❤
        </div>

        <DateFrame />

        <Counter />

        <div className="mt-10">
          <button
            className="
  flex items-center gap-2
  border border-[#c89b5a]
  text-black font-['Alex_Brush']
  px-6 py-2
  rounded
  hover:bg-[#c89b5a]
  hover:text-white
  transition
  "
          >

            <Calendar
              className="
    w-6 h-6
    text-[#fda5d5]
    stroke-[1.5]
    [stroke-dasharray:100]
    animate-[drawLoop_3s_ease-in-out_infinite,pulseSoft_2s_ease-in-out_infinite]
    "
            />

            Agendar en el calendario

          </button>
        </div>

      </div>

    </section>

  )
}