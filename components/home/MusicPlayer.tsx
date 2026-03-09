"use client";

import { useRef, useState } from "react";
import { FaStepBackward, FaStepForward, FaHeart } from "react-icons/fa";

export default function MusicPlayer() {

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {

    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setPlaying(!playing);
  };

  return (
    <section className="flex flex-col items-center text-center px-3 py-6">

      <p className="font-['Alex_Brush'] text-gray-600 text-2xl md:text-2xl font-normal">
  Presiona el{" "}
  <span
    className="
    text-[#e6afa7]
    inline-block
    animate-[heartbeat_2s_ease-in-out_infinite]
    drop-shadow-[0_0_8px_rgba(255,182,193,0.9)]
    "
  >
    ❤
  </span>{" "}
  para escuchar nuestra canción
</p>

     <div className="w-100 md:w-80 lg:w-100 h-px bg-linear-to-r from-transparent via-[#c78c3a] to-transparent animate-pulse"></div>
      <div className="flex items-center gap-10 text-[#c78c3a] text-2xl md:text-4xl">

        <FaStepBackward className="cursor-pointer hover:scale-110 transition text-xl" />

        <button
          onClick={toggleMusic}
          className="bg-[#c78c3a] text-white text-lg rounded-full w-8 h-8 flex items-center justify-center hover:scale-110 transition my-2"
        >
          <FaHeart />
        </button>

        <FaStepForward className="cursor-pointer hover:scale-110 transition text-xl" />

      </div>

      <audio ref={audioRef} src="/music/mojado.mp4" />

    </section>
  );
}