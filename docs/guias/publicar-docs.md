# Como publicar o site de docs na Vercel

O site (`apps/docs`) é um Next.js comum. A única diferença é que ele usa o pacote `@t2-educacao/midas` do próprio monorepo, então o pacote precisa ser compilado antes do site. O `apps/docs/vercel.json` já faz isso.

## Configuração (uma vez)

1. Na Vercel: **Add New → Project → Import** o repositório `T2-Educacao/midas-ui`.
2. **Root Directory**: `apps/docs`.
3. **Framework Preset**: Next.js (detectado sozinho).
4. Deixe Build Command e Install Command como estão: o `vercel.json` sobrescreve.
5. **Deploy**.

Não precisa de variável de ambiente.

## Domínio

1. No projeto da Vercel: **Settings → Domains → Add** e digite o subdomínio (ex.: `midas.t2.com.br`).
2. No DNS do `t2.com.br`, crie o registro que a Vercel mostrar (normalmente `CNAME midas → cname.vercel-dns.com`).
3. O HTTPS é emitido sozinho em alguns minutos.

## Depois disso

Todo push na `main` publica o site de novo. Pull requests ganham uma URL de pré-visualização.
