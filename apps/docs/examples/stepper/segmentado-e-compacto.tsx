import { Stepper, StepperCompact, StepperItem, StepperTitle } from "@t2-educacao/midas";

export default function StepperSegmentadoECompacto() {
  return (
    <div className="flex max-w-xl flex-col gap-8">
      <Stepper type="segmented" value={1} aria-label="Checkout">
        <StepperItem>
          <StepperTitle>Carrinho</StepperTitle>
        </StepperItem>
        <StepperItem>
          <StepperTitle>Pagamento</StepperTitle>
        </StepperItem>
        <StepperItem>
          <StepperTitle>Confirmação</StepperTitle>
        </StepperItem>
      </Stepper>
      <StepperCompact value={2} total={5} title="Pagamento" nextTitle="Confirmação" />
    </div>
  );
}
