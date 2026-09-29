# @t2-educacao/midas

**Midas**, o design system da T2 Educação: componentes React acessíveis, tokens com tema claro e escuro e ícones Phosphor. Feito para Next.js (14 a 16) e React (18.2+ e 19).

> Ainda não publicado no npm. As instruções abaixo valem a partir da primeira versão.

```bash
npm install @t2-educacao/midas
```

**Tailwind v4:** no CSS global

```css
@import "tailwindcss";
@import "@t2-educacao/midas/theme.css";
```

**Tailwind v3:** no layout raiz

```tsx
import "@t2-educacao/midas/styles.css";
```

**Use:**

```tsx
import { Button } from "@t2-educacao/midas";
import { ArrowRight } from "@t2-educacao/midas/icons";

<Button size="lg">Começar <ArrowRight /></Button>
```

## Documentação

Toda a documentação vem **dentro do pacote**, na versão exata que você instalou:

- Índice (ótimo para agentes de IA): `node_modules/@t2-educacao/midas/llms.txt`
- Guias: `node_modules/@t2-educacao/midas/docs/`
- Componentes: `node_modules/@t2-educacao/midas/docs/components/`

Comece por [`docs/index.md`](docs/index.md) e [`docs/instalacao.md`](docs/instalacao.md). Usando IA no projeto? Veja [`docs/guia-para-ia.md`](docs/guia-para-ia.md).

## Licença

MIT © T2 Educação
