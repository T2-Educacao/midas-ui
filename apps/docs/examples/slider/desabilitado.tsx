import { Slider } from "@t2-educacao/midas";

export default function SliderDesabilitado() {
  return (
    <div className="w-full max-w-sm">
      <Slider defaultValue={[60]} disabled aria-label="Volume" />
    </div>
  );
}
