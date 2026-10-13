"use client";

import { Banner, BannerAction } from "@t2-educacao/midas";

export default function BannerStatus() {
  return (
    <div className="flex w-full flex-col gap-3">
      <Banner
        layout="inline"
        status="info"
        title="Nova trilha CEA disponível."
        action={<BannerAction>Ver trilha</BannerAction>}
        onClose={() => {}}
      >
        Comece pelo módulo 1 quando quiser.
      </Banner>
      <Banner
        layout="inline"
        status="success"
        title="Certificado CPA-20 emitido!"
        action={<BannerAction>Baixar</BannerAction>}
      >
        Já está disponível para download.
      </Banner>
      <Banner
        layout="inline"
        status="warning"
        title="Sua assinatura renova em 3 dias."
        action={<BannerAction>Revisar</BannerAction>}
      >
        Confira a forma de pagamento.
      </Banner>
      <Banner
        layout="inline"
        status="error"
        title="Você está offline."
        action={<BannerAction>Tentar agora</BannerAction>}
      >
        Suas respostas serão sincronizadas quando a conexão voltar.
      </Banner>
      <Banner layout="inline" status="neutral" title="Manutenção sábado, das 2h às 4h.">
        A plataforma pode ficar instável nesse período.
      </Banner>
    </div>
  );
}
