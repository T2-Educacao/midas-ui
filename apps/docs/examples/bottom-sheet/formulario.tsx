import {
  BottomSheet,
  BottomSheetBody,
  BottomSheetClose,
  BottomSheetContent,
  BottomSheetFooter,
  BottomSheetHeader,
  BottomSheetTitle,
  BottomSheetTrigger,
  Button,
  Field,
  FieldLabel,
  Input,
} from "@t2-educacao/midas";

export default function BottomSheetFormulario() {
  return (
    <BottomSheet>
      <BottomSheetTrigger asChild>
        <Button variant="outline">Editar meta</Button>
      </BottomSheetTrigger>
      <BottomSheetContent aria-describedby={undefined}>
        <BottomSheetHeader>
          <BottomSheetTitle>Editar meta</BottomSheetTitle>
        </BottomSheetHeader>
        <BottomSheetBody>
          <Field>
            <FieldLabel htmlFor="meta-nome">Nome da meta</FieldLabel>
            <Input id="meta-nome" defaultValue="Reserva de emergência" />
          </Field>
        </BottomSheetBody>
        <BottomSheetFooter>
          <BottomSheetClose asChild>
            <Button variant="accent">Salvar</Button>
          </BottomSheetClose>
        </BottomSheetFooter>
      </BottomSheetContent>
    </BottomSheet>
  );
}
