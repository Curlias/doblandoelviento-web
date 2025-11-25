import { Card, CardContent, CardHeader, CardTitle } from "@repo/ui/card";
import { Button } from "@repo/ui/button";

export default function ContactoPage() {
  return (
    <div className="bg-gray-50">
      <div className="bg-gradient-to-br from-pink-50 to-purple-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 text-center">
            Contacto
          </h1>
          <p className="mt-4 text-lg text-gray-600 text-center max-w-3xl mx-auto">
            Estamos aquí para ayudarte a encontrar los productos perfectos
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <Card variant="elevated">
            <CardHeader>
              <CardTitle>Información de Contacto</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start">
                <div className="text-3xl mr-4">📱</div>
                <div>
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
                    Lun - Vie: 10:00 AM - 7:00 PM<br />
                    Sáb: 10:00 AM - 3:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-3xl mr-4">✉️</div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Email</h3>
                  <a 
                    href="mailto:hola@taviti.com"
                    className="mt-1 text-primary-600 hover:text-primary-700"
                  >
                    hola@taviti.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-3xl mr-4">👥</div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Redes Sociales</h3>
                  <div className="mt-2 space-y-2">
                    <a href="#" className="block text-gray-600 hover:text-primary-600">
                      Instagram: @taviti.mx
                    </a>
                    <a href="#" className="block text-gray-600 hover:text-primary-600">
                      Pinterest: @tavitipapeleria
                    </a>
                    <a href="#" className="block text-gray-600 hover:text-primary-600">
                      Facebook: @TavitiPapeleria
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-primary-50 rounded-lg p-6 mt-8">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Envíos a todo México
                </h3>
                <p className="text-sm text-gray-600">
                  Hacemos envíos a toda la República Mexicana. 
                  Pregunta por los costos de envío según tu ubicación.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card variant="elevated">
            <CardHeader>
              <CardTitle>Preguntas Frecuentes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">
                  ¿Hacen pedidos personalizados?
                </h4>
                <p className="text-sm text-gray-600">
                  Sí, podemos personalizar varios de nuestros productos. Contáctanos por WhatsApp 
                  para discutir tus ideas y obtener una cotización.
                </p>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-2">
                  ¿Cuánto tardan los envíos?
                </h4>
                <p className="text-sm text-gray-600">
                  Los envíos dentro de Querétaro llegan en 2-3 días hábiles. 
                  Para el resto del país, entre 5-7 días hábiles.
                </p>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-2">
                  ¿Tienen tienda física?
                </h4>
                <p className="text-sm text-gray-600">
                  Trabajamos principalmente por pedidos en línea. Si estás en Querétaro, 
                  puedes agendar una cita para ver los productos en persona.
                </p>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-2">
                  ¿Aceptan devoluciones?
                </h4>
                <p className="text-sm text-gray-600">
                  Aceptamos devoluciones dentro de los primeros 7 días si el producto 
                  llega dañado o defectuoso. Productos personalizados no aplican para devolución.
                </p>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-2">
                  ¿Manejan pedidos mayoreo?
                </h4>
                <p className="text-sm text-gray-600">
                  Sí, ofrecemos precios especiales para pedidos mayoreo. Contáctanos para más información.
                </p>
              </div>

              <div className="mt-8">
                <a 
                  href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5212345678901"}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="primary" size="lg" className="w-full">
                    Hacer un Pedido
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
