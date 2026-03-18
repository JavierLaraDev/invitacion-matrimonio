import { Event } from "./ItinerarySection"

export default function Card({
  event,
  align,
}: {
  event: Event
  align: "left" | "right"
}) {
  return (
    <div
      className={`
      backdrop-blur-md
      bg-white/70
      shadow-lg
      rounded-2xl
      px-4 py-3 sm:px-6 sm:py-4
      max-w-[150px] sm:max-w-[210px]
      border border-[#c58a3c]/20
      ${align === "right" ? "text-right" : "text-left"}
      transition hover:scale-105
      `}
    >
      <p className="text-[#c58a3c] font-semibold text-2xl sm:text-lg">
        {event.time}
      </p>
      <p className="text-gray-600 italic text-lg sm:text-sm leading-snug">
        {event.title}
      </p>
    </div>
  )
}