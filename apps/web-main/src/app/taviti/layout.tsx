import type { Metadata } from "next";
import { Header } from "@repo/ui/header";
import { Footer } from "@repo/ui/footer";

export const metadata: Metadata = {
  title: "TAVITI - Papelería Boutique",
  description: "Papelería fina, diseño elegante y productos únicos para tus eventos especiales.",
};

const tavitiNavigation = [
  { name: "Inicio", href: "/taviti" },
  { name: "Productos", href: "/taviti/productos" },
  { name: "Galería", href: "/taviti/galeria" },
  { name: "Sobre Nosotros", href: "/taviti/sobre-nosotros" },
  { name: "Contacto", href: "/taviti/contacto" },
];

const otherBrands = [
  { name: "Doblando el Viento", url: "/" },
  { name: "ILAIA - Educación STEAM", url: "/ilaia" },
];

export default function TavitiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header brand="taviti" brandName="TAVITI" navigation={tavitiNavigation} />
      {children}
      <Footer brandName="TAVITI" otherBrands={otherBrands} brand="taviti" />
    </>
  );
}
