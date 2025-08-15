import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WhatsAppBubble from "@/components/WhatsAppBubble"
import AosWrapper from "@/components/AosWrapper"

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
  metadataBase: new URL('https://brokersalud.com.ar'),
  openGraph: {
    title: 'Broker Salud | Planes de Salud a tu medida',
    description:
      'Conocé nuestros planes de salud para monotributistas, mayores de 60 años y familias. Asesoramiento personalizado y cobertura nacional.',
    url: 'https://brokersalud.com.ar',
    siteName: 'Broker Salud',
    images: [
      {
        url: 'https://brokersalud.com.ar/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Broker Salud - Planes de salud',
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Broker Salud | Planes de Salud a tu medida',
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
