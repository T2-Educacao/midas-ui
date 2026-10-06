import {
  ListItem,
  ListItemContent,
  ListItemDescription,
  ListItemGroup,
  ListItemTitle,
} from "@t2-educacao/midas";
import { CaretRight, GraduationCap } from "@t2-educacao/midas/icons";

export default function ListItemComoLink() {
  return (
    <ListItemGroup className="max-w-md">
      <ListItem
        asChild
        interactive
        leading={<GraduationCap aria-hidden="true" />}
        trailing={<CaretRight aria-hidden="true" className="rtl:rotate-180" />}
      >
        <a href="#algebra">
          <ListItemContent>
            <ListItemTitle>Álgebra</ListItemTitle>
            <ListItemDescription>Continue de onde parou</ListItemDescription>
          </ListItemContent>
        </a>
      </ListItem>
      <ListItem
        asChild
        interactive
        leading={<GraduationCap aria-hidden="true" />}
        trailing={<CaretRight aria-hidden="true" className="rtl:rotate-180" />}
      >
        <a href="#geometria">
          <ListItemContent>
            <ListItemTitle>Geometria</ListItemTitle>
            <ListItemDescription>Novo conteúdo disponível</ListItemDescription>
          </ListItemContent>
        </a>
      </ListItem>
    </ListItemGroup>
  );
}
