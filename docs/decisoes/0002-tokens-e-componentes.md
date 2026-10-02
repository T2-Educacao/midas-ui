# 0002: Tokens, cores, ícones e componentes

- **Data:** 2026-10-02
- **Status:** aceita
- **Contexto:** o Figma do Midas (`KzWOVP0JoUFbqLp3LkFIFk`) foi explorado pela API REST. Os componentes seguem o kit do shadcn/ui (mesmas variantes, tamanhos e estados); a página Colors só tem escalas neutras do Tailwind e as cores de marca ainda não foram definidas pela design.

## Decisões

### Fontes da verdade

| O quê | Fonte |
|---|---|
| Componentes (variantes, tamanhos, estados, medidas) | Páginas de componentes do Figma |
| Tipografia, espaçamento e raios | Página Design Tokens do Figma |
| Ícones | Página Icons do Figma: Phosphor (padrão) e Tabler (secundária) |
| Cores | Hub (`hub-t2/styles/ds-globals.css`), claro e escuro |
| Fonte | Site: Geist e Geist Mono via `--font-geist-sans` / `--font-geist-mono` |

Ignorados: Cover, Foundation (vazia), Templates (Login) e a página Colors do Figma.

### Nomes de tokens no padrão shadcn

`background`, `foreground`, `card`, `popover`, `primary`, `secondary`, `muted`, `accent`, `destructive`, `success`, `border`, `input`, `ring`, cada um com `-foreground` quando é fundo. São os nomes que a hub já usa e que devs e agentes de IA conhecem. As variáveis CSS têm prefixo `--midas-` para não colidir com projetos existentes.

### Escalas

- Texto: a escala padrão do Tailwind é idêntica à do Figma (12/16, 14/20, 16/24, 18/28, 20/28, 24/32, 30/36), então não ganhou token próprio.
- Raios: `xs` 4, `sm` 6, `md` 8, `lg` 10, `xl` 14, `2xl` 18 (px), como no Figma.
- Espaçamento: escala padrão do Tailwind (4px por unidade).

### Estados de hover e "ligado" usam `accent`

O Figma usa o cinza `muted` para hover e estado ligado. No tema escuro da hub, `muted` fica quase igual ao fundo e o estado desaparece. Como no tema claro `accent` e `muted` são a mesma cor, os componentes usam `accent`: o claro fica idêntico ao Figma e o escuro ganha contraste.

### Nomes de variantes iguais aos do Figma

`Button`: `default`, `outline`, `secondary`, `ghost`, `destructive`, `link`; tamanhos `xs`, `sm`, `default`, `lg` e `icon-*`. A propriedade "Roundness" do Figma virou a prop booleana `rounded`.

### Tooltip de dados

A página Tooltips do Figma mostra tooltips de gráfico (título, itens com indicador em ponto ou linha, total). O `Tooltip` do Midas usa esse card como visual padrão e oferece `TooltipTitle`, `TooltipItem` e `TooltipFooter` para montar o conteúdo.

### Entrega em lotes

1. Button, ButtonGroup, Spinner, Kbd, Toggle, ToggleGroup, Tooltip
2. Input, InputGroup, Field, Badge, Combobox
3. DropdownMenu, Popover, Toast
4. Avatar, Pagination, Carousel, DatePicker
5. Questionnaire

### Lotes 2 e 3

- **Badge** entrou no lote 2: o Figma usa no label dos campos ("Beta").
- **Combobox** tem API de alto nível (`options`) em vez de composição, para ser simples de usar. Usa `cmdk` para a lista e o teclado, mas o campo é um `<input>` próprio: o input do `cmdk` força `id`, `aria-expanded` e `aria-labelledby`, o que quebrava o `FieldLabel htmlFor` e o leitor de tela.
- **Toast** usa `sonner`. Como no Figma, todos os tipos (default, success, info, warning, error) têm o mesmo card, sem ícone; só o `promise` mostra o `Spinner` enquanto carrega.
- **Popover** não nomeia o diálogo sozinho: o `PopoverContent` precisa de `aria-label` ou `aria-labelledby` (documentado).
- O asterisco de obrigatório no Figma está em vermelho com 10% de opacidade; no Midas usamos `destructive` cheio para ter contraste legível.

Dependências adicionadas: `@tabler/icons-react`, `cmdk`, `sonner`. Previstas para o lote 4: `react-day-picker` e `embla-carousel-react`.
