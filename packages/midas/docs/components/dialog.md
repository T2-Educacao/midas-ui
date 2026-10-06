---
title: "Dialog"
description: "Janela modal sobre a página para tarefas focadas (formulários curtos, confirmações, questionários). Dialog, DialogTrigger, DialogContent (com botão fechar), DialogHeader, DialogTitle, DialogDescription, DialogFooter e DialogClose."
---

```tsx
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@t2-educacao/midas";
```

## Uso

```tsx
<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">Editar perfil</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Editar perfil</DialogTitle>
      <DialogDescription>Altere seus dados e salve.</DialogDescription>
    </DialogHeader>
    <Field>
      <FieldLabel htmlFor="nome">Nome</FieldLabel>
      <Input id="nome" defaultValue="Ana Souza" />
    </Field>
    <DialogFooter>
      <DialogClose asChild>
        <Button variant="outline">Cancelar</Button>
      </DialogClose>
      <Button>Salvar</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

## Componentes

| Componente | O que é |
|---|---|
| `Dialog` | Raiz (`open`, `defaultOpen`, `onOpenChange`) |
| `DialogTrigger` | Abre o diálogo (use `asChild`) |
| `DialogContent` | A janela (largura máxima de 448px; passe `max-w-2xl` etc. em `className` para mudar). `overlayClassName` muda o fundo escurecido. `showCloseButton={false}` esconde o X |
| `DialogHeader` / `DialogTitle` / `DialogDescription` | Cabeçalho. O título dá nome ao diálogo |
| `DialogFooter` | Rodapé cinza para as ações |
| `DialogClose` | Fecha o diálogo |

## Exemplos

### Controlado

```tsx
const [aberto, setAberto] = useState(false);

<Dialog open={aberto} onOpenChange={setAberto}>
  <DialogContent>...</DialogContent>
</Dialog>
```

### Com Questionnaire

Veja o exemplo "Dialog" em [Questionnaire](./questionnaire.md).

## Acessibilidade

- Foco fica preso dentro do diálogo e volta ao gatilho ao fechar.
- `Esc` fecha. O fundo fica inerte para leitores de tela.
- `DialogTitle` é obrigatório (pode ficar visualmente escondido com `className="sr-only"`).

## Não faça

- Abrir diálogo dentro de diálogo.
- Usar diálogo para mensagens que não exigem ação: use [Toast](./toast.md).
