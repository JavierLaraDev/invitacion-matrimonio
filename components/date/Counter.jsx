import React from 'react'

export const Counter = () => {
  return (
    <div className="mt-12">

      <p className="text-3xl sm:text-4xl text-[#c89b5a] font-['Alex_Brush'] mb-0">
        Solo faltan
      </p>

      {/* SEPARADOR */}
      <div className="flex items-center justify-center gap-0 my-0">

        <div className="flex flex-col gap-0">
          <div className="h-px w-36 sm:w-48 bg-linear-to-r from-transparent to-[#c89b5a] -rotate-1" />
          <div className="h-px w-36 sm:w-48 bg-linear-to-r from-transparent to-[#c89b5a]" />
        </div>

        <span className="text-[#c89b5a] text-xl">❖</span>

        <div className="flex flex-col gap-0">
          <div className="h-px w-36 sm:w-48 bg-linear-to-l from-transparent to-[#c89b5a] rotate-1" />
          <div className="h-px w-36 sm:w-48 bg-linear-to-l from-transparent to-[#c89b5a] " />
        </div>

      </div>

      {/* CONTADOR */}
      <div className="flex items-start justify-center gap-3 sm:gap-6 text-center mt-0">

        <div>
          <div className="text-4xl sm:text-4xl text-pink-300">120</div>
          <div className="text-xs text-black tracking-widest mt-1 font-['Alex_Brush']">Días</div>
        </div>

        <div className="text-4xl sm:text-4xl text-pink-300">:</div>

        <div>
          <div className="text-4xl sm:text-4xl text-pink-300">05</div>
          <div className="text-xs text-black tracking-widest mt-1 font-['Alex_Brush']">Horas</div>
        </div>

        <div className="text-4xl sm:text-4xl text-pink-300">:</div>

        <div>
          <div className="text-4xl sm:text-4xl text-pink-300">33</div>
          <div className="text-xs text-black font-['Alex_Brush'] tracking-widest mt-1">Min</div>
        </div>

        <div className="text-4xl sm:text-4xl text-pink-300">:</div>

        <div>
          <div className="text-4xl sm:text-4xl text-pink-300">02</div>
          <div className="text-xs text-black font-['Alex_Brush'] tracking-widest mt-1">Seg</div>
        </div>

      </div>

      {/* SEPARADOR */}
      <div className="flex items-center justify-center gap-0 my-0">

        <div className="flex flex-col gap-0">
          <div className="h-px w-32 sm:w-42 bg-linear-to-r from-transparent to-[#c89b5a] -rotate-1" />
          <div className="h-px w-32 sm:w-42 bg-linear-to-r from-transparent to-[#c89b5a]" />
        </div>

        <span className="text-[#c89b5a] text-xl">❖</span>

        <div className="flex flex-col gap-0">
          <div className="h-px w-32 sm:w-42 bg-linear-to-l from-transparent to-[#c89b5a] rotate-1" />
          <div className="h-px w-32 sm:w-42 bg-linear-to-l from-transparent to-[#c89b5a] " />
        </div>

      </div>


    </div>
  )
}