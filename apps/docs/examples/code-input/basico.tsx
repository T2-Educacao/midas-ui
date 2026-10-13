"use client";

import { CodeInput, FieldDescription } from "@t2-educacao/midas";
import * as React from "react";

export default function CodeInputBasico() {
  const [codigo, setCodigo] = React.useState("");

  return (
    <div className="grid gap-3">
      <CodeInput
        aria-label="Código de verificação"
        length={6}
        value={codigo}
        onValueChange={setCodigo}
      />
      <FieldDescription>Enviamos um código para seu e-mail.</FieldDescription>
    </div>
  );
}
