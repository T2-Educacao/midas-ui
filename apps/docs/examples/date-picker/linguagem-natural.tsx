"use client";

import {
  Calendar,
  Field,
  FieldDescription,
  FieldLabel,
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@t2-educacao/midas";
import { CalendarBlank } from "@t2-educacao/midas/icons";
import { useState } from "react";

const meses = [
  "janeiro",
  "fevereiro",
  "março",
  "abril",
  "maio",
  "junho",
  "julho",
  "agosto",
  "setembro",
  "outubro",
  "novembro",
  "dezembro",
];
const diasDaSemana = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"];

function somarDias(base: Date, dias: number) {
  const data = new Date(base.getFullYear(), base.getMonth(), base.getDate());
  data.setDate(data.getDate() + dias);
  return data;
}

function interpretar(texto: string, hoje = new Date()): Date | undefined {
  const t = texto.trim().toLocaleLowerCase("pt-BR");
  if (!t) return undefined;
  if (t === "hoje") return somarDias(hoje, 0);
  if (t === "amanhã" || t === "amanha") return somarDias(hoje, 1);
  if (t === "depois de amanhã" || t === "depois de amanha") return somarDias(hoje, 2);
  if (t === "ontem") return somarDias(hoje, -1);

  const relativo = t.match(/^(?:em|daqui a) (\d+) (dia|dias|semana|semanas)$/);
  if (relativo) {
    const quantidade = Number(relativo[1]);
    return somarDias(hoje, relativo[2]?.startsWith("semana") ? quantidade * 7 : quantidade);
  }

  const semana = diasDaSemana.findIndex((dia) => t.includes(dia));
  if (semana >= 0 && /(próxima|proxima|que vem)/.test(t)) {
    const diferenca = (semana - hoje.getDay() + 7) % 7 || 7;
    return somarDias(hoje, diferenca);
  }

  const numerica = t.match(/^(\d{1,2})\/(\d{1,2})(?:\/(\d{4}))?$/);
  if (numerica) {
    const ano = numerica[3] ? Number(numerica[3]) : hoje.getFullYear();
    return new Date(ano, Number(numerica[2]) - 1, Number(numerica[1]));
  }

  const porExtenso = t.match(/^(\d{1,2}) de ([a-zç]+)(?: de (\d{4}))?$/);
  if (porExtenso) {
    const mes = meses.indexOf(porExtenso[2] ?? "");
    if (mes >= 0) {
      const ano = porExtenso[3] ? Number(porExtenso[3]) : hoje.getFullYear();
      return new Date(ano, mes, Number(porExtenso[1]));
    }
  }
  return undefined;
}

const formatar = (data: Date) =>
  data.toLocaleDateString("pt-BR", { day: "numeric", month: "long", year: "numeric" });

export default function DatePickerLinguagemNatural() {
  const [texto, setTexto] = useState("amanhã");
  const [data, setData] = useState<Date | undefined>(() => interpretar("amanhã"));
  const [aberto, setAberto] = useState(false);

  return (
    <Field className="w-80">
      <FieldLabel htmlFor="agendamento">Data de publicação</FieldLabel>
      <InputGroup>
        <InputGroupInput
          id="agendamento"
          value={texto}
          placeholder="amanhã, próxima sexta, 15/05..."
          aria-describedby="agendamento-descricao"
          onChange={(event) => {
            setTexto(event.target.value);
            setData(interpretar(event.target.value));
          }}
        />
        <InputGroupAddon align="end">
          <Popover open={aberto} onOpenChange={setAberto}>
            <PopoverTrigger asChild>
              <InputGroupButton size="icon-xs" aria-label="Abrir calendário">
                <CalendarBlank />
              </InputGroupButton>
            </PopoverTrigger>
            <PopoverContent aria-label="Calendário" align="end" className="w-auto p-0">
              <Calendar
                mode="single"
                selected={data}
                defaultMonth={data}
                onSelect={(dia) => {
                  setData(dia);
                  setTexto(dia ? formatar(dia) : "");
                  setAberto(false);
                }}
              />
            </PopoverContent>
          </Popover>
        </InputGroupAddon>
      </InputGroup>
      <FieldDescription id="agendamento-descricao">
        {data
          ? `Seu post será publicado em ${formatar(data)}.`
          : 'Não entendi essa data. Tente "amanhã" ou "15/05".'}
      </FieldDescription>
    </Field>
  );
}
