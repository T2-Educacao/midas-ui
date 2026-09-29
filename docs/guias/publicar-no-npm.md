# Como publicar no npm

Guia para quem nunca publicou um pacote. A publicação é **manual**, feita do seu computador, por quem é membro da org `t2-educacao` no npm.

## Conceitos em 1 minuto

- **npm registry**: o "servidor" onde os pacotes ficam. `pnpm add @t2-educacao/midas` baixa de lá.
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

```bash
pnpm install
pnpm check                                  # tudo tem que passar
cd packages/midas
npm pack --dry-run                          # confere a lista de arquivos que VAI para o npm
npm publish --access public
```

- `npm pack --dry-run` deve listar só `dist/`, `docs/`, `llms.txt`, `README.md`, `LICENSE` e `package.json`. Se aparecer algo estranho (ex.: `.env`), **pare** e ajuste o campo `files` do `package.json`.
- A primeira versão publicada é a que está no `package.json` (`0.0.0`). Se preferir começar em `0.1.0`, faça a Parte 3 antes (com um changeset `minor`).

Confira em https://www.npmjs.com/package/@t2-educacao/midas.

## Parte 3: publicar uma versão nova

```bash
# 1. durante o trabalho, a cada mudança que afeta quem usa:
pnpm changeset          # escolha o tipo (patch/minor/major) e escreva o resumo

# 2. na hora de lançar (na main atualizada):
pnpm version-packages   # sobe a versão e escreve o CHANGELOG.md
pnpm check              # tudo tem que passar
git add . && git commit -m "chore: versiona @t2-educacao/midas"
pnpm release            # build + publica no npm (pede o código 2FA)
git push --follow-tags
```

`pnpm release` roda `changeset publish`, que publica só se a versão do `package.json` ainda não existe no npm e cria a tag git da versão.

## Parte 4: nos projetos

```bash
pnpm add @t2-educacao/midas@latest    # atualizar
pnpm outdated @t2-educacao/midas      # ver se há versão nova
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
