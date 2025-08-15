import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StructuredData from '@/components/StructuredData';
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
  title: 'BrokerSalud',
  description:
    'Conocé nuestros planes de salud para monotributistas, mayores de 60 años y familias. Asesoramiento personalizado y cobertura nacional.',
  keywords: 'salud, planes de salud, prepaga, prepagas, monotributistas, mayores de 60, sin limite de edad, cobertura médica, obras sociales, salud prepaga, asesoramiento personalizado, cobertura nacional',
  metadataBase: new URL('https://brokersalud.com.ar'),
  openGraph: {
    title: 'Broker Salud | Planes de Salud a tu medida y sin limite de edad',
    description:
      'Conocé nuestros planes de salud para monotributistas, mayores de 60 años y familias. Asesoramiento personalizado y cobertura nacional.',
    url: 'https://brokersalud.com.ar',
    siteName: 'Broker Salud',
    images: [
      {
        url: 'https://brokersalud.com.ar/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Broker Salud - Planes de salud a tu medida y sin limite de edad',
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Broker Salud | Planes de Salud a tu medida y sin limite de edad',
    description:
      'Conocé nuestros planes de salud para monotributistas, mayores de 60 años y familias. Asesoramiento personalizado y cobertura nacional.',
    images: ['https://brokersalud.com.ar/og-image.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Head>
          {/* Etiquetas Open Graph */}
          <meta property="og:title" content="Broker Salud | Planes de Salud a tu medida" />
          <meta property="og:description" content="Conocé nuestros planes de salud para monotributistas, mayores de 60 años y familias. Asesoramiento personalizado y cobertura nacional." />
          <meta property="og:image" content="https://brokersalud.com.ar/og-image.jpg" />
          <meta property="og:url" content="https://brokersalud.com.ar" />
          <meta property="og:type" content="website" />

          {/* Etiquetas para Twitter Cards (opcional, también las usa WhatsApp) */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Broker Salud | Planes de Salud a tu medida y sin limite de edad" />
          <meta name="twitter:description" content="Conocé nuestros planes de salud para monotributistas, mayores de 60 años y familias. Asesoramiento personalizado y cobertura nacional." />
          <meta name="twitter:image" content="https://brokersalud.com.ar/og-image.jpg" />
        </Head>
        <Header />
        <div className="min-h-[calc(100vh-200px)]">
          <AosWrapper>{children}</AosWrapper>
        </div>
        <Footer />
        <StructuredData />
        <WhatsAppBubble />
      </body>
    </html>
  );
}
