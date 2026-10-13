import { Separator } from "@t2-educacao/midas";
import { IconStar } from "@t2-educacao/midas/icons";

export default function SeparatorTipos() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <Separator />
      <Separator type="dashed" tone="default" />
      <Separator type="label-center">ou continue com</Separator>
      <Separator type="label-left">MÓDULO 3</Separator>
      <Separator type="icon">
        <IconStar />
      </Separator>
      <div className="flex h-5 items-center gap-4 text-label-md">
        <span>178 aulas</span>
        <Separator orientation="vertical" />
        <span>42h</span>
        <Separator orientation="vertical" />
        <span>4,9</span>
      </div>
    </div>
  );
}
