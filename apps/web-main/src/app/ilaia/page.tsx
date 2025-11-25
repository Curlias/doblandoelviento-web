export default function IlaiaPage() {
  const programas = [
    {
      nombre: "Robótica para Peques",
      edad: "6-8 años",
      descripcion: "Primeros pasos en el mundo de la robótica con kits LEGO WeDo",
      icono: "🤖",
      color: "from-blue-400 to-cyan-500"
    },
    {
      nombre: "Programación Creativa",
      edad: "9-12 años",
      descripcion: "Aprende a programar creando juegos y animaciones con Scratch",
      icono: "💻",
      color: "from-purple-400 to-pink-500"
    },
    {
      nombre: "Ciencia Divertida",
      edad: "7-10 años",
      descripcion: "Experimentos científicos que despiertan la curiosidad",
      icono: "🔬",
      color: "from-green-400 to-teal-500"
    },
    {
      nombre: "Makers Jr.",
      edad: "10-14 años",
      descripcion: "Diseño e impresión 3D, Arduino y proyectos maker",
      icono: "⚙️",
      color: "from-orange-400 to-red-500"
    }
  ];

  const testimonios = [
    {
      nombre: "María González",
      edad: "Mamá de Sofía, 9 años",
      texto: "Mi hija está fascinada con la programación. Ahora crea sus propios juegos y me explica conceptos que ni yo entendía. ¡Increíble!",
      avatar: "👩"
    },
    {
      nombre: "Roberto Martínez",
      edad: "Papá de Diego, 11 años",
      texto: "El cambio en Diego ha sido notable. Pasó de solo jugar videojuegos a querer crearlos. Su creatividad se disparó.",
      avatar: "👨"
    },
    {
      nombre: "Ana Ramírez",
      edad: "Mamá de twins, 7 años",
      texto: "Los talleres de ciencia son espectaculares. Mis hijos esperan ansiosamente cada sesión. ¡Aprenden jugando!",
      avatar: "👩‍🦰"
    }
  ];

  const stats = [
    { numero: "500+", texto: "Niños formados", icono: "👦👧" },
    { numero: "98%", texto: "Satisfacción", icono: "⭐" },
    { numero: "15+", texto: "Programas activos", icono: "📚" },
    { numero: "5", texto: "Años de experiencia", icono: "🎓" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-pink-50 to-orange-50">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          {/* Logo animado */}
          <div className="mb-8 animate-bounce-slow">
            <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl transform hover:rotate-12 transition-transform duration-300">
              <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
          </div>
          
          <h1 className="font-black text-6xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 mb-6 leading-tight">
            ILAIA
          </h1>
          
          <p className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            ¡Aprende, Crea, Innova! 🚀
          </p>
          
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-12">
            Educación STEAM para niños y jóvenes. Transformamos la curiosidad en conocimiento 
            a través de la <span className="font-bold text-purple-600">Ciencia</span>, 
            <span className="font-bold text-pink-600"> Tecnología</span>, 
            <span className="font-bold text-orange-600"> Ingeniería</span>, 
            <span className="font-bold text-green-600"> Arte</span> y 
            <span className="font-bold text-blue-600"> Matemáticas</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="/ilaia/programas"
              className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-5 text-lg font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              🎓 Explorar Programas
            </a>
            <a
              href="/ilaia/talleres"
              className="inline-block bg-white text-purple-600 px-10 py-5 text-lg font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-4 border-purple-600"
            >
              🎨 Ver Talleres
            </a>
          </div>

          {/* Edades */}
          <div className="flex flex-wrap justify-center gap-4">
            {["6-8 años", "9-12 años", "13-16 años"].map((edad) => (
              <span key={edad} className="px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full text-gray-800 font-bold shadow-lg">
                {edad}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Programas Destacados */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
              Nuestros Programas 🌟
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cursos diseñados para cada etapa del aprendizaje
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programas.map((programa, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className={`bg-gradient-to-br ${programa.color} p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}>
                  <div className="text-7xl mb-4 transform group-hover:scale-125 transition-transform duration-300">
                    {programa.icono}
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl px-3 py-1 inline-block mb-3">
                    <span className="text-white font-bold text-sm">{programa.edad}</span>
                  </div>
                  <h3 className="text-2xl font-black text-white mb-3">
                    {programa.nombre}
                  </h3>
                  <p className="text-white/90 leading-relaxed">
                    {programa.descripcion}
                  </p>
                  <div className="mt-6">
                    <a href="/ilaia/programas" className="inline-block bg-white text-gray-900 px-6 py-2 rounded-lg font-bold hover:bg-gray-100 transition-colors">
                      Más info →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {stats.map((stat, idx) => (
              <div key={idx} className="transform hover:scale-110 transition-transform duration-300">
                <div className="text-5xl mb-3">{stat.icono}</div>
                <div className="text-5xl md:text-6xl font-black mb-2">{stat.numero}</div>
                <div className="text-lg font-bold">{stat.texto}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué ILAIA */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
              ¿Por Qué Elegirnos? 💡
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-3xl shadow-xl text-center transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">
                🎯
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">Metodología Activa</h3>
              <p className="text-gray-600 leading-relaxed">
                Aprendizaje hands-on donde los niños experimentan, fallan, aprenden y crean.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl text-center transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">
                👨‍🏫
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">Instructores Expertos</h3>
              <p className="text-gray-600 leading-relaxed">
                Equipo apasionado con experiencia en educación y tecnología.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl text-center transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">
                🌈
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">Grupos Reducidos</h3>
              <p className="text-gray-600 leading-relaxed">
                Máximo 12 niños por grupo para atención personalizada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
              Lo Que Dicen las Familias 💬
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonios.map((test, idx) => (
              <div key={idx} className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="text-5xl mr-4">{test.avatar}</div>
                  <div>
                    <h4 className="font-bold text-gray-900">{test.nombre}</h4>
                    <p className="text-sm text-gray-600">{test.edad}</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed italic">
                  "{test.texto}"
                </p>
                <div className="mt-4 flex gap-1">
                  {[1,2,3,4,5].map((star) => (
                    <span key={star} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            ¿Listo para la Aventura? 🚀
          </h2>
          <p className="text-2xl text-white/90 mb-10 max-w-3xl mx-auto">
            Inscribe a tus hijos en nuestros programas y descubre su potencial ilimitado
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/ilaia/contacto"
              className="inline-block bg-white text-purple-600 px-12 py-6 text-xl font-black rounded-2xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300"
            >
              📞 Agendar una Clase Muestra GRATIS
            </a>
            <a
              href="/ilaia/recursos"
              className="inline-block bg-yellow-400 text-purple-900 px-12 py-6 text-xl font-black rounded-2xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300"
            >
              📚 Descargar Recursos Gratis
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
