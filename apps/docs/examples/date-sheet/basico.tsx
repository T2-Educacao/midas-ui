"use client";

import { Button, DateSheet } from "@t2-educacao/midas";
import { useState } from "react";

export default function DateSheetBasico() {
  const [data, setData] = useState<Date | undefined>();
  return (
    <div className="flex flex-wrap gap-2">
      <DateSheet
        value={data}
        onValueChange={setData}
        trigger={
          <Button variant="outline">
            {data ? data.toLocaleDateString("pt-BR") : "Calendário"}
          </Button>
        }
      />
      <DateSheet
        type="wheel"
        value={data}
        onValueChange={setData}
        trigger={<Button variant="outline">Roleta</Button>}
      />
    </div>
  );
}
