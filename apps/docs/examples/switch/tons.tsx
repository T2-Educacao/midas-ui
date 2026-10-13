import { Label, Switch } from "@t2-educacao/midas";

export default function SwitchTons() {
  return (
    <div className="flex flex-col gap-3">
      {(["sm", "md", "lg"] as const).map((size) => (
        <div key={size} className="flex items-center gap-4">
          <Switch id={`brand-${size}`} size={size} defaultChecked />
          <Switch aria-label={`Neutro ${size}`} size={size} tone="neutral" defaultChecked />
          <Switch aria-label={`Desligado ${size}`} size={size} />
          <Label htmlFor={`brand-${size}`}>{size.toUpperCase()}</Label>
        </div>
      ))}
    </div>
  );
}
