import { Kbd } from "@t2-educacao/midas";

export default function KbdEmTexto() {
  return (
    <p className="text-sm text-muted-foreground">
      Pressione <Kbd>Ctrl</Kbd> + <Kbd>S</Kbd> para salvar o rascunho.
    </p>
  );
}
