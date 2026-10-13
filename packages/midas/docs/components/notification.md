---
title: Notification
description: "Histórico de atividades: NotificationItem (mention, comment, course, exam, achievement, system; lida ou não lida), NotificationBell (sino com contador e estado aberto) e NotificationCenter (painel dropdown, drawer ou mobile com cabeçalho, grupos e rodapé)."
---

```tsx
import {
  NotificationBell,
  NotificationCenter,
  NotificationCenterContent,
  NotificationCenterFooter,
  NotificationCenterHeader,
  NotificationGroup,
  NotificationItem,
} from "@t2-educacao/midas";
```

Histórico do que aconteceu enquanto a pessoa estudava: menções, respostas, aulas liberadas, prazos de prova e conquistas. Abre pelo sino no header. O Toast avisa na hora; o Notification Center guarda o histórico.

## Uso

Combine o sino com [Popover](./popover.md) (dropdown) ou Dialog/Sheet (drawer):

```tsx
<Popover open={aberto} onOpenChange={setAberto}>
  <PopoverTrigger asChild>
    <NotificationBell count={3} open={aberto} />
  </PopoverTrigger>
  <PopoverContent className="w-auto border-0 bg-transparent p-0 shadow-none">
    <NotificationCenter>
      <NotificationCenterHeader count={3} />
      <NotificationCenterContent>
        <NotificationGroup label="HOJE">
          <NotificationItem
            type="mention"
            unread
            leading={<Avatar><AvatarFallback>AL</AvatarFallback></Avatar>}
            quote="@Laura, você tem o resumo do módulo 3?"
            meta="há 12 min · Comunidade"
          >
            <strong>Ana Lima</strong> mencionou você em Come-cotas na prática
          </NotificationItem>
          <NotificationItem type="exam" meta="31 out · 14h · São Paulo" action={<Button size="xs" variant="outline">Ver local</Button>}>
            Sua prova CPA-20 é em 23 dias
          </NotificationItem>
        </NotificationGroup>
      </NotificationCenterContent>
      <NotificationCenterFooter>
        <button type="button">Marcar todas como lidas</button>
        <a href="/notificacoes">Ver todas</a>
      </NotificationCenterFooter>
    </NotificationCenter>
  </PopoverContent>
</Popover>
```

Abas de filtro (Todas, Menções, Cursos, Sistema) são o componente [Tabs](./tabs.md) entre o cabeçalho e o conteúdo. Estado vazio: use [EmptyState](./empty-state.md) (`Tudo em dia`).

## Props

NotificationItem:

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `type` | `"mention" \| "comment" \| "course" \| "exam" \| "achievement" \| "system"` | `"mention"` | Define o ícone e a cor do tile quando não há `leading` |
| `unread` | `boolean` | `false` | Ponto ciano e fundo leve |
| `leading` | `ReactNode` | | Substitui o tile (ex.: Avatar para Mention/Comment) |
| `children` | `ReactNode` | | Mensagem. Nome de quem agiu em `<strong>` (semibold) |
| `quote` | `ReactNode` | | Trecho citado |
| `meta` | `ReactNode` | | Tempo e origem, em JetBrains Mono |
| `action` | `ReactNode` | | Ação curta (Exam) |
| `thumbnail` | `ReactNode` | | Capa 56x40 (Course) |
| `onMore` / `moreLabel` | `() => void` / `string` | | Botão "Mais opções" que aparece no hover/foco |
| `asChild` | `boolean` | `false` | Vira link (`<a>`): clicar leva ao conteúdo (não combina com `onMore`) |

NotificationBell: `count` (número de não lidas; badge `99+`), `open` (estado aberto), `tone` (`"brand" | "neutral"`), `aria-label` (padrão `Notificações, N não lidas`).

NotificationCenter: `type` `"dropdown" | "drawer" | "mobile"`. `NotificationCenterHeader`: `title`, `count`, `children` (botões de ação). `NotificationGroup`: `label` (HOJE, ESTA SEMANA, ANTERIORES).

## Regras

- Agrupe por Hoje, Esta semana e Anteriores.
- Clicar no item marca como lido e leva direto ao conteúdo.
- O contador aparece só na aba Todas.

## Acessibilidade

- O sino é um botão com `aria-expanded` e nome com a quantidade de não lidas. O badge interno é `aria-hidden`.
- Cada grupo é uma `section` rotulada pelo título.
- Item não lido não depende só da cor: o texto fica em `content-primary` e há o ponto; considere um texto oculto "Não lida" para leitores de tela.

## Não faça

- Usar o Notification Center para confirmações imediatas (use Toast).
- Colocar mais de uma ação por item.
