export default function TalleresPage() {
  const talleres = [
    {
      nombre: "Creación de Videojuegos",
      duracion: "2 días intensivo",
      edad: "10-14 años",
      fecha: "Próximo: 15-16 Junio",
      precio: "$80",
      descripcion: "Crea tu primer videojuego completo usando Scratch o Unity. Desde el diseño hasta la publicación.",
      icono: "🎮",
      color: "from-blue-500 to-purple-600",
      incluye: ["Material digital", "Snacks", "Certificado", "Juego publicado"],
      horario: "9:00 AM - 1:00 PM"
    },
    {
      nombre: "Robots en Acción",
      duracion: "1 día",
      edad: "8-12 años",
      fecha: "Cada sábado",
      precio: "$45",
      descripcion: "Construye y programa robots con LEGO. Participa en retos y competencias amistosas.",
      icono: "🤖",
      color: "from-green-500 to-teal-600",
      incluye: ["Kit LEGO", "Manual", "Snacks"],
      horario: "10:00 AM - 2:00 PM"
    },
    {
      nombre: "Experimentos Científicos Locos",
      duracion: "Medio día",
      edad: "6-10 años",
      fecha: "Domingos alternos",
      precio: "$35",
      descripcion: "Volcanes, slime, reacciones químicas y más. ¡Ciencia divertida y segura!",
      icono: "🧪",
      color: "from-pink-500 to-red-500",
      incluye: ["Kit de experimentos", "Bata", "Materiales llevables"],
      horario: "9:00 AM - 12:00 PM"
    },
    {
      nombre: "Diseño e Impresión 3D",
      duracion: "1 día",
      edad: "11-15 años",
      fecha: "Último sábado del mes",
      precio: "$50",
      descripcion: "Diseña en Tinkercad y lleva a casa tus creaciones impresas en 3D.",
      icono: "🖨️",
      color: "from-yellow-500 to-orange-600",
      incluye: ["3 impresiones", "Diseños digitales", "Manual Tinkercad"],
      horario: "2:00 PM - 6:00 PM"
    },
    {
      nombre: "Programación con Minecraft",
      duracion: "2 días",
      edad: "9-13 años",
      fecha: "Próximo: 22-23 Junio",
      precio: "$75",
      descripcion: "Aprende Python programando dentro de Minecraft Education. ¡Diversión y código!",
      icono: "⛏️",
      color: "from-cyan-500 to-blue-600",
      incluye: ["Licencia Minecraft Edu", "Proyectos", "Snacks"],
      horario: "10:00 AM - 2:00 PM"
    },
    {
      nombre: "Desarrollo de Apps Móviles",
      duracion: "3 días",
      edad: "13-16 años",
      fecha: "Próximo: 1-3 Julio",
      precio: "$120",
      descripcion: "Crea tu primera app móvil con MIT App Inventor. Desde la idea hasta el APK.",
      icono: "📱",
      color: "from-purple-500 to-indigo-600",
      incluye: ["Manual completo", "App publicable", "Certificado avanzado"],
      horario: "3:00 PM - 7:00 PM"
    }
  ];

  const campamentos = [
    {
      nombre: "Campamento de Verano STEAM",
      duracion: "2 semanas",
      edad: "7-14 años",
      fecha: "Julio 10-21",
      precio: "$450",
      descripcion: "Dos semanas intensivas de robótica, programación, ciencia y arte. Incluye lunch y transporte opcional.",
      icono: "☀️",
      actividades: ["Robótica", "Programación", "Experimentos", "Diseño 3D", "Arte Digital", "Deportes"],
      horario: "8:00 AM - 4:00 PM"
    },
    {
      nombre: "Campamento de Invierno Tech",
      duracion: "1 semana",
      edad: "8-15 años",
      fecha: "Diciembre 18-22",
      precio: "$280",
      descripcion: "Una semana de proyectos tecnológicos navideños. Crea regalos tech para tu familia.",
      icono: "❄️",
      actividades: ["Robótica navideña", "Apps festivas", "Gadgets IoT", "Juegos temáticos"],
      horario: "9:00 AM - 3:00 PM"
    }
  ];

  const eventos = [
    {
      nombre: "Hackathon Kids",
      fecha: "Agosto 5, 2024",
      descripcion: "Competencia amistosa de 6 horas donde los niños resuelven retos tech en equipos.",
      edad: "10-16 años",
      precio: "Gratis",
      icono: "🏆"
    },
    {
      nombre: "Feria de Ciencias ILAIA",
      fecha: "Septiembre 15, 2024",
      descripcion: "Los estudiantes presentan sus proyectos científicos a la comunidad.",
      edad: "Todas las edades",
      precio: "Gratis",
      icono: "🔬"
    },
    {
      nombre: "Robot Battle",
      fecha: "Octubre 20, 2024",
      descripcion: "Competencia de robots sumo. ¡El último robot en pie gana!",
      edad: "9-15 años",
      precio: "$20",
      icono: "⚔️"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 via-blue-50 to-purple-50">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-96 h-96 bg-yellow-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-300 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-6xl md:text-7xl font-black text-white mb-6">
            Talleres y Eventos 🎨
          </h1>
          <p className="text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Actividades puntuales, campamentos y eventos especiales. 
            Perfectos para probar antes de comprometerse con un programa completo.
          </p>
        </div>
      </section>

      {/* Talleres Regulares */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-4">
              Talleres Puntuales 🛠️
            </h2>
            <p className="text-xl text-gray-600">
              Actividades de 1-3 días para experimentar y aprender
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {talleres.map((taller, idx) => (
              <div key={idx} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                {/* Header */}
                <div className={`bg-gradient-to-r ${taller.color} p-6 text-white`}>
                  <div className="text-6xl mb-3 text-center">{taller.icono}</div>
                  <h3 className="text-2xl font-black text-center mb-2">{taller.nombre}</h3>
                  <div className="flex justify-between items-center text-sm bg-white/20 rounded-lg px-4 py-2">
                    <span>{taller.duracion}</span>
                    <span>{taller.edad}</span>
                  </div>
                </div>

                {/* Contenido */}
                <div className="p-6">
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">📅 {taller.fecha}</span>
                      <span className="text-2xl font-black text-purple-600">{taller.precio}</span>
                    </div>
                    <div className="text-gray-600">🕐 {taller.horario}</div>
                  </div>

                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {taller.descripcion}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-bold text-gray-900 mb-2">Incluye:</h4>
                    <ul className="space-y-1">
                      {taller.incluye.map((item, i) => (
                        <li key={i} className="flex items-start text-sm">
                          <span className="text-green-500 mr-2">✓</span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href="/ilaia/contacto"
                    className={`block text-center bg-gradient-to-r ${taller.color} text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all duration-300`}
                  >
                    Inscribirse
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campamentos */}
      <section className="py-20 bg-gradient-to-b from-yellow-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-4">
              Campamentos Intensivos 🏕️
            </h2>
            <p className="text-xl text-gray-600">
              Experiencias inmersivas de 1-2 semanas
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {campamentos.map((camp, idx) => (
              <div key={idx} className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-orange-500 to-pink-600 p-10 text-white text-center">
                  <div className="text-8xl mb-4">{camp.icono}</div>
                  <h3 className="text-4xl font-black mb-2">{camp.nombre}</h3>
                  <div className="text-xl opacity-90">{camp.fecha}</div>
                </div>

                <div className="p-8">
                  <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                    <div className="bg-purple-50 rounded-xl p-3">
                      <div className="font-bold text-purple-600">Duración</div>
                      <div className="text-sm text-gray-700">{camp.duracion}</div>
                    </div>
                    <div className="bg-blue-50 rounded-xl p-3">
                      <div className="font-bold text-blue-600">Edad</div>
                      <div className="text-sm text-gray-700">{camp.edad}</div>
                    </div>
                    <div className="bg-green-50 rounded-xl p-3">
                      <div className="font-bold text-green-600">Precio</div>
                      <div className="text-sm text-gray-700">{camp.precio}</div>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                    {camp.descripcion}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 mb-3">Actividades:</h4>
                    <div className="flex flex-wrap gap-2">
                      {camp.actividades.map((act, i) => (
                        <span key={i} className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-semibold">
                          {act}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="text-gray-600 mb-6">
                    🕐 Horario: {camp.horario}
                  </div>

                  <a
                    href="/ilaia/contacto"
                    className="block text-center bg-gradient-to-r from-orange-600 to-pink-600 text-white px-8 py-4 rounded-xl font-black text-lg hover:shadow-xl transition-all duration-300"
                  >
                    Reservar Plaza
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eventos Especiales */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-4">
              Eventos Especiales 🎪
            </h2>
            <p className="text-xl text-gray-600">
              Competencias, ferias y celebraciones
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {eventos.map((evento, idx) => (
              <div key={idx} className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <div className="text-7xl mb-4">{evento.icono}</div>
                <h3 className="text-2xl font-black text-gray-900 mb-2">{evento.nombre}</h3>
                <div className="text-purple-600 font-bold mb-3">📅 {evento.fecha}</div>
                <p className="text-gray-700 mb-4 leading-relaxed">{evento.descripcion}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-600">{evento.edad}</span>
                  <span className="text-lg font-bold text-green-600">{evento.precio}</span>
                </div>
                <a
                  href="/ilaia/contacto"
                  className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all duration-300"
                >
                  Más Info
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            ¿Quieres Organizar un Taller Privado? 🎉
          </h2>
          <p className="text-2xl text-white/90 mb-10 max-w-3xl mx-auto">
            Talleres personalizados para cumpleaños, escuelas o grupos privados
          </p>
          <a
            href="/ilaia/contacto"
            className="inline-block bg-white text-purple-600 px-12 py-6 text-xl font-black rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300"
          >
            📧 Contactar para Eventos Privados
          </a>
        </div>
      </section>
    </div>
  );
}
