import {
  Button,
  ButtonGroup,
  Kbd,
  KbdGroup,
  Spinner,
  Toggle,
  ToggleGroup,
  ToggleGroupItem,
} from "@t2-educacao/midas";
import {
  ArrowRight,
  Lightning,
  MoonStars,
  PersonArmsSpread,
  Robot,
  Star,
  TextAlignCenter,
  TextAlignLeft,
  TextAlignRight,
  TextB,
} from "@t2-educacao/midas/icons";
import Link from "next/link";
import type { ReactNode } from "react";
import { InstallCommand } from "@/components/install-command";
import AvatarGrupo from "@/examples/avatar/grupo";
import BadgeVariantes from "@/examples/badge/variantes";
import ComboboxBasico from "@/examples/combobox/basico";
import DatePickerBasico from "@/examples/date-picker/basico";
import DialogBasico from "@/examples/dialog/basico";
import DropdownMenuBasico from "@/examples/dropdown-menu/basico";
import FieldBasico from "@/examples/field/basico";
import InputGroupBusca from "@/examples/input-group/busca";
import PopoverBasico from "@/examples/popover/basico";
import ProgressBasico from "@/examples/progress/basico";
import SelectBasico from "@/examples/select/basico";
import ToastPromise from "@/examples/toast/promise";
import TooltipDados from "@/examples/tooltip/dados";

const features = [
  {
    icon: PersonArmsSpread,
    title: "Acessível",
    text: "Construído sobre Radix UI: teclado, foco e leitores de tela funcionando por padrão.",
  },
  {
    icon: Lightning,
    title: "Leve",
    text: "Cada componente é um arquivo separado. O projeto só carrega o que usa.",
  },
  {
    icon: MoonStars,
    title: "Claro e escuro",
    text: "As cores da T2 em tokens. O tema escuro vem de graça, sem escrever dark:.",
  },
  {
    icon: Robot,
    title: "Pronto para IA",
    text: "Docs em Markdown dentro do pacote e llms.txt para agentes gerarem UI no padrão.",
  },
];

const showcase: { name: string; href: string; preview: ReactNode }[] = [
  {
    name: "Button",
    href: "/docs/components/button",
    preview: (
      <>
        <Button size="sm">Salvar</Button>
        <Button size="sm" variant="outline">
          Cancelar
        </Button>
      </>
    ),
  },
  {
    name: "ButtonGroup",
    href: "/docs/components/button-group",
    preview: (
      <ButtonGroup aria-label="Ações">
        <Button size="sm" variant="outline">
          Arquivar
        </Button>
        <Button size="sm" variant="outline">
          Adiar
        </Button>
      </ButtonGroup>
    ),
  },
  {
    name: "Toggle",
    href: "/docs/components/toggle",
    preview: (
      <>
        <Toggle aria-label="Negrito" defaultPressed>
          <TextB />
        </Toggle>
        <Toggle variant="outline" aria-label="Favoritar">
          <Star />
        </Toggle>
      </>
    ),
  },
  {
    name: "ToggleGroup",
    href: "/docs/components/toggle-group",
    preview: (
      <ToggleGroup
        type="single"
        variant="outline"
        size="sm"
        defaultValue="centro"
        aria-label="Alinhamento"
      >
        <ToggleGroupItem value="esquerda" aria-label="Esquerda">
          <TextAlignLeft />
        </ToggleGroupItem>
        <ToggleGroupItem value="centro" aria-label="Centro">
          <TextAlignCenter />
        </ToggleGroupItem>
        <ToggleGroupItem value="direita" aria-label="Direita">
          <TextAlignRight />
        </ToggleGroupItem>
      </ToggleGroup>
    ),
  },
  { name: "Tooltip", href: "/docs/components/tooltip", preview: <TooltipDados /> },
  { name: "Input e Field", href: "/docs/components/field", preview: <FieldBasico /> },
  { name: "InputGroup", href: "/docs/components/input-group", preview: <InputGroupBusca /> },
  { name: "Combobox", href: "/docs/components/combobox", preview: <ComboboxBasico /> },
  { name: "DropdownMenu", href: "/docs/components/dropdown-menu", preview: <DropdownMenuBasico /> },
  { name: "Popover", href: "/docs/components/popover", preview: <PopoverBasico /> },
  { name: "Toast", href: "/docs/components/toast", preview: <ToastPromise /> },
  { name: "Badge", href: "/docs/components/badge", preview: <BadgeVariantes /> },
  { name: "Avatar", href: "/docs/components/avatar", preview: <AvatarGrupo /> },
  { name: "DatePicker", href: "/docs/components/date-picker", preview: <DatePickerBasico /> },
  { name: "Select", href: "/docs/components/select", preview: <SelectBasico /> },
  { name: "Dialog", href: "/docs/components/dialog", preview: <DialogBasico /> },
  { name: "Progress", href: "/docs/components/progress", preview: <ProgressBasico /> },
  {
    name: "Questionnaire",
    href: "/docs/components/questionnaire",
    preview: <span className="text-sm text-muted-foreground">Questionário em etapas</span>,
  },
  {
    name: "Kbd",
    href: "/docs/components/kbd",
    preview: (
      <KbdGroup>
        <Kbd>Ctrl</Kbd>
        <Kbd>K</Kbd>
      </KbdGroup>
    ),
  },
  {
    name: "Spinner",
    href: "/docs/components/spinner",
    preview: <Spinner className="size-6 text-primary" />,
  },
];

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col">
      <section className="relative overflow-hidden border-b border-border">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,color-mix(in_srgb,var(--midas-primary)_18%,transparent),transparent_60%)]"
        />
        <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 py-24 text-center md:py-32">
          <span className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            Design system da T2 Educação
          </span>
          <h1 className="text-5xl font-semibold tracking-tight md:text-6xl">
            Midas<span className="text-primary">.</span>
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground">
            Componentes React, tokens e ícones da T2 num único pacote. Instala uma vez e todo
            projeto fica com a mesma cara.
          </p>
          <div className="flex flex-col items-center gap-2">
            <InstallCommand command="npm install @t2-educacao/midas" />
            <span className="text-xs text-muted-foreground">
              Pré-lançamento: o pacote ainda não foi publicado no npm.
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild size="lg">
              <Link href="/docs">
                Começar <ArrowRight />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/docs/components/button">Ver componentes</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-5xl gap-4 px-4 py-16 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, text }) => (
          <div key={title} className="rounded-xl border border-border bg-card p-6">
            <Icon size={24} className="text-primary" />
            <h2 className="mt-4 font-semibold">{title}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{text}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto w-full max-w-5xl px-4 pb-24">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Componentes</h2>
            <p className="mt-1 text-muted-foreground">
              Iguais ao Figma do Midas, com variantes, tamanhos e estados.
            </p>
          </div>
          <Button asChild variant="link">
            <Link href="/docs/components/button">
              Todos <ArrowRight />
            </Link>
          </Button>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {showcase.map(({ name, href, preview }) => (
            <div
              key={name}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary/50"
            >
              <div className="flex h-36 flex-wrap items-center justify-center gap-2 bg-background p-4">
                {preview}
              </div>
              <Link
                href={href}
                className="flex items-center justify-between border-t border-border px-4 py-3 text-sm font-medium"
              >
                {name}
                <ArrowRight className="text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
