import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WhatsAppBubble from "@/components/WhatsAppBubble"
import AosWrapper from "@/components/AosWrapper"
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "BrokerSalud",
  description: "BrokerSalud - Tu guía para elegir el mejor plan de salud",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>BrokerSalud</title>
        <meta name="description" content="BrokerSalud - Tu guía para elegir el mejor plan de salud" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Etiquetas Open Graph */}
        <meta property="og:title" content="Broker Salud | Planes de Salud a tu medida, sin limite de edad" />
        <meta property="og:description" content="Conocé nuestros planes de salud para monotributistas, mayores de 60 años y familias. Asesoramiento personalizado y cobertura nacional." />
        <meta property="og:image" content="https://brokersalud.com.ar/og-image.jpg" />
        <meta property="og:url" content="https://brokersalud.com.ar" />
        <meta property="og:type" content="website" />

        {/* Etiquetas para Twitter Cards (opcional, también las usa WhatsApp) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Broker Salud | Planes de Salud a tu medida, sin limite de edad" />
        <meta name="twitter:description" content="Conocé nuestros planes de salud para monotributistas, mayores de 60 años y familias. Asesoramiento personalizado y cobertura nacional." />
        <meta name="twitter:image" content="https://brokersalud.com.ar/og-image.jpg" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <div className="min-h-[calc(100vh-200px)]">
          <AosWrapper>{children}</AosWrapper>
        </div>
        <Footer />
        <WhatsAppBubble />
      </body>
    </html>
  );
}
