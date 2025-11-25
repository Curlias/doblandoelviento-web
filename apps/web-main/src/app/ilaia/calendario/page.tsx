import { Card, CardContent, CardHeader, CardTitle } from "@repo/ui/card";

export default function CalendarioPage() {
  const talleres = [
    {
      mes: "Diciembre 2024",
      eventos: [
        {
          fecha: "7 de Diciembre",
          titulo: "Taller de Robótica Navideña",
          hora: "10:00 - 12:00",
          edad: "8-12 años",
          cupos: "15 niños",
          precio: "$350",
        },
        {
          fecha: "14 de Diciembre",
          titulo: "Experimentos de Química Festiva",
          hora: "16:00 - 18:00",
          edad: "6-10 años",
          cupos: "12 niños",
          precio: "$300",
        },
        {
          fecha: "21 de Diciembre",
          titulo: "Crea tu Videojuego Navideño en Scratch",
          hora: "10:00 - 13:00",
          edad: "9-13 años",
          cupos: "10 niños",
          precio: "$400",
        },
      ],
    },
    {
      mes: "Enero 2025",
      eventos: [
        {
          fecha: "11 de Enero",
          titulo: "Introducción a Arduino",
          hora: "10:00 - 13:00",
          edad: "10-14 años",
          cupos: "12 niños",
          precio: "$450",
        },
        {
          fecha: "18 de Enero",
          titulo: "Matemáticas con LEGO",
          hora: "15:00 - 17:00",
          edad: "7-10 años",
          cupos: "15 niños",
          precio: "$320",
        },
        {
          fecha: "25 de Enero",
          titulo: "Ciencia de Cohetes",
          hora: "10:00 - 12:00",
          edad: "8-12 años",
          cupos: "12 niños",
          precio: "$380",
        },
      ],
    },
    {
      mes: "Febrero 2025",
      eventos: [
        {
          fecha: "8 de Febrero",
          titulo: "Electrónica Básica para Niños",
          hora: "10:00 - 12:00",
          edad: "9-13 años",
          cupos: "10 niños",
          precio: "$400",
        },
        {
          fecha: "15 de Febrero",
          titulo: "Arte Digital con Tablets",
          hora: "14:00 - 16:00",
          edad: "8-12 años",
          cupos: "12 niños",
          precio: "$350",
        },
        {
          fecha: "22 de Febrero",
          titulo: "Programación Python para Principiantes",
          hora: "10:00 - 13:00",
          edad: "11-14 años",
          cupos: "10 niños",
          precio: "$450",
        },
      ],
    },
  ];

  return (
    <div className="bg-gray-50">
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 text-center">
            Calendario de Talleres
          </h1>
          <p className="mt-4 text-lg text-gray-600 text-center max-w-3xl mx-auto">
            Talleres especiales y eventos STEAM para niños
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {talleres.map((periodo, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {periodo.mes}
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {periodo.eventos.map((evento, idx) => (
                <Card key={idx} variant="elevated">
                  <CardHeader>
                    <div className="text-primary-600 font-bold text-lg mb-2">
                      {evento.fecha}
                    </div>
                    <CardTitle className="text-xl">{evento.titulo}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="mr-2">🕐</span>
                        <span>{evento.hora}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="mr-2">👶</span>
                        <span>Edad: {evento.edad}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="mr-2">👥</span>
                        <span>Cupo: {evento.cupos}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t">
                      <span className="text-xl font-bold text-primary-600">
                        {evento.precio}
                      </span>
                      <a href="/inscripcion" className="inline-block bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition text-sm font-semibold">
                        Reservar
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-16">
          <Card variant="elevated">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Información Importante
              </h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  <strong>Reservaciones:</strong> Los cupos son limitados. Te recomendamos reservar 
                  con al menos una semana de anticipación.
                </p>
                <p>
                  <strong>Cancelaciones:</strong> Puedes cancelar hasta 48 horas antes del taller 
                  para obtener un reembolso completo.
                </p>
                <p>
                  <strong>Materiales:</strong> Todos los materiales están incluidos en el precio del taller.
                </p>
                <p>
                  <strong>¿Talleres personalizados?</strong> Podemos organizar talleres privados 
                  para grupos. Contáctanos para más información.
                </p>
              </div>
              <div className="mt-6">
                <a href="/contacto" className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition font-semibold">
                  Contactar para Talleres Privados
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
