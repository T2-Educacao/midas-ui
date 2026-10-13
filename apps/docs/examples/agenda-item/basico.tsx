import { AgendaItem } from "@t2-educacao/midas";

export default function AgendaItemBasico() {
  return (
    <div className="flex max-w-sm flex-col gap-4">
      <ul className="flex flex-col gap-2">
        <li>
          <AgendaItem month="AGO" day="11" description="Prova de certificação">
            C-Pro R
          </AgendaItem>
        </li>
        <li>
          <AgendaItem month="AGO" day="14" today description="Hoje, 19h">
            Aula ao vivo: IPCA+
          </AgendaItem>
        </li>
      </ul>
      <ul className="flex flex-col">
        <li>
          <AgendaItem asChild type="row" month="SET" day="02">
            <a href="#prova">CPA-20</a>
          </AgendaItem>
        </li>
        <li>
          <AgendaItem type="row" tone="neutral" today month="SET" day="05">
            Simulado geral
          </AgendaItem>
        </li>
      </ul>
    </div>
  );
}
