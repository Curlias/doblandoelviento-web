import { Card, CardContent, CardHeader, CardTitle } from "@repo/ui/card";

export default function BlogPage() {
  const posts = [
    {
      titulo: "10 Ideas Creativas para tu Bullet Journal",
      fecha: "15 de Noviembre, 2024",
      categoria: "Journaling",
      extracto: "Descubre nuevas formas de organizar y decorar tu bullet journal. Desde spreads minimalistas hasta diseños más elaborados, te compartimos nuestras ideas favoritas.",
      imagen: "✍️",
    },
    {
      titulo: "Cómo Empezar en el Scrapbooking",
      fecha: "10 de Noviembre, 2024",
      categoria: "Scrapbooking",
      extracto: "Guía completa para principiantes: materiales esenciales, técnicas básicas y consejos para crear tu primer álbum de recuerdos.",
      imagen: "📸",
    },
    {
      titulo: "Tendencias en Papelería 2025",
      fecha: "5 de Noviembre, 2024",
      categoria: "Tendencias",
      extracto: "Exploramos las tendencias más importantes en papelería boutique para el próximo año: colores, texturas y estilos que marcarán la diferencia.",
      imagen: "✨",
    },
    {
      titulo: "DIY: Personaliza tus Cuadernos",
      fecha: "28 de Octubre, 2024",
      categoria: "DIY",
      extracto: "Aprende a personalizar tus cuadernos con técnicas sencillas. Desde forrar con papel decorativo hasta crear portadas únicas.",
      imagen: "📓",
    },
    {
      titulo: "Organización con Stickers",
      fecha: "20 de Octubre, 2024",
      categoria: "Organización",
      extracto: "Usa stickers para hacer tu planner más funcional y bonito. Ideas prácticas para organizar tu día a día con estilo.",
      imagen: "🗓️",
    },
    {
      titulo: "Técnicas de Lettering para Principiantes",
      fecha: "12 de Octubre, 2024",
      categoria: "Lettering",
      extracto: "Empieza tu camino en el lettering con estos ejercicios básicos. Aprende a crear títulos hermosos para tus proyectos.",
      imagen: "🖊️",
    },
  ];

  return (
    <div className="bg-gray-50">
      <div className="bg-gradient-to-br from-pink-50 to-purple-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 text-center">
            Blog de Inspiración
          </h1>
          <p className="mt-4 text-lg text-gray-600 text-center max-w-3xl mx-auto">
            Ideas, tutoriales y consejos para tu creatividad
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {posts.map((post, index) => (
                <Card key={index} variant="elevated">
                  <div className="md:flex">
                    <div className="md:w-48 bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center rounded-t-lg md:rounded-l-lg md:rounded-tr-none">
                      <div className="text-6xl p-8">{post.imagen}</div>
                    </div>
                    <div className="flex-1">
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="inline-block px-3 py-1 text-xs font-semibold text-primary-700 bg-primary-100 rounded-full">
                            {post.categoria}
                          </span>
                          <span className="text-sm text-gray-500">{post.fecha}</span>
                        </div>
                        <CardTitle className="text-2xl">{post.titulo}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-4">{post.extracto}</p>
                        <a href="#" className="text-primary-600 hover:text-primary-700 font-semibold">
                          Leer más →
                        </a>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <Card variant="elevated">
              <CardHeader>
                <CardTitle>Categorías</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {["Journaling", "Scrapbooking", "DIY", "Lettering", "Organización", "Tendencias"].map((cat) => (
                    <li key={cat}>
                      <a href="#" className="text-gray-600 hover:text-primary-600">
                        {cat}
                      </a>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card variant="elevated">
              <CardHeader>
                <CardTitle>Newsletter</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Recibe ideas creativas y ofertas exclusivas
                </p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Tu email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                  <button
                    type="submit"
                    className="w-full bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition"
                  >
                    Suscribirse
                  </button>
                </form>
              </CardContent>
            </Card>

            <Card variant="elevated">
              <CardHeader>
                <CardTitle>Síguenos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <a href="#" className="flex items-center text-gray-600 hover:text-primary-600">
                    <span className="mr-2">📘</span> Facebook
                  </a>
                  <a href="#" className="flex items-center text-gray-600 hover:text-primary-600">
                    <span className="mr-2">📷</span> Instagram
                  </a>
                  <a href="#" className="flex items-center text-gray-600 hover:text-primary-600">
                    <span className="mr-2">📌</span> Pinterest
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
