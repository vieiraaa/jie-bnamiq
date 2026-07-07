import type { Metadata } from "next";
import { Manrope, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import LoadingScreen from "@/components/LoadingScreen";
import SmoothScroll from "@/components/SmoothScroll";
import Footer from "@/components/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-display-src",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body-src",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-src",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jiebnamiq.com.br"),
  title: {
    default: "JIE BNAMIQ",
    template: "%s · JIE BNAMIQ",
  },
  description:
    "JIE BNAMIQ, joint venture entre JIE JDRIVE e BNAMIQ: motorredutores, redutores, planetários e soluções de acionamento industrial com engenharia global e distribuição local.",
  keywords: [
    "motorredutor",
    "redutor planetário",
    "transmissão de potência",
    "JIE BNAMIQ",
    "A.T.I. BRASIL",
  ],
  openGraph: {
    title: "JIE BNAMIQ — Movendo a indústria com inteligência",
    description:
      "A força da engenharia global com a confiança da distribuição local.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "JIE BNAMIQ",
    description: "A força da engenharia global com a confiança da distribuição local.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${manrope.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        <LoadingScreen />
        <SmoothScroll>
          <div className="flex min-h-screen">
            <Sidebar />
            <main className="flex-1 md:pl-[76px] transition-[padding] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
              {children}
              <Footer />
            </main>
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
