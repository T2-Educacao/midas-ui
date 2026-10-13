import { Tabs, TabsList, TabsTrigger } from "@t2-educacao/midas";

const tipos = ["underline", "pill", "segmented", "plain"] as const;

export default function TabsTipos() {
  return (
    <div className="flex flex-col gap-6">
      {tipos.map((tipo) => (
        <Tabs key={tipo} defaultValue="visao-geral">
          <TabsList variant={tipo} aria-label={`Seções (${tipo})`}>
            <TabsTrigger value="visao-geral">Visão geral</TabsTrigger>
            <TabsTrigger value="aulas">Aulas</TabsTrigger>
            <TabsTrigger value="simulados">Simulados</TabsTrigger>
            <TabsTrigger value="certificados" disabled>
              Certificados
            </TabsTrigger>
          </TabsList>
        </Tabs>
      ))}
    </div>
  );
}
