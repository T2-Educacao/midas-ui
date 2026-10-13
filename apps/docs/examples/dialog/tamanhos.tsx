import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@t2-educacao/midas";

export default function DialogTamanhos() {
  return (
    <div className="flex flex-wrap gap-2">
      {(["sm", "md", "lg", "xl"] as const).map((size) => (
        <Dialog key={size}>
          <DialogTrigger asChild>
            <Button variant="outline">Tamanho {size}</Button>
          </DialogTrigger>
          <DialogContent size={size} appearance={size === "xl" ? "glass" : "solid"}>
            <DialogHeader>
              <DialogTitle>Configurar simulado</DialogTitle>
              <DialogDescription>Ajuste as regras antes de liberar para a turma.</DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="secondary" size="lg">
                  Cancelar
                </Button>
              </DialogClose>
              <Button variant="accent" size="lg">
                Publicar
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
}
