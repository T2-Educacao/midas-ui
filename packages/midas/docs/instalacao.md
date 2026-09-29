---
title: Instalação
description: Como instalar e configurar o Midas em Next.js 16 com Tailwind v4, ou em Next.js 14 com Tailwind v3 ou sem Tailwind.
---

## 1. Instale o pacote

```bash
pnpm add @t2-educacao/midas
# ou: npm install @t2-educacao/midas
```

`react` e `react-dom` (18.2+ ou 19) são *peer dependencies*: o projeto já precisa tê-los. Os ícones Phosphor, o Radix e utilitários vêm junto automaticamente.

## 2. Configure o CSS

Escolha **um** dos caminhos abaixo.

### Caminho A: projeto com Tailwind CSS v4 (recomendado)

Projetos: site, blog, lps, plataforma do aluno (Next 16).

No CSS global (ex.: `app/globals.css`):

```css
@import "tailwindcss";
@import "@t2-educacao/midas/theme.css";
```

Pronto. O `theme.css`:

- registra os tokens do Midas no Tailwind do projeto, então `bg-primary`, `text-muted-foreground`, `rounded-lg` etc. funcionam também no **seu** código;
- avisa o Tailwind para escanear os componentes do Midas (via `@source`), gerando só as classes usadas;
- define a variante `dark:` ligada à classe `.dark` (ou `data-theme="dark"`).

### Caminho B: projeto com Tailwind v3 ou sem Tailwind

Projetos: hub (Next 14 + Tailwind v3), ou qualquer projeto React sem Tailwind.

No layout raiz (ex.: `app/layout.tsx`), importe o CSS já compilado:

```tsx
import "@t2-educacao/midas/styles.css";
```

Ele contém só as classes que os componentes do Midas usam, mais os tokens. Não inclui reset/preflight, para não brigar com o CSS do projeto.

> **Atenção no Tailwind v3 com tokens shadcn antigos**: se o projeto já tem classes como `bg-primary` apontando para outras cores, as do projeto podem sobrescrever as do Midas (o CSS do Midas fica em `@layer`). Ao adotar o Midas, remova os tokens antigos equivalentes ou migre o projeto para Tailwind v4 (Caminho A). O objetivo é que todos os projetos cheguem ao Caminho A.

## 3. Fontes

O Midas lê as fontes das variáveis `--midas-font-sans` e `--midas-font-mono`. No Next, carregue a fonte com `next/font` e aponte a variável:

```tsx
// app/layout.tsx
import { Geist } from "next/font/google";

const sans = Geist({ subsets: ["latin"], variable: "--midas-font-sans" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={sans.variable}>
      <body className="bg-background text-foreground font-sans antialiased">{children}</body>
    </html>
  );
}
```

> A fonte oficial do Midas será definida pelo Figma; o exemplo acima é ilustrativo.

## 4. Tema escuro (opcional)

Adicione a classe `dark` no `<html>` para ativar o tema escuro. Com [`next-themes`](https://github.com/pacocoursey/next-themes):

```tsx
<ThemeProvider attribute="class" defaultTheme="system">{children}</ThemeProvider>
```

Detalhes em [Tema e tokens](./tema.md).

## 5. Use

```tsx
import { Button } from "@t2-educacao/midas";

export default function Page() {
  return <Button>Funcionou</Button>;
}
```

Funciona em **Server Components**. Componentes que precisam de estado já vêm marcados com `"use client"` internamente; você não precisa marcar nada.

## Problemas comuns

| Sintoma | Causa provável | Solução |
|---|---|---|
| Componente aparece sem estilo | CSS não importado | Faça o passo 2 |
| Cores erradas no Tailwind v3 | Tokens antigos do projeto com o mesmo nome | Veja o aviso do Caminho B |
| `dark:` não funciona | Classe `dark` ausente no `<html>` | Passo 4 |
| Erro `ERR_REQUIRE_ESM` em testes (Jest) | O Midas é ESM | Use Vitest, ou configure `transformIgnorePatterns` no Jest |
