"use client"

import { motion } from "framer-motion"
import { Event } from "./ItinerarySection"
import Card from "./Card"
import Icon from "./Icon"

export default function TimelineItem({
  event,
  isLeft,
}: {
  event: Event
  isLeft: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="relative grid grid-cols-2 items-center"
    >
      {/* IZQUIERDA */}
      <div className="flex w-full">
        {isLeft ? (
          <div className="flex justify-end pr-8 w-full">
            <Card event={event} align="right" />
          </div>
        ) : (
          <Icon event={event} side="left" />
        )}
      </div>

      {/* DERECHA */}
      <div className="flex w-full">
        {isLeft ? (
          <Icon event={event} side="right" />
        ) : (
          <div className="flex justify-start pl-8 w-full">
            <Card event={event} align="left" />
          </div>
        )}
      </div>

      {/* PUNTO */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10">
        <div className="w-4 h-4 sm:w-5 sm:h-5 bg-[#c58a3c] rounded-full border-[5px] sm:border-[6px] border-[#fdfaf7] shadow-md" />
      </div>
    </motion.div>
  )
}