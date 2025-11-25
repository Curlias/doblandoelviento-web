import { Card, CardContent, CardHeader, CardTitle } from "@repo/ui/card";
import { Button } from "@repo/ui/button";

export default function ContactoPage() {
  return (
    <div className="bg-gray-50">
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 text-center">
            Contacto
          </h1>
          <p className="mt-4 text-lg text-gray-600 text-center max-w-3xl mx-auto">
            Estamos aquí para impulsar el futuro científico de tu hijo
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
                <div className="text-3xl mr-4">📍</div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Ubicación</h3>
                  <p className="mt-1 text-gray-600">
                    Querétaro, Querétaro, México
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    Clases presenciales y virtuales disponibles
                  </p>
                </div>
              </div>

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
                    Lun - Vie: 9:00 AM - 6:00 PM<br />
                    Sáb: 9:00 AM - 2:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-3xl mr-4">✉️</div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Email</h3>
                  <a 
                    href="mailto:hola@ilaia.com"
                    className="mt-1 text-primary-600 hover:text-primary-700"
                  >
                    hola@ilaia.com
                  </a>
                  <p className="mt-1 text-sm text-gray-500">
                    Respuesta en 24 horas
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-3xl mr-4">👥</div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Redes Sociales</h3>
                  <div className="mt-2 space-y-2">
                    <a href="#" className="block text-gray-600 hover:text-primary-600">
                      Facebook: @ILAIA.STEAM
                    </a>
                    <a href="#" className="block text-gray-600 hover:text-primary-600">
                      Instagram: @ilaia.steam
                    </a>
                    <a href="#" className="block text-gray-600 hover:text-primary-600">
                      YouTube: ILAIA Educación
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 mt-8">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Visitas Escolares
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Ofrecemos talleres y programas especiales para escuelas. 
                  Contáctanos para conocer más sobre nuestros programas educativos.
                </p>
                <a href="/inscripcion">
                  <Button variant="primary" size="sm">
                    Solicitar Información
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card variant="elevated">
              <CardHeader>
                <CardTitle>Preguntas Frecuentes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">
                    ¿Qué edades atienden?
                  </h4>
                  <p className="text-sm text-gray-600">
                    Nuestros programas están diseñados para niños de 6 a 14 años, 
                    con cursos específicos para cada rango de edad.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">
                    ¿Necesita mi hijo experiencia previa?
                  </h4>
                  <p className="text-sm text-gray-600">
                    No. Nuestros cursos están diseñados para principiantes. 
                    También tenemos niveles intermedios y avanzados.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">
                    ¿Qué incluyen los cursos?
                  </h4>
                  <p className="text-sm text-gray-600">
                    Todos los materiales y kits necesarios están incluidos. 
                    Los niños se llevan sus proyectos a casa.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">
                    ¿Ofrecen clases virtuales?
                  </h4>
                  <p className="text-sm text-gray-600">
                    Sí, tenemos opciones presenciales y virtuales para varios de nuestros cursos.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">
                    ¿Hay descuentos por hermanos?
                  </h4>
                  <p className="text-sm text-gray-600">
                    Sí, ofrecemos 15% de descuento en el segundo hijo y 20% del tercero en adelante.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">
                    ¿Puedo probar una clase antes de inscribir?
                  </h4>
                  <p className="text-sm text-gray-600">
                    ¡Por supuesto! Ofrecemos una clase de prueba gratuita. 
                    Contáctanos para agendar.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card variant="elevated">
              <CardContent className="pt-6 text-center">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  ¿Listo para empezar?
                </h3>
                <p className="text-gray-600 mb-6">
                  Inscribe a tu hijo hoy y descubre su potencial en STEAM
                </p>
                <a href="/inscripcion">
                  <Button variant="primary" size="lg" className="w-full">
                    Inscribir Ahora
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
