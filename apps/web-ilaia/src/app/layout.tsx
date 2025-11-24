import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@repo/ui/footer";
import { Header } from "@repo/ui/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ILAIA - Educación STEAM para Niños",
  description: "Cursos, kits y material didáctico STEAM: ciencia, robótica, y aprendizaje creativo para niños",
};

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Cursos", href: "/cursos" },
  { name: "Recursos", href: "/recursos" },
  { name: "Blog", href: "/blog" },
  { name: "Calendario", href: "/calendario" },
  { name: "Inscripción", href: "/inscripcion" },
  { name: "Contacto", href: "/contacto" },
];

const otherBrands = [
  { name: "Doblando el Viento - Eventos", url: "https://doblandoelviento.com" },
  { name: "TAVITI - Papelería Boutique", url: "https://taviti.doblandoelviento.com" },
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
          brand="ilaia" 
          brandName="ILAIA" 
          navigation={navigation}
        />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer 
          brandName="ILAIA"
          otherBrands={otherBrands}
        />
      </body>
    </html>
  );
}
