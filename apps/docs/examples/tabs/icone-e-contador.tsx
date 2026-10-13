import { Tabs, TabsList, TabsTrigger } from "@t2-educacao/midas";
import { IconBook, IconCertificate, IconChartBar } from "@t2-educacao/midas/icons";

export default function TabsIconeEContador() {
  return (
    <div className="flex flex-col gap-6">
      <Tabs defaultValue="aulas">
        <TabsList variant="underline" aria-label="Seções do curso">
          <TabsTrigger value="visao-geral" icon={<IconChartBar />}>
            Visão geral
          </TabsTrigger>
          <TabsTrigger value="aulas" icon={<IconBook />} count={24}>
            Aulas
          </TabsTrigger>
          <TabsTrigger value="certificados" icon={<IconCertificate />} count={3}>
            Certificados
          </TabsTrigger>
        </TabsList>
      </Tabs>
      <Tabs defaultValue="aulas">
        <TabsList variant="segmented" size="sm" tone="neutral" aria-label="Seções compactas">
          <TabsTrigger value="visao-geral">Visão geral</TabsTrigger>
          <TabsTrigger value="aulas" count={24}>
            Aulas
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}
