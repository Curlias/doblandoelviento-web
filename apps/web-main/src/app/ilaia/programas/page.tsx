export default function ProgramasPage() {
  const programasPorEdad = [
    {
      grupoEdad: "6-8 Años",
      subtitulo: "Descubrimiento y Exploración",
      color: "from-blue-400 to-cyan-500",
      programas: [
        {
          nombre: "Robótica para Peques",
          duracion: "3 meses",
          sesiones: "1 sesión semanal (1.5h)",
          precio: "$120/mes",
          descripcion: "Introducción a la robótica con LEGO WeDo. Los niños construyen y programan robots simples mientras aprenden conceptos básicos de ingeniería.",
          icono: "🤖",
          incluye: ["Kit LEGO WeDo", "Certificado", "Proyecto final"],
          habilidades: ["Pensamiento lógico", "Trabajo en equipo", "Creatividad"]
        },
        {
          nombre: "Mini Científicos",
          duracion: "3 meses",
          sesiones: "1 sesión semanal (1.5h)",
          precio: "$100/mes",
          descripcion: "Experimentos científicos divertidos y seguros. Química, física y biología de manera práctica y emocionante.",
          icono: "🔬",
          incluye: ["Kit de experimentos", "Bata de laboratorio", "Cuaderno científico"],
          habilidades: ["Observación", "Hipótesis", "Experimentación"]
        }
      ]
    },
    {
      grupoEdad: "9-12 Años",
      subtitulo: "Creación y Desarrollo",
      color: "from-purple-400 to-pink-500",
      programas: [
        {
          nombre: "Programación con Scratch",
          duracion: "4 meses",
          sesiones: "1 sesión semanal (2h)",
          precio: "$130/mes",
          descripcion: "Aprende a programar creando tus propios juegos y animaciones. Desde conceptos básicos hasta proyectos complejos.",
          icono: "💻",
          incluye: ["Acceso a plataforma", "Proyectos guiados", "Certificado"],
          habilidades: ["Programación", "Lógica computacional", "Resolución de problemas"]
        },
        {
          nombre: "Robótica Avanzada",
          duracion: "4 meses",
          sesiones: "1 sesión semanal (2h)",
          precio: "$150/mes",
          descripcion: "LEGO Mindstorms EV3 y Arduino. Construcción y programación de robots más complejos con sensores y motores.",
          icono: "⚙️",
          incluye: ["Kit Mindstorms", "Arduino Starter", "Componentes electrónicos"],
          habilidades: ["Ingeniería", "Programación avanzada", "Electrónica"]
        },
        {
          nombre: "Diseño 3D",
          duracion: "3 meses",
          sesiones: "1 sesión semanal (2h)",
          precio: "$140/mes",
          descripcion: "Aprende a diseñar en 3D con Tinkercad y ve tus creaciones impresas en nuestra impresora 3D.",
          icono: "🎨",
          incluye: ["Licencia Tinkercad", "Impresiones incluidas", "Proyecto final"],
          habilidades: ["Diseño 3D", "Pensamiento espacial", "Creatividad digital"]
        }
      ]
    },
    {
      grupoEdad: "13-16 Años",
      subtitulo: "Innovación y Especialización",
      color: "from-orange-400 to-red-500",
      programas: [
        {
          nombre: "Python para Jóvenes",
          duracion: "5 meses",
          sesiones: "1 sesión semanal (2.5h)",
          precio: "$160/mes",
          descripcion: "Programación profesional con Python. Desde fundamentos hasta desarrollo de aplicaciones, web scraping y análisis de datos.",
          icono: "🐍",
          incluye: ["Recursos digitales", "Proyectos reales", "Certificación"],
          habilidades: ["Python", "Algoritmos", "Desarrollo de software"]
        },
        {
          nombre: "Desarrollo Web",
          duracion: "6 meses",
          sesiones: "1 sesión semanal (2.5h)",
          precio: "$170/mes",
          descripcion: "HTML, CSS, JavaScript y frameworks modernos. Crea tus propios sitios web interactivos y dinámicos.",
          icono: "🌐",
          incluye: ["Hosting gratis 1 año", "Dominio .com", "Portfolio final"],
          habilidades: ["HTML/CSS", "JavaScript", "Diseño responsive"]
        },
        {
          nombre: "Arduino & IoT",
          duracion: "5 meses",
          sesiones: "1 sesión semanal (2.5h)",
          precio: "$180/mes",
          descripcion: "Internet de las Cosas. Construye dispositivos inteligentes conectados a internet con Arduino y sensores.",
          icono: "📡",
          incluye: ["Kit Arduino completo", "Sensores variados", "Proyecto IoT"],
          habilidades: ["Arduino", "IoT", "Electrónica avanzada"]
        },
        {
          nombre: "Inteligencia Artificial",
          duracion: "4 meses",
          sesiones: "1 sesión semanal (2.5h)",
          precio: "$190/mes",
          descripcion: "Introducción a Machine Learning y AI. Crea tus propios modelos de reconocimiento de imágenes y procesamiento de lenguaje.",
          icono: "🧠",
          incluye: ["Google Colab Pro", "Datasets curados", "Certificado especializado"],
          habilidades: ["Machine Learning", "Python avanzado", "Análisis de datos"]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-pink-50 to-orange-50">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-300 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-6xl md:text-7xl font-black text-white mb-6">
            Nuestros Programas 🎓
          </h1>
          <p className="text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Cursos estructurados por edad y nivel de experiencia. 
            Cada programa está diseñado para maximizar el aprendizaje y la diversión.
          </p>
        </div>
      </section>

      {/* Programas por Edad */}
      {programasPorEdad.map((grupo, grupoIdx) => (
        <section key={grupoIdx} className="py-20">
          <div className="container mx-auto px-4">
            {/* Header del Grupo */}
            <div className="text-center mb-16">
              <div className={`inline-block bg-gradient-to-r ${grupo.color} text-white px-8 py-3 rounded-full font-bold text-lg mb-4`}>
                {grupo.grupoEdad}
              </div>
              <h2 className="text-5xl font-black text-gray-900 mb-3">
                {grupo.subtitulo}
              </h2>
            </div>

            {/* Programas del Grupo */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
              {grupo.programas.map((programa, idx) => (
                <div key={idx} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  {/* Header del Programa */}
                  <div className={`bg-gradient-to-r ${grupo.color} p-8 text-white`}>
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-6xl">{programa.icono}</div>
                      <div className="text-right">
                        <div className="text-4xl font-black">{programa.precio}</div>
                        <div className="text-sm opacity-90">{programa.duracion}</div>
                      </div>
                    </div>
                    <h3 className="text-3xl font-black mb-2">{programa.nombre}</h3>
                    <p className="text-white/90">{programa.sesiones}</p>
                  </div>

                  {/* Contenido del Programa */}
                  <div className="p-8">
                    <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                      {programa.descripcion}
                    </p>

                    {/* Incluye */}
                    <div className="mb-6">
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                        <span className="text-2xl mr-2">📦</span> Incluye:
                      </h4>
                      <ul className="space-y-2">
                        {programa.incluye.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-green-500 mr-2 mt-1">✓</span>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Habilidades */}
                    <div className="mb-6">
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                        <span className="text-2xl mr-2">💡</span> Habilidades:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {programa.habilidades.map((habilidad, i) => (
                          <span key={i} className={`px-4 py-2 bg-gradient-to-r ${grupo.color} text-white rounded-full text-sm font-semibold`}>
                            {habilidad}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex gap-3">
                      <a
                        href="/ilaia/contacto"
                        className={`flex-1 text-center bg-gradient-to-r ${grupo.color} text-white px-6 py-4 rounded-xl font-bold hover:shadow-lg transition-all duration-300`}
                      >
                        Inscribirse Ahora
                      </a>
                      <a
                        href="/ilaia/contacto"
                        className="px-6 py-4 border-2 border-gray-300 rounded-xl font-bold text-gray-700 hover:border-purple-500 hover:text-purple-600 transition-all duration-300"
                      >
                        Más Info
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Beneficios Generales */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-4">
              Todos los Programas Incluyen 🌟
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-6">
              <div className="text-6xl mb-4">👨‍🏫</div>
              <h3 className="font-bold text-gray-900 mb-2">Instructores Expertos</h3>
              <p className="text-gray-600">Profesionales apasionados por la educación</p>
            </div>

            <div className="text-center p-6">
              <div className="text-6xl mb-4">👥</div>
              <h3 className="font-bold text-gray-900 mb-2">Grupos Reducidos</h3>
              <p className="text-gray-600">Máximo 12 estudiantes por grupo</p>
            </div>

            <div className="text-center p-6">
              <div className="text-6xl mb-4">🎯</div>
              <h3 className="font-bold text-gray-900 mb-2">Aprendizaje Práctico</h3>
              <p className="text-gray-600">80% práctica, 20% teoría</p>
            </div>

            <div className="text-center p-6">
              <div className="text-6xl mb-4">📜</div>
              <h3 className="font-bold text-gray-900 mb-2">Certificación</h3>
              <p className="text-gray-600">Certificado al completar el programa</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            ¿Tienes Dudas? 🤔
          </h2>
          <p className="text-2xl text-white/90 mb-10 max-w-3xl mx-auto">
            Agenda una clase muestra GRATIS y conoce nuestros programas
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/ilaia/contacto"
              className="inline-block bg-white text-purple-600 px-12 py-6 text-xl font-black rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300"
            >
              📅 Agendar Clase Muestra
            </a>
            <a
              href="/ilaia/talleres"
              className="inline-block bg-yellow-400 text-purple-900 px-12 py-6 text-xl font-black rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300"
            >
              🎨 Ver Talleres
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
