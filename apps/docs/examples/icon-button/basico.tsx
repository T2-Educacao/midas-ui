import { IconButton } from "@t2-educacao/midas";
import { IconHeart, IconSearch, IconSettings } from "@t2-educacao/midas/icons";

export default function IconButtonBasico() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-2">
        <IconButton aria-label="Buscar" size="xs">
          <IconSearch />
        </IconButton>
        <IconButton aria-label="Buscar" size="sm">
          <IconSearch />
        </IconButton>
        <IconButton aria-label="Buscar" size="md">
          <IconSearch />
        </IconButton>
        <IconButton aria-label="Buscar" size="lg">
          <IconSearch />
        </IconButton>
        <IconButton aria-label="Buscar" size="xl">
          <IconSearch />
        </IconButton>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <IconButton aria-label="Favoritar" variant="accent" shape="circle">
          <IconHeart />
        </IconButton>
        <IconButton aria-label="Configurações" variant="outline">
          <IconSettings />
        </IconButton>
        <IconButton aria-label="Configurações" variant="ghost">
          <IconSettings />
        </IconButton>
        <IconButton aria-label="Carregando" loading />
        <IconButton aria-label="Indisponível" disabled>
          <IconSettings />
        </IconButton>
      </div>
    </div>
  );
}
