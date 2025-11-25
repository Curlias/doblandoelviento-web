"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { Header } from "@repo/ui/header";
import { Footer } from "@repo/ui/footer";
import { BrandSwitcher } from "@repo/ui/brand-switcher";

type Brand = "doblado" | "taviti" | "ilaia";

interface BrandConfig {
  brand: Brand;
  brandName: string;
  navigation: Array<{ name: string; href: string }>;
  otherBrands: Array<{ name: string; url: string }>;
}

const brandConfigs: Record<Brand, BrandConfig> = {
  doblado: {
    brand: "doblado",
    brandName: "Doblando el Viento",
    navigation: [
      { name: "Inicio", href: "/" },
      { name: "Servicios", href: "/servicios" },
      { name: "Galería", href: "/galeria" },
      { name: "Testimonios", href: "/testimonios" },
      { name: "Cotización", href: "/cotizacion" },
      { name: "Contacto", href: "/contacto" },
    ],
    otherBrands: [
      { name: "TAVITI - Papelería Boutique", url: "/taviti" },
      { name: "ILAIA - Educación STEAM", url: "/ilaia" },
    ],
  },
  taviti: {
    brand: "taviti",
    brandName: "TAVITI",
    navigation: [
      { name: "Inicio", href: "/taviti" },
      { name: "Productos", href: "/taviti/productos" },
      { name: "Personalización", href: "/taviti/personalizacion" },
      { name: "Galería", href: "/taviti/galeria" },
      { name: "Sobre Nosotros", href: "/taviti/sobre-nosotros" },
      { name: "Contacto", href: "/taviti/contacto" },
    ],
    otherBrands: [
      { name: "Doblando el Viento - Eventos", url: "/" },
      { name: "ILAIA - Educación STEAM", url: "/ilaia" },
    ],
  },
  ilaia: {
    brand: "ilaia",
    brandName: "ILAIA",
    navigation: [
      { name: "Inicio", href: "/ilaia" },
      { name: "Programas", href: "/ilaia/programas" },
      { name: "Talleres", href: "/ilaia/talleres" },
      { name: "Recursos", href: "/ilaia/recursos" },
      { name: "Eventos", href: "/ilaia/eventos" },
      { name: "Equipo", href: "/ilaia/equipo" },
      { name: "Blog", href: "/ilaia/blog" },
      { name: "Contacto", href: "/ilaia/contacto" },
    ],
    otherBrands: [
      { name: "Doblando el Viento - Eventos", url: "/" },
      { name: "TAVITI - Papelería Boutique", url: "/taviti" },
    ],
  },
};

export function BrandLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // Determinar la marca actual basado en la ruta usando useMemo
  const currentBrand = React.useMemo((): Brand => {
    if (pathname.startsWith("/taviti")) return "taviti";
    if (pathname.startsWith("/ilaia")) return "ilaia";
    return "doblado";
  }, [pathname]);

  const config = brandConfigs[currentBrand];

  return (
    <>
      <BrandSwitcher 
        currentBrand={currentBrand}
      />
      <Header 
        brand="doblado"
        brandName={config.brandName} 
        navigation={config.navigation}
      />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer 
        brandName={config.brandName}
        otherBrands={config.otherBrands}
        brand={currentBrand === "doblado" ? "doblado" : undefined}
      />
    </>
  );
}
