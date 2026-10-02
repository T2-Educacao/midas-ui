import { Button } from "@t2-educacao/midas";
import { GitBranch, Plus } from "@t2-educacao/midas/icons";

export default function ButtonComIcone() {
  return (
    <>
      <Button>
        <Plus /> Novo curso
      </Button>
      <Button variant="outline">
        <GitBranch /> Nova branch
      </Button>
    </>
  );
}
