"use client";
export default function Verse() {
  return (
    <section className="text-center px-10 py-0 sm:py-6 max-w-md mx-auto">

      <p className="text-gray-600 font-['Alex_Brush'] leading-relaxed text-2xl">
        Más valen dos que uno,
        porque obtienen más fruto de su esfuerzo.
        Si caen, el uno levanta al otro. ¡Ay del que cae
        y no tiene quien lo levante!
      </p>

      {/* SEPARADOR */}
      <div className="flex items-center justify-center gap-0 my-2">

        <div className="flex flex-col gap-0">
          <div className="h-px w-36 sm:w-48 bg-gradient-to-r from-transparent to-[#c89b5a] -rotate-1" />
          <div className="h-px w-36 sm:w-48 bg-gradient-to-r from-transparent to-[#c89b5a]" />
        </div>

        <span className="text-[#c89b5a] text-xl mx-1">❖</span>

        <div className="flex flex-col gap-0">
          <div className="h-px w-36 sm:w-48 bg-gradient-to-l from-transparent to-[#c89b5a] rotate-1" />
          <div className="h-px w-36 sm:w-48 bg-gradient-to-l from-transparent to-[#c89b5a]" />
        </div>

      </div>

      <p className="mt-3 text-[#c59d5f] font-['Alex_Brush'] text-lg">
        Eclesiastés 4:9-10
      </p>

    </section>
  );
}