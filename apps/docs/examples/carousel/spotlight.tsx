import {
  Card,
  CardBody,
  CardDescription,
  CardMedia,
  CardTitle,
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
} from "@t2-educacao/midas";

const destaques = ["Renda fixa", "Ações", "Fundos", "Tesouro", "IR"];

export default function CarouselSpotlight() {
  return (
    <Carousel
      aria-label="Destaques"
      type="spotlight"
      opts={{ align: "center", loop: true }}
      className="w-full max-w-3xl"
    >
      <CarouselContent>
        {destaques.map((destaque) => (
          <CarouselItem key={destaque} className="basis-3/5">
            <Card layout="overlay" size="m" surface="solid">
              <CardMedia>
                <div className="size-full bg-linear-to-br from-action-accent-bg to-action-primary-bg" />
              </CardMedia>
              <CardBody>
                <CardTitle>{destaque}</CardTitle>
                <CardDescription>Trilha em destaque da semana.</CardDescription>
              </CardBody>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselDots />
    </Carousel>
  );
}
