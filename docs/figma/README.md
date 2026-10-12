# Dados extraídos do Figma do Midas

Fonte: https://www.figma.com/design/MciqXNmJpU13Zl9MyhUwK9/Midas-Design-System (extraído em 2026-10-12, última edição do arquivo em 2026-10-09).

- `tokens-theme.json`: 86 tokens semânticos com o hex resolvido e o alias (primitivo) em cada tema (Light, Dark, Dark Blue).
- `componentes/<pagina>.md`: texto das páginas de documentação do Figma (uso, não usar, anatomia, regras) e as propriedades de variante de cada componente.
- `frames-ids.json`: ids dos frames do Figma por página, para buscar imagens de referência pela API (`/v1/images/<chave>?ids=<id>`).

A API de variáveis do Figma é Enterprise e não está disponível: os valores vêm dos frames de documentação.
