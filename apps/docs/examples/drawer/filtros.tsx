import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@t2-educacao/midas";

export default function DrawerFiltros() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Filtrar cursos</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Filtrar cursos</DrawerTitle>
          <DrawerDescription>12 resultados</DrawerDescription>
        </DrawerHeader>
        <DrawerBody>
          <p className="text-body-sm text-content-secondary">Grupos de filtros entram aqui.</p>
        </DrawerBody>
        <DrawerFooter>
          <Button variant="ghost" className="me-auto">
            Limpar
          </Button>
          <Button variant="accent">Ver 12 cursos</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
