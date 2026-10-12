import { Button } from "@t2-educacao/midas";
import { IconGitBranch, IconPlus } from "@t2-educacao/midas/icons";

export default function ButtonComIcone() {
  return (
    <>
      <Button>
        <IconPlus /> Novo curso
      </Button>
      <Button variant="outline">
        <IconGitBranch /> Nova branch
      </Button>
    </>
  );
}
