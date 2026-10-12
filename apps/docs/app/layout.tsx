import { Toaster } from "@t2-educacao/midas";
import { RootProvider } from "fumadocs-ui/provider/next";
import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import "./global.css";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });

export const metadata: Metadata = {
  title: { default: "Midas | T2 Educação", template: "%s | Midas" },
  description: "Midas, o design system da T2 Educação: componentes React, tokens e ícones.",
};

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${jetbrainsMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col bg-background text-foreground">
        <RootProvider theme={{ attribute: "data-theme", themes: ["light", "dark", "dark-blue"] }}>
          {children}
        </RootProvider>
        <Toaster />
      </body>
    </html>
  );
}
