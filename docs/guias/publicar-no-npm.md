# Como publicar no npm

Guia para quem nunca publicou um pacote. Resumo: **a primeira vez é manual** (para o pacote passar a existir no npm); **depois disso, é automático** pelo GitHub Actions.

## Conceitos em 1 minuto

- **npm registry**: o "servidor" onde os pacotes ficam. `pnpm add @t2-educacao/midas` baixa de lá.
- **Organização (escopo)**: o `@t2-educacao/` do nome. Só membros da org podem publicar pacotes nela. Já criada: `t2-educacao`.
- **Versão (semver)**: `MAJOR.MINOR.PATCH`. Patch = correção. Minor = coisa nova compatível. Major = quebra. Uma versão publicada **nunca** pode ser alterada, só substituída por outra mais nova.
- **Changeset**: um arquivinho em `.changeset/` dizendo "o que mudou e se é patch/minor/major". O Changesets junta todos, sobe a versão e escreve o `CHANGELOG.md`.
- **Provenance**: selo no npm provando que o pacote foi gerado pelo CI a partir deste repositório (não do computador de alguém).

## Parte 1: pré-requisitos (uma vez)

1. **Conta no npm** com **2FA ativado** (Account → Two-Factor Authentication).
2. Você é **owner** da org `t2-educacao` (npmjs.com/settings/t2-educacao/members). Adicione os outros devs como membros.
3. **Repositório no GitHub**: o repositório é `T2-Educacao/midas-ui` (https://github.com/T2-Educacao/midas-ui). Se o nome da org/repo no GitHub for outro, atualize `repository`, `homepage` e `bugs` em `packages/midas/package.json` e `gitConfig` em `apps/docs/lib/shared.ts`.

## Parte 2: primeira publicação (manual, uma vez)

O trusted publishing só pode ser configurado para um pacote que já existe. Então a versão inicial sobe do seu computador:

```bash
npm login                                   # abre o navegador para login
pnpm install
pnpm check                                  # tudo tem que passar
cd packages/midas
npm pack --dry-run                          # confere a lista de arquivos que VAI para o npm
npm publish --access public --provenance=false
```

- `--provenance=false` é necessário só aqui: provenance só funciona dentro do CI.
- `npm pack --dry-run` deve listar só `dist/`, `docs/`, `llms.txt`, `README.md`, `package.json` (e `LICENSE`). Se aparecer algo estranho (ex.: `.env`), **pare** e ajuste o campo `files` do `package.json`.
- A primeira versão publicada é a que está no `package.json` (`0.0.0`). Se preferir começar em `0.1.0`, rode `pnpm changeset` + `pnpm version-packages` antes.

Confira em https://www.npmjs.com/package/@t2-educacao/midas.

## Parte 3: automatizar (uma vez)

### Opção recomendada: trusted publishing (sem token)

1. Em https://www.npmjs.com/package/@t2-educacao/midas/access → **Trusted Publisher** → **GitHub Actions**.
2. Preencha: Organization/user `T2-Educacao`, Repository `midas-ui`, Workflow filename `release.yml`. Environment: deixe vazio.
3. Salve. Recomendado: na mesma página, em "Publishing access", marque **"Require two-factor authentication and disallow tokens"**. Assim, só o CI publica.

### Alternativa: token

1. npmjs.com → Access Tokens → **Generate New Token** → *Granular*, permissão *Read and write* só no pacote `@t2-educacao/midas`.
2. No GitHub: repositório → Settings → Secrets and variables → Actions → **New repository secret** `NPM_TOKEN`.
3. Em `.github/workflows/release.yml`, descomente a linha `NPM_TOKEN`.

## Parte 4: o fluxo do dia a dia

```bash
# 1. faça a mudança no pacote
pnpm changeset        # escolha o tipo (patch/minor/major) e escreva o resumo
git add . && git commit -m "feat: adiciona Input"
# 2. abra PR → CI roda lint, testes, build → merge na main
```

Na `main`, o workflow **Release**:

1. Se existem changesets pendentes: abre (ou atualiza) um PR **"chore: versiona pacotes"** com a nova versão e o CHANGELOG.
2. Quando esse PR é mergeado: publica a nova versão no npm (com provenance) e cria a tag no GitHub.

Ou seja: **publicar = fazer merge do PR de versão.**

## Parte 5: nos projetos

```bash
pnpm add @t2-educacao/midas@latest    # atualizar
pnpm outdated @t2-educacao/midas      # ver se há versão nova
```

Enquanto estiver em `0.x`, uma versão minor pode quebrar coisas: leia o CHANGELOG antes de atualizar.

## Deu errado?

| Erro | Causa | Solução |
|---|---|---|
| `E403 You do not have permission` | Não é membro da org, ou 2FA pendente | Veja Parte 1 |
| `E403 cannot publish over previously published version` | Versão já existe | Crie um changeset e gere nova versão |
| `E404` ao publicar com escopo | Faltou `--access public` na 1ª vez | Rode com `--access public` |
| `provenance` falha localmente | Provenance só no CI | Use `--provenance=false` na publicação manual |
| CI: `ENEEDAUTH` | Trusted publisher não configurado ou nome de workflow diferente | Confira Parte 3 (nome exato `release.yml`) |
| Publicou algo errado | | Nas primeiras 72h: `npm unpublish @t2-educacao/midas@X.Y.Z`. Depois: `npm deprecate @t2-educacao/midas@X.Y.Z "motivo"` e publique uma correção |
