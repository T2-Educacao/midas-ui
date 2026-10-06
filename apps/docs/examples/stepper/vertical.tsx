import { Stepper, StepperDescription, StepperItem, StepperTitle } from "@t2-educacao/midas";

export default function StepperVertical() {
  return (
    <Stepper value={2} orientation="vertical" aria-label="Etapas da matrícula" className="max-w-xs">
      <StepperItem className="pb-6">
        <StepperTitle>Matrícula</StepperTitle>
        <StepperDescription>Dados enviados</StepperDescription>
      </StepperItem>
      <StepperItem className="pb-6">
        <StepperTitle>Pagamento</StepperTitle>
        <StepperDescription>Aguardando confirmação</StepperDescription>
      </StepperItem>
      <StepperItem>
        <StepperTitle>Acesso liberado</StepperTitle>
        <StepperDescription>Comece a estudar</StepperDescription>
      </StepperItem>
    </Stepper>
  );
}
