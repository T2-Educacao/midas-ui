import {
  Card,
  CardContent,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@t2-educacao/midas";

export default function CarouselTamanhos() {
  return (
    <Carousel aria-label="Tamanhos" opts={{ align: "start" }} className="mx-12 w-full max-w-sm">
      <CarouselContent>
        {[1, 2, 3, 4, 5].map((numero) => (
          <CarouselItem key={numero} className="basis-1/2 md:basis-1/3">
            <Card className="py-0">
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <span className="text-3xl font-semibold">{numero}</span>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
