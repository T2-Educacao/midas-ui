import { DatePicker } from "@t2-educacao/midas";

const dia = 24 * 60 * 60 * 1000;

export default function DatePickerPresets() {
  const hoje = new Date();
  return (
    <DatePicker
      mode="range"
      confirm
      className="max-w-sm"
      presets={[
        { label: "Hoje", value: { from: hoje, to: hoje } },
        { label: "Últimos 7 dias", value: { from: new Date(Date.now() - 6 * dia), to: hoje } },
        { label: "Últimos 30 dias", value: { from: new Date(Date.now() - 29 * dia), to: hoje } },
      ]}
    />
  );
}
