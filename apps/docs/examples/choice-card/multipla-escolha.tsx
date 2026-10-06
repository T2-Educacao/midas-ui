import { ChoiceCardCheckbox } from "@t2-educacao/midas";

export default function ChoiceCardMultiplaEscolha() {
  return (
    <div role="group" aria-label="Extras" className="grid gap-3 sm:grid-cols-2">
      <ChoiceCardCheckbox
        title="Certificado"
        description="Emitido ao concluir o curso."
        defaultChecked
      />
      <ChoiceCardCheckbox title="Mentoria" description="Sessões individuais com especialistas." />
    </div>
  );
}
