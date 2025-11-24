import { Card, CardContent, CardHeader, CardTitle } from "@repo/ui/card";
import { Button } from "@repo/ui/button";

export default function ServiciosPage() {
  const servicios = [
    {
      title: "Curaduría Completa de Eventos",
      description: "Diseño y coordinación integral de tu evento desde la conceptualización hasta la ejecución. Incluye:",
      features: [
        "Consultoría personalizada",
        "Selección de paleta de colores y tema",
        "Coordinación con proveedores",
        "Montaje y desmontaje",
        "Supervisión durante el evento",
      ],
      precio: "Desde $15,000 MXN",
    },
    {
      title: "Barra Dulce Personalizada",
      description: "Mesas de dulces temáticas con decoración completa y dulces artesanales:",
      features: [
        "Diseño temático personalizado",
        "Selección de dulces premium",
        "Decoración de mesa completa",
        "Señalética personalizada",
        "Atención de 50-100 personas",
      ],
      precio: "Desde $5,000 MXN",
    },
    {
      title: "Velas Artesanales",
      description: "Velas de cera de soya 100% natural, perfectas como detalles para tus invitados:",
      features: [
        "Cera de soya orgánica",
        "Fragancias naturales",
        "Diseños personalizados",
        "Empaque elegante",
        "Etiquetas personalizadas",
      ],
      precio: "Desde $80 MXN c/u",
    },
    {
      title: "Detalles y Recuerdos",
      description: "Cajitas y detalles personalizados para hacer tu evento memorable:",
      features: [
        "Cajitas decoradas a mano",
        "Etiquetas personalizadas",
        "Mini velas aromáticas",
        "Dulces gourmet",
        "Presentación elegante",
      ],
      precio: "Desde $120 MXN c/u",
    },
    {
      title: "Decoración de Espacios",
      description: "Transformamos cualquier espacio en el escenario perfecto para tu evento:",
      features: [
        "Arcos de globos artísticos",
        "Centros de mesa elegantes",
        "Iluminación ambiental",
        "Letreros y señalética",
        "Fondos fotográficos",
      ],
      precio: "Desde $8,000 MXN",
    },
    {
      title: "Paquetes de Bodas",
      description: "Paquetes completos para hacer de tu boda un evento inolvidable:",
      features: [
        "Coordinación pre-boda",
        "Decoración de ceremonia y recepción",
        "Barra dulce o salada",
        "Detalles para invitados",
        "Coordinación el día del evento",
      ],
      precio: "Desde $25,000 MXN",
    },
  ];

  return (
    <div className="bg-gray-50">
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 text-center">
            Nuestros Servicios
          </h1>
          <p className="mt-4 text-lg text-gray-600 text-center max-w-3xl mx-auto">
            Ofrecemos una amplia gama de servicios para hacer de tu evento algo único y especial
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {servicios.map((servicio, index) => (
            <Card key={index} variant="elevated">
              <CardHeader>
                <CardTitle>{servicio.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{servicio.description}</p>
                <ul className="space-y-2 mb-6">
                  {servicio.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary-600 mr-2">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary-600">
                    {servicio.precio}
                  </span>
                  <a href="/cotizacion">
                    <Button variant="primary">Cotizar</Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            ¿No encuentras lo que buscas?
          </h2>
          <p className="text-gray-600 mb-6">
            Creamos paquetes personalizados según tus necesidades y presupuesto
          </p>
          <a href="/cotizacion">
            <Button variant="primary" size="lg">
              Solicitar Cotización Personalizada
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
