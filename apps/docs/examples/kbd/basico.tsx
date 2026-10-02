import { Kbd, KbdGroup } from "@t2-educacao/midas";

export default function KbdBasico() {
  return (
    <>
      <Kbd>Esc</Kbd>
      <KbdGroup>
        <Kbd>Ctrl</Kbd>
        <Kbd>K</Kbd>
      </KbdGroup>
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <Kbd>⇧</Kbd>
        <Kbd>P</Kbd>
      </KbdGroup>
    </>
  );
}
