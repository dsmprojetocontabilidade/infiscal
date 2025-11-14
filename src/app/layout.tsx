import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "InFiscal - Gonsalves Hub Tool",
  description: "Ferramenta para consultas rápidas na rotina da contabilidade fiscal e tributária.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        {children}
        <Footer />  
      </body>
    </html>
  );
}
