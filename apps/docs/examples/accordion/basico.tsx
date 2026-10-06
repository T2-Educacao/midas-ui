import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@t2-educacao/midas";

export default function AccordionBasico() {
  return (
    <Accordion type="single" collapsible defaultValue="prazo" className="w-full max-w-md">
      <AccordionItem value="prazo">
        <AccordionTrigger>Qual o prazo de acesso?</AccordionTrigger>
        <AccordionContent>O acesso ao curso dura 12 meses a partir da compra.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="certificado">
        <AccordionTrigger>Recebo certificado?</AccordionTrigger>
        <AccordionContent>
          Sim, o certificado é emitido ao concluir todas as aulas.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="suporte">
        <AccordionTrigger>Como falo com o suporte?</AccordionTrigger>
        <AccordionContent>Pelo chat da plataforma, em dias úteis.</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
