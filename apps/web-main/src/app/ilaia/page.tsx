import { Button } from "@repo/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@repo/ui/card";

export default function Home() {
  const beneficios = [
    {
      titulo: "Pensamiento Crítico",
      descripcion: "Desarrollan habilidades para resolver problemas complejos",
      icono: "🧠",
    },
    {
      titulo: "Creatividad",
      descripcion: "Exploran su imaginación a través de proyectos prácticos",
      icono: "🎨",
    },
    {
      titulo: "Trabajo en Equipo",
      descripcion: "Aprenden colaboración y comunicación efectiva",
      icono: "👥",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 sm:text-6xl">
              ILAIA
            </h1>
            <p className="mt-6 text-2xl text-gray-700">
              Educación STEAM para Niños
            </p>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Inspiramos la curiosidad científica y tecnológica en los niños a través de 
              cursos, talleres y materiales didácticos innovadores
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="/cursos">
                <Button variant="primary" size="lg">
                  Ver Cursos
                </Button>
              </a>
              <a href="/inscripcion">
                <Button variant="outline" size="lg">
                  Inscribirse
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What is STEAM */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              ¿Qué es STEAM?
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Science, Technology, Engineering, Arts & Mathematics
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6 md:grid-cols-5">
            {[
              { letra: "S", nombre: "Ciencia", icono: "🔬" },
              { letra: "T", nombre: "Tecnología", icono: "💻" },
              { letra: "E", nombre: "Ingeniería", icono: "🏗️" },
              { letra: "A", nombre: "Arte", icono: "🎨" },
              { letra: "M", nombre: "Matemáticas", icono: "🔢" },
            ].map((item) => (
              <Card key={item.letra} variant="bordered" className="text-center">
                <CardContent className="pt-6">
                  <div className="text-5xl mb-3">{item.icono}</div>
                  <h3 className="text-xl font-bold text-primary-600 mb-1">{item.letra}</h3>
                  <p className="text-sm text-gray-600">{item.nombre}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Beneficios para tu Hijo
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {beneficios.map((beneficio, index) => (
              <Card key={index} variant="elevated">
                <CardContent className="pt-6 text-center">
                  <div className="text-6xl mb-4">{beneficio.icono}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {beneficio.titulo}
                  </h3>
                  <p className="text-gray-600">{beneficio.descripcion}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Cursos Destacados
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                nombre: "Robótica para Principiantes",
                edad: "8-12 años",
                precio: "$2,500/mes",
                icono: "🤖",
              },
              {
                nombre: "Experimentos de Ciencia",
                edad: "6-10 años",
                precio: "$1,800/mes",
                icono: "🧪",
              },
              {
                nombre: "Programación Scratch",
                edad: "7-11 años",
                precio: "$2,200/mes",
                icono: "💻",
              },
            ].map((curso, index) => (
              <Card key={index} variant="elevated">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 rounded-t-lg flex items-center justify-center">
                  <div className="text-7xl">{curso.icono}</div>
                </div>
                <CardHeader>
                  <CardTitle>{curso.nombre}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-2">Edad: {curso.edad}</p>
                  <div className="flex items-center justify-between mt-4">
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
          <div className="mt-12 text-center">
            <a href="/cursos">
              <Button variant="outline" size="lg">
                Ver Todos los Cursos
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Impulsa el futuro de tu hijo
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Inscríbelo hoy y descubre el científico que lleva dentro
          </p>
          <a href="/inscripcion">
            <Button variant="secondary" size="lg">
              Comenzar Ahora
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
