import { Card, CardContent, CardHeader, CardTitle } from "@repo/ui/card";
import { Button } from "@repo/ui/button";

export default function RecursosPage() {
  const kits = [
    {
      nombre: "Kit de Robótica Básica",
      descripcion: "Todo lo necesario para empezar en robótica",
      precio: "$1,200",
      incluye: ["Arduino UNO", "Servomotores", "Sensores", "Manual de proyectos"],
      icono: "🤖",
    },
    {
      nombre: "Kit de Ciencia Química",
      descripcion: "Experimentos seguros y educativos",
      precio: "$850",
      incluye: ["Tubos de ensayo", "Reactivos seguros", "Microscopio", "Guía de experimentos"],
      icono: "🧪",
    },
    {
      nombre: "Kit de Electrónica",
      descripcion: "Aprende circuitos y electricidad",
      precio: "$950",
      incluye: ["Breadboard", "LEDs", "Resistencias", "Manual ilustrado"],
      icono: "💡",
    },
  ];

  const descargables = [
    {
      titulo: "Guía de Experimentos Caseros",
      descripcion: "20 experimentos científicos con materiales del hogar",
      tipo: "PDF Gratuito",
      icono: "📄",
    },
    {
      titulo: "Tarjetas de Matemáticas",
      descripcion: "Ejercicios imprimibles para practicar",
      tipo: "PDF Gratuito",
      icono: "🔢",
    },
    {
      titulo: "Proyectos de Scratch",
      descripcion: "10 proyectos paso a paso para principiantes",
      tipo: "PDF Gratuito",
      icono: "💻",
    },
    {
      titulo: "Actividades STEAM",
      descripcion: "Retos creativos para hacer en casa",
      tipo: "PDF Gratuito",
      icono: "🎨",
    },
  ];

  return (
    <div className="bg-gray-50">
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 text-center">
            Recursos y Materiales
          </h1>
          <p className="mt-4 text-lg text-gray-600 text-center max-w-3xl mx-auto">
            Kits didácticos y recursos descargables para aprender en casa
          </p>
        </div>
      </div>

      {/* Kits Section */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Kits Didácticos
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {kits.map((kit, index) => (
            <Card key={index} variant="elevated">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-indigo-100 rounded-t-lg flex items-center justify-center">
                <div className="text-7xl">{kit.icono}</div>
              </div>
              <CardHeader>
                <CardTitle>{kit.nombre}</CardTitle>
                <p className="text-sm text-gray-600 mt-2">{kit.descripcion}</p>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <p className="text-xs font-semibold text-gray-700 mb-2">Incluye:</p>
                  <ul className="space-y-1">
                    {kit.incluye.map((item, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start">
                        <span className="text-primary-600 mr-2">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between pt-4 border-t">
                  <span className="text-2xl font-bold text-primary-600">
                    {kit.precio}
                  </span>
                  <a 
                    href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5212345678901"}?text=Hola, me interesa el ${kit.nombre}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="primary" size="sm">
                      Comprar
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Downloadable Resources */}
        <h2 className="text-3xl font-bold text-gray-900 mb-8 mt-16">
          Recursos Descargables
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {descargables.map((recurso, index) => (
            <Card key={index} variant="bordered">
              <CardContent className="flex items-start p-6">
                <div className="text-5xl mr-4">{recurso.icono}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {recurso.titulo}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">{recurso.descripcion}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-green-600">
                      {recurso.tipo}
                    </span>
                    <Button variant="outline" size="sm">
                      Descargar
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-primary-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">
            ¿Necesitas materiales especiales?
          </h2>
          <p className="mb-6">
            Contáctanos para cotizar kits personalizados o materiales específicos
          </p>
          <a href="/contacto">
            <Button variant="secondary" size="lg">
              Contactar
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
