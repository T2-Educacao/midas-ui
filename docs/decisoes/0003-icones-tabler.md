# 0003: Ícones: só Tabler

- **Data:** 2026-10-12
- **Status:** aceita (substitui a escolha de ícones da 0001 e da 0002)
- **Contexto:** a página Icons do Figma do Midas tem 4.963 ícones Tabler em grade de 24px, traço de 2px, com modos de cor (Default, Muted, On primary, Selected) via `currentColor`. Manter também o Phosphor significava duas bibliotecas, dois nomes para o mesmo ícone e um conjunto que não existe no Figma.

## Decisão

- O Midas usa **somente** o Tabler Icons. O Phosphor foi removido do pacote (dependência, exports, componentes, exemplos e docs).
- `@t2-educacao/midas/icons` reexporta `@tabler/icons-react` (`export *`), com os nomes originais (`IconArrowRight`, `IconSearch`...). `@t2-educacao/midas/icons/tabler` continua existindo como alias com o mesmo conteúdo.
- Dentro do pacote, os componentes importam de `@tabler/icons-react`, que fica como dependência e externa na build (`neverBundle`).
- Traço padrão (`stroke={2}`) igual ao do Figma. Cor por `currentColor`, com tokens de texto. Sem peso `fill`/`bold`: onde havia, usa-se `stroke` maior ou a variante `Filled`.
- Ícones direcionais usam `rtl:rotate-180`.

## Mapa usado na migração

| Phosphor | Tabler |
|---|---|
| CaretDown / Up / Left / Right | IconChevronDown / Up / Left / Right |
| CaretUpDown | IconSelector |
| Check, X, Minus, Plus, Circle | IconCheck, IconX, IconMinus, IconPlus, IconCircle |
| SpinnerGap | IconLoader2 |
| Info, Warning, WarningCircle, CheckCircle | IconInfoCircle, IconAlertTriangle, IconAlertCircle, IconCircleCheck |
| DotsThree | IconDots |
| MagnifyingGlass | IconSearch |
| CalendarBlank | IconCalendar |
| ArrowLeft / Right / Up | IconArrowLeft / Right / Up |
| Gear, House, List, Trash | IconSettings, IconHome, IconMenu2, IconTrash |
| SignOut, ShareNetwork, Export | IconLogout, IconShare2, IconShare |

## Consequências

- Quem usa `@t2-educacao/midas/icons` com nomes do Phosphor precisa trocar para os nomes do Tabler (quebra de API, documentada no changeset).
- Os nomes agora batem com o Figma e com o site oficial: https://tabler.io/icons.
