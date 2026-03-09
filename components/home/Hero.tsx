export default function Hero(){
  return(

    <section className="relative w-full h-full overflow-visible">

      {/* FOTO */}
      <img
  src="/images/pareja.jpeg"
  className="
  w-full
  h-full
  object-cover
  object-center
  "
  style={{
    WebkitMaskImage: `
      linear-gradient(to top, transparent 2%, black 20%),
      linear-gradient(to bottom, transparent 0%, black 1.5%),
      linear-gradient(to left, transparent 0%, black 2%),
      linear-gradient(to right, transparent 0%, black 2%)
    `,
    WebkitMaskComposite: "intersect",
    maskComposite: "intersect"
  }}
/>

      {/* ADORNO */}
      <img
        src="/images/adorno-boda.png"
        className="
        absolute
        bottom-[-45px]
        left-1/2
        -translate-x-1/2
        w-full
        max-w-none
        pointer-events-none
        select-none
        opacity-75
        "
      />

    </section>

  )
}