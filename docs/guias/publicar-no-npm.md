# Como publicar no npm

Guia para quem nunca publicou um pacote. A publicação é **manual**, feita do seu computador, por quem é membro da org `t2-educacao` no npm.

## Conceitos em 1 minuto

- **npm registry**: o "servidor" onde os pacotes ficam. `npm install @t2-educacao/midas` baixa de lá.
- **Organização (escopo)**: o `@t2-educacao/` do nome. Só membros da org podem publicar pacotes nela. Já criada: `t2-educacao`.
- **Versão (semver)**: `MAJOR.MINOR.PATCH`. Patch = correção. Minor = coisa nova compatível. Major = quebra. Uma versão publicada **nunca** pode ser alterada, só substituída por outra mais nova.
- **Changeset**: um arquivinho em `.changeset/` dizendo "o que mudou e se é patch/minor/major". O Changesets junta todos, sobe a versão e escreve o `CHANGELOG.md`.

## Parte 1: pré-requisitos (uma vez)

1. **Conta no npm** com **2FA ativado** (Account → Two-Factor Authentication).
2. Você é **owner** da org `t2-educacao` (npmjs.com/settings/t2-educacao/members). Adicione os outros devs como membros.
3. Login no terminal:

```bash
npm login
```

## Parte 2: primeira publicação

1. Instale as dependências e rode todas as verificações (tem que passar tudo):

```bash
pnpm install
pnpm check
```

2. Entre na pasta do pacote e confira a lista de arquivos que vai para o npm:

```bash
cd packages/midas
npm pack --dry-run
```

3. Publique:

```bash
npm publish --access public
```

- `npm pack --dry-run` deve listar só `dist/`, `docs/`, `llms.txt`, `README.md`, `LICENSE` e `package.json`. Se aparecer algo estranho (ex.: `.env`), **pare** e ajuste o campo `files` do `package.json`.
- A primeira versão publicada é a que está no `package.json` (`0.0.0`). Se preferir começar em `0.1.0`, faça a Parte 3 antes (com um changeset `minor`).

Confira em https://www.npmjs.com/package/@t2-educacao/midas.

## Parte 3: publicar uma versão nova

1. Durante o trabalho, a cada mudança que afeta quem usa, registre um changeset (escolha patch/minor/major e escreva o resumo):

```bash
pnpm changeset
```

2. Na hora de lançar, com a `main` atualizada, suba a versão e gere o `CHANGELOG.md`:

```bash
pnpm version-packages
pnpm check
git add . && git commit -m "chore: versiona @t2-educacao/midas"
```

3. Faça o build e publique (o npm vai pedir o código 2FA), depois envie a tag:

```bash
pnpm release
git push --follow-tags
```

`pnpm release` roda `changeset publish`, que publica só se a versão do `package.json` ainda não existe no npm e cria a tag git da versão.

## Parte 4: nos projetos

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
| `ENEEDAUTH` | Não está logado | `npm login` |
| `E403 You do not have permission` | Não é membro da org, ou 2FA pendente | Veja Parte 1 |
| `E403 cannot publish over previously published version` | Versão já existe | Crie um changeset e rode `pnpm version-packages` |
| `E402 Payment Required` | Faltou `--access public` na 1ª vez | Rode com `--access public` |
| Publicou algo errado | | Nas primeiras 72h: `npm unpublish @t2-educacao/midas@X.Y.Z`. Depois: `npm deprecate @t2-educacao/midas@X.Y.Z "motivo"` e publique uma correção |
