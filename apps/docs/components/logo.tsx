import Image from "next/image";

export function Logo() {
  return (
    <span className="flex items-center gap-2.5">
      <Image
        src="/brand/horizontal-padrao.png"
        alt="T2 Educação"
        width={92}
        height={22}
        priority
        className="h-5 w-auto dark:hidden"
      />
      <Image
        src="/brand/horizontal-negativa.png"
        alt="T2 Educação"
        width={92}
        height={22}
        priority
        className="hidden h-5 w-auto dark:block"
      />
      <span className="h-4 w-px bg-border" aria-hidden />
      <span className="font-semibold tracking-tight">Midas</span>
    </span>
  );
}
