import React from 'react'
import Verse from "@/components/home/Verse"
import Hero from "@/components/home/Hero"
import FlowersCircle from "@/components/home/FlowersCircle"
import MusicPlayer from "@/components/home/MusicPlayer"
export const Home = () => {
  return (
    <section id="inicio" className=" scroll-mt-24 w-full max-w-[420px] lg:max-w-[1200px] lg:grid lg:grid-cols-2 bg-white overflow-hidden">

        {/* IMAGEN */}
        <div className="w-full h-[420px] lg:h-auto">
          <Hero/>
        </div>

        {/* CONTENIDO */}
        <div
          className="
          flex
          flex-col
          items-center
          gap-10
          py-12

          lg:justify-center
          lg:px-20
          "
        >

          <FlowersCircle/>

          <MusicPlayer/>

          <Verse/>

        </div>

      </section>
  )
}
