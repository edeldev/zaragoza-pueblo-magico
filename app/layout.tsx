import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer, Header } from "@/layout";
import "./globals.css";
import { PageLoader } from "@/components";
import ScrollReset from "./scroll-reset";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gobierno de General Zaragoza, Nuevo León",
  description:
    "Descubre General Zaragoza, Nuevo León: un Pueblo Mágico rodeado de cascadas, montañas y naturaleza. Vive aventuras, historia y gastronomía única.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ScrollReset />
        <PageLoader>
          <Header />
          {children}
          <Footer />
        </PageLoader>
      </body>
    </html>
  );
}
