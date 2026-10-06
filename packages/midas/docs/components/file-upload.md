---
title: "File Upload"
description: "Área de envio de arquivos acessível: clique ou arraste e solte. Valida tipo (accept) e tamanho (maxSize), avisa recusas em onReject e tem estados de arrastando e inválido."
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
