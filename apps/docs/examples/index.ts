import type { ComponentType } from "react";
import ButtonArredondado from "./button/arredondado";
import ButtonCarregando from "./button/carregando";
import ButtonComAtalho from "./button/com-atalho";
import ButtonComIcone from "./button/com-icone";
import ButtonComoLink from "./button/como-link";
import ButtonSoIcone from "./button/so-icone";
import ButtonTamanhos from "./button/tamanhos";
import ButtonVariantes from "./button/variantes";
import ButtonGroupAninhado from "./button-group/aninhado";
import ButtonGroupBasico from "./button-group/basico";
import ButtonGroupComTexto from "./button-group/com-texto";
import ButtonGroupDividido from "./button-group/dividido";
import ButtonGroupVertical from "./button-group/vertical";
import KbdBasico from "./kbd/basico";
import KbdEmTexto from "./kbd/em-texto";
import SpinnerBasico from "./spinner/basico";
import SpinnerComTexto from "./spinner/com-texto";
import ToggleBasico from "./toggle/basico";
import ToggleOutline from "./toggle/outline";
import ToggleTamanhos from "./toggle/tamanhos";
import ToggleGroupEscolhaUnica from "./toggle-group/escolha-unica";
import ToggleGroupEspacamento from "./toggle-group/espacamento";
import ToggleGroupMultiplaEscolha from "./toggle-group/multipla-escolha";
import ToggleGroupVertical from "./toggle-group/vertical";
import TooltipComIcones from "./tooltip/com-icones";
import TooltipComTotal from "./tooltip/com-total";
import TooltipDados from "./tooltip/dados";
import TooltipIndicadores from "./tooltip/indicadores";
import TooltipSimples from "./tooltip/simples";

export interface Example {
  id: string;
  title: string;
  description?: string;
  Component: ComponentType;
}

export const examples: Record<string, Example[]> = {
  button: [
    { id: "variantes", title: "Variantes", Component: ButtonVariantes },
    { id: "tamanhos", title: "Tamanhos", Component: ButtonTamanhos },
    { id: "com-icone", title: "Com ícone", Component: ButtonComIcone },
    {
      id: "so-icone",
      title: "Só ícone",
      description: "Tamanhos icon-xs, icon-sm, icon e icon-lg. Sempre com aria-label.",
      Component: ButtonSoIcone,
    },
    { id: "arredondado", title: "Arredondado", Component: ButtonArredondado },
    {
      id: "carregando",
      title: "Carregando",
      description: "A prop loading mostra o Spinner e desabilita o botão.",
      Component: ButtonCarregando,
    },
    { id: "com-atalho", title: "Com atalho de teclado", Component: ButtonComAtalho },
    {
      id: "como-link",
      title: "Como link",
      description: "Com asChild, o Link do Next ganha o visual de botão.",
      Component: ButtonComoLink,
    },
  ],
  "button-group": [
    { id: "basico", title: "Básico", Component: ButtonGroupBasico },
    { id: "vertical", title: "Vertical", Component: ButtonGroupVertical },
    { id: "dividido", title: "Botão dividido", Component: ButtonGroupDividido },
    { id: "aninhado", title: "Grupos aninhados", Component: ButtonGroupAninhado },
    { id: "com-texto", title: "Com texto", Component: ButtonGroupComTexto },
  ],
  kbd: [
    { id: "basico", title: "Teclas e atalhos", Component: KbdBasico },
    { id: "em-texto", title: "Dentro de texto", Component: KbdEmTexto },
  ],
  spinner: [
    { id: "basico", title: "Tamanhos e cores", Component: SpinnerBasico },
    { id: "com-texto", title: "Com texto", Component: SpinnerComTexto },
  ],
  toggle: [
    { id: "basico", title: "Básico", Component: ToggleBasico },
    { id: "outline", title: "Outline e com texto", Component: ToggleOutline },
    { id: "tamanhos", title: "Tamanhos e desabilitado", Component: ToggleTamanhos },
  ],
  "toggle-group": [
    { id: "escolha-unica", title: "Escolha única", Component: ToggleGroupEscolhaUnica },
    { id: "multipla-escolha", title: "Múltipla escolha", Component: ToggleGroupMultiplaEscolha },
    { id: "espacamento", title: "Com espaçamento", Component: ToggleGroupEspacamento },
    { id: "vertical", title: "Vertical", Component: ToggleGroupVertical },
  ],
  tooltip: [
    { id: "simples", title: "Texto simples", Component: TooltipSimples },
    {
      id: "dados",
      title: "Dados",
      description: "Título e itens com indicador de cor, ideal para gráficos.",
      Component: TooltipDados,
    },
    { id: "indicadores", title: "Linha e sem indicador", Component: TooltipIndicadores },
    { id: "com-icones", title: "Com ícones", Component: TooltipComIcones },
    { id: "com-total", title: "Com total", Component: TooltipComTotal },
  ],
};
