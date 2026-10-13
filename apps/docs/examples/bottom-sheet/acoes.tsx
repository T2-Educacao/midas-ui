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
} from "@t2-educacao/midas";
import { IconCopy, IconShare, IconTrash } from "@t2-educacao/midas/icons";

export default function BottomSheetAcoes() {
  return (
    <BottomSheet>
      <BottomSheetTrigger asChild>
        <Button variant="outline">Ações</Button>
      </BottomSheetTrigger>
      <BottomSheetContent aria-describedby={undefined} appearance="glass">
        <BottomSheetHeader>
          <BottomSheetTitle>Escolha uma opção</BottomSheetTitle>
        </BottomSheetHeader>
        <BottomSheetBody className="gap-1">
          <Button variant="ghost" size="xl" className="justify-start">
            <IconShare /> Compartilhar
          </Button>
          <Button variant="ghost" size="xl" className="justify-start">
            <IconCopy /> Duplicar meta
          </Button>
          <Button variant="destructive" size="xl" className="justify-start">
            <IconTrash /> Excluir meta
          </Button>
        </BottomSheetBody>
        <BottomSheetFooter>
          <BottomSheetClose asChild>
            <Button variant="secondary">Cancelar</Button>
          </BottomSheetClose>
        </BottomSheetFooter>
      </BottomSheetContent>
    </BottomSheet>
  );
}
