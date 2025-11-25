import type { Metadata } from "next";
import { Header } from "@repo/ui/header";
import { Footer } from "@repo/ui/footer";

export const metadata: Metadata = {
  title: "ILAIA - Educación STEAM",
  description: "Plataforma educativa especializada en ciencia, tecnología, ingeniería, arte y matemáticas.",
};

const ilaiaNavigation = [
  { name: "Inicio", href: "/ilaia" },
  { name: "Programas", href: "/ilaia/programas" },
  { name: "Talleres", href: "/ilaia/talleres" },
  { name: "Recursos", href: "/ilaia/recursos" },
  { name: "Eventos", href: "/ilaia/eventos" },
  { name: "Equipo", href: "/ilaia/equipo" },
  { name: "Blog", href: "/ilaia/blog" },
  { name: "Contacto", href: "/ilaia/contacto" },
];

export default function IlaiaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header brand="ilaia" brandName="ILAIA" navigation={ilaiaNavigation} />
      {children}
      <Footer brandName="ILAIA" />
    </>
  );
}
