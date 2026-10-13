import {
  Button,
  Hero,
  HeroActions,
  HeroChip,
  HeroChips,
  HeroContent,
  HeroDescription,
  HeroEyebrow,
  HeroProgress,
  HeroTitle,
} from "@t2-educacao/midas";
import { IconFlame } from "@t2-educacao/midas/icons";

export default function HeroContinuar() {
  return (
    <Hero
      media={<div className="size-full bg-linear-to-br from-chart-3 via-chart-2 to-chart-1" />}
      aria-label="Continuar estudando"
    >
      <HeroContent>
        <HeroChips>
          <HeroChip icon={<IconFlame aria-hidden />}>7 dias seguidos</HeroChip>
          <HeroChip>Prova em 23 dias</HeroChip>
        </HeroChips>
        <HeroEyebrow>CONTINUE ESTUDANDO</HeroEyebrow>
        <HeroTitle>Preparatório CPA-20</HeroTitle>
        <HeroDescription>Revise fundos de investimento e conclua o módulo 3.</HeroDescription>
        <HeroProgress label="71 de 178 aulas concluídas" value={40} />
        <HeroActions>
          <Button>Continuar estudando</Button>
          <Button variant="outline">Ver a grade do curso</Button>
        </HeroActions>
      </HeroContent>
    </Hero>
  );
}
