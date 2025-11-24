import { Button } from "@repo/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@repo/ui/card";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 sm:text-6xl">
              Doblando el Viento
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Diseño & Curaduría para eventos en Querétaro
            </p>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
              Velas artesanales de cera de soya, detalles personalizados, barras dulces 
              y montajes completos para hacer de tu celebración un momento inolvidable
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="/cotizacion">
                <Button variant="primary" size="lg">
                  Solicitar Cotización
                </Button>
              </a>
              <a 
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5212345678901"}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg">
                  WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Nuestros Servicios
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card variant="elevated">
              <CardHeader>
                <CardTitle>Curaduría Completa</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Diseño y coordinación integral de tu evento. Desde la conceptualización 
                  hasta el montaje final.
                </p>
                <a href="/servicios" className="mt-4 inline-block text-primary-600 hover:text-primary-700">
                  Ver más →
                </a>
              </CardContent>
            </Card>

            <Card variant="elevated">
              <CardHeader>
                <CardTitle>Barra Dulce</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Mesas de dulces personalizadas con decoración temática y dulces artesanales 
                  de la más alta calidad.
                </p>
                <a href="/servicios" className="mt-4 inline-block text-primary-600 hover:text-primary-700">
                  Ver más →
                </a>
              </CardContent>
            </Card>

            <Card variant="elevated">
              <CardHeader>
                <CardTitle>Detalles & Recuerdos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Velas artesanales de cera de soya, cajitas personalizadas y detalles 
                  únicos para tus invitados.
                </p>
                <a href="/servicios" className="mt-4 inline-block text-primary-600 hover:text-primary-700">
                  Ver más →
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Listo para crear un evento inolvidable?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Cotiza tu evento sin compromiso y descubre cómo podemos ayudarte
          </p>
          <a href="/cotizacion">
            <Button variant="secondary" size="lg">
              Obtener Cotización
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
