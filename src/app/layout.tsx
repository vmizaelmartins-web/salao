import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Karen Salla Designer",
  description: "Beleza, cuidado e bem-estar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}