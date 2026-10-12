---
title: "Guia para agentes de IA"
description: "Regras obrigatórias para agentes de IA (Claude, Cursor, Copilot) que geram interface em projetos da T2 usando o Midas."
---

Este guia é para **agentes de IA** trabalhando em um projeto que usa `@t2-educacao/midas`. Sugestão: referencie este arquivo no `CLAUDE.md` / `AGENTS.md` do projeto:

```md
## UI
Este projeto usa o design system Midas. Antes de criar ou alterar UI, leia
node_modules/@t2-educacao/midas/llms.txt e o .md do componente em
node_modules/@t2-educacao/midas/docs/components/.
```

## Onde está a documentação

- Índice: `node_modules/@t2-educacao/midas/llms.txt`
- Guias: `node_modules/@t2-educacao/midas/docs/*.md`
- Componentes: `node_modules/@t2-educacao/midas/docs/components/<nome>.md`
- Tipos (fonte da verdade das props): `node_modules/@t2-educacao/midas/dist/**/*.d.ts`

A documentação dentro de `node_modules` corresponde exatamente à versão instalada. Prefira ela a qualquer conhecimento prévio.

## Regras

1. **Use o componente do Midas quando ele existir.** Não recrie botão, input, modal etc. com HTML e Tailwind.
2. **Imports:**
   - componentes e `cn`: `import { Button, cn } from "@t2-educacao/midas"`
   - ícones: `import { IconArrowRight } from "@t2-educacao/midas/icons";` (Tabler, nomes originais; `/icons/tabler` é alias do mesmo conteúdo)
   - nunca importe de `@t2-educacao/midas/dist/...`, de `@tabler/icons-react` ou de outra lib de ícones.
3. **Só tokens.** Cores semânticas do Figma: `bg-surface-canvas`, `bg-surface-default`, `text-content-primary`, `text-content-secondary`, `border-border-subtle`, `bg-action-accent-bg`, `bg-status-danger-subtle`... Os nomes antigos (`bg-primary`, `text-foreground`, `border-border`, `bg-card`, `bg-muted`) são aliases e continuam válidos, mas em código novo prefira os semânticos (mapa em `docs/fundamentos/cores.md`). Nunca hex, `rgb()`, `bg-[#...]` ou a paleta padrão do Tailwind (`bg-blue-500`, `text-gray-600`).
4. **Pares de cor.** Fundo colorido sempre com o conteúdo correspondente: `bg-action-accent-bg text-action-accent-content`, `bg-status-danger-fill text-status-danger-on-fill` (ou, nos aliases, `bg-primary text-primary-foreground`).
5. **Três temas, de graça.** Light, Dark (`.dark` ou `data-theme="dark"`) e Dark Blue (`data-theme="dark-blue"`) trocam os tokens sozinhos. Não escreva `dark:` para cores que já são tokens.
5a. **Tipografia, escalas e elevação com tokens.** Texto: `text-heading-xl`, `text-body-md`, `text-label-sm`, `text-mono-md` (escolha pela função; mono só para dado técnico). Alturas de controle: `h-control-md`; ícones: `size-icon-sm`; raios por papel: `rounded-control`, `rounded-container`, `rounded-overlay`, `rounded-pill`; sombras: `shadow-elevation-card`; foco: `focus-ring`. Nada de `text-[15px]`, `h-[34px]` ou `rounded-[7px]`. Detalhes em `docs/fundamentos/`.
6. **Variante antes de className.** Confira as variantes no `.md` do componente antes de sobrescrever estilo.
7. **Links com visual de botão:** `<Button asChild><Link href="...">...</Link></Button>`. Nunca `<Link><Button/></Link>`.
8. **Acessibilidade:** botão só com ícone precisa de `aria-label`; todo campo precisa de label.
9. **Server Components:** os componentes do Midas funcionam em Server Components. Não adicione `"use client"` só por usar um componente do Midas.
10. **Se faltar algo** (componente ou variante), diga ao usuário e sugira abrir uma issue no Midas, em vez de inventar um padrão local.

## Exemplo completo

```tsx
import Link from "next/link";
import { Button } from "@t2-educacao/midas";
import { IconArrowRight } from "@t2-educacao/midas/icons";

export function Hero() {
  return (
    <section className="bg-background text-foreground py-24">
      <h1 className="text-5xl font-semibold tracking-tight">Sua próxima certificação começa aqui</h1>
      <p className="mt-4 text-lg text-muted-foreground">Conteúdo prático e atualizado.</p>
      <div className="mt-8 flex gap-3">
        <Button asChild size="lg">
          <Link href="/cursos">
            Ver cursos <IconArrowRight />
          </Link>
        </Button>
        <Button variant="outline" size="lg">
          Falar com a equipe
        </Button>
      </div>
    </section>
  );
}
```
