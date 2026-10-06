import { Tabs, TabsContent, TabsList, TabsTrigger } from "@t2-educacao/midas";

export default function TabsBasico() {
  return (
    <Tabs defaultValue="conta" className="w-full max-w-md">
      <TabsList>
        <TabsTrigger value="conta">Conta</TabsTrigger>
        <TabsTrigger value="senha">Senha</TabsTrigger>
        <TabsTrigger value="plano" disabled>
          Plano
        </TabsTrigger>
      </TabsList>
      <TabsContent value="conta">Altere os dados da sua conta.</TabsContent>
      <TabsContent value="senha">Troque a sua senha de acesso.</TabsContent>
      <TabsContent value="plano">Detalhes do plano.</TabsContent>
    </Tabs>
  );
}
