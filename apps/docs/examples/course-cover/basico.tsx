import { CourseCover } from "@t2-educacao/midas";

export default function CourseCoverBasico() {
  return (
    <CourseCover
      className="max-w-sm"
      src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600"
      eyebrow="CURSO"
      title="Preparatório CPA-20"
      progress={40}
    />
  );
}
