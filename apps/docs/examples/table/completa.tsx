"use client";

import {
  Avatar,
  AvatarFallback,
  Badge,
  Button,
  Table,
  TableBody,
  TableCell,
  TableGroupRow,
  TableHead,
  TableHeader,
  TablePagination,
  TableRow,
  TableToolbar,
} from "@t2-educacao/midas";
import { IconDownload } from "@t2-educacao/midas/icons";
import { useState } from "react";

const alunos = [
  { id: "a", nome: "Ana Souza", curso: "Renda fixa", status: "Ativo", saldo: "R$ 12.480,00" },
  { id: "b", nome: "Bruno Lima", curso: "Renda fixa", status: "Pendente", saldo: "R$ 3.200,00" },
  { id: "c", nome: "Carla Dias", curso: "Ações", status: "Ativo", saldo: "R$ 8.910,00" },
];

export default function TableCompleta() {
  const [pagina, setPagina] = useState(1);
  const [ordem, setOrdem] = useState<"asc" | "desc">("asc");
  const lista = ordem === "asc" ? alunos : [...alunos].reverse();

  return (
    <div className="w-full max-w-3xl overflow-hidden rounded-container border border-border-subtle bg-surface-default shadow-elevation-card">
      <TableToolbar title="Alunos" count={128}>
        <Button variant="outline" size="sm">
          <IconDownload />
          Exportar
        </Button>
        <Button size="sm">Novo aluno</Button>
      </TableToolbar>
      <Table surface="plain" striped>
        <TableHeader>
          <TableRow>
            <TableHead
              sortable
              sortDirection={ordem}
              onSort={() => setOrdem((atual) => (atual === "asc" ? "desc" : "asc"))}
            >
              Aluno
            </TableHead>
            <TableHead>Status</TableHead>
            <TableHead align="end">Saldo</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableGroupRow colSpan={3}>Matriculados</TableGroupRow>
          {lista.map((aluno) => (
            <TableRow key={aluno.id}>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar size="sm">
                    <AvatarFallback>{aluno.nome.slice(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="text-label-md">{aluno.nome}</span>
                    <span className="text-body-sm text-content-secondary">{aluno.curso}</span>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <Badge variant={aluno.status === "Ativo" ? "success" : "warning"}>
                  {aluno.status}
                </Badge>
              </TableCell>
              <TableCell numeric>{aluno.saldo}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        page={pagina}
        pageCount={13}
        onPageChange={setPagina}
        range={`${(pagina - 1) * 10 + 1}–${pagina * 10} de 128`}
      />
    </div>
  );
}
