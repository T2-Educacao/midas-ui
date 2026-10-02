import { Button, Input } from "@t2-educacao/midas";

export default function InputComBotao() {
  return (
    <div className="flex w-full max-w-sm gap-2">
      <Input placeholder="Buscar" aria-label="Buscar" />
      <Button>Buscar</Button>
    </div>
  );
}
