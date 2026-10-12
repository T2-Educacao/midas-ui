import {
  ListItem,
  ListItemContent,
  ListItemDescription,
  ListItemGroup,
  ListItemTitle,
} from "@t2-educacao/midas";
import { IconBook, IconCertificate } from "@t2-educacao/midas/icons";

export default function ListItemBasico() {
  return (
    <ListItemGroup className="max-w-md">
      <ListItem leading={<IconBook aria-hidden="true" />} trailing={<span>12 aulas</span>}>
        <ListItemContent>
          <ListItemTitle>Módulo 1</ListItemTitle>
          <ListItemDescription>Fundamentos de álgebra</ListItemDescription>
        </ListItemContent>
      </ListItem>
      <ListItem
        leading={<IconCertificate aria-hidden="true" />}
        trailing={<span>20 questões</span>}
      >
        <ListItemContent>
          <ListItemTitle>Simulado</ListItemTitle>
          <ListItemDescription>Revisão do módulo</ListItemDescription>
        </ListItemContent>
      </ListItem>
    </ListItemGroup>
  );
}
