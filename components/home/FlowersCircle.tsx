export default function FlowersCircle(){
  return(

    <section className="flex flex-col items-center">

      <div className="relative flex items-center justify-center">

        {/* Círculo */}
        <div className="
          w-[260px] h-[260px]
          lg:w-[320px] lg:h-[320px]
          rounded-full
          border-[3px]
          border-[#c59d5f]
          flex
          items-center
          justify-center
        ">

          <h2 className="
            text-[#c59d5f]
            text-5xl
            lg:text-5xl
            text-center
            font-['Alex_Brush']
          ">
            Dyland
            <br/>
            &
            <br/>
            Giancarla
          </h2>

        </div>

        {/* FLORES ARRIBA */}
        <img
          src="/images/flores-arriba.webp"
          className="
            absolute
            w-40
            lg:w-40
            -top-6
            right-[-10px]
            rotate-[20deg]
          "
        />

        {/* FLORES ABAJO */}
        <img
          src="/images/flores-abajo.webp"
          className="
            absolute
            w-40
            lg:w-40
            -bottom-7
            left-[-10px]
            -rotate-[-20deg]
          "
        />

      </div>

    </section>

  )
}