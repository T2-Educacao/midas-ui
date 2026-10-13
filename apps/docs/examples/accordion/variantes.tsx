import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@t2-educacao/midas";
import { IconBook } from "@t2-educacao/midas/icons";

const variantes = ["faq", "cards", "filled", "module"] as const;

export default function AccordionVariantes() {
  return (
    <div className="flex max-w-md flex-col gap-8">
      {variantes.map((variante) => (
        <Accordion
          key={variante}
          type="single"
          collapsible
          variant={variante}
          defaultValue="a"
          aria-label={variante}
        >
          <AccordionItem value="a">
            <AccordionTrigger
              icon={variante === "module" ? <IconBook /> : undefined}
              meta={variante === "module" ? "8 aulas" : undefined}
            >
              {variante === "module" ? "Módulo 2 · Ética e regulação" : "O que é come-cotas?"}
            </AccordionTrigger>
            <AccordionContent>
              É a cobrança antecipada de IR em maio e novembro sobre fundos de renda fixa e
              multimercado.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="b">
            <AccordionTrigger>Quanto tempo vale a certificação CPA-20?</AccordionTrigger>
            <AccordionContent>Cinco anos, com possibilidade de renovação.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="c" disabled>
            <AccordionTrigger>Item desabilitado</AccordionTrigger>
            <AccordionContent>Indisponível.</AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  );
}
