import {
  Button,
  Header,
  HeaderActions,
  HeaderBrand,
  HeaderNav,
  HeaderNavItem,
} from "@t2-educacao/midas";

const estilos = ["solid", "glass", "floating", "transparent"] as const;

export default function HeaderEstilos() {
  return (
    <div className="flex flex-col gap-6">
      {estilos.map((estilo) => (
        <div
          key={estilo}
          className="rounded-container bg-linear-to-br from-action-accent-bg to-action-primary-bg py-4"
        >
          <Header variant={estilo} showLight={estilo === "floating"}>
            <HeaderBrand>
              <a href="#inicio" className="text-heading-sm">
                T2
              </a>
            </HeaderBrand>
            <HeaderNav aria-label={`Principal (${estilo})`}>
              <HeaderNavItem asChild active>
                <a href="#inicio">Início</a>
              </HeaderNavItem>
              <HeaderNavItem asChild>
                <a href="#trilhas">Trilhas</a>
              </HeaderNavItem>
              <HeaderNavItem asChild>
                <a href="#planos">Planos</a>
              </HeaderNavItem>
            </HeaderNav>
            <HeaderActions>
              <Button variant="ghost">Entrar</Button>
              <Button variant="accent" rounded>
                Começar grátis
              </Button>
            </HeaderActions>
          </Header>
        </div>
      ))}
    </div>
  );
}
