import {
  Avatar,
  AvatarFallback,
  Button,
  ListItem,
  ListItemActions,
  ListItemContent,
  ListItemDescription,
  ListItemGroup,
  ListItemMeta,
  ListItemSkeleton,
  ListItemTitle,
} from "@t2-educacao/midas";
import { IconDots } from "@t2-educacao/midas/icons";

export default function ListItemFigma() {
  return (
    <div className="flex max-w-lg flex-col gap-6">
      <ListItemGroup variant="bordered">
        <ListItem
          size="sm"
          leading={
            <Avatar size="sm">
              <AvatarFallback>AS</AvatarFallback>
            </Avatar>
          }
        >
          <ListItemContent>
            <ListItemTitle>Ana Souza</ListItemTitle>
            <ListItemDescription>Concluiu o módulo Renda fixa do zero</ListItemDescription>
          </ListItemContent>
          <ListItemMeta>há 2h</ListItemMeta>
        </ListItem>
        <ListItem
          selected
          leading={
            <Avatar size="sm">
              <AvatarFallback>BL</AvatarFallback>
            </Avatar>
          }
        >
          <ListItemContent>
            <ListItemTitle>Bruno Lima</ListItemTitle>
            <ListItemDescription>Enviou uma dúvida em Investindo em ações</ListItemDescription>
          </ListItemContent>
          <ListItemActions>
            <Button size="icon-sm" variant="ghost" aria-label="Mais ações">
              <IconDots />
            </Button>
          </ListItemActions>
        </ListItem>
        <ListItemSkeleton />
      </ListItemGroup>
      <ListItem size="lg" orientation="vertical" tone="neutral" selected>
        <ListItemTitle>Como montar sua reserva de emergência</ListItemTitle>
        <ListItemDescription>
          Quanto guardar, onde investir e em quanto tempo chegar lá.
        </ListItemDescription>
      </ListItem>
    </div>
  );
}
