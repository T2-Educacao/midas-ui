# Changesets

Cada arquivo `.md` nesta pasta descreve uma mudança pendente no `@t2-educacao/midas`. Crie com:

```bash
pnpm changeset
```

- **patch**: correção sem mudar a API (ex.: ajuste de cor, bug de foco)
- **minor**: coisa nova compatível (novo componente, nova prop/variante)
- **major**: quebra (renomear/remover prop, variante ou token)

O texto que você escrever vai para o `CHANGELOG.md`: escreva para quem USA o pacote. Guia completo: [docs/guias/publicar-no-npm.md](../docs/guias/publicar-no-npm.md).
