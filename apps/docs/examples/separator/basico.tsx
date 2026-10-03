import { Separator } from "@t2-educacao/midas";

export default function SeparatorBasico() {
  return (
    <div className="w-full max-w-xs">
      <p className="text-sm font-medium">Midas</p>
      <p className="text-sm text-muted-foreground">Design system da T2</p>
      <Separator className="my-4" />
      <div className="flex h-5 items-center gap-4 text-sm">
        <span>Blog</span>
        <Separator orientation="vertical" />
        <span>Docs</span>
        <Separator orientation="vertical" />
        <span>Cursos</span>
      </div>
    </div>
  );
}
