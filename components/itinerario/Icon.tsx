import { Event } from "./ItinerarySection"

export default function Icon({
  event,
  side,
}: {
  event: Event
  side: "left" | "right"
}) {
  return (
    <div
      className={`
      flex items-center w-full
      ${side === "left"
        ? "justify-end pr-4 sm:pr-8"
        : "justify-start pl-4 sm:pl-8"}
      `}
    >
      <img
        src={event.icon}
        className="w-24 h-24 sm:w-32 sm:h-32 drop-shadow-md"
        alt=""
      />
    </div>
  )
}