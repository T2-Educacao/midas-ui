import { HeroLesson } from "@t2-educacao/midas";

export default function HeroAulasDoModulo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-1 rounded-container border border-border-subtle bg-surface-default p-2">
      <HeroLesson index="AULA 03" title="Classes ANBIMA" meta="14 min" state="done" />
      <HeroLesson
        index="AULA 05 · TOCANDO"
        title="Come-cotas na prática"
        meta="12 min"
        state="playing"
      />
      <HeroLesson index="AULA 06" title="Tributação de fundos" meta="18 min" />
    </div>
  );
}
