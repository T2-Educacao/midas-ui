"use client";

import { Button } from "@t2-educacao/midas";
import { Check, Copy } from "@t2-educacao/midas/icons";
import { useState } from "react";

export function InstallCommand({ command }: { command: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <div className="flex items-center gap-2 rounded-lg border border-border bg-card py-1 pe-1 ps-4 font-mono text-sm">
      <span className="text-muted-foreground select-none">$</span>
      <span>{command}</span>
      <Button
        variant="ghost"
        size="icon-sm"
        onClick={copy}
        aria-label={copied ? "Copiado" : "Copiar comando"}
      >
        {copied ? <Check className="text-success" /> : <Copy />}
      </Button>
    </div>
  );
}
