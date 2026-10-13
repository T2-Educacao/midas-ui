import { Button } from "@t2-educacao/midas";
import { IconArrowRight, IconPlus } from "@t2-educacao/midas/icons";

export default function ButtonFigma() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-2">
        <Button variant="primary">Primary</Button>
        <Button variant="accent">Accent</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Button size="xs">XS</Button>
        <Button size="sm">SM</Button>
        <Button size="md">MD</Button>
        <Button size="lg">LG</Button>
        <Button size="xl">XL</Button>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Button>
          <IconPlus /> Ícone à esquerda
        </Button>
        <Button>
          Ícone à direita <IconArrowRight className="rtl:rotate-180" />
        </Button>
        <Button rounded>Pill</Button>
        <Button disabled>Disabled</Button>
        <Button loading>Loading</Button>
      </div>
    </div>
  );
}
