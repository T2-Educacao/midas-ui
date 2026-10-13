import {
  Button,
  Card,
  CardBody,
  CardDescription,
  CardEyebrow,
  CardFooter,
  CardMedia,
  CardMeta,
  CardTag,
  CardTitle,
} from "@t2-educacao/midas";
import { IconClock, IconStar } from "@t2-educacao/midas/icons";

function Capa() {
  return <div className="size-full bg-linear-to-br from-action-accent-bg to-action-primary-bg" />;
}

export default function CardLayouts() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      <Card size="s" hover="ring">
        <CardMedia>
          <Capa />
          <CardTag>23 aulas</CardTag>
        </CardMedia>
        <CardBody>
          <CardEyebrow>Trilha · Investimentos</CardEyebrow>
          <CardTitle>Renda fixa do zero</CardTitle>
          <CardDescription>Entenda CDB, Tesouro e LCI no seu ritmo.</CardDescription>
          <CardMeta>
            <span>
              <IconClock aria-hidden="true" /> 25 min
            </span>
            <span>
              <IconStar aria-hidden="true" /> 4,8
            </span>
          </CardMeta>
        </CardBody>
        <CardFooter>
          <Button rounded>Começar</Button>
        </CardFooter>
      </Card>
      <Card size="s" layout="horizontal" hover="tint">
        <CardMedia>
          <Capa />
        </CardMedia>
        <CardBody>
          <CardEyebrow>Artigo</CardEyebrow>
          <CardTitle>Reserva de emergência</CardTitle>
          <CardDescription>Quanto guardar e onde investir.</CardDescription>
        </CardBody>
      </Card>
      <Card size="s" layout="overlay" hover="lift">
        <CardMedia>
          <Capa />
        </CardMedia>
        <CardBody>
          <CardEyebrow>Destaque</CardEyebrow>
          <CardTitle>Planejamento financeiro</CardTitle>
          <CardDescription>Aula ao vivo com o prof. Rafael.</CardDescription>
        </CardBody>
      </Card>
    </div>
  );
}
