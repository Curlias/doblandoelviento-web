import { Button } from "@repo/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@repo/ui/card";

export default function Home() {
  const featuredProducts = [
    {
      name: "Cuaderno de Lujo",
      description: "Papel premium 120g, encuadernación artesanal",
      price: "$450",
    },
    {
      name: "Set de Stickers Premium",
      description: "Diseños exclusivos, acabado mate",
      price: "$180",
    },
    {
      name: "Kit de Journaling",
      description: "Todo lo necesario para empezar tu diario creativo",
      price: "$680",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-50 to-purple-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 sm:text-6xl">
              TAVITI
            </h1>
            <p className="mt-6 text-2xl text-gray-700">
              Papelería Boutique
            </p>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Descubre nuestra colección de papelería de lujo, stickers exclusivos, 
              y productos premium para journaling y scrapbooking
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="/catalogo">
                <Button variant="primary" size="lg">
                  Ver Catálogo
                </Button>
              </a>
              <a href="/blog">
                <Button variant="outline" size="lg">
                  Inspiración
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Productos Destacados
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {featuredProducts.map((product, index) => (
              <Card key={index} variant="elevated">
                <div className="aspect-square bg-gradient-to-br from-pink-100 to-purple-100 rounded-t-lg flex items-center justify-center">
                  <div className="text-6xl">📓</div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary-600">
                      {product.price}
                    </span>
                    <a href="/catalogo">
                      <Button variant="primary" size="sm">
                        Ver más
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Nuestras Categorías
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Cuadernos & Libretas", icon: "📔" },
              { name: "Stickers & Pegatinas", icon: "✨" },
              { name: "Journaling", icon: "✍️" },
              { name: "Scrapbooking", icon: "📸" },
            ].map((category, index) => (
              <a
                key={index}
                href="/catalogo"
                className="group"
              >
                <Card variant="bordered" className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="text-5xl mb-4">{category.icon}</div>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition">
                      {category.name}
                    </h3>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Únete a nuestra comunidad creativa
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Descubre ideas, tutoriales y proyectos en nuestro blog
          </p>
          <a href="/blog">
            <Button variant="secondary" size="lg">
              Ver Blog
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
