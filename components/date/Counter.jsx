"use client";

import React, { useEffect, useState } from "react";

export const Counter = () => {
  const weddingDate = new Date("2026-05-02T00:00:00");

  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted) return;

    const timer = setInterval(() => {
      const now = new Date();
      const diff = weddingDate.getTime() - now.getTime();
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div className="mt-12">
      <p className="text-3xl sm:text-4xl text-[#c89b5a] font-['Alex_Brush'] mb-0">
        Solo faltan
      </p>

      <div className="flex items-start justify-center gap-4 sm:gap-6 text-center mt-4">
        <div>
          <div className="text-[38px] sm:text-4xl text-[#ffb9bd]">{timeLeft.days}</div>
          <div className="text-sm lg:text-lg text-black tracking-widest mt-1 font-['Alex_Brush']">Días</div>
        </div>
        <div className="text-3xl sm:text-4xl text-[#ffb9bd]">:</div>

        <div>
          <div className="text-[38px] sm:text-4xl text-[#ffb9bd]">{timeLeft.hours}</div>
          <div className="text-sm lg:text-lg text-black tracking-widest mt-1 font-['Alex_Brush']">Horas</div>
        </div>
        <div className="text-3xl sm:text-4xl text-[#ffb9bd]">:</div>

        <div>
          <div className="text-[38px] sm:text-4xl text-[#ffb9bd]">{timeLeft.minutes}</div>
          <div className="text-sm lg:text-lg text-black tracking-widest mt-1 font-['Alex_Brush']">Min</div>
        </div>
        <div className="text-3xl sm:text-4xl text-[#ffb9bd]">:</div>

        <div>
          <div className="text-[38px] sm:text-4xl text-[#ffb9bd]">{timeLeft.seconds}</div>
          <div className="text-sm lg:text-lg text-black font-['Alex_Brush'] tracking-widest mt-1">Seg</div>
        </div>
      </div>
    </div>
  );
};