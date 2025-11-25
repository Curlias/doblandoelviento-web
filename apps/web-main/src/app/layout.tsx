import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import { BrandLayoutWrapper } from "@/components/brand-layout-wrapper";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${playfair.variable} ${montserrat.variable} font-sans`}>
        <BrandLayoutWrapper>
          {children}
        </BrandLayoutWrapper>
      </body>
    </html>
  );
}
