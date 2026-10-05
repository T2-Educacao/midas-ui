import type { ComponentType } from "react";
import AvatarBadge from "./avatar/badge";
import AvatarBasico from "./avatar/basico";
import AvatarComMenu from "./avatar/com-menu";
import AvatarGrupo from "./avatar/grupo";
import AvatarTamanhos from "./avatar/tamanhos";
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
import ButtonGroupComDropdown from "./button-group/com-dropdown";
import ButtonGroupComInput from "./button-group/com-input";
import ButtonGroupComInputGroup from "./button-group/com-input-group";
import ButtonGroupComPopover from "./button-group/com-popover";
import ButtonGroupComSelect from "./button-group/com-select";
import ButtonGroupComTexto from "./button-group/com-texto";
import ButtonGroupDividido from "./button-group/dividido";
import ButtonGroupRtl from "./button-group/rtl";
import ButtonGroupVertical from "./button-group/vertical";
import CalendarBasico from "./calendar/basico";
import CalendarIntervalo from "./calendar/intervalo";
import CardBasico from "./card/basico";
import CarouselApi from "./carousel/api";
import CarouselBasico from "./carousel/basico";
import CarouselEspacamento from "./carousel/espacamento";
import CarouselTamanhos from "./carousel/tamanhos";
import CarouselVertical from "./carousel/vertical";
import CheckboxBasico from "./checkbox/basico";
import ComboboxBasico from "./combobox/basico";
import ComboboxComIcone from "./combobox/com-icone";
import ComboboxDestaqueAutomatico from "./combobox/destaque-automatico";
import ComboboxGrupos from "./combobox/grupos";
import ComboboxInvalidoEDesabilitado from "./combobox/invalido-e-desabilitado";
import ComboboxItensComDescricao from "./combobox/itens-com-descricao";
import ComboboxLimpar from "./combobox/limpar";
import ComboboxMultiplo from "./combobox/multiplo";
import ComboboxPopup from "./combobox/popup";
import DatePickerBasico from "./date-picker/basico";
import DatePickerComHorario from "./date-picker/com-horario";
import DatePickerComInput from "./date-picker/com-input";
import DatePickerLinguagemNatural from "./date-picker/linguagem-natural";
import DatePickerNascimento from "./date-picker/nascimento";
import DatePickerPeriodo from "./date-picker/periodo";
import DialogBasico from "./dialog/basico";
import DropdownMenuAvatar from "./dropdown-menu/avatar";
import DropdownMenuBasico from "./dropdown-menu/basico";
import DropdownMenuCheckboxes from "./dropdown-menu/checkboxes";
import DropdownMenuCheckboxesComIcones from "./dropdown-menu/checkboxes-com-icones";
import DropdownMenuComplexo from "./dropdown-menu/complexo";
import DropdownMenuDestrutivo from "./dropdown-menu/destrutivo";
import DropdownMenuIconesEAtalhos from "./dropdown-menu/icones-e-atalhos";
import DropdownMenuRadio from "./dropdown-menu/radio";
import DropdownMenuRadioComIcones from "./dropdown-menu/radio-com-icones";
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
import NativeSelectBasico from "./native-select/basico";
import PaginationSimples from "./pagination/simples";
import PaginationSoIcones from "./pagination/so-icones";
import PopoverBasico from "./popover/basico";
import ProgressBasico from "./progress/basico";
import QuestionnaireAnimacao from "./questionnaire/animacao";
import QuestionnaireAtalhos from "./questionnaire/atalhos";
import QuestionnaireAtalhosEPular from "./questionnaire/atalhos-e-pular";
import QuestionnaireBasico from "./questionnaire/basico";
import QuestionnaireCard from "./questionnaire/card";
import QuestionnaireControlado from "./questionnaire/controlado";
import QuestionnaireDialog from "./questionnaire/dialog";
import QuestionnaireEstadoNavegacao from "./questionnaire/estado-navegacao";
import QuestionnaireMultiplaELivre from "./questionnaire/multipla-e-livre";
import QuestionnaireProgressoPersonalizado from "./questionnaire/progresso-personalizado";
import QuestionnaireRetomar from "./questionnaire/retomar";
import QuestionnaireValidacaoECondicional from "./questionnaire/validacao-e-condicional";
import RadioGroupBasico from "./radio-group/basico";
import SelectBasico from "./select/basico";
import SeparatorBasico from "./separator/basico";
import SpinnerBasico from "./spinner/basico";
import SpinnerComTexto from "./spinner/com-texto";
import TextareaBasico from "./textarea/basico";
import ToastComDescricaoEAcao from "./toast/com-descricao-e-acao";
import ToastPromise from "./toast/promise";
import ToastTipos from "./toast/tipos";
import ToggleBasico from "./toggle/basico";
import ToggleOutline from "./toggle/outline";
import ToggleTamanhos from "./toggle/tamanhos";
import ToggleGroupEscolhaUnica from "./toggle-group/escolha-unica";
import ToggleGroupEspacamento from "./toggle-group/espacamento";
import ToggleGroupMultiplaEscolha from "./toggle-group/multipla-escolha";
import ToggleGroupRtl from "./toggle-group/rtl";
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
  avatar: [
    {
      id: "basico",
      title: "Básico",
      description: "Sem imagem, aparece o fallback com as iniciais.",
      Component: AvatarBasico,
    },
    { id: "tamanhos", title: "Tamanhos", Component: AvatarTamanhos },
    { id: "badge", title: "Badge de status e de ícone", Component: AvatarBadge },
    { id: "grupo", title: "Grupo com contador e ícone", Component: AvatarGrupo },
    { id: "com-menu", title: "Com menu", Component: AvatarComMenu },
  ],
  calendar: [
    { id: "basico", title: "Data única", Component: CalendarBasico },
    { id: "intervalo", title: "Intervalo em dois meses", Component: CalendarIntervalo },
  ],
  card: [{ id: "basico", title: "Com ação e rodapé", Component: CardBasico }],
  carousel: [
    {
      id: "basico",
      title: "Básico",
      description: "Arraste, use as setas ou o teclado.",
      Component: CarouselBasico,
    },
    { id: "tamanhos", title: "Tamanhos dos itens", Component: CarouselTamanhos },
    { id: "espacamento", title: "Espaçamento", Component: CarouselEspacamento },
    { id: "vertical", title: "Vertical", Component: CarouselVertical },
    {
      id: "api",
      title: "API",
      description: "Lendo o slide atual com setApi.",
      Component: CarouselApi,
    },
  ],
  checkbox: [
    { id: "basico", title: "Básico, com descrição e desabilitado", Component: CheckboxBasico },
  ],
  "date-picker": [
    { id: "basico", title: "Básico", Component: DatePickerBasico },
    { id: "periodo", title: "Período", Component: DatePickerPeriodo },
    {
      id: "nascimento",
      title: "Data de nascimento",
      description: "Dropdown de mês e ano, sem datas futuras.",
      Component: DatePickerNascimento,
    },
    { id: "com-horario", title: "Data e horário", Component: DatePickerComHorario },
    {
      id: "com-input",
      title: "Digitando a data",
      description: "Composição com InputGroup, Popover e Calendar.",
      Component: DatePickerComInput,
    },
    {
      id: "linguagem-natural",
      title: "Linguagem natural",
      description: "Digite amanhã, próxima sexta, em 3 dias, 15/05 ou 20 de maio.",
      Component: DatePickerLinguagemNatural,
    },
  ],
  dialog: [{ id: "basico", title: "Formulário", Component: DialogBasico }],
  "native-select": [{ id: "basico", title: "Básico", Component: NativeSelectBasico }],
  pagination: [
    {
      id: "simples",
      title: "Com reticências",
      description: "Usando getPageRange para calcular as páginas.",
      Component: PaginationSimples,
    },
    { id: "so-icones", title: "Linhas por página", Component: PaginationSoIcones },
  ],
  progress: [{ id: "basico", title: "Com rótulo", Component: ProgressBasico }],
  questionnaire: [
    {
      id: "basico",
      title: "Básico",
      description: "Responda para habilitar Próxima.",
      Component: QuestionnaireBasico,
    },
    {
      id: "multipla-e-livre",
      title: "Múltipla escolha e resposta livre",
      Component: QuestionnaireMultiplaELivre,
    },
    {
      id: "atalhos-e-pular",
      title: "Atalhos de teclado e pular",
      Component: QuestionnaireAtalhosEPular,
    },
    { id: "atalhos", title: "Atalhos com letras ou números", Component: QuestionnaireAtalhos },
    {
      id: "validacao-e-condicional",
      title: "Validação, condicional e barra de progresso",
      description: "Escolha CPRO-R para ver a pergunta extra.",
      Component: QuestionnaireValidacaoECondicional,
    },
    {
      id: "controlado",
      title: "Controlado (salvar e retomar)",
      Component: QuestionnaireControlado,
    },
    { id: "retomar", title: "Retomar de onde parou", Component: QuestionnaireRetomar },
    {
      id: "estado-navegacao",
      title: "Estado de navegação",
      description: "Lendo o status de cada pergunta com isAnswered.",
      Component: QuestionnaireEstadoNavegacao,
    },
    {
      id: "progresso-personalizado",
      title: "Progresso personalizado",
      description: "Usando renderProgress com o componente Progress.",
      Component: QuestionnaireProgressoPersonalizado,
    },
    {
      id: "animacao",
      title: "Animação",
      description: "A troca de pergunta é animada; animated={false} desliga.",
      Component: QuestionnaireAnimacao,
    },
    { id: "card", title: "Card", Component: QuestionnaireCard },
    { id: "dialog", title: "Dialog", Component: QuestionnaireDialog },
  ],
  "radio-group": [{ id: "basico", title: "Básico", Component: RadioGroupBasico }],
  select: [{ id: "basico", title: "Com grupos", Component: SelectBasico }],
  separator: [{ id: "basico", title: "Horizontal e vertical", Component: SeparatorBasico }],
  textarea: [{ id: "basico", title: "Básico", Component: TextareaBasico }],
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
    { id: "com-input", title: "Com Input", Component: ButtonGroupComInput },
    { id: "com-input-group", title: "Com InputGroup", Component: ButtonGroupComInputGroup },
    { id: "com-dropdown", title: "Com DropdownMenu", Component: ButtonGroupComDropdown },
    { id: "com-select", title: "Com Select", Component: ButtonGroupComSelect },
    { id: "com-popover", title: "Com Popover", Component: ButtonGroupComPopover },
    { id: "rtl", title: "Direita para esquerda (RTL)", Component: ButtonGroupRtl },
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
    {
      id: "destaque-automatico",
      title: "Destaque automático",
      description: "O primeiro resultado já vem destacado: digite e aperte Enter.",
      Component: ComboboxDestaqueAutomatico,
    },
  ],
  "dropdown-menu": [
    { id: "basico", title: "Básico", Component: DropdownMenuBasico },
    { id: "submenu", title: "Submenu", Component: DropdownMenuSubmenu },
    { id: "icones-e-atalhos", title: "Ícones e atalhos", Component: DropdownMenuIconesEAtalhos },
    { id: "checkboxes", title: "Checkboxes", Component: DropdownMenuCheckboxes },
    { id: "radio", title: "Radio", Component: DropdownMenuRadio },
    {
      id: "checkboxes-com-icones",
      title: "Checkboxes com ícones",
      Component: DropdownMenuCheckboxesComIcones,
    },
    { id: "radio-com-icones", title: "Radio com ícones", Component: DropdownMenuRadioComIcones },
    { id: "destrutivo", title: "Destrutivo", Component: DropdownMenuDestrutivo },
    { id: "avatar", title: "Com avatar", Component: DropdownMenuAvatar },
    {
      id: "complexo",
      title: "Completo",
      description: "Grupos, ícones, atalhos, submenus, checkbox e radio juntos.",
      Component: DropdownMenuComplexo,
    },
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
    { id: "rtl", title: "Direita para esquerda (RTL)", Component: ToggleGroupRtl },
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
