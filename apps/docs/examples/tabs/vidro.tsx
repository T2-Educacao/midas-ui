import { Tabs, TabsList, TabsTrigger } from "@t2-educacao/midas";

export default function TabsVidro() {
  return (
    <div className="flex h-40 items-center justify-center rounded-container bg-linear-to-br from-action-accent-bg to-action-primary-bg">
      <Tabs defaultValue="aulas">
        <TabsList variant="pill" surface="glass" aria-label="Seções sobre imagem">
          <TabsTrigger value="visao-geral">Visão geral</TabsTrigger>
          <TabsTrigger value="aulas">Aulas</TabsTrigger>
          <TabsTrigger value="materiais">Materiais</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}
