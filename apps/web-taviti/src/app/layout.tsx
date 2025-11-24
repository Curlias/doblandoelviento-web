import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import { Footer } from "@repo/ui/footer";
import { Header } from "@repo/ui/header";

const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TAVITI - Papelería Boutique",
  description: "Papelería de lujo, stickers, journaling y scrapbooking de la más alta calidad",
};

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Catálogo", href: "/catalogo" },
  { name: "Blog", href: "/blog" },
  { name: "Contacto", href: "/contacto" },
];

const otherBrands = [
  { name: "Doblando el Viento - Eventos", url: "https://doblandoelviento.com" },
  { name: "ILAIA - Educación STEAM", url: "https://ilaia.doblandoelviento.com" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={playfair.className}>
        <Header 
          brand="taviti" 
          brandName="TAVITI" 
          navigation={navigation}
        />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer 
          brandName="TAVITI"
          otherBrands={otherBrands}
        />
      </body>
    </html>
  );
}
