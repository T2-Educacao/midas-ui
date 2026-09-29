# Como conectar o Figma (MCP) ao Claude Code

O Figma do Midas é a fonte da verdade dos tokens e componentes. Com o MCP do Figma, o agente lê variáveis, estilos e o código de referência de um frame direto do arquivo, sem copiar valores na mão.

## Requisitos

- Conta Figma com acesso ao arquivo do Midas.
- Para o servidor local (Desktop): Figma Desktop atualizado e assento **Dev** ou **Full** num plano pago (Professional, Organization ou Enterprise).

## Opção A: servidor remoto (mais simples)

No terminal, na pasta do projeto:

```bash
claude mcp add --transport http figma https://mcp.figma.com/mcp
```

Depois, dentro do Claude Code, rode `/mcp`, escolha `figma` e faça a autenticação no navegador.

## Opção B: servidor do Figma Desktop

1. Abra o Figma Desktop → menu **Figma** → **Preferences** → ative **Enable Dev Mode MCP Server** (ou, com um arquivo aberto em Dev Mode, no painel de inspeção, ative o MCP server).
2. Registre no Claude Code:

```bash
claude mcp add --transport http figma-desktop http://127.0.0.1:3845/mcp
```

Com o Desktop, o agente consegue ler **a seleção atual**: selecione o frame/componente no Figma e peça "gere o componente a partir da seleção".

> Os nomes de menu e a URL podem mudar entre versões do Figma. Confira a documentação oficial do Figma sobre o "Figma MCP server" se algo não bater.

## Como usar no Midas

1. **Tokens primeiro.** Peça: "leia as variáveis do arquivo do Midas (cores, tipografia, raios, espaçamento) nos modos claro e escuro e atualize `packages/midas/src/styles/theme.css` e `packages/midas/docs/tema.md`". Revise o diff: os **nomes** dos tokens são API pública.
2. **Um componente por vez.** Mande o link do nó do componente (clique direito → Copy link to selection) e peça para seguir `docs/guias/criar-componente.md`.
3. **Confira o resultado** no site de docs (`pnpm dev`) nos dois temas.

## Boas práticas

- O código que o Figma devolve é **referência**, não código final: o agente deve reescrever usando tokens do Midas, Radix e o padrão do `Button`.
- Se o Figma usa um valor solto (sem variável), pergunte à design antes de criar token novo.
