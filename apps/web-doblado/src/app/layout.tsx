import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@repo/ui/footer";
import { Header } from "@repo/ui/header";

const inter = Inter({ subsets: ["latin"] });

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
  { name: "TAVITI - Papelería Boutique", url: "https://taviti.doblandoelviento.com" },
  { name: "ILAIA - Educación STEAM", url: "https://ilaia.doblandoelviento.com" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
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
