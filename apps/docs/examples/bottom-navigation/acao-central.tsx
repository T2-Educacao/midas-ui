import { BottomNavigation, BottomNavigationAction, BottomNavigationItem } from "@t2-educacao/midas";
import { IconBook, IconHome, IconPlus, IconUser, IconWallet } from "@t2-educacao/midas/icons";

export default function BottomNavigationAcaoCentral() {
  return (
    <div className="flex max-w-sm flex-col gap-6 pt-6">
      <BottomNavigation variant="center-action" aria-label="Com ação central">
        <BottomNavigationItem active icon={<IconHome />}>
          Início
        </BottomNavigationItem>
        <BottomNavigationItem icon={<IconBook />}>Trilhas</BottomNavigationItem>
        <BottomNavigationAction aria-label="Nova nota">
          <IconPlus />
        </BottomNavigationAction>
        <BottomNavigationItem icon={<IconWallet />}>Carteira</BottomNavigationItem>
        <BottomNavigationItem icon={<IconUser />}>Perfil</BottomNavigationItem>
      </BottomNavigation>
      <BottomNavigation variant="icon-pill" aria-label="Só ícones">
        <BottomNavigationItem type="bottom-icon" active icon={<IconHome />} aria-label="Início" />
        <BottomNavigationItem type="bottom-icon" icon={<IconBook />} aria-label="Trilhas" />
        <BottomNavigationItem type="bottom-icon" icon={<IconUser />} aria-label="Perfil" />
      </BottomNavigation>
    </div>
  );
}
