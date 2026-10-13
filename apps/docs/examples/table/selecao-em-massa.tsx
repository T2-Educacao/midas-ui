"use client";

import {
  Button,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableToolbar,
} from "@t2-educacao/midas";
import { useState } from "react";

const alunos = ["Ana Souza", "Bruno Lima", "Carla Dias", "Diego Reis"];

export default function TableSelecaoEmMassa() {
  const [selecionados, setSelecionados] = useState<string[]>(["Ana Souza", "Carla Dias"]);

  const alternar = (nome: string, marcado: boolean) =>
    setSelecionados((atual) =>
      marcado ? [...atual, nome] : atual.filter((item) => item !== nome),
    );

  return (
    <div className="w-full max-w-xl overflow-hidden rounded-container border border-border-subtle bg-surface-default shadow-elevation-card">
      {selecionados.length > 0 ? (
        <TableToolbar type="selection" selection={`${selecionados.length} selecionados`}>
          <Button variant="ghost" size="sm">
            Exportar
          </Button>
          <Button variant="ghost" size="sm" className="text-status-danger-content">
            Excluir
          </Button>
        </TableToolbar>
      ) : (
        <TableToolbar title="Alunos" count={alunos.length} />
      )}
      <Table surface="plain" density="compact">
        <TableHeader>
          <TableRow>
            <TableHead className="w-10">
              <span className="sr-only">Selecionar</span>
            </TableHead>
            <TableHead>Aluno</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {alunos.map((nome) => (
            <TableRow key={nome} data-state={selecionados.includes(nome) ? "selected" : undefined}>
              <TableCell>
                <Checkbox
                  aria-label={`Selecionar ${nome}`}
                  checked={selecionados.includes(nome)}
                  onCheckedChange={(valor) => alternar(nome, valor === true)}
                />
              </TableCell>
              <TableCell>{nome}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
