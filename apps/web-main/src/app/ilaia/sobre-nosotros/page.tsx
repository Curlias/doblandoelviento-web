export default function SobreNosotrosPage() {
  const valores = [
    {
      titulo: "Innovación Educativa",
      descripcion: "Utilizamos las últimas metodologías pedagógicas y tecnologías educativas para crear experiencias de aprendizaje únicas.",
      icono: "💡",
      color: "from-yellow-400 to-orange-500"
    },
    {
      titulo: "Aprendizaje Práctico",
      descripcion: "Creemos en aprender haciendo. 80% práctica, 20% teoría. Los niños aprenden mejor cuando experimentan.",
      icono: "🛠️",
      color: "from-blue-400 to-cyan-500"
    },
    {
      titulo: "Inclusión y Diversidad",
      descripcion: "STEAM es para todos. Fomentamos un ambiente inclusivo donde cada niño puede desarrollar su potencial.",
      icono: "🌈",
      color: "from-purple-400 to-pink-500"
    },
    {
      titulo: "Pasión por Enseñar",
      descripcion: "Nuestro equipo está conformado por educadores apasionados que aman lo que hacen y inspiran a sus estudiantes.",
      icono: "❤️",
      color: "from-pink-400 to-red-500"
    }
  ];

  const equipo = [
    {
      nombre: "Dr. Carlos Méndez",
      puesto: "Director Académico",
      especialidad: "Robótica Educativa",
      foto: "👨‍🔬",
      descripcion: "PhD en Ingeniería. 15 años de experiencia en educación STEAM.",
      color: "from-blue-500 to-purple-600"
    },
    {
      nombre: "Lic. María González",
      puesto: "Coordinadora de Programación",
      especialidad: "Scratch & Python",
      foto: "👩‍💻",
      descripcion: "Especialista en desarrollo de software educativo.",
      color: "from-purple-500 to-pink-600"
    },
    {
      nombre: "Ing. Roberto Sánchez",
      puesto: "Instructor de Ciencias",
      especialidad: "Experimentos & Metodología Científica",
      foto: "👨‍🏫",
      descripcion: "Ingeniero Químico con pasión por la divulgación científica.",
      color: "from-green-500 to-teal-600"
    },
    {
      nombre: "Dra. Ana Ramírez",
      puesto: "Especialista en Diseño 3D",
      especialidad: "Modelado & Impresión 3D",
      foto: "👩‍🎨",
      descripcion: "Diseñadora industrial enfocada en educación maker.",
      color: "from-orange-500 to-red-600"
    }
  ];

  const timeline = [
    {
      año: "2018",
      titulo: "Los Inicios",
      descripcion: "Nace la visión de crear un espacio de educación STEAM accesible y de calidad para niños mexicanos.",
      icono: "🌱"
    },
    {
      año: "2019",
      titulo: "Primeros Programas",
      descripcion: "Lanzamos nuestros primeros cursos de robótica y programación con 25 estudiantes entusiastas.",
      icono: "🚀"
    },
    {
      año: "2020",
      titulo: "Expansión Digital",
      descripcion: "Adaptamos nuestros programas al formato híbrido durante la pandemia, alcanzando 200+ estudiantes.",
      icono: "💻"
    },
    {
      año: "2022",
      titulo: "Familia Doblando el Viento",
      descripcion: "Nos unimos a la familia de marcas de Doblando el Viento, fortaleciendo nuestra oferta educativa.",
      icono: "🤝"
    },
    {
      año: "2024",
      titulo: "Presente",
      descripcion: "Más de 500 niños formados, 15+ programas activos y el mejor equipo de instructores STEAM del país.",
      icono: "⭐"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-96 h-96 bg-yellow-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-300 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="w-32 h-32 bg-white rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl">
            <svg className="w-20 h-20 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-black text-white mb-6">
            Sobre ILAIA 🌟
          </h1>
          <p className="text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Inspirando mentes brillantes a través de la educación STEAM
          </p>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Misión */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-10 shadow-xl">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-4xl">🎯</span>
              </div>
              <h2 className="text-4xl font-black text-gray-900 mb-4">Nuestra Misión</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Formar la próxima generación de innovadores mexicanos a través de una educación STEAM 
                de excelencia, accesible y centrada en el estudiante. Creemos que cada niño tiene el 
                potencial de ser un creador, no solo un consumidor de tecnología.
              </p>
            </div>

            {/* Visión */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-10 shadow-xl">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-4xl">🔭</span>
              </div>
              <h2 className="text-4xl font-black text-gray-900 mb-4">Nuestra Visión</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ser el referente líder en educación STEAM en México, transformando la manera en que los 
                niños aprenden ciencia y tecnología. Aspiramos a impactar a miles de familias y contribuir 
                a un futuro más innovador y tecnológicamente preparado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-4">
              Nuestros Valores 💎
            </h2>
            <p className="text-xl text-gray-600">
              Los principios que guían todo lo que hacemos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {valores.map((valor, idx) => (
              <div key={idx} className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
                <div className={`bg-gradient-to-r ${valor.color} p-6 text-center`}>
                  <div className="text-6xl mb-2">{valor.icono}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-black text-gray-900 mb-3">
                    {valor.titulo}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {valor.descripcion}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-4">
              Nuestra Historia 📖
            </h2>
            <p className="text-xl text-gray-600">
              El camino que nos trajo hasta aquí
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, idx) => (
              <div key={idx} className="flex gap-8 mb-12 last:mb-0">
                {/* Año */}
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-black text-lg shadow-lg">
                    {item.año}
                  </div>
                  {idx < timeline.length - 1 && (
                    <div className="w-1 h-full bg-gradient-to-b from-purple-600 to-pink-600 mt-4"></div>
                  )}
                </div>

                {/* Contenido */}
                <div className="flex-1 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 mb-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="text-5xl mb-3">{item.icono}</div>
                  <h3 className="text-2xl font-black text-gray-900 mb-2">
                    {item.titulo}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {item.descripcion}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="py-20 bg-gradient-to-b from-indigo-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-4">
              Conoce al Equipo 👥
            </h2>
            <p className="text-xl text-gray-600">
              Expertos apasionados por la educación STEAM
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {equipo.map((miembro, idx) => (
              <div key={idx} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className={`bg-gradient-to-br ${miembro.color} h-48 flex items-center justify-center text-9xl`}>
                  {miembro.foto}
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-black text-gray-900 mb-1">
                    {miembro.nombre}
                  </h3>
                  <div className={`inline-block px-4 py-1 bg-gradient-to-r ${miembro.color} text-white text-sm font-bold rounded-full mb-2`}>
                    {miembro.puesto}
                  </div>
                  <p className="text-purple-600 font-semibold mb-3 text-sm">
                    {miembro.especialidad}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {miembro.descripcion}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Familia Doblando el Viento */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <span className="text-6xl">🤝</span>
            </div>
            <h2 className="text-5xl font-black text-gray-900 mb-6">
              Parte de la Familia Doblando el Viento
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              ILAIA es parte de la familia de marcas de <strong>Doblando el Viento</strong>, 
              una empresa con más de 5 años de experiencia en la industria papelera y educativa. 
              Esta alianza nos permite ofrecer recursos de alta calidad y una red de apoyo sólida 
              para nuestra comunidad educativa.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Junto con <strong>TAVITI</strong> (papelería especializada) y <strong>Doblando el Viento</strong> (soluciones 
              empresariales), formamos un ecosistema completo de productos y servicios para la educación y creatividad.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/doblado"
                className="px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-xl font-bold hover:shadow-lg transition-all duration-300"
              >
                Doblando el Viento
              </a>
              <a
                href="/taviti"
                className="px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-xl font-bold hover:shadow-lg transition-all duration-300"
              >
                TAVITI Papelería
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            ¿Listo para Unirte a Nosotros? 🚀
          </h2>
          <p className="text-2xl text-white/90 mb-10 max-w-3xl mx-auto">
            Sé parte de la comunidad ILAIA y descubre el potencial de tus hijos
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/ilaia/programas"
              className="inline-block bg-white text-purple-600 px-12 py-6 text-xl font-black rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300"
            >
              🎓 Ver Programas
            </a>
            <a
              href="/ilaia/contacto"
              className="inline-block bg-yellow-400 text-purple-900 px-12 py-6 text-xl font-black rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300"
            >
              📞 Agendar Clase Muestra
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
