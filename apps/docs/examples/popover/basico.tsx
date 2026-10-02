import {
  Button,
  Field,
  FieldLabel,
  Input,
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@t2-educacao/midas";

export default function PopoverBasico() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Definir meta</Button>
      </PopoverTrigger>
      <PopoverContent aria-labelledby="titulo-meta">
        <PopoverHeader>
          <PopoverTitle id="titulo-meta">Meta de estudo</PopoverTitle>
          <PopoverDescription>Quantas horas por semana você quer estudar?</PopoverDescription>
        </PopoverHeader>
        <Field orientation="horizontal">
          <FieldLabel htmlFor="horas">Horas</FieldLabel>
          <Input id="horas" type="number" defaultValue={5} className="w-24" />
        </Field>
      </PopoverContent>
    </Popover>
  );
}
