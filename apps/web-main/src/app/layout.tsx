import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import { Footer } from "@repo/ui/footer";
import { Header } from "@repo/ui/header";

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
});

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Doblando el Viento - Diseño & Curaduría para Eventos en Querétaro",
  description: "Velas artesanales, detalles para eventos, barras dulces y montajes para celebraciones en Querétaro",
};

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Servicios", href: "/servicios" },
  { name: "Galería", href: "/galeria" },
  { name: "Testimonios", href: "/testimonios" },
  { name: "Cotización", href: "/cotizacion" },
  { name: "Contacto", href: "/contacto" },
];

const otherBrands = [
  { name: "TAVITI - Papelería Boutique", url: "/taviti" },
  { name: "ILAIA - Educación STEAM", url: "/ilaia" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${playfair.variable} ${montserrat.variable} font-sans`}>
        <Header 
          brand="doblado" 
          brandName="Doblando el Viento" 
          navigation={navigation}
        />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer 
          brandName="Doblando el Viento"
          otherBrands={otherBrands}
        />
      </body>
    </html>
  );
}
