export default function BlogPage() {
  const articulos = [
    {
      titulo: "10 Proyectos de Robótica para Principiantes",
      fecha: "15 Mayo 2024",
      autor: "Dr. Carlos Méndez",
      categoria: "Robótica",
      imagen: "🤖",
      extracto: "Descubre los mejores proyectos para iniciar en el mundo de la robótica. Desde robots básicos hasta proyectos más complejos.",
      tiempo: "8 min lectura",
      color: "from-blue-500 to-cyan-600"
    },
    {
      titulo: "Cómo Enseñar Programación a Niños de 6-8 Años",
      fecha: "12 Mayo 2024",
      autor: "Lic. María González",
      categoria: "Programación",
      imagen: "💻",
      extracto: "Estrategias pedagógicas efectivas para introducir conceptos de programación a niños en edad temprana usando Scratch.",
      tiempo: "6 min lectura",
      color: "from-purple-500 to-pink-600"
    },
    {
      titulo: "Experimentos Científicos: La Magia de la Química",
      fecha: "10 Mayo 2024",
      autor: "Ing. Roberto Sánchez",
      categoria: "Ciencias",
      imagen: "🔬",
      extracto: "15 experimentos químicos seguros y fascinantes que puedes hacer en casa con tus hijos para despertar su curiosidad.",
      tiempo: "10 min lectura",
      color: "from-green-500 to-teal-600"
    },
    {
      titulo: "Diseño 3D: Del Concepto a la Impresión",
      fecha: "8 Mayo 2024",
      autor: "Dra. Ana Ramírez",
      categoria: "Diseño 3D",
      imagen: "🎨",
      extracto: "Guía completa para comenzar con diseño 3D. Aprende a usar Tinkercad y lleva tus ideas del concepto a la realidad.",
      tiempo: "12 min lectura",
      color: "from-orange-500 to-red-600"
    },
    {
      titulo: "Arduino para Jóvenes: Primeros Pasos en IoT",
      fecha: "5 Mayo 2024",
      autor: "Ing. Diego Torres",
      categoria: "Tecnología",
      imagen: "⚙️",
      extracto: "Internet de las Cosas explicado para adolescentes. Crea tu primer proyecto IoT con Arduino y sensores.",
      tiempo: "15 min lectura",
      color: "from-indigo-500 to-purple-600"
    },
    {
      titulo: "STEAM en Casa: Actividades para Cada Día",
      fecha: "3 Mayo 2024",
      autor: "Psic. Laura Martínez",
      categoria: "Educación",
      imagen: "🏠",
      extracto: "Ideas prácticas para integrar STEAM en la vida diaria de tus hijos sin necesidad de materiales especializados.",
      tiempo: "7 min lectura",
      color: "from-pink-500 to-rose-600"
    },
    {
      titulo: "Competencias de Robótica: Prepara a tu Equipo",
      fecha: "1 Mayo 2024",
      autor: "Ing. Fernando López",
      categoria: "Robótica",
      imagen: "🏆",
      extracto: "Todo lo que necesitas saber para participar en competencias de robótica. Tips, estrategias y errores comunes.",
      tiempo: "9 min lectura",
      color: "from-yellow-500 to-orange-600"
    },
    {
      titulo: "Python vs Scratch: ¿Cuál es Mejor para Niños?",
      fecha: "28 Abril 2024",
      autor: "Dr. Carlos Méndez",
      categoria: "Programación",
      imagen: "🐍",
      extracto: "Comparativa detallada entre lenguajes de programación para niños. Ventajas, desventajas y cuándo usar cada uno.",
      tiempo: "8 min lectura",
      color: "from-cyan-500 to-blue-600"
    },
    {
      titulo: "Inteligencia Artificial para Adolescentes",
      fecha: "25 Abril 2024",
      autor: "Dra. Sofia Chen",
      categoria: "IA",
      imagen: "🧠",
      extracto: "Introducción a Machine Learning para jóvenes. Crea tu primer modelo de reconocimiento de imágenes paso a paso.",
      tiempo: "14 min lectura",
      color: "from-violet-500 to-purple-600"
    }
  ];

  const categorias = [
    { nombre: "Todo", count: 45, color: "bg-gray-600" },
    { nombre: "Robótica", count: 12, color: "bg-blue-600" },
    { nombre: "Programación", count: 15, color: "bg-purple-600" },
    { nombre: "Ciencias", count: 8, color: "bg-green-600" },
    { nombre: "Diseño 3D", count: 6, color: "bg-orange-600" },
    { nombre: "Tecnología", count: 4, color: "bg-indigo-600" }
  ];

  const destacados = [
    {
      titulo: "Guía Completa de Robótica Educativa 2024",
      imagen: "🎓",
      color: "from-blue-600 to-purple-600"
    },
    {
      titulo: "100 Experimentos Científicos para Niños",
      imagen: "⚗️",
      color: "from-green-600 to-teal-600"
    },
    {
      titulo: "Programación: De Cero a Héroe",
      imagen: "💪",
      color: "from-purple-600 to-pink-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-purple-50 to-pink-50">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-96 h-96 bg-yellow-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-300 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-6xl md:text-7xl font-black text-white mb-6">
            Blog STEAM 📝
          </h1>
          <p className="text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Artículos, tutoriales y guías sobre educación STEAM. 
            Conocimiento para niños, jóvenes y padres.
          </p>
        </div>
      </section>

      {/* Categorías */}
      <section className="py-12 bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categorias.map((cat, idx) => (
              <button
                key={idx}
                className={`${cat.color} text-white px-6 py-3 rounded-full font-bold hover:shadow-lg transition-all duration-300 hover:scale-105`}
              >
                {cat.nombre} ({cat.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Artículos Destacados */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 mb-3">
              ⭐ Más Leídos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {destacados.map((dest, idx) => (
              <div key={idx} className={`bg-gradient-to-br ${dest.color} rounded-2xl p-8 text-white text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer`}>
                <div className="text-7xl mb-4">{dest.imagen}</div>
                <h3 className="text-2xl font-black">{dest.titulo}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Todos los Artículos */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-4">
              Últimos Artículos 📚
            </h2>
            <p className="text-xl text-gray-600">
              Contenido nuevo cada semana
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {articulos.map((art, idx) => (
              <article key={idx} className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 cursor-pointer">
                {/* Header */}
                <div className={`bg-gradient-to-br ${art.color} h-40 flex items-center justify-center text-8xl`}>
                  {art.imagen}
                </div>

                {/* Contenido */}
                <div className="p-6">
                  {/* Meta */}
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 bg-gradient-to-r ${art.color} text-white text-xs font-bold rounded-full`}>
                      {art.categoria}
                    </span>
                    <span className="text-xs text-gray-500">{art.tiempo}</span>
                  </div>

                  {/* Título */}
                  <h3 className="text-xl font-black text-gray-900 mb-3 leading-tight">
                    {art.titulo}
                  </h3>

                  {/* Extracto */}
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {art.extracto}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="text-xs text-gray-500">
                      <div className="font-semibold text-gray-700">{art.autor}</div>
                      <div>{art.fecha}</div>
                    </div>
                    <button className={`bg-gradient-to-r ${art.color} text-white px-4 py-2 rounded-lg text-sm font-bold hover:shadow-md transition-all duration-300`}>
                      Leer →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Paginación */}
          <div className="flex justify-center gap-3 mt-12">
            <button className="px-6 py-3 bg-white rounded-lg font-bold text-purple-600 border-2 border-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300">
              ← Anterior
            </button>
            <button className="px-6 py-3 bg-purple-600 text-white rounded-lg font-bold">1</button>
            <button className="px-6 py-3 bg-white text-gray-700 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300">2</button>
            <button className="px-6 py-3 bg-white text-gray-700 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300">3</button>
            <button className="px-6 py-3 bg-white rounded-lg font-bold text-purple-600 border-2 border-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300">
              Siguiente →
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            No Te Pierdas Nada 📬
          </h2>
          <p className="text-2xl text-white/90 mb-10 max-w-3xl mx-auto">
            Suscríbete y recibe nuestros mejores artículos directamente en tu correo
          </p>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-2 shadow-2xl flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="flex-1 px-6 py-4 text-gray-800 rounded-xl focus:outline-none text-lg"
              />
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-black text-lg hover:shadow-lg transition-all duration-300">
                Suscribirme
              </button>
            </div>
            <p className="text-white/80 mt-4 text-sm">
              📧 Un artículo por semana. Sin spam. 8,000+ suscriptores activos.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Programas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-black text-gray-900 mb-6">
            De la Teoría a la Práctica 🚀
          </h2>
          <p className="text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
            ¿Te gustó lo que leíste? Lleva el aprendizaje al siguiente nivel
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/ilaia/programas"
              className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-6 text-xl font-black rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              🎓 Ver Programas
            </a>
            <a
              href="/ilaia/talleres"
              className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-12 py-6 text-xl font-black rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              🎨 Ver Talleres
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
