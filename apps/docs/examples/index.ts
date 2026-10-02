import type { ComponentType } from "react";
import BadgeVariantes from "./badge/variantes";
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
import ComboboxBasico from "./combobox/basico";
import ComboboxComIcone from "./combobox/com-icone";
import ComboboxGrupos from "./combobox/grupos";
import ComboboxInvalidoEDesabilitado from "./combobox/invalido-e-desabilitado";
import ComboboxItensComDescricao from "./combobox/itens-com-descricao";
import ComboboxLimpar from "./combobox/limpar";
import ComboboxMultiplo from "./combobox/multiplo";
import ComboboxPopup from "./combobox/popup";
import DropdownMenuBasico from "./dropdown-menu/basico";
import DropdownMenuCheckboxes from "./dropdown-menu/checkboxes";
import DropdownMenuDestrutivo from "./dropdown-menu/destrutivo";
import DropdownMenuIconesEAtalhos from "./dropdown-menu/icones-e-atalhos";
import DropdownMenuRadio from "./dropdown-menu/radio";
import DropdownMenuSubmenu from "./dropdown-menu/submenu";
import FieldBasico from "./field/basico";
import FieldComBadge from "./field/com-badge";
import FieldFormulario from "./field/formulario";
import FieldGrade from "./field/grade";
import FieldHorizontal from "./field/horizontal";
import FieldObrigatorio from "./field/obrigatorio";
import InputArquivo from "./input/arquivo";
import InputBasico from "./input/basico";
import InputComBotao from "./input/com-botao";
import InputDesabilitado from "./input/desabilitado";
import InputInvalido from "./input/invalido";
import InputGroupBusca from "./input-group/busca";
import InputGroupComBotao from "./input-group/com-botao";
import InputGroupComButtonGroup from "./input-group/com-button-group";
import InputGroupPrefixo from "./input-group/prefixo";
import InputGroupTextarea from "./input-group/textarea";
import KbdBasico from "./kbd/basico";
import KbdEmTexto from "./kbd/em-texto";
import PopoverBasico from "./popover/basico";
import SpinnerBasico from "./spinner/basico";
import SpinnerComTexto from "./spinner/com-texto";
import ToastComDescricaoEAcao from "./toast/com-descricao-e-acao";
import ToastPromise from "./toast/promise";
import ToastTipos from "./toast/tipos";
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
  badge: [{ id: "variantes", title: "Variantes", Component: BadgeVariantes }],
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
  combobox: [
    {
      id: "basico",
      title: "Básico",
      description: "Digite para filtrar, use as setas e Enter para selecionar.",
      Component: ComboboxBasico,
    },
    {
      id: "multiplo",
      title: "Múltipla escolha",
      description: "Backspace com a busca vazia remove o último chip.",
      Component: ComboboxMultiplo,
    },
    { id: "limpar", title: "Com botão de limpar", Component: ComboboxLimpar },
    { id: "grupos", title: "Grupos", Component: ComboboxGrupos },
    {
      id: "itens-com-descricao",
      title: "Itens com descrição",
      Component: ComboboxItensComDescricao,
    },
    {
      id: "invalido-e-desabilitado",
      title: "Inválido e desabilitado",
      Component: ComboboxInvalidoEDesabilitado,
    },
    {
      id: "popup",
      title: "Popup com busca",
      description: 'Com trigger="button", a busca fica dentro da lista.',
      Component: ComboboxPopup,
    },
    { id: "com-icone", title: "Com ícone", Component: ComboboxComIcone },
  ],
  "dropdown-menu": [
    { id: "basico", title: "Básico", Component: DropdownMenuBasico },
    { id: "submenu", title: "Submenu", Component: DropdownMenuSubmenu },
    { id: "icones-e-atalhos", title: "Ícones e atalhos", Component: DropdownMenuIconesEAtalhos },
    { id: "checkboxes", title: "Checkboxes", Component: DropdownMenuCheckboxes },
    { id: "radio", title: "Radio", Component: DropdownMenuRadio },
    { id: "destrutivo", title: "Destrutivo", Component: DropdownMenuDestrutivo },
  ],
  field: [
    { id: "basico", title: "Básico", Component: FieldBasico },
    { id: "obrigatorio", title: "Obrigatório", Component: FieldObrigatorio },
    { id: "com-badge", title: "Com badge", Component: FieldComBadge },
    { id: "horizontal", title: "Horizontal", Component: FieldHorizontal },
    { id: "grade", title: "Grade", Component: FieldGrade },
    { id: "formulario", title: "Formulário completo", Component: FieldFormulario },
  ],
  input: [
    { id: "basico", title: "Básico", Component: InputBasico },
    { id: "desabilitado", title: "Desabilitado", Component: InputDesabilitado },
    { id: "invalido", title: "Inválido", Component: InputInvalido },
    { id: "arquivo", title: "Arquivo", Component: InputArquivo },
    { id: "com-botao", title: "Com botão", Component: InputComBotao },
  ],
  "input-group": [
    { id: "prefixo", title: "Prefixo e ícone", Component: InputGroupPrefixo },
    { id: "busca", title: "Busca com atalho", Component: InputGroupBusca },
    { id: "com-botao", title: "Com botão", Component: InputGroupComBotao },
    { id: "com-button-group", title: "Com ButtonGroup", Component: InputGroupComButtonGroup },
    { id: "textarea", title: "Textarea", Component: InputGroupTextarea },
  ],
  kbd: [
    { id: "basico", title: "Teclas e atalhos", Component: KbdBasico },
    { id: "em-texto", title: "Dentro de texto", Component: KbdEmTexto },
  ],
  popover: [{ id: "basico", title: "Com título e formulário", Component: PopoverBasico }],
  spinner: [
    { id: "basico", title: "Tamanhos e cores", Component: SpinnerBasico },
    { id: "com-texto", title: "Com texto", Component: SpinnerComTexto },
  ],
  toast: [
    {
      id: "tipos",
      title: "Tipos",
      description: "Clique para disparar cada tipo.",
      Component: ToastTipos,
    },
    {
      id: "com-descricao-e-acao",
      title: "Com descrição e ação",
      Component: ToastComDescricaoEAcao,
    },
    {
      id: "promise",
      title: "Promise",
      description: "Mostra o carregamento até a promise terminar.",
      Component: ToastPromise,
    },
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
