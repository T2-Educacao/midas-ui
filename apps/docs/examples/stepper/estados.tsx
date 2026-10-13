import { Stepper, StepperDescription, StepperItem, StepperTitle } from "@t2-educacao/midas";
import { IconCreditCard, IconUser } from "@t2-educacao/midas/icons";

export default function StepperEstados() {
  return (
    <div className="flex max-w-2xl flex-col gap-8">
      <Stepper value={1} aria-label="Indicador número">
        <StepperItem>
          <StepperTitle>Conta</StepperTitle>
          <StepperDescription>Dados básicos</StepperDescription>
        </StepperItem>
        <StepperItem>
          <StepperTitle>Pagamento</StepperTitle>
          <StepperDescription>Cartão ou Pix</StepperDescription>
        </StepperItem>
        <StepperItem>
          <StepperTitle>Confirmação</StepperTitle>
        </StepperItem>
      </Stepper>
      <Stepper value={1} aria-label="Indicador ícone e erro">
        <StepperItem indicator="icon" icon={<IconUser />}>
          <StepperTitle>Conta</StepperTitle>
        </StepperItem>
        <StepperItem indicator="icon" icon={<IconCreditCard />} state="error">
          <StepperTitle>Pagamento recusado</StepperTitle>
          <StepperDescription>Revise o cartão</StepperDescription>
        </StepperItem>
        <StepperItem indicator="icon" icon={<IconCreditCard />}>
          <StepperTitle>Confirmação</StepperTitle>
        </StepperItem>
      </Stepper>
      <Stepper value={1} aria-label="Indicador ponto">
        <StepperItem indicator="dot">
          <StepperTitle>Conta</StepperTitle>
        </StepperItem>
        <StepperItem indicator="dot">
          <StepperTitle>Pagamento</StepperTitle>
        </StepperItem>
        <StepperItem indicator="dot">
          <StepperTitle>Confirmação</StepperTitle>
        </StepperItem>
      </Stepper>
    </div>
  );
}
