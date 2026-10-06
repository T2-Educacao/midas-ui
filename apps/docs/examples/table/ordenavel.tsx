"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@t2-educacao/midas";
import { useState } from "react";

type Coluna = "nome" | "nota";

const alunos = [
  { nome: "Ana Souza", nota: 9.5 },
  { nome: "Bruno Lima", nota: 7.2 },
  { nome: "Carla Dias", nota: 8.4 },
];

export default function TableOrdenavel() {
  const [coluna, setColuna] = useState<Coluna>("nome");
  const [direcao, setDirecao] = useState<"asc" | "desc">("asc");

  const ordenar = (alvo: Coluna) => {
    if (alvo === coluna) {
      setDirecao(direcao === "asc" ? "desc" : "asc");
      return;
    }
    setColuna(alvo);
    setDirecao("asc");
  };

  const ordenados = [...alunos].sort((a, b) => {
    const resultado = coluna === "nome" ? a.nome.localeCompare(b.nome) : a.nota - b.nota;
    return direcao === "asc" ? resultado : -resultado;
  });

  return (
    <div className="w-full max-w-md">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead
              sortable
              sortDirection={coluna === "nome" ? direcao : false}
              onSort={() => ordenar("nome")}
            >
              Nome
            </TableHead>
            <TableHead
              sortable
              sortDirection={coluna === "nota" ? direcao : false}
              onSort={() => ordenar("nota")}
            >
              Nota
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {ordenados.map((aluno) => (
            <TableRow key={aluno.nome}>
              <TableCell>{aluno.nome}</TableCell>
              <TableCell>{aluno.nota.toFixed(1)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
