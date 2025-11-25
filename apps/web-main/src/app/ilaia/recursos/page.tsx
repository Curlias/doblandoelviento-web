export default function RecursosPage() {
  const descargas = [
    {
      categoria: "Robótica",
      color: "from-blue-500 to-cyan-600",
      icono: "🤖",
      recursos: [
        { nombre: "Guía de LEGO WeDo", tipo: "PDF", descripcion: "Manual completo para comenzar con LEGO WeDo", descargas: "1.2k" },
        { nombre: "Proyectos de Arduino", tipo: "PDF", descripcion: "15 proyectos paso a paso con Arduino", descargas: "890" },
        { nombre: "Plantillas de Robots", tipo: "PNG/SVG", descripcion: "Diseños de robots para imprimir y armar", descargas: "650" }
      ]
    },
    {
      categoria: "Programación",
      color: "from-purple-500 to-pink-600",
      icono: "💻",
      recursos: [
        { nombre: "Ejercicios de Scratch", tipo: "SB3", descripcion: "30 ejercicios progresivos de Scratch", descargas: "2.1k" },
        { nombre: "Python para Niños", tipo: "PDF", descripcion: "Introducción a Python con ejemplos divertidos", descargas: "1.5k" },
        { nombre: "Retos de Lógica", tipo: "PDF", descripcion: "100 acertijos de lógica computacional", descargas: "980" },
        { nombre: "Cheat Sheet HTML/CSS", tipo: "PDF", descripcion: "Referencia rápida de HTML y CSS", descargas: "750" }
      ]
    },
    {
      categoria: "Ciencias",
      color: "from-green-500 to-teal-600",
      icono: "🔬",
      recursos: [
        { nombre: "Experimentos Caseros", tipo: "PDF", descripcion: "25 experimentos con materiales del hogar", descargas: "1.8k" },
        { nombre: "Tablas Periódicas", tipo: "PDF/PNG", descripcion: "Tabla periódica interactiva para niños", descargas: "920" },
        { nombre: "Cuaderno de Observación", tipo: "PDF", descripcion: "Plantilla para registrar experimentos", descargas: "680" }
      ]
    },
    {
      categoria: "Diseño 3D",
      color: "from-orange-500 to-red-600",
      icono: "🎨",
      recursos: [
        { nombre: "Tutorial Tinkercad", tipo: "PDF", descripcion: "Aprende Tinkercad desde cero", descargas: "1.1k" },
        { nombre: "Modelos 3D Básicos", tipo: "STL", descripcion: "10 modelos 3D para practicar", descargas: "840" },
        { nombre: "Plantillas de Diseño", tipo: "SVG", descripcion: "Plantillas para proyectos 3D", descargas: "560" }
      ]
    }
  ];

  const videos = [
    {
      titulo: "Cómo programar tu primer juego en Scratch",
      duracion: "15 min",
      nivel: "Principiante",
      vistas: "12.5k",
      thumbnail: "🎮",
      color: "from-purple-400 to-pink-500"
    },
    {
      titulo: "Construye un robot seguidor de línea",
      duracion: "22 min",
      nivel: "Intermedio",
      vistas: "8.9k",
      thumbnail: "🤖",
      color: "from-blue-400 to-cyan-500"
    },
    {
      titulo: "Experimento: Volcán casero perfecto",
      duracion: "8 min",
      nivel: "Principiante",
      vistas: "15.2k",
      thumbnail: "🌋",
      color: "from-red-400 to-orange-500"
    },
    {
      titulo: "Diseña e imprime tu primera pieza 3D",
      duracion: "18 min",
      nivel: "Principiante",
      vistas: "6.7k",
      thumbnail: "🖨️",
      color: "from-yellow-400 to-orange-500"
    },
    {
      titulo: "Arduino: LED intermitente y más",
      duracion: "25 min",
      nivel: "Intermedio",
      vistas: "9.3k",
      thumbnail: "💡",
      color: "from-green-400 to-teal-500"
    },
    {
      titulo: "Python para niños: Variables y condicionales",
      duracion: "20 min",
      nivel: "Intermedio",
      vistas: "7.1k",
      thumbnail: "🐍",
      color: "from-indigo-400 to-purple-500"
    }
  ];

  const guiasPadres = [
    {
      titulo: "Cómo apoyar el aprendizaje STEAM en casa",
      descripcion: "Estrategias prácticas para fomentar la curiosidad científica y tecnológica en tus hijos.",
      icono: "👨‍👩‍👧",
      color: "bg-blue-100"
    },
    {
      titulo: "Seguridad en Internet para niños",
      descripcion: "Guía completa para mantener a tus hijos seguros mientras aprenden online.",
      icono: "🔒",
      color: "bg-green-100"
    },
    {
      titulo: "Equilibrio entre pantallas y juego libre",
      descripcion: "Cómo balancear el tiempo de tecnología con otras actividades.",
      icono: "⚖️",
      color: "bg-purple-100"
    },
    {
      titulo: "Proyectos STEAM familiares",
      descripcion: "Actividades para hacer juntos y fortalecer el vínculo mientras aprenden.",
      icono: "❤️",
      color: "bg-pink-100"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-96 h-96 bg-yellow-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-300 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-6xl md:text-7xl font-black text-white mb-6">
            Recursos Gratuitos 📚
          </h1>
          <p className="text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Descarga guías, plantillas y materiales educativos. 
            Todo diseñado para aprender jugando.
          </p>
        </div>
      </section>

      {/* Descargas por Categoría */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-4">
              Descargas Gratuitas 📥
            </h2>
            <p className="text-xl text-gray-600">
              Material didáctico de alta calidad para usar en casa o en clase
            </p>
          </div>

          {descargas.map((cat, catIdx) => (
            <div key={catIdx} className="mb-16">
              {/* Header Categoría */}
              <div className="flex items-center justify-center mb-8">
                <div className={`bg-gradient-to-r ${cat.color} text-white px-8 py-4 rounded-2xl flex items-center gap-4 shadow-xl`}>
                  <span className="text-4xl">{cat.icono}</span>
                  <span className="text-3xl font-black">{cat.categoria}</span>
                </div>
              </div>

              {/* Recursos */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {cat.recursos.map((recurso, idx) => (
                  <div key={idx} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className={`bg-gradient-to-r ${cat.color} p-4 text-white`}>
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-lg">{recurso.tipo}</span>
                        <span className="text-sm bg-white/20 px-3 py-1 rounded-full">
                          📥 {recurso.descargas}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-black text-gray-900 mb-2">
                        {recurso.nombre}
                      </h3>
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                        {recurso.descripcion}
                      </p>
                      <button className={`w-full bg-gradient-to-r ${cat.color} text-white px-6 py-3 rounded-lg font-bold hover:shadow-lg transition-all duration-300`}>
                        Descargar Gratis
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Videos Tutoriales */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-4">
              Videotutoriales 📹
            </h2>
            <p className="text-xl text-gray-600">
              Aprende paso a paso con nuestros videos educativos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {videos.map((video, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                {/* Thumbnail */}
                <div className={`bg-gradient-to-br ${video.color} h-48 flex items-center justify-center text-8xl cursor-pointer`}>
                  {video.thumbnail}
                </div>

                {/* Info */}
                <div className="p-6">
                  <div className="flex gap-2 mb-3">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-bold rounded-full">
                      {video.nivel}
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full">
                      {video.duracion}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-gray-900 mb-2">
                    {video.titulo}
                  </h3>

                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-500">👁️ {video.vistas} vistas</span>
                  </div>

                  <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-bold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2">
                    <span>▶️</span> Ver Video
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="#"
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 text-lg font-bold rounded-2xl hover:shadow-xl transition-all duration-300"
            >
              📺 Ver Todos los Videos
            </a>
          </div>
        </div>
      </section>

      {/* Guías para Padres */}
      <section className="py-20 bg-gradient-to-b from-yellow-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-4">
              Guías para Padres 👨‍👩‍👧‍👦
            </h2>
            <p className="text-xl text-gray-600">
              Herramientas para apoyar el aprendizaje de tus hijos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {guiasPadres.map((guia, idx) => (
              <div key={idx} className={`${guia.color} rounded-2xl p-8 hover:shadow-xl transition-all duration-300`}>
                <div className="text-6xl mb-4">{guia.icono}</div>
                <h3 className="text-2xl font-black text-gray-900 mb-3">
                  {guia.titulo}
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {guia.descripcion}
                </p>
                <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-bold hover:shadow-lg transition-all duration-300 border-2 border-purple-600">
                  Descargar Guía
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Recibe Recursos Nuevos 📬
          </h2>
          <p className="text-2xl text-white/90 mb-10 max-w-3xl mx-auto">
            Suscríbete y recibe cada semana nuevos materiales educativos gratuitos
          </p>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-2 shadow-2xl flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="flex-1 px-6 py-4 text-gray-800 rounded-xl focus:outline-none text-lg"
              />
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-black text-lg hover:shadow-lg transition-all duration-300">
                Suscribirme Gratis
              </button>
            </div>
            <p className="text-white/80 mt-4 text-sm">
              ✅ Sin spam. Cancela cuando quieras. Más de 5,000 familias suscritas.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Programas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-black text-gray-900 mb-6">
            ¿Te Gustaron los Recursos? 🚀
          </h2>
          <p className="text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Imagina todo lo que pueden aprender en nuestros programas completos
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
