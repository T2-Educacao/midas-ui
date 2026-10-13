"use client";

import { MiniPlayer } from "@t2-educacao/midas";
import { useState } from "react";

export default function VideoPlayerMiniPlayer() {
  const [tocando, setTocando] = useState(true);
  return (
    <MiniPlayer
      title="Come-cotas em 5 min"
      playing={tocando}
      currentTime={72}
      duration={300}
      onTogglePlay={() => setTocando((valor) => !valor)}
      onClose={() => setTocando(false)}
    />
  );
}
