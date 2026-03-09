"use client"
import { DateFrame } from './DateFrame'
import { Counter } from './Counter'
import { Calendar } from "lucide-react";

export default function DateSection() {
  const handleCalendar = () => {

  const url =
    "https://calendar.google.com/calendar/render?action=TEMPLATE" +
    "&text=Matrimonio%20Dyland%20y%20Giancarla%20❤️" +
    "&dates=20260502T140000/20260502T190000" +
    "&details=Te%20esperamos%20para%20celebrar%20nuestro%20gran%20día" +
    "&location=Salon%20de%20Eventos%20Nelly's"

  window.open(url, "_blank")
}

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

        <div className="text-[#e6afa7] text-4xl mb-6 animate-[heartbeat_1.5s_ease-in-out_infinite] drop-shadow-[0_0_8px_rgba(255,182,193,0.8)]">
          ❤
        </div>

        <DateFrame />

        <Counter />

        <div className="mt-10">
  <button
  onClick={handleCalendar}
  className="
  flex items-center gap-3
  border border-[#c89b5a]
  text-black font-['Alex_Brush']
  px-7 py-3
  rounded
  hover:bg-[#c89b5a]
  hover:text-white
  transition
  text-xl md:text-xl
  "
>
  <Calendar
    className="
    w-7 h-7 md:w-6 md:h-6
    text-[#fda5d5]
    stroke-[1.5]
    "
  />

  Agendar en el calendario
</button>
</div>

      </div>

    </section>

  )
}