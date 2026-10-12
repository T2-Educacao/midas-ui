"use client";

import {
  Button,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@t2-educacao/midas";
import { IconBell, IconMail, IconMessageCircle } from "@t2-educacao/midas/icons";
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
          <IconMail /> E-mail
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={sms} onCheckedChange={setSms}>
          <IconMessageCircle /> SMS
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={push} onCheckedChange={setPush}>
          <IconBell /> Push
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
