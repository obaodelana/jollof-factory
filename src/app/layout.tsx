import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Archivo_Black, Permanent_Marker } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

const archivo = Archivo_Black({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: "400",
});

const marker = Permanent_Marker({
  variable: "--font-marker",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Jollof Factory",
  description: "A tomato-free, pepper-based cooking sauce that delivers layered West African flavor in minutes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jakarta.variable} ${archivo.variable} ${marker.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col font-sans bg-cream text-dark antialiased">
          <Header />
          <main className="grow flex flex-col">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
