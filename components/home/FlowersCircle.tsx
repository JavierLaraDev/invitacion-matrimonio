export default function FlowersCircle(){
  return(

    <section className="flex flex-col items-center">

      <div className="relative flex items-center justify-center">

        {/* Círculo */}
        <div className="
          w-[250px] h-[250px]
          lg:w-[320px] lg:h-[320px]
          rounded-full
          border-[2px]
          border-[#c59d5f]
          flex
          items-center
          justify-center
        ">

          <h2 className="
            text-[#c59d5f]
            text-4xl
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
          src="/images/flores-arriba.png"
          className="
            absolute
            w-32
            lg:w-40
            -top-5
            right-[-5px]
            rotate-[20deg]
          "
        />

        {/* FLORES ABAJO */}
        <img
          src="/images/flores-abajo.png"
          className="
            absolute
            w-32
            lg:w-40
            -bottom-5
            left-[-10px]
            -rotate-[-20deg]
          "
        />

      </div>

    </section>

  )
}