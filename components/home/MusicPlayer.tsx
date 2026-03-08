"use client";

import { useRef, useState } from "react";
import { FaBackward, FaForward, FaHeart } from "react-icons/fa";

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
    <section className="flex flex-col items-center text-center px-6 py-6">

      <p className="font-['Alex_Brush'] text-gray-600 text-lg md:text-2xl font-light">
  Presiona el{" "}
  <span
    className="
    text-pink-400
    inline-block
    animate-[heartbeat_2s_ease-in-out_infinite]
    drop-shadow-[0_0_8px_rgba(255,182,193,0.9)]
    "
  >
    ❤
  </span>{" "}
  para escuchar nuestra canción
</p>

      <div className="w-40 h-[2px] bg-[#c78c3a] my-4"></div>

      <div className="flex items-center gap-10 text-[#c78c3a] text-3xl md:text-4xl">

        <FaBackward className="cursor-pointer hover:scale-110 transition" />

        <button
          onClick={toggleMusic}
          className="bg-[#c78c3a] text-white rounded-full w-14 h-14 flex items-center justify-center hover:scale-110 transition"
        >
          <FaHeart />
        </button>

        <FaForward className="cursor-pointer hover:scale-110 transition" />

      </div>

      <audio ref={audioRef} src="/music/song.mp3" />

    </section>
  );
}