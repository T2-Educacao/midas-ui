"use client";

import {
  Button,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@t2-educacao/midas";
import { Bell, ChatCircle, EnvelopeSimple } from "@t2-educacao/midas/icons";
import { useState } from "react";

export default function DropdownMenuCheckboxesComIcones() {
  const [email, setEmail] = useState(true);
  const [sms, setSms] = useState(false);
  const [push, setPush] = useState(true);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Notificações</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-52">
        <DropdownMenuLabel>Preferências de notificação</DropdownMenuLabel>
        <DropdownMenuCheckboxItem checked={email} onCheckedChange={setEmail}>
          <EnvelopeSimple /> E-mail
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={sms} onCheckedChange={setSms}>
          <ChatCircle /> SMS
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={push} onCheckedChange={setPush}>
          <Bell /> Push
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
