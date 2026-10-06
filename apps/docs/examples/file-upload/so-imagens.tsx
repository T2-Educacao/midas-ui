"use client";

import { FileUpload } from "@t2-educacao/midas";
import { Image } from "@t2-educacao/midas/icons";
import { useState } from "react";

const limite = 2 * 1024 * 1024;

export default function FileUploadSoImagens() {
  const [erro, setErro] = useState<string | null>(null);
  const [nome, setNome] = useState<string | null>(null);

  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <FileUpload
        accept="image/*"
        maxSize={limite}
        invalid={erro !== null}
        onFilesChange={([arquivo]) => {
          setErro(null);
          setNome(arquivo.name);
        }}
        onReject={([{ reason }]) =>
          setErro(reason === "size" ? "A imagem passa de 2 MB." : "Envie apenas imagens.")
        }
      >
        <Image className="size-6" aria-hidden="true" />
        <span className="font-medium text-foreground">Escolha uma imagem</span>
        <span>PNG ou JPG, até 2 MB</span>
      </FileUpload>
      {erro ? <p className="text-sm text-destructive">{erro}</p> : null}
      {nome ? <p className="text-sm text-muted-foreground">Selecionado: {nome}</p> : null}
    </div>
  );
}
