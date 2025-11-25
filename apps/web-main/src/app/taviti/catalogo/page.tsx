import { Card, CardContent, CardHeader, CardTitle } from "@repo/ui/card";
import { Button } from "@repo/ui/button";

export default function CatalogoPage() {
  const productos = [
    {
      categoria: "Cuadernos & Libretas",
      items: [
        {
          nombre: "Cuaderno de Lujo A5",
          descripcion: "Papel premium 120g, tapa dura, 200 páginas",
          precio: "$450",
          disponible: true,
        },
        {
          nombre: "Libreta Minimalista",
          descripcion: "Diseño elegante, papel reciclado 100g",
          precio: "$280",
          disponible: true,
        },
        {
          nombre: "Bullet Journal Premium",
          descripcion: "Papel punteado 160g, tapa flexible",
          precio: "$380",
          disponible: true,
        },
      ],
    },
    {
      categoria: "Stickers & Pegatinas",
      items: [
        {
          nombre: "Pack Floral",
          descripcion: "50 stickers con diseños botánicos",
          precio: "$180",
          disponible: true,
        },
        {
          nombre: "Set Motivacional",
          descripcion: "30 frases inspiradoras, acabado holográfico",
          precio: "$150",
          disponible: true,
        },
        {
          nombre: "Colección Vintage",
          descripcion: "40 stickers estilo retro",
          precio: "$160",
          disponible: true,
        },
      ],
    },
    {
      categoria: "Journaling",
      items: [
        {
          nombre: "Kit Journaling Completo",
          descripcion: "Cuaderno + stickers + washi tapes + plantillas",
          precio: "$680",
          disponible: true,
        },
        {
          nombre: "Set de Washi Tape Premium",
          descripcion: "8 cintas decorativas diseños exclusivos",
          precio: "$320",
          disponible: true,
        },
        {
          nombre: "Plantillas de Lettering",
          descripcion: "10 plantillas reutilizables",
          precio: "$220",
          disponible: true,
        },
      ],
    },
    {
      categoria: "Scrapbooking",
      items: [
        {
          nombre: "Papeles Decorativos Set",
          descripcion: "50 hojas A4 diseños variados",
          precio: "$350",
          disponible: true,
        },
        {
          nombre: "Kit de Embellecimientos",
          descripcion: "Die cuts, botones, cintas y más",
          precio: "$420",
          disponible: true,
        },
        {
          nombre: "Álbum de Fotos Artesanal",
          descripcion: "Encuadernación hecha a mano, 30 páginas",
          precio: "$580",
          disponible: true,
        },
      ],
    },
  ];

  return (
    <div className="bg-gray-50">
      <div className="bg-gradient-to-br from-pink-50 to-purple-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 text-center">
            Catálogo de Productos
          </h1>
          <p className="mt-4 text-lg text-gray-600 text-center max-w-3xl mx-auto">
            Explora nuestra selección de papelería boutique y productos creativos
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {productos.map((categoria, index) => (
          <div key={index} className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {categoria.categoria}
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {categoria.items.map((producto, idx) => (
                <Card key={idx} variant="elevated">
                  <div className="aspect-square bg-gradient-to-br from-pink-100 to-purple-100 rounded-t-lg flex items-center justify-center">
                    <div className="text-7xl">
                      {categoria.categoria.includes("Cuaderno") ? "📓" :
                       categoria.categoria.includes("Sticker") ? "✨" :
                       categoria.categoria.includes("Journal") ? "✍️" : "📸"}
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{producto.nombre}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 min-h-[48px]">
                      {producto.descripcion}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary-600">
                        {producto.precio}
                      </span>
                      <a 
                        href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5212345678901"}?text=Hola, me interesa el producto: ${producto.nombre}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="primary" size="sm">
                          Ordenar
                        </Button>
                      </a>
                    </div>
                    {producto.disponible && (
                      <p className="text-sm text-green-600 mt-2">✓ Disponible</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-16 bg-primary-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">
            ¿Buscas algo específico?
          </h2>
          <p className="mb-6">
            Contáctanos por WhatsApp y te ayudaremos a encontrar el producto perfecto
          </p>
          <a 
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5212345678901"}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="secondary" size="lg">
              WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
