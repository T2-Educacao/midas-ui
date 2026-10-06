import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@t2-educacao/midas";

export default function AccordionMultiplo() {
  return (
    <Accordion type="multiple" defaultValue={["modulo-1"]} className="w-full max-w-md">
      <AccordionItem value="modulo-1">
        <AccordionTrigger>Módulo 1: Introdução</AccordionTrigger>
        <AccordionContent>Conceitos iniciais e visão geral do curso.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="modulo-2">
        <AccordionTrigger>Módulo 2: Prática guiada</AccordionTrigger>
        <AccordionContent>Exercícios resolvidos passo a passo.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="modulo-3" disabled>
        <AccordionTrigger>Módulo 3: Em breve</AccordionTrigger>
        <AccordionContent>Disponível em breve.</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
