import { BottomNavigation, BottomNavigationItem } from "@t2-educacao/midas";
import { IconBook, IconHome, IconUser, IconWallet } from "@t2-educacao/midas/icons";

const estilos = ["bar", "minimal", "glass-bar", "floating"] as const;

export default function BottomNavigationEstilos() {
  return (
    <div className="flex max-w-sm flex-col gap-6">
      {estilos.map((estilo) => (
        <div
          key={estilo}
          className="flex h-28 items-end rounded-container bg-linear-to-br from-action-accent-bg to-action-primary-bg p-2"
        >
          <BottomNavigation variant={estilo} aria-label={`Navegação ${estilo}`}>
            <BottomNavigationItem active icon={<IconHome />}>
              Início
            </BottomNavigationItem>
            <BottomNavigationItem icon={<IconBook />}>Trilhas</BottomNavigationItem>
            <BottomNavigationItem icon={<IconWallet />}>Carteira</BottomNavigationItem>
            <BottomNavigationItem icon={<IconUser />}>Perfil</BottomNavigationItem>
          </BottomNavigation>
        </div>
      ))}
    </div>
  );
}
