import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { Logo } from "@/components/logo";
import { ThemeSelector } from "@/components/theme-selector";
import { gitConfig, npmUrl } from "./shared";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: <Logo />,
      url: "/",
    },
    links: [
      { text: "Documentação", url: "/docs", active: "nested-url" },
      { text: "Componentes", url: "/docs/components/button", active: "none" },
      { text: "npm", url: npmUrl, external: true },
    ],
    themeSwitch: { component: <ThemeSelector /> },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
