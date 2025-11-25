import { Card, CardContent } from "@repo/ui/card";

export default function TestimoniosPage() {
  const testimonios = [
    {
      nombre: "María González",
      evento: "Boda - Junio 2024",
      rating: 5,
      comentario: "¡Increíble trabajo! El equipo de Doblando el Viento superó todas nuestras expectativas. La decoración de nuestra boda fue simplemente perfecta, cada detalle cuidado al máximo. Las velas artesanales como recuerdos fueron un éxito total entre nuestros invitados.",
      foto: "👰",
    },
    {
      nombre: "Laura Martínez",
      evento: "Baby Shower - Agosto 2024",
      rating: 5,
      comentario: "Contraté sus servicios para mi baby shower y quedé encantada. La barra dulce fue hermosa y deliciosa, y la decoración en tonos pastel quedó preciosa. Todo el equipo fue muy profesional y atento. ¡Totalmente recomendado!",
      foto: "👶",
    },
    {
      nombre: "Roberto Sánchez",
      evento: "Cumpleaños 50 años - Septiembre 2024",
      rating: 5,
      comentario: "Organizaron una celebración elegante y sofisticada para mi cumpleaños. La atención al detalle fue excepcional, desde la decoración hasta los recuerdos personalizados. Mis invitados no pararon de elogiar cada aspecto del evento.",
      foto: "🎂",
    },
    {
      nombre: "Ana Ramírez",
      evento: "Evento Corporativo - Octubre 2024",
      rating: 5,
      comentario: "Trabajamos con Doblando el Viento para el lanzamiento de nuestro producto y el resultado fue espectacular. Muy profesionales, puntuales y creativos. La presentación fue impecable y nuestros clientes quedaron impresionados.",
      foto: "💼",
    },
    {
      nombre: "Gabriela Torres",
      evento: "XV Años - Noviembre 2024",
      rating: 5,
      comentario: "Hicieron realidad el sueño de mi hija. La decoración fue mágica, la barra dulce increíble y los detalles para los invitados fueron hermosos. Todo salió perfecto, gracias por hacer este día tan especial.",
      foto: "👑",
    },
    {
      nombre: "Carlos Hernández",
      evento: "Aniversario - Diciembre 2023",
      rating: 5,
      comentario: "Sorprendí a mi esposa con una cena de aniversario decorada por Doblando el Viento. El ambiente que crearon fue romántico y elegante. Las velas aromáticas y la decoración floral fueron el toque perfecto. ¡Gracias por hacer esta noche inolvidable!",
      foto: "💑",
    },
  ];

  return (
    <div className="bg-gray-50">
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 text-center">
            Testimonios
          </h1>
          <p className="mt-4 text-lg text-gray-600 text-center max-w-3xl mx-auto">
            Lo que nuestros clientes dicen sobre nosotros
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonios.map((testimonio, index) => (
            <Card key={index} variant="elevated">
              <CardContent className="pt-6">
                <div className="flex items-start mb-4">
                  <div className="text-5xl mr-4">{testimonio.foto}</div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">
                      {testimonio.nombre}
                    </h3>
                    <p className="text-sm text-gray-600">{testimonio.evento}</p>
                    <div className="flex mt-1">
                      {Array.from({ length: testimonio.rating }).map((_, i) => (
                        <span key={i} className="text-yellow-400">⭐</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonio.comentario}"</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Ya trabajaste con nosotros?
            </h2>
            <p className="text-gray-600 mb-6">
              Nos encantaría conocer tu experiencia. Déjanos tu testimonio en nuestras redes sociales.
            </p>
            <div className="flex justify-center space-x-4">
              <a 
                href="#" 
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Facebook
              </a>
              <a 
                href="#" 
                className="inline-flex items-center px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
