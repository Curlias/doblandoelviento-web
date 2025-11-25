export default function SobreNosotrosPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1920&h=800&fit=crop"
            alt="Sobre TAVITI"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/80 via-amber-800/70 to-amber-900/80"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="text-amber-200 text-sm tracking-widest uppercase mb-4 block">Nuestra Historia</span>
          <h1 className="font-serif text-5xl md:text-7xl font-normal text-white mb-6">
            Sobre Nosotros
          </h1>
          <div className="w-20 h-1 bg-amber-400 mx-auto rounded-full mb-6"></div>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Una historia de pasión, creatividad y crecimiento en el mundo de la papelería de lujo
          </p>
        </div>
      </section>

      {/* Origen Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-amber-700 text-sm tracking-widest uppercase mb-4 block">Nuestros Orígenes</span>
              <h2 className="font-serif text-4xl md:text-5xl font-normal text-primary-charcoal mb-6">
                El Nacimiento de TAVITI
              </h2>
              <div className="w-16 h-1 bg-amber-600 mx-auto rounded-full"></div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <span className="font-serif text-2xl text-amber-700">TAVITI</span> nació como una extensión natural de <span className="font-medium">Doblando el Viento</span>, 
                cuando el mercado de papelería comenzó a expandirse y descubrimos una creciente demanda por productos especializados 
                de alta calidad.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Durante años, <strong>Doblando el Viento</strong> se había dedicado a crear experiencias memorables para eventos, 
                y dentro de nuestro portafolio de servicios, la papelería personalizada comenzó a destacar de manera especial. 
                Nuestros clientes no solo buscaban decoración y organización de eventos, sino piezas únicas que contaran historias, 
                que reflejaran personalidades y que perduraran en el tiempo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-gradient-to-b from-amber-50/30 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-amber-700 text-sm tracking-widest uppercase mb-4 block">Nuestra Evolución</span>
            <h2 className="font-serif text-4xl md:text-5xl font-normal text-primary-charcoal mb-6">
              De la Visión a la Realidad
            </h2>
            <div className="w-16 h-1 bg-amber-600 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="space-y-12">
              {/* Timeline Item 1 */}
              <div className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-32 text-right">
                  <span className="font-serif text-3xl text-amber-700 font-bold">2020</span>
                </div>
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="w-4 h-4 bg-amber-600 rounded-full"></div>
                  <div className="w-0.5 h-full bg-amber-200 mt-2"></div>
                </div>
                <div className="flex-1 pb-12">
                  <h3 className="font-serif text-2xl text-primary-charcoal mb-3">Los Inicios en Doblando el Viento</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Dentro de Doblando el Viento, comenzamos a notar que las invitaciones, menús y detalles 
                    de papelería se convertían en los elementos más solicitados y apreciados por nuestros clientes. 
                    La calidad artesanal y el diseño personalizado generaban comentarios excepcionales.
                  </p>
                </div>
              </div>

              {/* Timeline Item 2 */}
              <div className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-32 text-right">
                  <span className="font-serif text-3xl text-amber-700 font-bold">2022</span>
                </div>
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="w-4 h-4 bg-amber-600 rounded-full"></div>
                  <div className="w-0.5 h-full bg-amber-200 mt-2"></div>
                </div>
                <div className="flex-1 pb-12">
                  <h3 className="font-serif text-2xl text-primary-charcoal mb-3">La Expansión del Mercado</h3>
                  <p className="text-gray-700 leading-relaxed">
                    El mercado de papelería de lujo en México comenzó a expandirse significativamente. 
                    Empresas buscaban identidad corporativa distintiva, parejas querían invitaciones únicas 
                    para sus bodas, y había una demanda creciente por productos artesanales de alta calidad. 
                    Era el momento perfecto para especializarnos.
                  </p>
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-32 text-right">
                  <span className="font-serif text-3xl text-amber-700 font-bold">2024</span>
                </div>
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="w-4 h-4 bg-amber-600 rounded-full"></div>
                  <div className="w-0.5 h-full bg-amber-200 mt-2"></div>
                </div>
                <div className="flex-1 pb-12">
                  <h3 className="font-serif text-2xl text-primary-charcoal mb-3">Nace TAVITI</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Tomamos la decisión de crear una marca independiente dedicada exclusivamente a la papelería boutique. 
                    TAVITI nació con una identidad propia, procesos especializados y un equipo dedicado completamente 
                    a la creación de piezas únicas de papelería.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Manteniendo los valores de calidad y atención al detalle de Doblando el Viento, 
                    pero con la libertad de enfocarnos exclusivamente en el arte de la papelería.
                  </p>
                </div>
              </div>

              {/* Timeline Item 4 */}
              <div className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-32 text-right">
                  <span className="font-serif text-3xl text-amber-700 font-bold">Hoy</span>
                </div>
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="w-4 h-4 bg-amber-600 rounded-full"></div>
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-2xl text-primary-charcoal mb-3">TAVITI en el Presente</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Somos una marca consolidada de papelería de lujo, trabajando con clientes en todo México. 
                    Cada proyecto es una oportunidad para crear algo extraordinario, desde invitaciones de boda 
                    hasta identidad corporativa completa, manteniendo siempre nuestro compromiso con la excelencia 
                    y la creatividad que nos caracteriza desde nuestros orígenes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filosofía */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-amber-700 text-sm tracking-widest uppercase mb-4 block">Nuestra Esencia</span>
              <h2 className="font-serif text-4xl md:text-5xl font-normal text-primary-charcoal mb-6">
                Lo Que Nos Define
              </h2>
              <div className="w-16 h-1 bg-amber-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="text-center">
                <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl text-primary-charcoal mb-3">Herencia de Calidad</h3>
                <p className="text-gray-600 leading-relaxed">
                  Heredamos de Doblando el Viento la pasión por la excelencia y el compromiso 
                  con crear experiencias memorables para cada cliente.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl text-primary-charcoal mb-3">Especialización</h3>
                <p className="text-gray-600 leading-relaxed">
                  Nos dedicamos exclusivamente a la papelería, lo que nos permite perfeccionar 
                  cada técnica y ofrecer resultados excepcionales.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl text-primary-charcoal mb-3">Conexión Personal</h3>
                <p className="text-gray-600 leading-relaxed">
                  Cada pieza cuenta una historia. Trabajamos de cerca con nuestros clientes 
                  para capturar su esencia en cada detalle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conexión con Doblando el Viento */}
      <section className="py-24 bg-gradient-to-br from-amber-700 via-amber-600 to-amber-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-normal mb-8">
              Parte de la Familia Doblando el Viento
            </h2>
            <p className="text-xl leading-relaxed mb-8 text-amber-50">
              Aunque TAVITI es una marca independiente con identidad propia, seguimos siendo parte 
              de la familia <strong>Doblando el Viento</strong>. Esta conexión nos permite ofrecer a nuestros 
              clientes una gama completa de servicios para eventos, desde la papelería más elegante 
              hasta la coordinación integral de celebraciones inolvidables.
            </p>
            <p className="text-lg leading-relaxed text-amber-100">
              Juntos, creamos experiencias completas que superan expectativas.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/"
                className="inline-block bg-white text-amber-700 px-10 py-4 text-sm tracking-wider uppercase font-medium hover:bg-amber-50 transition-all duration-300 rounded-sm shadow-lg"
              >
                Conocer Doblando el Viento
              </a>
              <a
                href="/taviti/contacto"
                className="inline-block border-2 border-white text-white px-10 py-4 text-sm tracking-wider uppercase font-medium hover:bg-white hover:text-amber-700 transition-all duration-300 rounded-sm"
              >
                Contáctanos
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-normal text-primary-charcoal mb-8">
              Comienza Tu Historia con TAVITI
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-10">
              Permítenos ser parte de tus momentos especiales. Cada proyecto es una oportunidad 
              para crear algo extraordinario que perdure en el tiempo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/taviti/productos"
                className="inline-block bg-amber-700 text-white px-12 py-5 text-sm tracking-wider uppercase font-medium hover:bg-amber-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-sm"
              >
                Ver Nuestros Productos
              </a>
              <a
                href="/taviti/personalizacion"
                className="inline-block border-2 border-amber-700 text-amber-700 px-12 py-5 text-sm tracking-wider uppercase font-medium hover:bg-amber-700 hover:text-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-sm"
              >
                Proyecto Personalizado
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
