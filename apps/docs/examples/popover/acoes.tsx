import {
  Button,
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverDescription,
  PopoverFooter,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@t2-educacao/midas";

export default function PopoverAcoes() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Excluir anotação</Button>
      </PopoverTrigger>
      <PopoverContent side="bottom" aria-labelledby="pop-excluir">
        <PopoverHeader>
          <PopoverTitle id="pop-excluir">Excluir esta anotação?</PopoverTitle>
          <PopoverDescription>
            Ela será removida de todos os seus dispositivos. Essa ação não pode ser desfeita.
          </PopoverDescription>
        </PopoverHeader>
        <PopoverFooter>
          <PopoverClose asChild>
            <Button variant="ghost" size="sm">
              Cancelar
            </Button>
          </PopoverClose>
          <Button variant="destructive" size="sm">
            Excluir
          </Button>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
}
