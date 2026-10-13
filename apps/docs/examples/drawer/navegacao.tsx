import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@t2-educacao/midas";
import { IconHome, IconNotes } from "@t2-educacao/midas/icons";

export default function DrawerNavegacao() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Menu</Button>
      </DrawerTrigger>
      <DrawerContent side="left" width="navigation" appearance="glass" aria-describedby={undefined}>
        <DrawerHeader>
          <DrawerTitle>T2 Educação</DrawerTitle>
        </DrawerHeader>
        <DrawerBody className="gap-1">
          <Button variant="ghost" className="justify-start">
            <IconHome /> Início
          </Button>
          <Button variant="ghost" className="justify-start">
            <IconNotes /> Plano de estudos
          </Button>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
