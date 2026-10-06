import { Stepper, StepperDescription, StepperItem, StepperTitle } from "@t2-educacao/midas";

export default function StepperBasico() {
  return (
    <Stepper value={1} aria-label="Progresso da matrícula" className="max-w-xl">
      <StepperItem>
        <StepperTitle>Conta</StepperTitle>
        <StepperDescription>Dados básicos</StepperDescription>
      </StepperItem>
      <StepperItem>
        <StepperTitle>Pagamento</StepperTitle>
        <StepperDescription>Forma de pagamento</StepperDescription>
      </StepperItem>
      <StepperItem>
        <StepperTitle>Confirmação</StepperTitle>
        <StepperDescription>Revise e finalize</StepperDescription>
      </StepperItem>
    </Stepper>
  );
}
