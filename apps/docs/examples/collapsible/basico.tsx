"use client";

import { Button, Collapsible, CollapsibleContent, CollapsibleTrigger } from "@t2-educacao/midas";
import * as React from "react";

export default function CollapsibleBasico() {
  const [aberto, setAberto] = React.useState(false);

  return (
    <Collapsible open={aberto} onOpenChange={setAberto} className="w-full max-w-md">
      <CollapsibleTrigger asChild>
        <Button variant="outline">{aberto ? "Ver menos" : "Ver mais"}</Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="pt-3 text-sm text-muted-foreground">
        Carga horária de 40 horas, com certificado de conclusão e acesso por 12 meses.
      </CollapsibleContent>
    </Collapsible>
  );
}
