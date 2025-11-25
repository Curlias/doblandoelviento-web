import { Card, CardContent, CardHeader, CardTitle } from "@repo/ui/card";
import { Button } from "@repo/ui/button";

export default function ContactoPage() {
  return (
    <div className="bg-gray-50">
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 text-center">
            Contacto
          </h1>
          <p className="mt-4 text-lg text-gray-600 text-center max-w-3xl mx-auto">
            Estamos aquí para hacer realidad el evento de tus sueños
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div>
            <Card variant="elevated">
              <CardHeader>
                <CardTitle>Información de Contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="text-3xl">📍</div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Ubicación</h3>
                    <p className="mt-1 text-gray-600">
                      Querétaro, Querétaro, México
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      Atendemos eventos en Querétaro y alrededores
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="text-3xl">📱</div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">WhatsApp</h3>
                    <a 
                      href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5212345678901"}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 text-primary-600 hover:text-primary-700"
                    >
                      {process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+52 (442) 123-4567"}
                    </a>
                    <p className="mt-1 text-sm text-gray-500">
                      Lun - Vie: 9:00 AM - 7:00 PM<br />
                      Sáb: 10:00 AM - 3:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="text-3xl">✉️</div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Email</h3>
                    <a 
                      href="mailto:contacto@doblandoelviento.com"
                      className="mt-1 text-primary-600 hover:text-primary-700"
                    >
                      contacto@doblandoelviento.com
                    </a>
                    <p className="mt-1 text-sm text-gray-500">
                      Te responderemos en menos de 24 horas
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="text-3xl">👥</div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Redes Sociales</h3>
                    <div className="mt-2 space-y-2">
                      <a href="#" className="block text-gray-600 hover:text-primary-600">
                        Facebook: @doblandoelviento
                      </a>
                      <a href="#" className="block text-gray-600 hover:text-primary-600">
                        Instagram: @doblandoelviento
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card variant="elevated" className="mt-8">
              <CardContent className="pt-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  ¿Listo para comenzar?
                </h3>
                <p className="text-gray-600 mb-6">
                  Solicita tu cotización sin compromiso y descubre cómo podemos hacer de tu 
                  evento algo extraordinario.
                </p>
                <a href="/cotizacion">
                  <Button variant="primary" size="lg" className="w-full">
                    Solicitar Cotización
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card variant="elevated">
              <CardHeader>
                <CardTitle>Mapa</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg aspect-w-16 aspect-h-9 flex items-center justify-center" style={{ minHeight: "400px" }}>
                  <div className="text-center p-6">
                    <div className="text-6xl mb-4">🗺️</div>
                    <p className="text-gray-600 font-medium">
                      Mapa de Querétaro
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      Para configurar el mapa, agrega tu API key de Google Maps<br />
                      en las variables de entorno (NEXT_PUBLIC_GOOGLE_MAPS_API_KEY)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card variant="elevated" className="mt-8">
              <CardHeader>
                <CardTitle>Preguntas Frecuentes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900">¿Con cuánta anticipación debo contratar?</h4>
                  <p className="mt-1 text-sm text-gray-600">
                    Recomendamos reservar con al menos 3 meses de anticipación para eventos grandes, 
                    y 1 mes para eventos más pequeños.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">¿Atienden eventos fuera de Querétaro?</h4>
                  <p className="mt-1 text-sm text-gray-600">
                    Sí, podemos atender eventos en ciudades cercanas. Consulta disponibilidad y 
                    costos de traslado.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">¿Hacen paquetes personalizados?</h4>
                  <p className="mt-1 text-sm text-gray-600">
                    ¡Por supuesto! Cada evento es único y creamos propuestas adaptadas a tus 
                    necesidades y presupuesto.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
