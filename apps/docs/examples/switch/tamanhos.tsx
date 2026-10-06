import { Label, Switch } from "@t2-educacao/midas";

export default function SwitchTamanhos() {
  return (
    <div className="flex items-center gap-6">
      <div className="flex items-center gap-2">
        <Switch id="padrao" defaultChecked />
        <Label htmlFor="padrao">Padrão</Label>
      </div>
      <div className="flex items-center gap-2">
        <Switch id="pequeno" size="sm" defaultChecked />
        <Label htmlFor="pequeno">Pequeno</Label>
      </div>
    </div>
  );
}
