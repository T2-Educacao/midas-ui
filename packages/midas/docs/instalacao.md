---
title: "Instalação"
description: "Como instalar e configurar o Midas em projetos Next.js com Tailwind v4 (Next 16) ou Tailwind v3 (Next 14, como a hub)."
---

> O pacote **ainda não foi publicado no npm**. Estas instruções valem a partir da primeira versão publicada.

## 1. Instale o pacote

```bash
npm install @t2-educacao/midas
```

`react` e `react-dom` (18.2+ ou 19) são *peer dependencies*: o projeto já precisa tê-los. Os ícones Phosphor, o Radix e utilitários vêm junto automaticamente.

## 2. Configure o CSS

Escolha o caminho de acordo com a versão do Tailwind do projeto.

### Caminho A: Tailwind CSS v4

Projetos: site, blog, lps, plataforma do aluno (Next 16).

No CSS global do projeto (ex.: `app/globals.css`):

```css
@import "tailwindcss";
@import "@t2-educacao/midas/theme.css";
```

Pronto. O `theme.css`:

- registra os tokens do Midas no Tailwind do projeto, então `bg-primary`, `text-muted-foreground`, `rounded-lg` etc. funcionam também no **seu** código;
- avisa o Tailwind para escanear os componentes do Midas (via `@source`), gerando só as classes usadas;
- define a variante `dark:` ligada à classe `.dark` (ou `data-theme="dark"`).

### Caminho B: Tailwind CSS v3

Projetos: hub (Next 14 + Tailwind v3).

O Tailwind v3 não lê o `theme.css`, então o Midas entrega um CSS já compilado. Importe no layout raiz (ex.: `app/layout.tsx` ou `pages/_app.tsx`):

```tsx
import "@t2-educacao/midas/styles.css";
```

Ele contém só as classes que os componentes do Midas usam, mais os tokens. Não inclui reset/preflight, para não brigar com o Tailwind do projeto.

> **Atenção com tokens shadcn antigos**: se o projeto já tem classes como `bg-primary` apontando para outras cores, as do projeto podem sobrescrever as do Midas (o CSS do Midas fica em `@layer`). Ao adotar o Midas, remova os tokens antigos equivalentes ou migre o projeto para Tailwind v4 (Caminho A).

## 3. Fontes

A fonte do Midas é a mesma do site da T2: **Geist** e **Geist Mono**. O Midas lê as variáveis `--font-geist-sans` e `--font-geist-mono`, as mesmas que o site usa. No Next, carregue as fontes com `next/font` em `app/layout.tsx`:

```tsx
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-background text-foreground font-sans antialiased">{children}</body>
    </html>
  );
}
```

Sem `next/font` (ex.: hub em Pages Router), o Midas tenta a fonte `"Geist"` instalada ou carregada pelo projeto.

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
