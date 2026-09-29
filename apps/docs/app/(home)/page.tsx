import { Button } from "@t2-educacao/midas";
import { ArrowRight, GithubLogo } from "@t2-educacao/midas/icons";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6 px-4 py-24 text-center">
      <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
        Design system da T2 Educação
      </p>
      <h1 className="text-5xl font-semibold tracking-tight">Midas</h1>
      <p className="max-w-xl text-lg text-muted-foreground">
        Componentes React, tokens e ícones num único pacote. Instala uma vez e tem tudo.
      </p>
      <pre className="rounded-md bg-muted px-4 py-2 font-mono text-sm">
        pnpm add @t2-educacao/midas
      </pre>
      <div className="flex flex-wrap justify-center gap-3">
        <Button asChild size="lg">
          <Link href="/docs">
            Ler a documentação <ArrowRight />
          </Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <a href="https://github.com/T2-Educacao/midas-ui">
            <GithubLogo /> GitHub
          </a>
        </Button>
      </div>
    </main>
  );
}
