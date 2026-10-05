# Como publicar no npm

A publicação é **automática**, pelo GitHub Actions. Ninguém precisa rodar `npm publish` no próprio computador.

## Conceitos em 1 minuto

- **npm registry**: o "servidor" onde os pacotes ficam. `npm install @t2-educacao/midas` baixa de lá.
- **Organização (escopo)**: o `@t2-educacao/` do nome. Só a org publica pacotes nela.
- **Versão (semver)**: `MAJOR.MINOR.PATCH`. Patch = correção. Minor = coisa nova compatível. Major = quebra. Uma versão publicada **nunca** pode ser alterada, só substituída por outra mais nova.
- **Changeset**: um arquivinho em `.changeset/` dizendo "o que mudou e se é patch/minor/major". O Changesets junta todos, sobe a versão e escreve o `CHANGELOG.md`.
- **Trusted publishing**: o npm confia no workflow `release.yml` deste repositório e aceita a publicação sem token. A página do pacote mostra de qual commit cada versão saiu.

## Como lançar uma versão

1. Em cada mudança que afeta quem usa o pacote, registre um changeset e commite junto:

```bash
pnpm changeset
```

2. Quando isso chega na `main`, o workflow **Release** abre (ou atualiza) um PR chamado **"chore: versiona @t2-educacao/midas"**, com a versão nova e o `CHANGELOG.md`.
3. Para lançar, **faça o merge desse PR**. O workflow roda o `pnpm check`, publica no npm e cria a tag da versão.
4. O site https://midas.t2.com.br é atualizado pela Vercel a cada push na `main`.

Sem changeset, nada é publicado: mudança só nas docs do site ou no repositório não gera versão.

## O que cada workflow faz

| Workflow | Quando roda | O quê |
|---|---|---|
| `ci.yml` | Todo PR e push na `main` | `pnpm check` (lint, build, typecheck, testes, validação do pacote) |
| `release.yml` | Push na `main` | Com changesets pendentes: abre o PR de versão. Sem changesets e com versão nova no `package.json`: publica no npm e cria a tag |

## Configuração (uma vez)

1. **npm**: em npmjs.com/package/@t2-educacao/midas → **Settings** → **Trusted Publisher** → **GitHub Actions**:
   - Organization or user: `T2-Educacao`
   - Repository: `midas-ui`
   - Workflow filename: `release.yml`
   - Environment: deixe vazio
2. **GitHub**: em github.com/T2-Educacao/midas-ui → **Settings** → **Actions** → **General** → **Workflow permissions**, marque **Allow GitHub Actions to create and approve pull requests**. Se a opção estiver bloqueada, libere antes nas configurações da org `T2-Educacao`.
3. Opcional: no npm, em **Settings** do pacote → **Publishing access**, escolha **Require two-factor authentication and disallow tokens**. O trusted publishing continua funcionando e ninguém consegue publicar com token vazado.

## Nos projetos

Para ver se há versão nova:

```bash
npm outdated @t2-educacao/midas
```

Para atualizar:

```bash
npm install @t2-educacao/midas@latest
```

Enquanto estiver em `0.x`, uma versão minor pode quebrar coisas: leia o CHANGELOG antes de atualizar.

## Deu errado?

| Erro | Causa | Solução |
|---|---|---|
| `E404` ou `E403` no passo "Publica no npm" | Trusted Publisher não configurado ou com nome errado | Confira o passo 1 da configuração (nome do arquivo `release.yml`, org e repositório) |
| "GitHub Actions is not permitted to create or approve pull requests" | Permissão do passo 2 desligada | Veja o passo 2 da configuração |
| Workflow verde, mas nada publicado | Ainda há changesets pendentes, ou a versão já existe no npm | Faça o merge do PR de versão |
| Publicou algo errado | | Nas primeiras 72h: `npm unpublish @t2-educacao/midas@X.Y.Z`. Depois: `npm deprecate @t2-educacao/midas@X.Y.Z "motivo"` e lance uma correção |

## Publicar manualmente (emergência)

Só se o GitHub Actions estiver fora do ar. Precisa ser membro da org `t2-educacao` no npm, com 2FA:

```bash
npm login
pnpm release
git push --follow-tags
```
