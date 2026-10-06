import { Tabs, TabsContent, TabsList, TabsTrigger } from "@t2-educacao/midas";

export default function TabsVertical() {
  return (
    <Tabs defaultValue="perfil" orientation="vertical" className="w-full max-w-md gap-4">
      <TabsList variant="line">
        <TabsTrigger value="perfil">Perfil</TabsTrigger>
        <TabsTrigger value="seguranca">Segurança</TabsTrigger>
        <TabsTrigger value="notificacoes">Notificações</TabsTrigger>
      </TabsList>
      <TabsContent value="perfil">Dados do perfil.</TabsContent>
      <TabsContent value="seguranca">Opções de segurança.</TabsContent>
      <TabsContent value="notificacoes">Preferências de aviso.</TabsContent>
    </Tabs>
  );
}
