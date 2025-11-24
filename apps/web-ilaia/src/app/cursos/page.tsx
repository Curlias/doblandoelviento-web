import { Card, CardContent, CardHeader, CardTitle } from "@repo/ui/card";
import { Button } from "@repo/ui/button";

export default function CursosPage() {
  const cursos = [
    {
      nombre: "Robótica para Principiantes",
      descripcion: "Introducción al mundo de la robótica con proyectos prácticos y divertidos",
      edad: "8-12 años",
      duracion: "8 semanas",
      horario: "Sábados 10:00 - 12:00",
      precio: "$2,500/mes",
      incluye: ["Kit de robótica", "Material didáctico", "Certificado"],
      icono: "🤖",
    },
    {
      nombre: "Experimentos de Ciencia",
      descripcion: "Descubre la magia de la ciencia con experimentos seguros y fascinantes",
      edad: "6-10 años",
      duracion: "6 semanas",
      horario: "Viernes 16:00 - 17:30",
      precio: "$1,800/mes",
      incluye: ["Kit de experimentos", "Bata de laboratorio", "Certificado"],
      icono: "🧪",
    },
    {
      nombre: "Programación Scratch",
      descripcion: "Aprende a programar creando juegos y animaciones interactivas",
      edad: "7-11 años",
      duracion: "10 semanas",
      horario: "Miércoles 17:00 - 18:30",
      precio: "$2,200/mes",
      incluye: ["Acceso a plataforma", "Proyectos guiados", "Certificado"],
      icono: "💻",
    },
    {
      nombre: "Matemáticas Divertidas",
      descripcion: "Resuelve problemas matemáticos de forma creativa y entretenida",
      edad: "7-12 años",
      duracion: "8 semanas",
      horario: "Martes 16:30 - 18:00",
      precio: "$1,900/mes",
      incluye: ["Cuaderno de trabajo", "Material manipulable", "Certificado"],
      icono: "🔢",
    },
    {
      nombre: "Ingeniería con LEGO",
      descripcion: "Construye máquinas simples y complejas usando LEGO",
      edad: "6-10 años",
      duracion: "6 semanas",
      horario: "Jueves 16:00 - 17:30",
      precio: "$2,400/mes",
      incluye: ["Set LEGO Education", "Guías de construcción", "Certificado"],
      icono: "🏗️",
    },
    {
      nombre: "Arte Digital",
      descripcion: "Crea ilustraciones digitales y aprende herramientas de diseño",
      edad: "9-13 años",
      duracion: "8 semanas",
      horario: "Sábados 14:00 - 16:00",
      precio: "$2,100/mes",
      incluye: ["Tablet para clase", "Software licenciado", "Certificado"],
      icono: "🎨",
    },
  ];

  return (
    <div className="bg-gray-50">
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 text-center">
            Nuestros Cursos
          </h1>
          <p className="mt-4 text-lg text-gray-600 text-center max-w-3xl mx-auto">
            Programas diseñados para inspirar y desarrollar habilidades STEAM en niños
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cursos.map((curso, index) => (
            <Card key={index} variant="elevated">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 rounded-t-lg flex items-center justify-center">
                <div className="text-7xl">{curso.icono}</div>
              </div>
              <CardHeader>
                <CardTitle>{curso.nombre}</CardTitle>
                <p className="text-sm text-gray-600 mt-2">{curso.descripcion}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="mr-2">👶</span>
                    <span>Edad: {curso.edad}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="mr-2">📅</span>
                    <span>{curso.duracion}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="mr-2">🕐</span>
                    <span>{curso.horario}</span>
                  </div>
                </div>

                <div className="border-t pt-4 mb-4">
                  <p className="text-xs font-semibold text-gray-700 mb-2">Incluye:</p>
                  <ul className="space-y-1">
                    {curso.incluye.map((item, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start">
                        <span className="text-primary-600 mr-2">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <span className="text-2xl font-bold text-primary-600">
                    {curso.precio}
                  </span>
                  <a href="/inscripcion">
                    <Button variant="primary" size="sm">
                      Inscribir
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-primary-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">
            ¿Quieres un curso personalizado?
          </h2>
          <p className="mb-6">
            Podemos crear programas especiales para grupos o necesidades específicas
          </p>
          <a href="/contacto">
            <Button variant="secondary" size="lg">
              Contáctanos
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
