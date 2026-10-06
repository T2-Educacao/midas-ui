# @t2-educacao/midas

## 0.2.0

### Minor Changes

- 7606e10: Melhorias a partir do feedback da migração da hub (Tailwind v3).
  
  Novos componentes: `Switch`, `Tabs`, `Accordion`, `Collapsible`, `Slider`, `Alert`, `Chip` (removível), `SegmentedControl` (escolha única sem desmarcar) e `ChoiceCardGroup`/`ChoiceCard`/`ChoiceCardCheckbox` (card de opção selecionável).
  
  Tokens e camadas: novos tokens `warning` e `info` (claro e escuro) e variáveis `--midas-z-overlay` e `--midas-z-popup` para ajustar o z-index de Dialog, Select, Dropdown, Popover, Combobox, DatePicker e Tooltip.
  
  Tailwind v3: `styles.css` agora sai sem `@layer` (compila sem plugin PostCSS e não perde para resets sem camada) e com `translate`/`rotate`/`scale` convertidos para `transform`, no formato do v3, para o efeito não dobrar quando a mesma classe existe nos dois CSS. Quem importava `styles.css` ganha precedência normal de especificidade em vez de camada.
  
  Variantes e props: `filled` em `Button`, `Badge` e `Alert` (cor cheia nas variantes `destructive`, `success`, `warning` e `info`); `warning` e `info` em `Badge` e `Button` (e `success` em `Button`); `variant` e `indicatorClassName` em `Progress`; `size` numérico em `Avatar`; `fullWidth` e `wrapperClassName` em `NativeSelect`; `overlayClassName` em `Dialog`; `showSelectedDescription` em `Combobox`.
  
  Comportamentos: `Button loading` em botão só de ícone mostra apenas o spinner; `DialogContent` aceita `max-w-*` sem prefixo (a largura padrão passou de `sm:max-w-md` para `max-w-md`); a busca do `Combobox` ignora acentos; o rodapé do `Card` ganhou cantos arredondados para funcionar com `overflow-visible`.
  
  Docs: novo guia de migração, instalação para Tailwind v3 reescrita, e avisos sobre `Tooltip` em botão desabilitado e conflito de nome com o recharts.

## 0.1.1

### Patch Changes

- README e docs sem o aviso de pré-lançamento, com o link do site de documentação (https://midas.t2.com.br), que também passa a ser a homepage do pacote. Corrige o exemplo de espaçamento do Carousel para classes lógicas.

## 0.1.0

### Minor Changes

- Primeira versão pública do Midas: 31 componentes (Button, ButtonGroup, Spinner, Kbd, Toggle, ToggleGroup, Tooltip, Input, InputGroup, Field, Badge, Combobox, DropdownMenu, Popover, Toast, Avatar, Pagination, Carousel, Calendar, DatePicker, Questionnaire, Card, Dialog, Progress, Select, NativeSelect, Checkbox, RadioGroup, Textarea, Separator e DirectionProvider), tokens com tema claro e escuro, suporte a RTL, ícones Phosphor e Tabler, e documentação para agentes de IA em `docs/` e `llms.txt`.
