"use client";

import { FileItem, FileUpload } from "@t2-educacao/midas";
import { IconCloudUpload } from "@t2-educacao/midas/icons";
import * as React from "react";

export default function FileUploadFila() {
  const [arquivos, setArquivos] = React.useState<File[]>([]);

  return (
    <div className="grid w-full max-w-md gap-3">
      <FileUpload
        multiple
        accept=".pdf,image/*"
        maxSize={10 * 1024 * 1024}
        onFilesChange={(novos) => setArquivos((atuais) => [...atuais, ...novos])}
      >
        <IconCloudUpload aria-hidden="true" className="size-icon-xl text-content-secondary" />
        <span className="text-label-lg text-content-primary">
          Arraste arquivos ou clique para enviar
        </span>
        <span>PDF, JPG ou PNG · até 10 MB</span>
      </FileUpload>
      <FileItem
        name="extrato-maio.pdf"
        state="uploading"
        progress={50}
        meta="1,2 MB de 2,4 MB · 50%"
      />
      <FileItem name="recibo.pdf" state="done" meta="2,4 MB · Enviado" />
      <FileItem
        name="foto.png"
        type="image"
        state="error"
        meta="Falha no envio · arquivo maior que 10 MB"
      />
      {arquivos.map((arquivo) => (
        <FileItem
          key={arquivo.name}
          name={arquivo.name}
          state="done"
          meta={`${Math.ceil(arquivo.size / 1024)} KB`}
          onRemove={() => setArquivos((atuais) => atuais.filter((a) => a !== arquivo))}
        />
      ))}
    </div>
  );
}
