import { Banner, BannerAction } from "@t2-educacao/midas";

export default function BannerInverseELarguraTotal() {
  return (
    <div className="flex w-full flex-col gap-3 overflow-hidden rounded-container">
      <Banner appearance="inverse" status="info" title="Nova trilha CEA disponível.">
        Comece pelo módulo 1.
      </Banner>
      <Banner
        appearance="inverse"
        status="error"
        title="Você está offline."
        action={<BannerAction>Tentar agora</BannerAction>}
      >
        Suas respostas serão sincronizadas depois.
      </Banner>
    </div>
  );
}
