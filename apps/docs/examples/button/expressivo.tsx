import { Button } from "@t2-educacao/midas";

export default function ButtonExpressivo() {
  return (
    <div className="flex flex-wrap items-center gap-3 rounded-container bg-linear-to-br from-action-accent-gradient-top to-action-primary-gradient-bottom p-6">
      <Button variant="glass" rounded size="lg">
        Glass
      </Button>
      <Button variant="liquid-glass" rounded size="lg">
        Liquid Glass
      </Button>
      <Button variant="frosted" rounded size="lg">
        Frosted
      </Button>
      <Button variant="frosted-accent" rounded size="lg">
        Frosted Accent
      </Button>
      <Button variant="on-media" rounded size="lg">
        On media
      </Button>
      <Button variant="gradient-accent" rounded size="xl">
        Gradient Accent
      </Button>
      <Button variant="gradient-neutral" rounded size="2xl">
        Gradient Neutral
      </Button>
    </div>
  );
}
