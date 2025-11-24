import { Card, CardContent, CardHeader, CardTitle } from "@repo/ui/card";

export default function BlogPage() {
  const posts = [
    {
      titulo: "Por qué es importante la Educación STEAM",
      fecha: "18 de Noviembre, 2024",
      categoria: "Educación",
      extracto: "Descubre cómo la educación STEAM prepara a los niños para el futuro, desarrollando habilidades cruciales como el pensamiento crítico, creatividad y resolución de problemas.",
      icono: "🎓",
    },
    {
      titulo: "10 Experimentos Científicos para Hacer en Casa",
      fecha: "12 de Noviembre, 2024",
      categoria: "Ciencia",
      extracto: "Experimentos seguros y divertidos que puedes realizar con tus hijos usando materiales que ya tienes en casa. ¡La ciencia nunca fue tan emocionante!",
      icono: "🔬",
    },
    {
      titulo: "Robótica: El Primer Paso hacia la Tecnología",
      fecha: "5 de Noviembre, 2024",
      categoria: "Tecnología",
      extracto: "Introducción a la robótica para niños. Aprende qué es, por qué es importante y cómo puedes empezar con proyectos simples.",
      icono: "🤖",
    },
    {
      titulo: "Beneficios de Programar desde Pequeños",
      fecha: "28 de Octubre, 2024",
      categoria: "Programación",
      extracto: "La programación no solo enseña a crear software, sino que desarrolla el pensamiento lógico y la creatividad. Descubre cómo beneficia a tu hijo.",
      icono: "💻",
    },
    {
      titulo: "Matemáticas Divertidas: Juegos y Actividades",
      fecha: "20 de Octubre, 2024",
      categoria: "Matemáticas",
      extracto: "Transforma las matemáticas en algo emocionante con estos juegos y actividades que harán que tu hijo ame los números.",
      icono: "🔢",
    },
    {
      titulo: "Creatividad y Arte en STEAM",
      fecha: "12 de Octubre, 2024",
      categoria: "Arte",
      extracto: "El arte no está separado de la ciencia y tecnología. Descubre cómo la 'A' en STEAM impulsa la innovación y creatividad.",
      icono: "🎨",
    },
  ];

  return (
    <div className="bg-gray-50">
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 text-center">
            Blog Educativo
          </h1>
          <p className="mt-4 text-lg text-gray-600 text-center max-w-3xl mx-auto">
            Artículos, consejos y recursos para padres y educadores
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
                    <div className="md:w-48 bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center rounded-t-lg md:rounded-l-lg md:rounded-tr-none">
                      <div className="text-6xl p-8">{post.icono}</div>
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
                  {["Educación", "Ciencia", "Tecnología", "Programación", "Matemáticas", "Arte"].map((cat) => (
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
                  Recibe artículos educativos y actividades STEAM
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
                <CardTitle>Recursos Populares</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li>
                    <a href="/recursos" className="text-sm text-gray-600 hover:text-primary-600">
                      📄 Guía de Experimentos
                    </a>
                  </li>
                  <li>
                    <a href="/recursos" className="text-sm text-gray-600 hover:text-primary-600">
                      🔢 Tarjetas de Matemáticas
                    </a>
                  </li>
                  <li>
                    <a href="/recursos" className="text-sm text-gray-600 hover:text-primary-600">
                      💻 Proyectos de Scratch
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
