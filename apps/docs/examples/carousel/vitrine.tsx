import {
  Card,
  CardBody,
  CardDescription,
  CardEyebrow,
  CardMedia,
  CardTitle,
  Carousel,
  CarouselContent,
  CarouselControls,
  CarouselDots,
  CarouselEyebrow,
  CarouselHeader,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselTitle,
} from "@t2-educacao/midas";

const cursos = [
  "Renda fixa do zero",
  "Investindo em ações",
  "Planejamento financeiro",
  "Fundos imobiliários",
  "Tesouro Direto",
];

export default function CarouselVitrine() {
  return (
    <Carousel aria-label="Continue aprendendo" className="w-full max-w-3xl">
      <CarouselHeader>
        <div>
          <CarouselEyebrow>EM ALTA</CarouselEyebrow>
          <CarouselTitle>Continue aprendendo</CarouselTitle>
        </div>
        <CarouselControls>
          <CarouselPrevious inline />
          <CarouselNext inline />
        </CarouselControls>
      </CarouselHeader>
      <CarouselContent>
        {cursos.map((curso) => (
          <CarouselItem key={curso} className="basis-4/5 md:basis-1/2">
            <Card size="s" hover="ring">
              <CardMedia>
                <div className="size-full bg-linear-to-br from-action-accent-bg to-action-primary-bg" />
              </CardMedia>
              <CardBody>
                <CardEyebrow>Trilha</CardEyebrow>
                <CardTitle>{curso}</CardTitle>
                <CardDescription>Aprenda no seu ritmo, com exemplos práticos.</CardDescription>
              </CardBody>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselDots />
    </Carousel>
  );
}
