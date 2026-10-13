import { Quote } from "@t2-educacao/midas";

export default function QuoteTipos() {
  return (
    <div className="flex max-w-xl flex-col gap-6">
      <Quote author="Ana Lima" authorRole="Professora · Fundos de investimento">
        Estudar 25 minutos por dia, todos os dias, vence uma maratona de fim de semana.
      </Quote>
      <Quote
        type="testimonial"
        surface="card"
        author="Mariana Ribeiro"
        authorRole="Gerente de relacionamento"
      >
        Fiz a CPA-20 trabalhando o dia inteiro. O plano de estudos se ajustou à minha agenda.
      </Quote>
      <Quote type="tip" label="DICA DA PROFESSORA" author="Ana Lima" authorRole="Aula 05 · 06:42">
        Na prova, come-cotas aparece sempre junto de fundos de longo prazo.
      </Quote>
      <Quote
        type="citation"
        tone="neutral"
        source="Resolução CVM 175, art. 2"
        href="https://www.gov.br/cvm"
      >
        Os fundos de investimento serão constituídos sob a forma de condomínio de natureza especial.
      </Quote>
    </div>
  );
}
