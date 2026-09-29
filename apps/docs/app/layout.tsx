import { RootProvider } from "fumadocs-ui/provider/next";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./global.css";

const sans = Geist({ subsets: ["latin"], variable: "--midas-font-sans" });

export const metadata: Metadata = {
  title: { default: "Midas", template: "%s | Midas" },
  description: "O design system da T2 Educação para React e Next.js.",
};

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${sans.className} ${sans.variable}`} suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
