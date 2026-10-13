import { Spinner } from "@t2-educacao/midas";

const tamanhos = ["xs", "sm", "md", "lg", "xl"] as const;

export default function SpinnerEstilosETamanhos() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        {tamanhos.map((size) => (
          <Spinner key={size} size={size} tone="brand" />
        ))}
      </div>
      <div className="flex items-center gap-4">
        {tamanhos.slice(1, 4).map((size) => (
          <Spinner key={size} size={size} variant="dots" tone="neutral" />
        ))}
      </div>
      <div className="flex items-center gap-4 rounded-container bg-material-scrim-bg p-4">
        <Spinner size="md" tone="media" />
      </div>
    </div>
  );
}
