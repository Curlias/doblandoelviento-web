import { Card } from "@repo/ui/card";

export default function GaleriaPage() {
  const eventos = [
    {
      categoria: "Bodas",
      imagenes: [
        { alt: "Boda elegante", descripcion: "Decoración completa para boda de 150 invitados" },
        { alt: "Mesa de dulces boda", descripcion: "Barra dulce temática rosa y dorado" },
        { alt: "Centro de mesa", descripcion: "Centros de mesa con velas artesanales" },
      ],
    },
    {
      categoria: "Baby Shower",
      imagenes: [
        { alt: "Baby shower niña", descripcion: "Decoración completa en tonos rosa pastel" },
        { alt: "Mesa de dulces", descripcion: "Barra dulce con temática de nubes" },
        { alt: "Detalles invitados", descripcion: "Cajitas personalizadas con velas" },
      ],
    },
    {
      categoria: "Cumpleaños",
      imagenes: [
        { alt: "Cumpleaños infantil", descripcion: "Fiesta temática unicornio" },
        { alt: "Cumpleaños adulto", descripcion: "Celebración elegante 50 años" },
        { alt: "Mesa dulce", descripcion: "Barra de postres personalizados" },
      ],
    },
    {
      categoria: "Eventos Corporativos",
      imagenes: [
        { alt: "Evento corporativo", descripcion: "Decoración profesional para lanzamiento" },
        { alt: "Coffee break", descripcion: "Mesa de café y postres corporativos" },
        { alt: "Detalles empresa", descripcion: "Regalos corporativos personalizados" },
      ],
    },
  ];

  return (
    <div className="bg-gray-50">
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 text-center">
            Galería de Eventos
          </h1>
          <p className="mt-4 text-lg text-gray-600 text-center max-w-3xl mx-auto">
            Descubre algunos de los eventos que hemos tenido el honor de diseñar y coordinar
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {eventos.map((evento, index) => (
          <div key={index} className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {evento.categoria}
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {evento.imagenes.map((imagen, idx) => (
                <Card key={idx} variant="elevated" className="overflow-hidden">
                  <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-amber-100 to-orange-100">
                    <div className="flex items-center justify-center h-64">
                      <div className="text-center p-6">
                        <div className="text-6xl mb-4">📸</div>
                        <p className="text-gray-600 font-medium">{imagen.alt}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-600">{imagen.descripcion}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-16 bg-primary-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">
            ¿Quieres ver tu evento aquí?
          </h2>
          <p className="mb-6">
            Contáctanos y hagamos realidad el evento de tus sueños
          </p>
          <a href="/cotizacion" className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Solicitar Cotización
          </a>
        </div>
      </div>
    </div>
  );
}
