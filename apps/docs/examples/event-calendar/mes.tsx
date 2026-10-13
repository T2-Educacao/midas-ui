import { EventCalendar } from "@t2-educacao/midas";

const eventos = [
  { id: "1", title: "Simulado 03", date: new Date(2027, 7, 5), category: "simulado" as const },
  {
    id: "2",
    title: "C-Pro R",
    date: new Date(2027, 7, 11),
    category: "prova" as const,
    time: "09:00 – 12:00",
  },
  { id: "3", title: "Plano financeiro", date: new Date(2027, 7, 14), category: "entrega" as const },
  { id: "4", title: "Tesouro Direto", date: new Date(2027, 7, 19), category: "aula" as const },
];

export default function EventCalendarMes() {
  return (
    <div className="grid gap-6">
      <EventCalendar events={eventos} defaultMonth={new Date(2027, 7, 1)} />
      <EventCalendar view="agenda" events={eventos} defaultMonth={new Date(2027, 7, 1)} />
    </div>
  );
}
