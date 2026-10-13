import { HeroPanel, HeroPanels, HeroProgress } from "@t2-educacao/midas";

const modulos = [
  { value: "1", index: "01", title: "Fundamentos" },
  { value: "2", index: "02", title: "Ética e regulação" },
  { value: "3", index: "03", title: "Fundos de investimento" },
  { value: "4", index: "04", title: "Renda fixa" },
];

export default function HeroPaineis() {
  return (
    <HeroPanels defaultValue="3" aria-label="Módulos da trilha">
      {modulos.map((modulo) => (
        <HeroPanel
          key={modulo.value}
          value={modulo.value}
          index={modulo.index}
          title={modulo.title}
        >
          <HeroProgress label="8 de 12 aulas" value={66} />
        </HeroPanel>
      ))}
    </HeroPanels>
  );
}
