---
"@t2-educacao/midas": minor
---

Campos, escolhas e avaliação alinhados ao Figma novo, só com tokens semânticos.

Novos componentes: `SearchBar`, `TagInput`, `CodeInput`, `ChoiceChip`/`ChoiceChipGroup`, `AnswerOption`/`AnswerOptionGroup`, `Rating`/`RatingIcon`/`RatingSummary`, `FormLayout`/`FormLayoutItem`/`FormSection`/`FormActions`, `FileItem`, `FieldSuccess` e `FieldCounter`.

Atualizados (variantes `size`, `appearance` outline/filled/glass, `tone` brand/neutral, `shape` rounded/pill): `Input`, `Textarea`, `InputGroup`, `Select`, `NativeSelect`, `Combobox`, `FileUpload`, `ChoiceCard` (layout, media, columns), `SegmentedControl`, `Slider` (`tone`), `Chip`.

Quebras visuais (0.x, minor): a altura padrão de `Input`, `Select`, `NativeSelect` e `Combobox` passou de 32px para 48px (MD); SM = 40px, LG = 56px. `SegmentedControl` passou a ter trilho `surface-muted` com segmento elevado (padrão `md` = 36px, antes 32px) e o `size` aceita `sm | md` (`default` continua aceito). `inputClasses` deixou de ser exportado de `input.tsx` (use `inputVariants`). `FieldError` agora mostra um ícone antes do texto.
