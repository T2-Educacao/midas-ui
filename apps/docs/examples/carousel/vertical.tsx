import {
  Card,
  CardContent,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@t2-educacao/midas";

export default function CarouselVertical() {
  return (
    <Carousel
      aria-label="Vertical"
      orientation="vertical"
      opts={{ align: "start" }}
      className="my-12 w-full max-w-48"
    >
      <CarouselContent className="h-56">
        {[1, 2, 3, 4, 5].map((numero) => (
          <CarouselItem key={numero} className="basis-1/2">
            <Card className="py-0">
              <CardContent className="flex items-center justify-center p-6">
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
