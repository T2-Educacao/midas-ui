"use client";

import { Button, ButtonGroup, ButtonGroupSeparator, DirectionProvider } from "@t2-educacao/midas";
import { ArrowLeft, ArrowRight } from "@t2-educacao/midas/icons";

export default function ButtonGroupRtl() {
  return (
    <div dir="rtl">
      <DirectionProvider dir="rtl">
        <ButtonGroup aria-label="Navegação">
          <Button variant="outline">
            <ArrowRight className="rtl:rotate-180" /> السابق
          </Button>
          <ButtonGroupSeparator />
          <Button variant="outline">
            التالي <ArrowLeft className="rtl:rotate-180" />
          </Button>
        </ButtonGroup>
      </DirectionProvider>
    </div>
  );
}
