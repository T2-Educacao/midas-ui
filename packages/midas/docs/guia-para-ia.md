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
   - ícones: `import { ArrowRight } from "@t2-educacao/midas/icons"` (Phosphor, padrão) ou `"@t2-educacao/midas/icons/tabler"` (Tabler, só quando faltar na Phosphor)
   - nunca importe de `@t2-educacao/midas/dist/...`, de `@phosphor-icons/react`, `@tabler/icons-react` ou de outra lib de ícones.
3. **Só tokens.** Cores: `bg-primary`, `text-foreground`, `border-border`, `bg-card`, `bg-muted`... Nunca hex, `rgb()`, `bg-[#...]` ou a paleta padrão do Tailwind (`bg-blue-500`, `text-gray-600`).
4. **Pares de cor.** Fundo colorido sempre com o `-foreground` correspondente: `bg-primary text-primary-foreground`.
5. **Tema escuro vem de graça.** Não escreva `dark:` para cores que já são tokens.
6. **Variante antes de className.** Confira as variantes no `.md` do componente antes de sobrescrever estilo.
7. **Links com visual de botão:** `<Button asChild><Link href="...">...</Link></Button>`. Nunca `<Link><Button/></Link>`.
8. **Acessibilidade:** botão só com ícone precisa de `aria-label`; todo campo precisa de label.
9. **Server Components:** os componentes do Midas funcionam em Server Components. Não adicione `"use client"` só por usar um componente do Midas.
10. **Se faltar algo** (componente ou variante), diga ao usuário e sugira abrir uma issue no Midas, em vez de inventar um padrão local.

## Exemplo completo

```tsx
import Link from "next/link";
import { Button } from "@t2-educacao/midas";
import { ArrowRight } from "@t2-educacao/midas/icons";

export function Hero() {
  return (
    <section className="bg-background text-foreground py-24">
      <h1 className="text-5xl font-semibold tracking-tight">Sua próxima certificação começa aqui</h1>
      <p className="mt-4 text-lg text-muted-foreground">Conteúdo prático e atualizado.</p>
      <div className="mt-8 flex gap-3">
        <Button asChild size="lg">
          <Link href="/cursos">
            Ver cursos <ArrowRight />
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
