import { Rating, RatingSummary } from "@t2-educacao/midas";

export default function RatingResumo() {
  return (
    <div className="grid gap-4">
      <RatingSummary score={4.8} count={1284} />
      <RatingSummary score={4.8} count={1284} type="coin" size="sm" />
      <Rating readOnly size="sm" defaultValue={4} showValueLabel={false} aria-label="Nota 4 de 5" />
    </div>
  );
}
