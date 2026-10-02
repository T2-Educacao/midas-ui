import { Toggle } from "@t2-educacao/midas";

export default function ToggleTamanhos() {
  return (
    <>
      <Toggle variant="outline" size="sm">
        Small
      </Toggle>
      <Toggle variant="outline">Default</Toggle>
      <Toggle variant="outline" size="lg">
        Large
      </Toggle>
      <Toggle variant="outline" disabled>
        Desabilitado
      </Toggle>
    </>
  );
}
