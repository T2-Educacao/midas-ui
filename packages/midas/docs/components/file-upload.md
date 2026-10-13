---
title: "File Upload"
description: "Área de envio de arquivos (dropzone ou inline) com arrastar e soltar, validação de tipo e tamanho, estados hover/erro/desabilitado, estilos outline/filled/glass, tom e forma. FileItem mostra cada arquivo da fila: enviando (com progresso), concluído ou com erro."
---

```tsx
import { FileUpload } from "@t2-educacao/midas";
```

## Uso

```tsx
<FileUpload accept="image/*" maxSize={2 * 1024 * 1024} onFilesChange={(files) => enviar(files)}>
  <span>Arraste uma imagem ou clique para escolher</span>
</FileUpload>
```

O componente só entrega os arquivos validados; o envio ao servidor é do seu app.

## Props

Aceita as props de `<label>` (menos `onChange`).

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `accept` | `string` | | Tipos aceitos, como no `<input>`: `image/*`, `.pdf`, `image/png` |
| `multiple` | `boolean` | `false` | Permite vários arquivos. Sem isso, só o primeiro é considerado |
| `maxSize` | `number` | | Tamanho máximo em bytes |
| `disabled` | `boolean` | `false` | Desabilita clique e arrastar |
| `invalid` | `boolean` | `false` | Estado de erro (borda destrutiva e `aria-invalid`) |
| `name` | `string` | | Nome do input, para uso em formulários |
| `onFilesChange` | `(files: File[]) => void` | | Arquivos aceitos. Não é chamado se todos forem recusados |
| `onReject` | `(rejections: { file: File; reason: "type" \| "size" }[]) => void` | | Arquivos recusados e o motivo |
| `children` | `ReactNode` | | Conteúdo da área: ícone, texto, dicas |

Atributos de estado no elemento raiz: `data-dragging`, `data-invalid`, `data-disabled`.

## Variantes

| Configuração | Quando usar |
|---|---|
| Padrão | Um único arquivo |
| `multiple` | Anexos, galerias |
| `accept` + `maxSize` | Quando há restrição de formato ou peso |
| `invalid` | Depois de uma recusa ou falha de envio, junto de uma mensagem |

## Exemplos

### Só imagens com limite

```tsx
"use client";

const [erro, setErro] = useState<string | null>(null);

<FileUpload
  accept="image/*"
  maxSize={2 * 1024 * 1024}
  invalid={erro !== null}
  onFilesChange={([arquivo]) => {
    setErro(null);
    enviar(arquivo);
  }}
  onReject={([{ reason }]) =>
    setErro(reason === "size" ? "A imagem passa de 2 MB." : "Envie apenas imagens.")
  }
>
  <span>Escolha uma imagem</span>
</FileUpload>;
{erro ? <p className="text-sm text-destructive">{erro}</p> : null}
```

## Acessibilidade

- Usa um `<input type="file">` real escondido visualmente dentro de um `<label>`: funciona com teclado (Tab, Enter, Espaço) e leitores de tela.
- O texto dentro de `children` é o nome acessível do campo; escreva uma instrução clara.
- O foco do input aparece como anel na área toda.
- Comunique erros em texto visível perto da área, não só pela cor.

## Não faça

- Não confie só em `accept`/`maxSize` para segurança: valide de novo no servidor.
- Não deixe a área sem texto (ícone sozinho não nomeia o campo).
- Não coloque botões ou links dentro de `children`: o clique abre o seletor de arquivos.

## Variantes do Figma

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `layout` | `"dropzone" \| "inline"` | `"dropzone"` | Área tracejada centralizada ou linha com botão "Procurar" |
| `appearance` | `"outline" \| "filled" \| "glass"` | `"outline"` | Estilo |
| `tone` | `"brand" \| "neutral"` | `"brand"` | Cor do foco e do estado de arraste |
| `shape` | `"rounded" \| "pill"` | `"rounded"` | Raio 16 / 28 (dropzone) ou 10 / cápsula (inline) |

## FileItem

```tsx
import { FileItem } from "@t2-educacao/midas";

<FileItem name="extrato-maio.pdf" state="uploading" progress={50} meta="1,2 MB de 2,4 MB · 50%" onRemove={cancelar} />
<FileItem name="extrato-maio.pdf" state="done" meta="2,4 MB · Enviado" />
<FileItem name="extrato-maio.pdf" state="error" meta="Falha no envio · arquivo maior que 10 MB" />
```

Props: `name`, `meta`, `type` (`"document" | "image"`), `state` (`"uploading" | "done" | "error"`), `progress` (0-100), `thumbnail`, `onRemove`, `removeLabel`. O erro usa ícone + texto, nunca só cor.
