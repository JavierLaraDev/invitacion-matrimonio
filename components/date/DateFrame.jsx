"use client";

import React from "react";

export const DateFrame = () => (
  <div className="flex flex-row justify-center items-center gap-3 md:gap-12 text-[#c89b5a] w-full font-[Alex_Brush]">
    <span className="tracking-[0.15em] md:tracking-[0.2em] text-base md:text-lg text-black border-y-2 border-[#d09242] py-1 w-24 md:w-36 text-center">
      SÁBADO
    </span>

    <div className="text-4xl md:text-6xl border-2 border-[#d09242] px-4 md:px-5 rounded-4xl text-center font-[Alex_Brush]">
      <div className="text-base text-black md:text-sm pt-4 md:pt-5">CBBA</div>
      02
      <div className="text-base text-black md:text-sm pb-4 md:pb-5">2026</div>
    </div>

    <span className="tracking-[0.15em] md:tracking-[0.2em] text-base md:text-lg text-black border-y-2 border-[#d09242] py-1 w-24 md:w-36 text-center">
      MAYO
    </span>
  </div>
);