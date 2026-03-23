"use client";
import Image from "next/image"
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
      <Image
        src={event.icon}
        alt="icono del evento"
        width={128}
        height={128}
        sizes="(max-width: 640px) 96px, 128px"
        className="w-24 h-24 sm:w-32 sm:h-32 drop-shadow-md"
      />
    </div>
  )
}