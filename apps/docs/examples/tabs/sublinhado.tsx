import { Tabs, TabsContent, TabsList, TabsTrigger } from "@t2-educacao/midas";

export default function TabsSublinhado() {
  return (
    <Tabs defaultValue="visao-geral" className="w-full max-w-md">
      <TabsList variant="line">
        <TabsTrigger value="visao-geral">Visão geral</TabsTrigger>
        <TabsTrigger value="aulas">Aulas</TabsTrigger>
        <TabsTrigger value="avaliacoes">Avaliações</TabsTrigger>
      </TabsList>
      <TabsContent value="visao-geral">Resumo do curso.</TabsContent>
      <TabsContent value="aulas">Lista de aulas.</TabsContent>
      <TabsContent value="avaliacoes">Notas e comentários.</TabsContent>
    </Tabs>
  );
}
