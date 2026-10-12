# Toast

(Figma page 6430:9)

### Variantes: Toast
- Show close#6430:0 (BOOLEAN) padrão: true
- Status (VARIANT: Neutral | Info | Success | Warning | Error | Loading) padrão: Neutral
- Style (VARIANT: Subtle | Surface | Inverse | Glass) padrão: Subtle
- Content (VARIANT: Simple | Description | Action | Progress) padrão: Simple

### Variantes: Toast Stack
- State (VARIANT: Collapsed | Expanded) padrão: Collapsed
- Direction (VARIANT: Up | Down) padrão: Up

### Variantes: Toast Placement
- Placement (VARIANT: Top Left | Top Center | Top Right | Bottom Left | Bottom Center | Bottom Right | Top | Bottom) padrão: Top Left
- Device (VARIANT: Desktop | Mobile) padrão: Desktop

## Toast · Documentação

FEEDBACK
Toast
Mensagem curta e temporária que confirma uma ação ou avisa sobre algo que acabou de acontecer, sem interromper o estudo. Some sozinho em 4–6 s (ou fica até a ação terminar, no caso de Loading).
Qual componente usar
Já temos um repertório de feedback no Midas. Antes de criar algo novo, escolha pelo tempo de vida e pela urgência da mensagem.
Componente
Quando usar
Onde está
Toast
Confirmação ou aviso temporário depois de uma ação (salvou, enviou, falhou).
Página Toast
Banner
Aviso persistente sobre a página ou a conta (offline, manutenção, renovação).
Página Banner
Notification Center
Histórico de atividades: menções, aulas novas, prazos, conquistas.
Página Notification
Button Feedback
Feedback colado ao botão que disparou a ação (Salvando… / Salvo).
Página Buttons (reuso)
Widget Alert
Alertas no dashboard que pedem atenção, com mais contexto.
Página Widgets (reuso)
Modal Status / Error
Quando a pessoa precisa parar e decidir algo (falha crítica, sucesso grande).
Página Modal (reuso)
Status
Neutral, Info, Success, Warning, Error e Loading. Cores de status sempre suaves; o ícone carrega o significado junto com a cor.
Rascunho salvo
Suas anotações ficam disponíveis em todos os dispositivos.
Neutral
Nova aula disponível
Come-cotas na prática já está liberada na sua trilha.
Info
Simulado enviado
Seu resultado fica pronto em alguns segundos.
Success
Sua sessão expira em 5 min
Salve suas respostas para não perder o progresso.
Warning
Pagamento não processado
O cartão foi recusado. Atualize a forma de pagamento.
Error
Enviando arquivo…
apostila-cpa20.pdf · 68%
Loading
Estilos
Subtle (fundo na cor do status, para mensagens mais visíveis), Surface (padrão), Inverse (escuro, contrasta com páginas claras) e Glass (sobre Hero e mídia).
Simulado enviado
Seu resultado fica pronto em alguns segundos.
Subtle
Simulado enviado
Seu resultado fica pronto em alguns segundos.
Surface
Simulado enviado
Seu resultado fica pronto em alguns segundos.
Inverse
Nova aula disponível
Come-cotas na prática já está liberada na sua trilha.
Assistir
Glass · sobre mídia
Simulado enviado
Seu resultado fica pronto em alguns segundos.
Glass · com tempo
Conteúdo
Simple (só título), Description, Action (uma ação curta, ex.: Desfazer, Tentar de novo) e Progress (barra mostra o tempo até sumir; pausa no hover).
Pagamento não processado
Simple
Pagamento não processado
O cartão foi recusado. Atualize a forma de pagamento.
Description
Pagamento não processado
O cartão foi recusado. Atualize a forma de pagamento.
Tentar de novo
Action
Pagamento não processado
O cartão foi recusado. Atualize a forma de pagamento.
Progress
Pilha
No máximo 3 visíveis. Recolhida: o mais recente na frente e os outros escalonados atrás; no hover a pilha se abre.
Enviando arquivo…
Nova aula disponível
Simulado enviado
Seu resultado fica pronto em alguns segundos.
Collapsed · Up
Enviando arquivo…
apostila-cpa20.pdf · 68%
Nova aula disponível
Come-cotas na prática já está liberada na sua trilha.
Assistir
Simulado enviado
Seu resultado fica pronto em alguns segundos.
Expanded · Up
Enviando arquivo…
Nova aula disponível
Simulado enviado
Seu resultado fica pronto em alguns segundos.
Collapsed · Down
Simulado enviado
Seu resultado fica pronto em alguns segundos.
Nova aula disponível
Come-cotas na prática já está liberada na sua trilha.
Assistir
Enviando arquivo…
apostila-cpa20.pdf · 68%
Expanded · Down
Posição
Desktop: 6 posições, a 24px das bordas (no topo, abaixo do header). Mobile: topo ou base, com 16px de margem e largura total.
Enviando arquivo…
Nova aula disponível
Simulado enviado
Seu resultado fica pronto em alguns segundos.
Top Left · Desktop
Enviando arquivo…
Nova aula disponível
Simulado enviado
Seu resultado fica pronto em alguns segundos.
Top Center · Desktop
Enviando arquivo…
Nova aula disponível
Simulado enviado
Seu resultado fica pronto em alguns segundos.
Top Right · Desktop
Enviando arquivo…
Nova aula disponível
Simulado enviado
Seu resultado fica pronto em alguns segundos.
Bottom Left · Desktop
Enviando arquivo…
Nova aula disponível
Simulado enviado
Seu resultado fica pronto em alguns segundos.
Bottom Center · Desktop
Enviando arquivo…
Nova aula disponível
Simulado enviado
Seu resultado fica pronto em alguns segundos.
Bottom Right · Desktop
Simulado enviado
Seu resultado fica pronto em alguns segundos.
Top · Mobile
Simulado enviado
Seu resultado fica pronto em alguns segundos.
Bottom · Mobile
Recomendações
Recomendado no desktop: Bottom Right para confirmações (não cobre o header nem a navegação) e Top Center para erros que bloqueiam.
Recomendado no mobile: Bottom, acima da Bottom Navigation; use Top só quando houver teclado aberto.
Uma ação no máximo. Se precisa de mais de uma decisão, use Modal.
Mensagens de erro ficam até a pessoa fechar; sucesso e info somem em 4–6 s.
Não use toast para conteúdo importante que a pessoa precisa encontrar depois: use a Notification Center.

