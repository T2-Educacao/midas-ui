import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@t2-educacao/midas";

export default function AccordionVidro() {
  return (
    <div className="max-w-md rounded-container bg-linear-to-br from-action-accent-bg to-action-primary-bg p-6">
      <Accordion type="single" collapsible variant="glass" tone="neutral" defaultValue="a">
        <AccordionItem value="a">
          <AccordionTrigger>Como funciona o acesso?</AccordionTrigger>
          <AccordionContent>O acesso dura 12 meses a partir da compra.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="b">
          <AccordionTrigger>Recebo certificado?</AccordionTrigger>
          <AccordionContent>Sim, ao concluir todas as aulas.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
