"use client";

import { FileUpload } from "@t2-educacao/midas";
import { UploadSimple } from "@t2-educacao/midas/icons";
import { useState } from "react";

export default function FileUploadBasico() {
  const [arquivos, setArquivos] = useState<File[]>([]);

  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <FileUpload multiple onFilesChange={setArquivos}>
        <UploadSimple className="size-6" aria-hidden="true" />
        <span className="font-medium text-foreground">Arraste arquivos ou clique para enviar</span>
        <span>Qualquer formato</span>
      </FileUpload>
      <ul className="text-sm text-muted-foreground">
        {arquivos.map((arquivo) => (
          <li key={arquivo.name}>{arquivo.name}</li>
        ))}
      </ul>
    </div>
  );
}
