import {
  Badge,
  Button,
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@t2-educacao/midas";

export default function CardBasico() {
  return (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Assinatura anual</CardTitle>
        <CardDescription>Acesso a todos os cursos da T2.</CardDescription>
        <CardAction>
          <Badge variant="default">Mais escolhido</Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-semibold">12x de R$ 49,90</p>
      </CardContent>
      <CardFooter className="justify-end">
        <Button size="sm" variant="outline">
          Detalhes
        </Button>
        <Button size="sm">Assinar</Button>
      </CardFooter>
    </Card>
  );
}
