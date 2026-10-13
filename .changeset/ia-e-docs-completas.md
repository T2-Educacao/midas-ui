---
"@t2-educacao/midas": minor
---

Pacote mais legível por IA e docs completas.

Novos arquivos no pacote: `llms-full.txt` (todas as docs em um arquivo só) e `components.json` (manifesto com nome, descrição, imports e caminho da doc de cada componente), além das regras de uso no topo do `llms.txt`. Exportados como `@t2-educacao/midas/llms-full.txt` e `@t2-educacao/midas/components.json`.

Docs: toda página de componente agora tem uso, props, exemplo, acessibilidade e "não faça" (verificado por teste). Completadas as de DatePicker, Select, NativeSelect, Questionnaire e Card (conteúdo que precisa vazar com `overflow-visible py-0`).
