import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WhatsAppBubble from "@/components/WhatsAppBubble"

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <div className="min-h-[calc(100vh-200px)]">
          {children}
        </div>
        <Footer />
        <WhatsAppBubble />
      </body>
    </html>
  );
}
