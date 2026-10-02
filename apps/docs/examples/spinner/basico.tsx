import { Spinner } from "@t2-educacao/midas";

export default function SpinnerBasico() {
  return (
    <>
      <Spinner />
      <Spinner className="size-6" />
      <Spinner className="size-8 text-primary" />
    </>
  );
}
