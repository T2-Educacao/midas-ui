import {
  Button,
  ButtonGroup,
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
  Textarea,
} from "@t2-educacao/midas";
import { CaretDown, Robot } from "@t2-educacao/midas/icons";

export default function ButtonGroupComPopover() {
  return (
    <ButtonGroup aria-label="Tati">
      <Button variant="outline">
        <Robot /> Tati
      </Button>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" size="icon" aria-label="Abrir tarefa">
            <CaretDown />
          </Button>
        </PopoverTrigger>
        <PopoverContent align="end" aria-labelledby="titulo-tarefa">
          <PopoverHeader>
            <PopoverTitle id="titulo-tarefa">Nova tarefa</PopoverTitle>
            <PopoverDescription>Descreva o que a Tati deve fazer.</PopoverDescription>
          </PopoverHeader>
          <Textarea placeholder="Resumir a aula 3 do módulo 2" aria-label="Tarefa" />
        </PopoverContent>
      </Popover>
    </ButtonGroup>
  );
}
