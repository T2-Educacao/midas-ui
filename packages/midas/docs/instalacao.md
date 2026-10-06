---
title: "Instalação"
description: "Como instalar e configurar o Midas em projetos Next.js com Tailwind v4 (Next 16) ou Tailwind v3 (Next 14, como a hub)."
---

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

O Tailwind v3 não lê o `theme.css`, então o Midas entrega um CSS já compilado e **compatível com v3**: sem `@layer` (que o v3 rejeita sem `@tailwind utilities`) e com `translate`/`rotate`/`scale` convertidos para `transform`, no mesmo formato do v3. Importe no layout raiz (ex.: `app/layout.tsx` ou `pages/_app.tsx`), **depois** do CSS global do projeto:

```tsx
import "@t2-educacao/midas/styles.css";
```

Ele contém só as classes que os componentes do Midas usam, mais os tokens. Não inclui reset/preflight. Não precisa de plugin PostCSS.

Pontos de atenção na convivência com o v3:

- **Mesmo nome de classe nos dois lados.** Classes como `-translate-x-1/2` existem no CSS do projeto e no do Midas. Como o Midas gera o mesmo `transform` que o v3, o efeito não dobra. Mesmo assim, não reaplique `translate`/`rotate` por cima dos componentes do Midas.
- **Sem camada de cascata.** O CSS do Midas não fica em `@layer`, então a especificidade normal vale: um reset como `*{padding:0}` não vence as classes dos componentes. Resets com seletor mais específico (`button`, `input`, `.btn`) ainda podem sobrescrever; evite esses.
- **Tokens antigos com o mesmo nome.** Se o projeto já tem classes `bg-primary` etc. apontando para outras cores, a última a ser carregada vence. Remova os tokens antigos equivalentes ou migre para Tailwind v4 (Caminho A).
- **Camadas (z-index).** Se o projeto tem modais próprios, ajuste `--midas-z-overlay` e `--midas-z-popup` (veja [Tema e tokens](./tema.md)).

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
| Cores erradas no Tailwind v3 | Tokens antigos do projeto com o mesmo nome | Veja os pontos de atenção do Caminho B |
| Menu ou tooltip aparece atrás de um modal antigo | Camadas de z-index diferentes | Ajuste `--midas-z-popup` |
| `dark:` não funciona | Classe `dark` ausente no `<html>` | Passo 4 |
| Erro `ERR_REQUIRE_ESM` em testes (Jest) | O Midas é ESM | Use Vitest, ou configure `transformIgnorePatterns` no Jest |
