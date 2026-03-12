"use client"
import React, { useEffect, useState } from "react"

export const Counter = () => {

  const weddingDate = new Date("2026-05-02T00:00:00")

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {

    const timer = setInterval(() => {

      const now = new Date()
      const difference = weddingDate.getTime() - now.getTime()

      if (difference > 0) {

        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
        const minutes = Math.floor((difference / (1000 * 60)) % 60)
        const seconds = Math.floor((difference / 1000) % 60)

        setTimeLeft({
          days,
          hours,
          minutes,
          seconds
        })

      }

    }, 1000)

    return () => clearInterval(timer)

  }, [])

  return (
    <div className="mt-12">

      <p className="text-3xl sm:text-4xl text-[#c89b5a] font-['Alex_Brush'] mb-0">
        Solo faltan
      </p>

      {/* CONTADOR */}
      <div className="flex items-start justify-center gap-4 sm:gap-6 text-center mt-4">

        <div>
          <div className="text-[38px] sm:text-4xl text-[#ffb9bd]">
            {timeLeft.days}
          </div>
          <div className="text-sm lg:text-lg text-black tracking-widest mt-1 font-['Alex_Brush']">
            Días
          </div>
        </div>

        <div className="text-3xl sm:text-4xl text-[#ffb9bd]">:</div>

        <div>
          <div className="text-[38px] sm:text-4xl text-[#ffb9bd]">
            {timeLeft.hours}
          </div>
          <div className="text-sm lg:text-lg text-black tracking-widest mt-1 font-['Alex_Brush']">
            Horas
          </div>
        </div>

        <div className="text-3xl sm:text-4xl text-[#ffb9bd]">:</div>

        <div>
          <div className="text-[38px] sm:text-4xl text-[#ffb9bd]">
            {timeLeft.minutes}
          </div>
          <div className="text-sm lg:text-lg text-black tracking-widest mt-1 font-['Alex_Brush']">
            Min
          </div>
        </div>

        <div className="text-3xl sm:text-4xl text-[#ffb9bd]">:</div>

        <div>
          <div className="text-[38px] sm:text-4xl text-[#ffb9bd]">
            {timeLeft.seconds}
          </div>
          <div className="text-sm lg:text-lg text-black font-['Alex_Brush'] tracking-widest mt-1">
            Seg
          </div>
        </div>

      </div>

    </div>
  )
}