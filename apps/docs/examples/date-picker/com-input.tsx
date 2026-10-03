"use client";

import {
  Calendar,
  Field,
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

const formatar = (data: Date) => data.toLocaleDateString("pt-BR");

export default function DatePickerComInput() {
  const [data, setData] = useState<Date | undefined>(new Date(2026, 1, 1));
  const [texto, setTexto] = useState(data ? formatar(data) : "");
  const [aberto, setAberto] = useState(false);

  return (
    <Field className="w-56">
      <FieldLabel htmlFor="assinatura">Data da assinatura</FieldLabel>
      <InputGroup>
        <InputGroupInput
          id="assinatura"
          value={texto}
          placeholder="dd/mm/aaaa"
          onChange={(event) => {
            setTexto(event.target.value);
            const [dia, mes, ano] = event.target.value.split("/").map(Number);
            if (dia && mes && ano && ano > 999) setData(new Date(ano, mes - 1, dia));
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
    </Field>
  );
}
