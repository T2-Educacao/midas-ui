import type { ComponentType } from "react";
import AccordionBasico from "./accordion/basico";
import AccordionMultiplo from "./accordion/multiplo";
import AccordionVariantes from "./accordion/variantes";
import AccordionVidro from "./accordion/vidro";
import AgendaItemBasico from "./agenda-item/basico";
import AlertComAcao from "./alert/com-acao";
import AlertPreenchido from "./alert/preenchido";
import AlertVariantes from "./alert/variantes";
import AnswerOptionSimulado from "./answer-option/simulado";
import AvatarBadge from "./avatar/badge";
import AvatarBasico from "./avatar/basico";
import AvatarComMenu from "./avatar/com-menu";
import AvatarGrupo from "./avatar/grupo";
import AvatarGrupoComTooltip from "./avatar/grupo-com-tooltip";
import AvatarTamanhos from "./avatar/tamanhos";
import AvatarTamanhosFormasEStatus from "./avatar/tamanhos-formas-e-status";
import BadgeContador from "./badge/contador";
import BadgePreenchido from "./badge/preenchido";
import BadgeVariantes from "./badge/variantes";
import BannerInverseELarguraTotal from "./banner/inverse-e-largura-total";
import BannerStatus from "./banner/status";
import BottomNavigationAcaoCentral from "./bottom-navigation/acao-central";
import BottomNavigationEstilos from "./bottom-navigation/estilos";
import BottomSheetAcoes from "./bottom-sheet/acoes";
import BottomSheetFormulario from "./bottom-sheet/formulario";
import BreadcrumbBasico from "./breadcrumb/basico";
import BreadcrumbReticencias from "./breadcrumb/reticencias";
import BreadcrumbSobreHero from "./breadcrumb/sobre-hero";
import BreadcrumbTipos from "./breadcrumb/tipos";
import ButtonArredondado from "./button/arredondado";
import ButtonCarregando from "./button/carregando";
import ButtonComAtalho from "./button/com-atalho";
import ButtonComIcone from "./button/com-icone";
import ButtonComoLink from "./button/como-link";
import ButtonExpressivo from "./button/expressivo";
import ButtonFigma from "./button/figma";
import ButtonPreenchido from "./button/preenchido";
import ButtonSoIcone from "./button/so-icone";
import ButtonTamanhos from "./button/tamanhos";
import ButtonVariantes from "./button/variantes";
import ButtonFeedbackBasico from "./button-feedback/basico";
import ButtonGroupAninhado from "./button-group/aninhado";
import ButtonGroupBasico from "./button-group/basico";
import ButtonGroupComDropdown from "./button-group/com-dropdown";
import ButtonGroupComInput from "./button-group/com-input";
import ButtonGroupComInputGroup from "./button-group/com-input-group";
import ButtonGroupComPopover from "./button-group/com-popover";
import ButtonGroupComSelect from "./button-group/com-select";
import ButtonGroupComTexto from "./button-group/com-texto";
import ButtonGroupDividido from "./button-group/dividido";
import ButtonGroupLayouts from "./button-group/layouts";
import ButtonGroupRtl from "./button-group/rtl";
import ButtonGroupVertical from "./button-group/vertical";
import CalendarBasico from "./calendar/basico";
import CalendarIntervalo from "./calendar/intervalo";
import CalendarTamanhos from "./calendar/tamanhos";
import CardBasico from "./card/basico";
import CardLayouts from "./card/layouts";
import CardProgressoEValidade from "./card/progresso-e-validade";
import CarouselApi from "./carousel/api";
import CarouselBasico from "./carousel/basico";
import CarouselEspacamento from "./carousel/espacamento";
import CarouselSpotlight from "./carousel/spotlight";
import CarouselTamanhos from "./carousel/tamanhos";
import CarouselVertical from "./carousel/vertical";
import CarouselVitrine from "./carousel/vitrine";
import ChartBarrasComTooltip from "./chart/barras-com-tooltip";
import ChartScoreBubbles from "./chart/score-bubbles";
import CheckboxBasico from "./checkbox/basico";
import CheckboxTamanhosETons from "./checkbox/tamanhos-e-tons";
import ChipDesabilitado from "./chip/desabilitado";
import ChipRemovivel from "./chip/removivel";
import ChipVariantes from "./chip/variantes";
import ChoiceCardBasico from "./choice-card/basico";
import ChoiceCardComIcone from "./choice-card/com-icone";
import ChoiceCardMultiplaEscolha from "./choice-card/multipla-escolha";
import ChoiceCardVertical from "./choice-card/vertical";
import ChoiceChipMultipla from "./choice-chip/multipla";
import ChoiceChipUnica from "./choice-chip/unica";
import CodeInputBasico from "./code-input/basico";
import CodeInputEstados from "./code-input/estados";
import CollapsibleBasico from "./collapsible/basico";
import ComboboxBasico from "./combobox/basico";
import ComboboxComIcone from "./combobox/com-icone";
import ComboboxDestaqueAutomatico from "./combobox/destaque-automatico";
import ComboboxGrupos from "./combobox/grupos";
import ComboboxInvalidoEDesabilitado from "./combobox/invalido-e-desabilitado";
import ComboboxItensComDescricao from "./combobox/itens-com-descricao";
import ComboboxLimpar from "./combobox/limpar";
import ComboboxMultiplo from "./combobox/multiplo";
import ComboboxPopup from "./combobox/popup";
import CourseCoverBasico from "./course-cover/basico";
import DatePickerBasico from "./date-picker/basico";
import DatePickerComHorario from "./date-picker/com-horario";
import DatePickerComInput from "./date-picker/com-input";
import DatePickerLinguagemNatural from "./date-picker/linguagem-natural";
import DatePickerNascimento from "./date-picker/nascimento";
import DatePickerPeriodo from "./date-picker/periodo";
import DatePickerPresets from "./date-picker/presets";
import DateSheetBasico from "./date-sheet/basico";
import DialogBasico from "./dialog/basico";
import DialogTamanhos from "./dialog/tamanhos";
import DrawerFiltros from "./drawer/filtros";
import DrawerNavegacao from "./drawer/navegacao";
import DropdownMenuAvatar from "./dropdown-menu/avatar";
import DropdownMenuBasico from "./dropdown-menu/basico";
import DropdownMenuCheckboxes from "./dropdown-menu/checkboxes";
import DropdownMenuCheckboxesComIcones from "./dropdown-menu/checkboxes-com-icones";
import DropdownMenuComplexo from "./dropdown-menu/complexo";
import DropdownMenuDestrutivo from "./dropdown-menu/destrutivo";
import DropdownMenuGatilhos from "./dropdown-menu/gatilhos";
import DropdownMenuIconesEAtalhos from "./dropdown-menu/icones-e-atalhos";
import DropdownMenuRadio from "./dropdown-menu/radio";
import DropdownMenuRadioComIcones from "./dropdown-menu/radio-com-icones";
import DropdownMenuSubmenu from "./dropdown-menu/submenu";
import EmptyStateBasico from "./empty-state/basico";
import EmptyStateContainer from "./empty-state/container";
import EventCalendarMes from "./event-calendar/mes";
import FieldBasico from "./field/basico";
import FieldComBadge from "./field/com-badge";
import FieldFormulario from "./field/formulario";
import FieldGrade from "./field/grade";
import FieldHorizontal from "./field/horizontal";
import FieldObrigatorio from "./field/obrigatorio";
import FileUploadBasico from "./file-upload/basico";
import FileUploadFila from "./file-upload/fila";
import FileUploadSoImagens from "./file-upload/so-imagens";
import FormLayoutColunas from "./form-layout/colunas";
import HeaderEstilos from "./header/estilos";
import HeroAulasDoModulo from "./hero/aulas-do-modulo";
import HeroContinuar from "./hero/continuar";
import HeroPaineis from "./hero/paineis";
import IconButtonBasico from "./icon-button/basico";
import InputArquivo from "./input/arquivo";
import InputBasico from "./input/basico";
import InputComBotao from "./input/com-botao";
import InputDesabilitado from "./input/desabilitado";
import InputEstados from "./input/estados";
import InputEstilosEForma from "./input/estilos-e-forma";
import InputInvalido from "./input/invalido";
import InputTamanhos from "./input/tamanhos";
import InputGroupBusca from "./input-group/busca";
import InputGroupComBotao from "./input-group/com-botao";
import InputGroupComButtonGroup from "./input-group/com-button-group";
import InputGroupPrefixo from "./input-group/prefixo";
import InputGroupTextarea from "./input-group/textarea";
import KbdBasico from "./kbd/basico";
import KbdEmTexto from "./kbd/em-texto";
import LinkVariantes from "./link/variantes";
import ListCardBasico from "./list-card/basico";
import ListItemBasico from "./list-item/basico";
import ListItemComoLink from "./list-item/como-link";
import ListItemFigma from "./list-item/figma";
import ListItemSelecionado from "./list-item/selecionado";
import LoadingStateTipos from "./loading-state/tipos";
import ModalCompartilhar from "./modal/compartilhar";
import ModalConfirmar from "./modal/confirmar";
import ModalErro from "./modal/erro";
import ModalPermissao from "./modal/permissao";
import ModalPromo from "./modal/promo";
import ModalStatusExemplo from "./modal/status";
import ModalSucesso from "./modal/sucesso";
import NativeSelectBasico from "./native-select/basico";
import NotificationCentro from "./notification/centro";
import PaginationCarregarMais from "./pagination/carregar-mais";
import PaginationSimples from "./pagination/simples";
import PaginationSoIcones from "./pagination/so-icones";
import PaginationTipos from "./pagination/tipos";
import PopoverAcoes from "./popover/acoes";
import PopoverBasico from "./popover/basico";
import ProgressBasico from "./progress/basico";
import ProgressEstilos from "./progress/estilos";
import ProgressTamanhosEVertical from "./progress/tamanhos-e-vertical";
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
import QuoteTipos from "./quote/tipos";
import RadioGroupBasico from "./radio-group/basico";
import RadioGroupTamanhosETons from "./radio-group/tamanhos-e-tons";
import RatingResumo from "./rating/resumo";
import RatingTipos from "./rating/tipos";
import SearchBarBasico from "./search-bar/basico";
import SearchBarFiltrosEEscopo from "./search-bar/filtros-e-escopo";
import SegmentedControlBasico from "./segmented-control/basico";
import SegmentedControlTamanhos from "./segmented-control/tamanhos";
import SelectBasico from "./select/basico";
import SelectionFieldBasico from "./selection-field/basico";
import SeparatorBasico from "./separator/basico";
import SeparatorTipos from "./separator/tipos";
import SidebarBasico from "./sidebar/basico";
import SidebarRecolhido from "./sidebar/recolhido";
import SidebarSuperficies from "./sidebar/superficies";
import SidebarTiposDeItem from "./sidebar/tipos-de-item";
import SkeletonCard from "./skeleton/card";
import SkeletonLinhasDeTexto from "./skeleton/linhas-de-texto";
import SkeletonPadroes from "./skeleton/padroes";
import SliderBasico from "./slider/basico";
import SliderComValorETom from "./slider/com-valor-e-tom";
import SliderDesabilitado from "./slider/desabilitado";
import SliderIntervalo from "./slider/intervalo";
import SocialButtonBasico from "./social-button/basico";
import SpinnerBasico from "./spinner/basico";
import SpinnerComTexto from "./spinner/com-texto";
import SpinnerEstilosETamanhos from "./spinner/estilos-e-tamanhos";
import StepperBasico from "./stepper/basico";
import StepperEstados from "./stepper/estados";
import StepperSegmentadoECompacto from "./stepper/segmentado-e-compacto";
import StepperVertical from "./stepper/vertical";
import SwitchBasico from "./switch/basico";
import SwitchTamanhos from "./switch/tamanhos";
import SwitchTons from "./switch/tons";
import TableBasico from "./table/basico";
import TableCompleta from "./table/completa";
import TableOrdenavel from "./table/ordenavel";
import TableSelecaoERodape from "./table/selecao-e-rodape";
import TableSelecaoEmMassa from "./table/selecao-em-massa";
import TablePaginationBasico from "./table-pagination/basico";
import TableToolbarBasico from "./table-toolbar/basico";
import TabsBasico from "./tabs/basico";
import TabsIconeEContador from "./tabs/icone-e-contador";
import TabsSublinhado from "./tabs/sublinhado";
import TabsTipos from "./tabs/tipos";
import TabsVertical from "./tabs/vertical";
import TabsVidro from "./tabs/vidro";
import TagDetalhe from "./tag/detalhe";
import TagRemovivel from "./tag/removivel";
import TagTamanhosELeading from "./tag/tamanhos-e-leading";
import TagVariantes from "./tag/variantes";
import TagInputBasico from "./tag-input/basico";
import TextareaBasico from "./textarea/basico";
import TextareaTituloInline from "./textarea/titulo-inline";
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
import TooltipEstilos from "./tooltip/estilos";
import TooltipGrafico from "./tooltip/grafico";
import TooltipIndicadores from "./tooltip/indicadores";
import TooltipSimples from "./tooltip/simples";
import VideoPlayerBasico from "./video-player/basico";
import VideoPlayerMiniPlayer from "./video-player/mini-player";
import WheelPickerBasico from "./wheel-picker/basico";
import WidgetEstatisticas from "./widget/estatisticas";
import WidgetMensagensEAlertas from "./widget/mensagens-e-alertas";

export interface Example {
  id: string;
  title: string;
  description?: string;
  Component: ComponentType;
}

export const examples: Record<string, Example[]> = {
  chart: [
    {
      id: "barras-com-tooltip",
      title: "Barras, legenda e tooltip",
      Component: ChartBarrasComTooltip,
    },
    { id: "score-bubbles", title: "Score Bubbles", Component: ChartScoreBubbles },
  ],
  "course-cover": [{ id: "basico", title: "Capa de curso", Component: CourseCoverBasico }],
  hero: [
    { id: "continuar", title: "Continuar estudando", Component: HeroContinuar },
    { id: "paineis", title: "Painéis expansíveis", Component: HeroPaineis },
    { id: "aulas-do-modulo", title: "Aulas do módulo", Component: HeroAulasDoModulo },
  ],
  quote: [{ id: "tipos", title: "Tipos", Component: QuoteTipos }],
  "video-player": [
    { id: "basico", title: "Player de aula", Component: VideoPlayerBasico },
    { id: "mini-player", title: "Mini Player", Component: VideoPlayerMiniPlayer },
  ],
  widget: [
    { id: "estatisticas", title: "Estatísticas e gráficos", Component: WidgetEstatisticas },
    {
      id: "mensagens-e-alertas",
      title: "Mensagens, alertas e imagem",
      Component: WidgetMensagensEAlertas,
    },
  ],
  breadcrumb: [
    { id: "basico", title: "Básico", Component: BreadcrumbBasico },
    { id: "reticencias", title: "Com reticências", Component: BreadcrumbReticencias },
    { id: "tipos", title: "Home, slash, contained e back", Component: BreadcrumbTipos },
    { id: "sobre-hero", title: "Tom media sobre Hero", Component: BreadcrumbSobreHero },
  ],
  "empty-state": [
    { id: "basico", title: "Básico", Component: EmptyStateBasico },
    { id: "container", title: "Container card", Component: EmptyStateContainer },
  ],
  "file-upload": [
    { id: "basico", title: "Básico", Component: FileUploadBasico },
    { id: "so-imagens", title: "Só imagens com limite", Component: FileUploadSoImagens },
    { id: "fila", title: "Fila de arquivos (File Item)", Component: FileUploadFila },
  ],
  "list-item": [
    { id: "basico", title: "Básico", Component: ListItemBasico },
    { id: "como-link", title: "Como link", Component: ListItemComoLink },
    { id: "selecionado", title: "Selecionado", Component: ListItemSelecionado },
    { id: "figma", title: "Meta, ações, vertical e skeleton", Component: ListItemFigma },
  ],
  sidebar: [
    { id: "basico", title: "Básico", Component: SidebarBasico },
    {
      id: "recolhido",
      title: "Recolhido",
      description: "Recolhida, mostra só os ícones.",
      Component: SidebarRecolhido,
    },
    {
      id: "superficies",
      title: "Solid, minimal inverse e recolhida",
      Component: SidebarSuperficies,
    },
    { id: "tipos-de-item", title: "Tipos de Nav Item e submenu", Component: SidebarTiposDeItem },
  ],
  "bottom-navigation": [
    {
      id: "estilos",
      title: "Bar, minimal, glass bar e floating",
      Component: BottomNavigationEstilos,
    },
    {
      id: "acao-central",
      title: "Ação central e só ícones",
      Component: BottomNavigationAcaoCentral,
    },
  ],
  header: [
    { id: "estilos", title: "Solid, glass, floating e transparent", Component: HeaderEstilos },
  ],
  "agenda-item": [{ id: "basico", title: "Card, row e hoje", Component: AgendaItemBasico }],
  "list-card": [
    { id: "basico", title: "Pendência com informações e ações", Component: ListCardBasico },
  ],
  "table-toolbar": [
    { id: "basico", title: "Padrão e seleção em massa", Component: TableToolbarBasico },
  ],
  "table-pagination": [
    { id: "basico", title: "Numerada e simples", Component: TablePaginationBasico },
  ],
  banner: [
    { id: "status", title: "Status", Component: BannerStatus },
    {
      id: "inverse-e-largura-total",
      title: "Inverse e largura total",
      Component: BannerInverseELarguraTotal,
    },
  ],
  "loading-state": [
    { id: "tipos", title: "Inline, stacked e overlay", Component: LoadingStateTipos },
  ],
  notification: [
    { id: "centro", title: "Sino e centro de notificações", Component: NotificationCentro },
  ],
  tag: [
    { id: "variantes", title: "Tons e estilos", Component: TagVariantes },
    { id: "tamanhos-e-leading", title: "Tamanhos e leading", Component: TagTamanhosELeading },
    { id: "removivel", title: "Removível", Component: TagRemovivel },
    { id: "detalhe", title: "Tag Detail", Component: TagDetalhe },
  ],
  skeleton: [
    { id: "padroes", title: "Blocos e padrões", Component: SkeletonPadroes },
    { id: "linhas-de-texto", title: "Linhas de texto", Component: SkeletonLinhasDeTexto },
    { id: "card", title: "Card", Component: SkeletonCard },
  ],
  stepper: [
    { id: "basico", title: "Básico", Component: StepperBasico },
    { id: "vertical", title: "Vertical", Component: StepperVertical },
    { id: "estados", title: "Indicadores e estado de erro", Component: StepperEstados },
    {
      id: "segmentado-e-compacto",
      title: "Segmented e Compact (mobile)",
      Component: StepperSegmentadoECompacto,
    },
  ],
  table: [
    { id: "basico", title: "Básico", Component: TableBasico },
    { id: "ordenavel", title: "Ordenável", Component: TableOrdenavel },
    {
      id: "completa",
      title: "Toolbar, zebrada, agrupada e paginação",
      Component: TableCompleta,
    },
    { id: "selecao-em-massa", title: "Seleção em massa", Component: TableSelecaoEmMassa },
    { id: "selecao-e-rodape", title: "Seleção e rodapé", Component: TableSelecaoERodape },
  ],
  accordion: [
    { id: "basico", title: "Básico (um aberto por vez)", Component: AccordionBasico },
    { id: "multiplo", title: "Vários abertos", Component: AccordionMultiplo },
    { id: "variantes", title: "FAQ, cards, filled e module", Component: AccordionVariantes },
    { id: "vidro", title: "Variante glass sobre imagem", Component: AccordionVidro },
  ],
  alert: [
    { id: "variantes", title: "Variantes", Component: AlertVariantes },
    { id: "preenchido", title: "Preenchido", Component: AlertPreenchido },
    { id: "com-acao", title: "Com ação", Component: AlertComAcao },
  ],
  chip: [
    { id: "variantes", title: "Variantes", Component: ChipVariantes },
    { id: "removivel", title: "Removível", Component: ChipRemovivel },
    { id: "desabilitado", title: "Desabilitado", Component: ChipDesabilitado },
  ],
  "choice-card": [
    { id: "basico", title: "Escolha única", Component: ChoiceCardBasico },
    { id: "com-icone", title: "Com ícone", Component: ChoiceCardComIcone },
    { id: "multipla-escolha", title: "Múltipla escolha", Component: ChoiceCardMultiplaEscolha },
    { id: "vertical", title: "Vertical, grade e estilos", Component: ChoiceCardVertical },
  ],
  "choice-chip": [
    { id: "unica", title: "Escolha única", Component: ChoiceChipUnica },
    { id: "multipla", title: "Múltipla escolha", Component: ChoiceChipMultipla },
  ],
  "answer-option": [
    { id: "simulado", title: "Questão de simulado", Component: AnswerOptionSimulado },
  ],
  rating: [
    { id: "tipos", title: "Tipos", Component: RatingTipos },
    { id: "resumo", title: "Resumo e leitura", Component: RatingResumo },
  ],
  "search-bar": [
    { id: "basico", title: "Básico", Component: SearchBarBasico },
    { id: "filtros-e-escopo", title: "Filtros e escopo", Component: SearchBarFiltrosEEscopo },
  ],
  "tag-input": [{ id: "basico", title: "Básico", Component: TagInputBasico }],
  "code-input": [
    { id: "basico", title: "6 dígitos", Component: CodeInputBasico },
    { id: "estados", title: "Erro, sucesso e LG", Component: CodeInputEstados },
  ],
  "form-layout": [{ id: "colunas", title: "Seções e colunas", Component: FormLayoutColunas }],
  collapsible: [{ id: "basico", title: "Controlado", Component: CollapsibleBasico }],
  "segmented-control": [
    { id: "basico", title: "Básico", Component: SegmentedControlBasico },
    { id: "tamanhos", title: "Tamanhos e vertical", Component: SegmentedControlTamanhos },
  ],
  slider: [
    { id: "basico", title: "Básico", Component: SliderBasico },
    { id: "intervalo", title: "Intervalo", Component: SliderIntervalo },
    { id: "desabilitado", title: "Desabilitado", Component: SliderDesabilitado },
    { id: "com-valor-e-tom", title: "Valor em mono e tom neutral", Component: SliderComValorETom },
  ],
  switch: [
    {
      id: "basico",
      title: "Básico, com descrição, desabilitado e inválido",
      Component: SwitchBasico,
    },
    { id: "tamanhos", title: "Tamanhos", Component: SwitchTamanhos },
    { id: "tons", title: "Tamanhos e tons do Figma", Component: SwitchTons },
  ],
  "icon-button": [
    { id: "basico", title: "Tamanhos, formas e estados", Component: IconButtonBasico },
  ],
  link: [
    {
      id: "variantes",
      title: "Inline, standalone, subtle, tamanhos e tons",
      Component: LinkVariantes,
    },
  ],
  "social-button": [{ id: "basico", title: "Google e LinkedIn", Component: SocialButtonBasico }],
  "selection-field": [
    { id: "basico", title: "Plain, card, erro e radio", Component: SelectionFieldBasico },
  ],
  "button-feedback": [
    { id: "basico", title: "Sucesso, loading, erro e aviso", Component: ButtonFeedbackBasico },
  ],
  tabs: [
    { id: "basico", title: "Básico", Component: TabsBasico },
    { id: "sublinhado", title: "Sublinhado", Component: TabsSublinhado },
    { id: "vertical", title: "Vertical", Component: TabsVertical },
    { id: "tipos", title: "Tipos: underline, pill, segmented e plain", Component: TabsTipos },
    {
      id: "icone-e-contador",
      title: "Ícone, contador e tamanho SM",
      Component: TabsIconeEContador,
    },
    { id: "vidro", title: "Superfície glass sobre imagem", Component: TabsVidro },
  ],
  avatar: [
    {
      id: "basico",
      title: "Básico",
      description: "Sem imagem, aparece o fallback com as iniciais.",
      Component: AvatarBasico,
    },
    { id: "tamanhos", title: "Tamanhos", Component: AvatarTamanhos },
    { id: "badge", title: "Badge de status e de ícone", Component: AvatarBadge },
    {
      id: "tamanhos-formas-e-status",
      title: "Tamanhos, formas e status",
      Component: AvatarTamanhosFormasEStatus,
    },
    { id: "grupo-com-tooltip", title: "Grupo com tooltip", Component: AvatarGrupoComTooltip },
    { id: "grupo", title: "Grupo com contador e ícone", Component: AvatarGrupo },
    { id: "com-menu", title: "Com menu", Component: AvatarComMenu },
  ],
  calendar: [
    { id: "basico", title: "Data única", Component: CalendarBasico },
    { id: "intervalo", title: "Intervalo em dois meses", Component: CalendarIntervalo },
    { id: "tamanhos", title: "Tamanhos, tons e moldura", Component: CalendarTamanhos },
  ],
  card: [
    { id: "basico", title: "Com ação e rodapé", Component: CardBasico },
    { id: "layouts", title: "Vertical, horizontal e overlay", Component: CardLayouts },
    {
      id: "progresso-e-validade",
      title: "Progresso e validade",
      Component: CardProgressoEValidade,
    },
  ],
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
    { id: "vitrine", title: "Vitrine com cabeçalho, setas e pontos", Component: CarouselVitrine },
    { id: "spotlight", title: "Spotlight", Component: CarouselSpotlight },
    {
      id: "api",
      title: "API",
      description: "Lendo o slide atual com setApi.",
      Component: CarouselApi,
    },
  ],
  checkbox: [
    { id: "basico", title: "Básico, com descrição e desabilitado", Component: CheckboxBasico },
    { id: "tamanhos-e-tons", title: "Tamanhos, tons e estados", Component: CheckboxTamanhosETons },
  ],
  "date-picker": [
    { id: "basico", title: "Básico", Component: DatePickerBasico },
    { id: "presets", title: "Presets com confirmação", Component: DatePickerPresets },
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
  dialog: [
    { id: "basico", title: "Formulário", Component: DialogBasico },
    {
      id: "tamanhos",
      title: "Tamanhos e vidro",
      description: "Modal Form em sm (400), md (520), lg (720) e xl (960, glass).",
      Component: DialogTamanhos,
    },
  ],
  modal: [
    { id: "confirmar", title: "Confirmar (destrutivo)", Component: ModalConfirmar },
    { id: "sucesso", title: "Sucesso com recibo", Component: ModalSucesso },
    { id: "erro", title: "Erro de pagamento", Component: ModalErro },
    { id: "permissao", title: "Pedido de permissão", Component: ModalPermissao },
    { id: "status", title: "Status com progresso", Component: ModalStatusExemplo },
    { id: "compartilhar", title: "Compartilhar", Component: ModalCompartilhar },
    { id: "promo", title: "Promo (Neutral)", Component: ModalPromo },
  ],
  drawer: [
    { id: "filtros", title: "Filtros", Component: DrawerFiltros },
    { id: "navegacao", title: "Navegação (esquerda, glass)", Component: DrawerNavegacao },
  ],
  "bottom-sheet": [
    { id: "formulario", title: "Formulário", Component: BottomSheetFormulario },
    { id: "acoes", title: "Ações (glass)", Component: BottomSheetAcoes },
  ],
  "wheel-picker": [{ id: "basico", title: "Mês e ano", Component: WheelPickerBasico }],
  "date-sheet": [{ id: "basico", title: "Calendário e roleta", Component: DateSheetBasico }],
  "event-calendar": [{ id: "mes", title: "Mês e agenda", Component: EventCalendarMes }],
  "native-select": [{ id: "basico", title: "Básico", Component: NativeSelectBasico }],
  pagination: [
    {
      id: "simples",
      title: "Com reticências",
      description: "Usando getPageRange para calcular as páginas.",
      Component: PaginationSimples,
    },
    { id: "so-icones", title: "Linhas por página", Component: PaginationSoIcones },
    { id: "tipos", title: "Intervalo, compacto e pontos", Component: PaginationTipos },
    {
      id: "carregar-mais",
      title: "Carregar mais e ver mais com fog",
      Component: PaginationCarregarMais,
    },
  ],
  progress: [
    { id: "basico", title: "Com rótulo", Component: ProgressBasico },
    { id: "estilos", title: "Estilos", Component: ProgressEstilos },
    {
      id: "tamanhos-e-vertical",
      title: "Tamanhos, vertical e linha",
      Component: ProgressTamanhosEVertical,
    },
  ],
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
  "radio-group": [
    { id: "basico", title: "Básico", Component: RadioGroupBasico },
    {
      id: "tamanhos-e-tons",
      title: "Tamanhos, tons e estados",
      Component: RadioGroupTamanhosETons,
    },
  ],
  select: [{ id: "basico", title: "Com grupos", Component: SelectBasico }],
  separator: [
    { id: "basico", title: "Horizontal e vertical", Component: SeparatorBasico },
    { id: "tipos", title: "Tipos", Component: SeparatorTipos },
  ],
  textarea: [
    { id: "basico", title: "Básico", Component: TextareaBasico },
    { id: "titulo-inline", title: "Título inline", Component: TextareaTituloInline },
  ],
  badge: [
    { id: "contador", title: "Contador e ponto", Component: BadgeContador },
    { id: "variantes", title: "Variantes", Component: BadgeVariantes },
    { id: "preenchido", title: "Preenchido", Component: BadgePreenchido },
  ],
  button: [
    { id: "figma", title: "Variantes, tamanhos e estados do Figma", Component: ButtonFigma },
    { id: "expressivo", title: "Button Expressive (sobre mídia)", Component: ButtonExpressivo },
    { id: "variantes", title: "Variantes", Component: ButtonVariantes },
    { id: "preenchido", title: "Preenchido", Component: ButtonPreenchido },
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
    { id: "layouts", title: "Attached, spaced e stacked", Component: ButtonGroupLayouts },
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
    { id: "gatilhos", title: "Gatilhos e tons", Component: DropdownMenuGatilhos },
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
    { id: "tamanhos", title: "Tamanhos SM, MD e LG", Component: InputTamanhos },
    { id: "estados", title: "Estados", Component: InputEstados },
    { id: "estilos-e-forma", title: "Estilos, tom e forma", Component: InputEstilosEForma },
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
  popover: [
    { id: "basico", title: "Com título e formulário", Component: PopoverBasico },
    { id: "acoes", title: "Ações com seta", Component: PopoverAcoes },
  ],
  spinner: [
    { id: "estilos-e-tamanhos", title: "Estilos e tamanhos", Component: SpinnerEstilosETamanhos },
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
    { id: "estilos", title: "Estilos, atalho e rich", Component: TooltipEstilos },
    { id: "grafico", title: "Chart Tooltip", Component: TooltipGrafico },
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
