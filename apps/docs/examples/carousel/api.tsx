"use client";

import {
  Card,
  CardContent,
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@t2-educacao/midas";
import { useEffect, useState } from "react";

export default function CarouselApiExemplo() {
  const [api, setApi] = useState<CarouselApi>();
  const [atual, setAtual] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (!api) return;
    setTotal(api.scrollSnapList().length);
    setAtual(api.selectedScrollSnap() + 1);
    api.on("select", () => setAtual(api.selectedScrollSnap() + 1));
  }, [api]);

  return (
    <div className="flex flex-col items-center">
      <Carousel aria-label="Com API" setApi={setApi} className="mx-12 w-full max-w-48">
        <CarouselContent>
          {[1, 2, 3, 4, 5].map((numero) => (
            <CarouselItem key={numero}>
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
      <p className="py-4 text-sm text-muted-foreground">
        Slide {atual} de {total}
      </p>
    </div>
  );
}
