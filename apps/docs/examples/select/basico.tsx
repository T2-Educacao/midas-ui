import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@t2-educacao/midas";

export default function SelectBasico() {
  return (
    <Select>
      <SelectTrigger className="w-56" aria-label="Certificação">
        <SelectValue placeholder="Selecione a certificação" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Bancárias</SelectLabel>
          <SelectItem value="cpa">CPA</SelectItem>
          <SelectItem value="cpro-r">CPRO-R</SelectItem>
          <SelectItem value="cpro-i">CPRO-I</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Planejamento</SelectLabel>
          <SelectItem value="cfp">CFP®</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
