"use client";

import {
  Avatar,
  AvatarFallback,
  NotificationBell,
  NotificationCenter,
  NotificationCenterContent,
  NotificationCenterFooter,
  NotificationCenterHeader,
  NotificationGroup,
  NotificationItem,
} from "@t2-educacao/midas";
import { useState } from "react";

export default function NotificationCentro() {
  const [aberto, setAberto] = useState(true);

  return (
    <div className="flex flex-col items-start gap-3">
      <NotificationBell count={3} open={aberto} onClick={() => setAberto((valor) => !valor)} />
      {aberto ? (
        <NotificationCenter>
          <NotificationCenterHeader count={3} />
          <NotificationCenterContent>
            <NotificationGroup label="HOJE">
              <NotificationItem
                type="mention"
                unread
                leading={
                  <Avatar size="md">
                    <AvatarFallback>AL</AvatarFallback>
                  </Avatar>
                }
                quote="@Laura, você tem o resumo do módulo 3?"
                meta="há 12 min · Comunidade"
              >
                <strong>Ana Lima</strong> mencionou você em Come-cotas na prática
              </NotificationItem>
              <NotificationItem type="course" unread meta="há 3 h · Preparatório CPA-20">
                Nova aula liberada: Tributação de fundos
              </NotificationItem>
              <NotificationItem type="exam" meta="31 out · 14h · São Paulo">
                Sua prova CPA-20 é em 23 dias
              </NotificationItem>
            </NotificationGroup>
            <NotificationGroup label="ESTA SEMANA">
              <NotificationItem type="achievement" meta="hoje · Conquista">
                7 dias seguidos! Você manteve a sequência de estudos
              </NotificationItem>
            </NotificationGroup>
          </NotificationCenterContent>
          <NotificationCenterFooter>
            <button type="button">Marcar todas como lidas</button>
            <a href="/notificacoes">Ver todas</a>
          </NotificationCenterFooter>
        </NotificationCenter>
      ) : null}
    </div>
  );
}
