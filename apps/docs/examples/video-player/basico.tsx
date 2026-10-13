import { VideoPlayer } from "@t2-educacao/midas";

export default function VideoPlayerBasico() {
  return (
    <VideoPlayer
      className="max-w-3xl"
      title="Come-cotas na prática"
      eyebrow="MÓDULO 3 · AULA 05"
      src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      chapters={[
        { time: 0, label: "Introdução" },
        { time: 8, label: "Tabela regressiva" },
      ]}
      nextLesson={{ title: "Tributação de fundos", meta: "Aula 06 · 18 min" }}
    />
  );
}
