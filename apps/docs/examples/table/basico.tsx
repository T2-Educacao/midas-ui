import {
  Badge,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@t2-educacao/midas";

const alunos = [
  { nome: "Ana Souza", turma: "Matemática 1", situacao: "Ativo" },
  { nome: "Bruno Lima", turma: "Português 2", situacao: "Ativo" },
  { nome: "Carla Dias", turma: "Matemática 1", situacao: "Trancado" },
];

export default function TableBasico() {
  return (
    <div className="w-full max-w-2xl">
      <Table>
        <TableCaption>Alunos matriculados</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Nome</TableHead>
            <TableHead>Turma</TableHead>
            <TableHead>Situação</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {alunos.map((aluno) => (
            <TableRow key={aluno.nome}>
              <TableCell className="font-medium">{aluno.nome}</TableCell>
              <TableCell>{aluno.turma}</TableCell>
              <TableCell>
                <Badge variant={aluno.situacao === "Ativo" ? "default" : "secondary"}>
                  {aluno.situacao}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
