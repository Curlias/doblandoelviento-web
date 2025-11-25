export default function TavitiPage() {
  const productos = [
    {
      nombre: "Invitaciones de Boda",
      descripcion: "Diseños personalizados que reflejan tu historia de amor",
      imagen: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=800&fit=crop",
      precio: "Desde $2,500"
    },
    {
      nombre: "Papelería Corporativa",
      descripcion: "Tarjetas de presentación y papelería con identidad única",
      imagen: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=600&h=800&fit=crop",
      precio: "Desde $800"
    },
    {
      nombre: "Cuadernos Artesanales",
      descripcion: "Encuadernación a mano con papeles premium",
      imagen: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&h=800&fit=crop",
      precio: "Desde $450"
    },
    {
      nombre: "Agendas Personalizadas",
      descripcion: "Organiza tu año con estilo y elegancia",
      imagen: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=800&fit=crop",
      precio: "Desde $650"
    }
  ];

  const testimonios = [
    {
      nombre: "María González",
      evento: "Boda",
      texto: "Las invitaciones de mi boda fueron absolutamente hermosas. El diseño capturó perfectamente nuestra historia y todos nuestros invitados las adoraron.",
      rating: 5
    },
    {
      nombre: "Carlos Hernández",
      evento: "Empresa",
      texto: "La papelería corporativa que crearon para mi negocio es de la más alta calidad. Proyecta exactamente la imagen profesional que buscaba.",
      rating: 5
    },
    {
      nombre: "Ana Martínez",
      evento: "XV Años",
      texto: "Desde el diseño hasta la entrega, todo fue perfecto. El equipo de TAVITI hizo realidad la visión que tenía para la celebración de mi hija.",
      rating: 5
    }
  ];

  const ventajas = [
    {
      icono: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      titulo: "Diseño 100% Personalizado",
      descripcion: "Cada pieza se crea desde cero según tus preferencias, colores y estilo único"
    },
    {
      icono: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      titulo: "Materiales Premium",
      descripcion: "Papeles importados, tintas de alta calidad y acabados especiales que perduran"
    },
    {
      icono: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      titulo: "Entregas Puntuales",
      descripcion: "Cumplimos con los tiempos acordados para que tu evento sea perfecto"
    },
    {
      icono: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      titulo: "Asesoría Personalizada",
      descripcion: "Te acompañamos en cada paso del proceso creativo hasta el resultado final"
    }
  ];

  return (
    <div className="min-h-screen bg-primary-cream">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1920&h=1080&fit=crop"
            alt="Papelería elegante"
            className="w-full h-full object-cover scale-105 transition-transform duration-[3000ms]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-cream/95 via-primary-cream/80 to-primary-cream/60"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-fadeIn">
            <img 
              src="/taviti-logo.svg" 
              alt="TAVITI" 
              className="h-32 w-auto mx-auto mb-8 drop-shadow-lg"
            />
          </div>
          
          <p className="text-xl md:text-2xl text-primary-dark/80 max-w-3xl mx-auto leading-relaxed mb-12 font-light italic">
            Papelería boutique personalizada para tus momentos especiales
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/taviti/productos"
              className="inline-block bg-primary-dark text-primary-cream px-10 py-4 text-sm tracking-wider uppercase font-medium hover:bg-primary-charcoal hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 rounded-sm"
            >
              Ver Catálogo
            </a>
            <a
              href="/taviti/personalizacion"
              className="inline-block border-2 border-primary-dark text-primary-dark px-10 py-4 text-sm tracking-wider uppercase font-medium hover:bg-primary-dark hover:text-primary-cream hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 rounded-sm"
            >
              Personaliza tu Diseño
            </a>
          </div>
        </div>
      </section>

      {/* Productos Destacados */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary-dark/60 text-sm tracking-widest uppercase mb-4 block italic">Nuestros favoritos</span>
            <h2 className="font-serif text-4xl md:text-5xl font-normal text-primary-charcoal mb-6">
              Productos Destacados
            </h2>
            <div className="w-16 h-px bg-primary-sand mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {productos.map((producto, index) => (
              <div key={index} className="group">
                <div className="aspect-[3/4] overflow-hidden mb-6 rounded-lg shadow-md group-hover:shadow-2xl transition-shadow duration-500">
                  <img 
                    src={producto.imagen}
                    alt={producto.nombre}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <h3 className="font-serif text-2xl font-normal text-primary-charcoal mb-3">
                  {producto.nombre}
                </h3>
                <p className="text-primary-dark/70 mb-4 italic">
                  {producto.descripcion}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-primary-dark/60 font-light italic">{producto.precio}</span>
                  <a 
                    href="/taviti/productos"
                    className="text-primary-dark text-sm tracking-wider uppercase hover:text-amber-700 hover:translate-x-1 transition-all duration-300 flex items-center gap-1"
                  >
                    Ver más
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section className="py-24 bg-primary-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary-dark/60 text-sm tracking-widest uppercase mb-4 block italic">Cómo trabajamos</span>
            <h2 className="font-serif text-4xl md:text-5xl font-normal text-primary-charcoal mb-6">
              Nuestro Proceso
            </h2>
            <div className="w-16 h-px bg-primary-sand mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { numero: "01", titulo: "Consulta", desc: "Nos cuentas tu idea y lo que necesitas para tu evento o negocio." },
              { numero: "02", titulo: "Diseño", desc: "Creamos propuestas visuales personalizadas con tu estilo." },
              { numero: "03", titulo: "Producción", desc: "Imprimimos y fabricamos con los mejores materiales." },
              { numero: "04", titulo: "Entrega", desc: "Recibe tu papelería lista para sorprender." }
            ].map((paso, idx) => (
              <div key={idx} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-sand/30 mb-6 group-hover:bg-primary-sand/50 group-hover:shadow-lg transition-all duration-300">
                  <span className="font-serif text-2xl text-primary-dark">{paso.numero}</span>
                </div>
                <h3 className="font-serif text-xl text-primary-charcoal mb-3">{paso.titulo}</h3>
                <p className="text-primary-dark/70 text-sm leading-relaxed italic">{paso.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por Qué Elegirnos */}
      <section className="py-24 bg-gradient-to-b from-white via-amber-50/30 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-amber-700 text-sm tracking-widest uppercase mb-4 block">Nuestras ventajas</span>
            <h2 className="font-serif text-4xl md:text-5xl font-normal text-primary-charcoal mb-6">
              Por Qué Elegir TAVITI
            </h2>
            <div className="w-16 h-px bg-amber-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
            {ventajas.map((ventaja, idx) => (
              <div key={idx} className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-amber-100 text-amber-700 mb-6 group-hover:bg-amber-700 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                  {ventaja.icono}
                </div>
                <h3 className="font-serif text-xl text-primary-charcoal mb-3 font-medium">
                  {ventaja.titulo}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {ventaja.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-24 bg-primary-charcoal text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-amber-400 text-sm tracking-widest uppercase mb-4 block">Experiencias</span>
            <h2 className="font-serif text-4xl md:text-5xl font-normal mb-6">
              Lo Que Dicen Nuestros Clientes
            </h2>
            <div className="w-16 h-px bg-amber-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonios.map((testimonio, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10 hover:border-amber-400/50 transition-all duration-300">
                <div className="flex mb-4">
                  {[...Array(testimonio.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white/90 italic mb-6 leading-relaxed">
                  "{testimonio.texto}"
                </p>
                <div className="border-t border-white/10 pt-4">
                  <p className="font-medium text-white">{testimonio.nombre}</p>
                  <p className="text-sm text-amber-400">{testimonio.evento}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galería Rápida */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-amber-700 text-sm tracking-widest uppercase mb-4 block">Inspiración</span>
            <h2 className="font-serif text-4xl md:text-5xl font-normal text-primary-charcoal mb-6">
              Nuestro Trabajo Reciente
            </h2>
            <div className="w-16 h-px bg-amber-600 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explora algunos de nuestros proyectos más recientes y descubre la calidad que nos caracteriza
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto mb-12">
            {[
              "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=400&fit=crop",
              "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=400&h=400&fit=crop",
              "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=400&h=400&fit=crop",
              "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop",
              "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=400&fit=crop",
              "https://images.unsplash.com/photo-1565118531796-763e5082d113?w=400&h=400&fit=crop",
              "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=400&fit=crop",
              "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=400&fit=crop"
            ].map((img, idx) => (
              <div key={idx} className="aspect-square overflow-hidden rounded-lg group cursor-pointer">
                <img 
                  src={img} 
                  alt={`Proyecto ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="/taviti/galeria"
              className="inline-block border-2 border-amber-700 text-amber-700 px-10 py-4 text-sm tracking-wider uppercase font-medium hover:bg-amber-700 hover:text-white transition-all duration-300 rounded-sm"
            >
              Ver Galería Completa
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-amber-100 text-sm uppercase tracking-wider">Proyectos Realizados</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">98%</div>
              <div className="text-amber-100 text-sm uppercase tracking-wider">Clientes Satisfechos</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">5+</div>
              <div className="text-amber-100 text-sm uppercase tracking-wider">Años de Experiencia</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">24h</div>
              <div className="text-amber-100 text-sm uppercase tracking-wider">Tiempo de Respuesta</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-amber-50 to-white p-12 rounded-2xl shadow-xl border border-amber-100">
            <h2 className="font-serif text-3xl md:text-5xl font-normal text-primary-charcoal mb-6">
              ¿Listo Para Crear Algo Extraordinario?
            </h2>
            <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed">
              Cuéntanos sobre tu proyecto y descubre cómo podemos transformar tus ideas en papelería única que dejará una impresión duradera
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/taviti/contacto"
                className="inline-block bg-amber-700 text-white px-12 py-5 text-sm tracking-wider uppercase font-medium hover:bg-amber-800 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 rounded-sm"
              >
                Solicitar Cotización Gratis
              </a>
              <a
                href="/taviti/productos"
                className="inline-block border-2 border-amber-700 text-amber-700 px-12 py-5 text-sm tracking-wider uppercase font-medium hover:bg-amber-700 hover:text-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 rounded-sm"
              >
                Explorar Catálogo
              </a>
            </div>
            <p className="text-sm text-gray-500 mt-8">
              📞 Respuesta en menos de 24 horas • ✓ Consulta sin compromiso • 💯 Garantía de calidad
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
