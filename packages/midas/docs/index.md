---
title: "Midas"
description: "O design system da T2 Educação para React e Next.js. Visão geral e primeiros passos."
---

O **Midas** é o design system da T2 Educação em forma de biblioteca React. Um único pacote traz:

- **Componentes** React acessíveis (baseados em [Radix UI](https://www.radix-ui.com)), prontos para Next.js.
- **Tokens** de design (cores, fontes, raios, motion) como variáveis CSS, com **três temas (Light, Dark e Dark Blue)**.
- **Ícones** [Tabler Icons](https://tabler.io/icons), a biblioteca de ícones oficial do Midas.

```bash
npm install @t2-educacao/midas
```

```tsx
import { Button } from "@t2-educacao/midas";
import { IconArrowRight } from "@t2-educacao/midas/icons";

export function Cta() {
  return (
    <Button size="lg">
      Começar agora <IconArrowRight />
    </Button>
  );
}
```

## Princípios

1. **Instala uma vez, tem tudo.** Um pacote, uma versão, um changelog.
2. **Só paga pelo que usa.** Cada componente é um arquivo separado no build (tree-shaking). Importar `Button` não traz o resto.
3. **Padronizado, mas ajustável.** Todo componente aceita `className` (mesclado sem conflito), variantes (`variant`, `size`) e `asChild`.
4. **Tokens, nunca valores soltos.** Use `bg-surface-default`, `text-content-secondary`, `rounded-control`. Nunca `#0097D9` ou `bg-[#...]`.
5. **Documentado para humanos e IA.** Cada componente tem um `.md` dentro do pacote (`node_modules/@t2-educacao/midas/docs`).

## Próximos passos

- [Instalação](./instalacao.md): configurar em Next 16 (Tailwind v4) ou Next 14 (Tailwind v3).
- [Tema e tokens](./tema.md): os três temas e o mapa dos tokens.
- Fundamentos: [Cores](./fundamentos/cores.md), [Tipografia](./fundamentos/tipografia.md), [Escalas](./fundamentos/escalas.md), [Elevação e foco](./fundamentos/elevacao-e-foco.md), [Grid](./fundamentos/grid.md).
- [Customização](./customizacao.md): `className`, variantes e `asChild`.
- [Ícones](./icones.md): Tabler pelo Midas.
- [Guia para agentes de IA](./guia-para-ia.md): regras para Claude/Cursor/Copilot gerarem UI com o Midas.

## Compatibilidade

| | Suportado |
|---|---|
| React | 18.2+ e 19 |
| Next.js | 14, 15 e 16 (App Router e Pages Router) |
| Tailwind CSS | v4 (via `theme.css`) ou v3 (via `styles.css`) |
| Módulos | ESM |

> Status: **0.x**, publicado no npm como @t2-educacao/midas. Enquanto estiver em 0.x, uma versão minor pode trazer mudança de API: leia o CHANGELOG antes de atualizar. Site com exemplos ao vivo: https://midas.t2.com.br
