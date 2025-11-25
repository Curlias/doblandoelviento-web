export default function Home() {
  return (
    <div className="min-h-screen bg-primary-cream">
      {/* Hero Section - Elegante y minimalista */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-primary-cream via-primary-beige to-primary-sand overflow-hidden">
        {/* Subtle background pattern instead of video */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23a8998c' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-cream/30 to-primary-cream/60"></div>
        </div>
        
        {/* Decorative botanical elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 opacity-10">
            <svg viewBox="0 0 100 100" className="w-full h-full text-sage-600">
              <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              <path d="M50 10 Q30 50 50 90 Q70 50 50 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </svg>
          </div>
          <div className="absolute bottom-20 right-10 w-48 h-48 opacity-10">
            <svg viewBox="0 0 100 100" className="w-full h-full text-sage-600">
              <ellipse cx="50" cy="50" rx="45" ry="30" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              <line x1="50" y1="20" x2="50" y2="80" stroke="currentColor" strokeWidth="0.5"/>
            </svg>
          </div>
          <div className="absolute top-1/3 right-1/4 w-24 h-24 opacity-5">
            <svg viewBox="0 0 100 100" className="w-full h-full text-sage-700">
              <path d="M50 0 L100 50 L50 100 L0 50 Z" fill="none" stroke="currentColor" strokeWidth="1"/>
            </svg>
          </div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Subtle leaf icon */}
            <div className="mb-8 flex justify-center">
              <svg className="w-12 h-12 text-sage-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c1.5-3 2-6 2-10S13.5 2 12 2z"/>
                <path d="M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10"/>
              </svg>
            </div>
            
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-normal text-primary-charcoal mb-6 tracking-tight leading-tight">
              Doblando el Viento
            </h1>
            
            <div className="w-16 h-px bg-sage-400 mx-auto mb-6"></div>
            
            <p className="font-serif text-xl md:text-2xl text-sage-700 mb-4 italic">
              Diseño & Curaduría de Eventos
            </p>
            
            <p className="text-base md:text-lg text-primary-dark/70 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
              Creamos experiencias únicas y memorables para tus celebraciones más especiales en la zona Centro y Bajío de México. 
              Cada evento es una historia que merece ser contada con elegancia y cuidado.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/cotizacion"
                className="bg-sage-600 text-white px-8 py-4 text-sm tracking-wider uppercase font-medium hover:bg-sage-700 transition-all duration-300"
              >
                Solicitar Cotización
              </a>
              <a
                href="/galeria"
                className="border border-primary-charcoal text-primary-charcoal px-8 py-4 text-sm tracking-wider uppercase font-medium hover:bg-primary-charcoal hover:text-primary-cream transition-all duration-300"
              >
                Ver Galería
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-sage-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sage-600 text-sm tracking-widest uppercase mb-4 block">Sobre Nosotros</span>
              <h2 className="font-serif text-4xl md:text-5xl font-normal text-primary-charcoal mb-6 leading-tight">
                Transformamos tus sueños en momentos inolvidables
              </h2>
              <div className="w-16 h-px bg-sage-400 mb-8"></div>
              <p className="text-primary-dark/70 leading-relaxed mb-6">
                En Doblando el Viento, entendemos que cada celebración es única. Con una década 
                de experiencia en la curaduría de eventos en la zona Centro y Bajío de México, nos especializamos en crear 
                atmósferas que reflejan la personalidad y los sueños de nuestros clientes.
              </p>
              <p className="text-primary-dark/70 leading-relaxed mb-8">
                Desde bodas íntimas hasta grandes celebraciones corporativas, nuestro equipo 
                se dedica a cuidar cada detalle para que tú solo te preocupes por disfrutar.
              </p>
              <a href="/contacto" className="inline-flex items-center text-sage-600 font-medium hover:text-sage-700 transition-colors group">
                Conoce nuestra historia
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[4/5] rounded-sm overflow-hidden shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=750&fit=crop&q=80" 
                    alt="Boda elegante con decoración floral"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-sm overflow-hidden shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=500&h=500&fit=crop&q=80" 
                    alt="Mesa decorada con velas y flores"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square rounded-sm overflow-hidden shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=500&h=500&fit=crop&q=80" 
                    alt="Decoración de boda con flores blancas"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/5] rounded-sm overflow-hidden shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=750&fit=crop&q=80" 
                    alt="Mesa dulce de boda"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-primary-beige/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-sage-600 text-sm tracking-widest uppercase mb-4 block">Lo que hacemos</span>
            <h2 className="font-serif text-4xl md:text-5xl font-normal text-primary-charcoal mb-6">
              Nuestros Servicios
            </h2>
            <div className="w-16 h-px bg-sage-400 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Servicio 1 */}
            <div className="group bg-white p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-sage-200 transition-colors">
                <svg className="w-8 h-8 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-normal text-primary-charcoal mb-4">Curaduría de Eventos</h3>
              <p className="text-primary-dark/70 leading-relaxed mb-6">
                Diseñamos y coordinamos tu evento de principio a fin. Desde la conceptualización 
                hasta el último detalle del montaje.
              </p>
              <a href="/servicios" className="text-sage-600 text-sm font-medium hover:text-sage-700 transition-colors inline-flex items-center">
                Más información
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Servicio 2 */}
            <div className="group bg-white p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-sage-200 transition-colors">
                <svg className="w-8 h-8 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-normal text-primary-charcoal mb-4">Barras Dulces</h3>
              <p className="text-primary-dark/70 leading-relaxed mb-6">
                Mesas de dulces personalizadas con decoración temática, dulces artesanales 
                y presentación impecable para tus invitados.
              </p>
              <a href="/servicios" className="text-sage-600 text-sm font-medium hover:text-sage-700 transition-colors inline-flex items-center">
                Más información
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Servicio 3 */}
            <div className="group bg-white p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-sage-200 transition-colors">
                <svg className="w-8 h-8 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-normal text-primary-charcoal mb-4">Detalles & Recuerdos</h3>
              <p className="text-primary-dark/70 leading-relaxed mb-6">
                Creamos recuerdos personalizados para tus invitados. Desde pequeños 
                obsequios hasta kits completos de bienvenida.
              </p>
              <a href="/servicios" className="text-sage-600 text-sm font-medium hover:text-sage-700 transition-colors inline-flex items-center">
                Más información
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Servicio 4 */}
            <div className="group bg-white p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-sage-200 transition-colors">
                <svg className="w-8 h-8 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-normal text-primary-charcoal mb-4">Bodas</h3>
              <p className="text-primary-dark/70 leading-relaxed mb-6">
                Hacemos de tu boda un día perfecto. Coordinación completa, decoración 
                y atención a cada detalle de tu gran día.
              </p>
              <a href="/servicios" className="text-sage-600 text-sm font-medium hover:text-sage-700 transition-colors inline-flex items-center">
                Más información
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Servicio 5 */}
            <div className="group bg-white p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-sage-200 transition-colors">
                <svg className="w-8 h-8 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-normal text-primary-charcoal mb-4">Decoración de Espacios</h3>
              <p className="text-primary-dark/70 leading-relaxed mb-6">
                Transformamos cualquier espacio en el escenario perfecto. Arcos, 
                centros de mesa, iluminación y más.
              </p>
              <a href="/servicios" className="text-sage-600 text-sm font-medium hover:text-sage-700 transition-colors inline-flex items-center">
                Más información
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Servicio 6 */}
            <div className="group bg-white p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-sage-200 transition-colors">
                <svg className="w-8 h-8 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-normal text-primary-charcoal mb-4">Eventos Corporativos</h3>
              <p className="text-primary-dark/70 leading-relaxed mb-6">
                Lanzamientos, conferencias, cenas de gala y celebraciones empresariales 
                con la imagen profesional que tu marca merece.
              </p>
              <a href="/servicios" className="text-sage-600 text-sm font-medium hover:text-sage-700 transition-colors inline-flex items-center">
                Más información
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-sage-600 text-sm tracking-widest uppercase mb-4 block">Nuestro Trabajo</span>
            <h2 className="font-serif text-4xl md:text-5xl font-normal text-primary-charcoal mb-6">
              Momentos que Perduran
            </h2>
            <div className="w-16 h-px bg-sage-400 mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="aspect-square rounded-sm overflow-hidden group cursor-pointer shadow-sm hover:shadow-md transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1606800052052-a08af7148866?w=500&h=500&fit=crop&q=80" 
                alt="Boda elegante con decoración"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square rounded-sm overflow-hidden group cursor-pointer shadow-sm hover:shadow-md transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=500&h=500&fit=crop&q=80" 
                alt="Baby shower decoración"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square rounded-sm overflow-hidden group cursor-pointer shadow-sm hover:shadow-md transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=500&h=500&fit=crop&q=80" 
                alt="Mesa de dulces con postres"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square rounded-sm overflow-hidden group cursor-pointer shadow-sm hover:shadow-md transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=500&h=500&fit=crop&q=80" 
                alt="Decoración con velas"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square rounded-sm overflow-hidden group cursor-pointer md:col-span-2 md:row-span-2 shadow-sm hover:shadow-md transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=800&fit=crop&q=80" 
                alt="Evento destacado con flores blancas"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square rounded-sm overflow-hidden group cursor-pointer shadow-sm hover:shadow-md transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=500&h=500&fit=crop&q=80" 
                alt="Cumpleaños con globos"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square rounded-sm overflow-hidden group cursor-pointer shadow-sm hover:shadow-md transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=500&h=500&fit=crop&q=80" 
                alt="Evento corporativo"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="/galeria"
              className="inline-flex items-center text-sage-600 font-medium hover:text-sage-700 transition-colors group"
            >
              Ver toda la galería
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background decorative element */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute right-0 top-0 w-1/3 h-full">
            <svg viewBox="0 0 200 400" className="w-full h-full text-sage-600">
              <path d="M100 0 Q150 100 100 200 Q50 300 100 400" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              <circle cx="100" cy="300" r="30" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </svg>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-sage-600 text-sm tracking-widest uppercase mb-4 block">Nuestra Historia</span>
              <h2 className="font-serif text-4xl md:text-5xl font-normal text-primary-charcoal mb-6">
                Una Década Creando Momentos Inolvidables
              </h2>
              <div className="w-16 h-px bg-sage-400 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
              <div className="relative">
                <div className="aspect-[4/3] rounded-sm overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop&q=80" 
                    alt="Eventos elegantes Doblando el Viento"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating date badge */}
                <div className="absolute -bottom-6 -right-6 bg-sage-600 text-white p-8 shadow-lg">
                  <div className="text-center">
                    <div className="text-4xl font-serif">2015</div>
                    <div className="text-xs tracking-wider uppercase mt-1">Fundada</div>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-primary-dark/70 leading-relaxed mb-6 text-lg">
                  El <strong className="text-sage-700">2 de abril de 2015</strong>, comenzó una historia dedicada a transformar 
                  celebraciones ordinarias en experiencias extraordinarias. Lo que inició como un sueño en el Estado de México, 
                  se ha convertido en una marca reconocida en la zona Centro y Bajío de México.
                </p>
                <p className="text-primary-dark/70 leading-relaxed mb-6">
                  Con cada evento, hemos perfeccionado nuestro arte de crear atmósferas que cuentan historias. 
                  Nuestro enfoque en la curaduría cuidadosa y la atención al detalle nos ha permitido crecer 
                  orgánicamente, de cliente en cliente, de celebración en celebración.
                </p>
                <p className="text-primary-dark/70 leading-relaxed">
                  Hoy, después de una década, seguimos con la misma pasión del primer día: hacer que cada momento 
                  cuente, que cada detalle importe, y que cada evento sea tan único como las personas que lo celebran.
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div className="border-t border-sage-200 pt-16">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-xl text-primary-charcoal mb-2">2015</h3>
                  <p className="text-sm text-primary-dark/70">Fundación en Estado de México</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-xl text-primary-charcoal mb-2">2018</h3>
                  <p className="text-sm text-primary-dark/70">Expansión de servicios corporativos</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-xl text-primary-charcoal mb-2">2021</h3>
                  <p className="text-sm text-primary-dark/70">Cobertura en Centro y Bajío</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-xl text-primary-charcoal mb-2">2025</h3>
                  <p className="text-sm text-primary-dark/70">10 años de excelencia</p>
                </div>
              </div>
            </div>

            {/* Values */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-sage-50/50">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <svg className="w-6 h-6 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl text-primary-charcoal mb-3">Pasión</h3>
                <p className="text-sm text-primary-dark/70 leading-relaxed">
                  Cada evento es una oportunidad para crear algo extraordinario que perdure en la memoria.
                </p>
              </div>

              <div className="text-center p-8 bg-sage-50/50">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <svg className="w-6 h-6 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl text-primary-charcoal mb-3">Excelencia</h3>
                <p className="text-sm text-primary-dark/70 leading-relaxed">
                  La calidad en cada detalle no es negociable. Buscamos la perfección en todo lo que hacemos.
                </p>
              </div>

              <div className="text-center p-8 bg-sage-50/50">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <svg className="w-6 h-6 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl text-primary-charcoal mb-3">Compromiso</h3>
                <p className="text-sm text-primary-dark/70 leading-relaxed">
                  Tu celebración es nuestra prioridad. Nos comprometemos a superar tus expectativas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-sage-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-sage-600 text-sm tracking-widest uppercase mb-4 block">Testimonios</span>
            <h2 className="font-serif text-4xl md:text-5xl font-normal text-primary-charcoal mb-6">
              Lo que dicen nuestros clientes
            </h2>
            <div className="w-16 h-px bg-sage-400 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 shadow-sm">
              <div className="flex mb-4">
                {[1,2,3,4,5].map((i) => (
                  <svg key={i} className="w-5 h-5 text-sage-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-primary-dark/70 leading-relaxed mb-6 italic">
                &quot;Superaron todas nuestras expectativas. Cada detalle de nuestra boda fue perfecto. 
                El equipo fue increíblemente profesional y atento.&quot;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-sage-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-sage-600 font-medium">MR</span>
                </div>
                <div>
                  <p className="font-medium text-primary-charcoal">María Rodríguez</p>
                  <p className="text-sm text-primary-dark/50">Boda en Querétaro</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 shadow-sm">
              <div className="flex mb-4">
                {[1,2,3,4,5].map((i) => (
                  <svg key={i} className="w-5 h-5 text-sage-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-primary-dark/70 leading-relaxed mb-6 italic">
                &quot;La mesa de dulces fue un éxito total. Todos los invitados quedaron encantados 
                con la presentación y la calidad de los productos.&quot;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-sage-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-sage-600 font-medium">AL</span>
                </div>
                <div>
                  <p className="font-medium text-primary-charcoal">Ana López</p>
                  <p className="text-sm text-primary-dark/50">Baby Shower</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 shadow-sm">
              <div className="flex mb-4">
                {[1,2,3,4,5].map((i) => (
                  <svg key={i} className="w-5 h-5 text-sage-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-primary-dark/70 leading-relaxed mb-6 italic">
                &quot;Organizamos nuestro evento corporativo con ellos y fue impecable. 
                Profesionalismo y creatividad en cada aspecto.&quot;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-sage-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-sage-600 font-medium">CG</span>
                </div>
                <div>
                  <p className="font-medium text-primary-charcoal">Carlos García</p>
                  <p className="text-sm text-primary-dark/50">Evento Corporativo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary-charcoal">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="font-serif text-5xl md:text-6xl text-sage-400 mb-2">150+</p>
              <p className="text-primary-sand text-sm uppercase tracking-wider">Eventos realizados</p>
            </div>
            <div>
              <p className="font-serif text-5xl md:text-6xl text-sage-400 mb-2">5</p>
              <p className="text-primary-sand text-sm uppercase tracking-wider">Años de experiencia</p>
            </div>
            <div>
              <p className="font-serif text-5xl md:text-6xl text-sage-400 mb-2">98%</p>
              <p className="text-primary-sand text-sm uppercase tracking-wider">Clientes satisfechos</p>
            </div>
            <div>
              <p className="font-serif text-5xl md:text-6xl text-sage-400 mb-2">50+</p>
              <p className="text-primary-sand text-sm uppercase tracking-wider">Bodas coordinadas</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-sage-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-normal text-white mb-6">
            ¿Listo para crear algo especial?
          </h2>
          <p className="text-sage-100 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Cuéntanos sobre tu evento y trabajemos juntos para hacerlo inolvidable. 
            Solicita tu cotización sin compromiso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/cotizacion"
              className="bg-white text-sage-700 px-8 py-4 text-sm tracking-wider uppercase font-medium hover:bg-primary-cream transition-all duration-300"
            >
              Solicitar Cotización
            </a>
            <a
              href="https://wa.me/524421234567"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white text-white px-8 py-4 text-sm tracking-wider uppercase font-medium hover:bg-white hover:text-sage-700 transition-all duration-300"
            >
              Escríbenos por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Instagram Feed Placeholder */}
      <section className="py-16 bg-primary-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-sage-600 text-sm tracking-widest uppercase mb-2">Síguenos en Instagram</p>
            <a href="#" className="font-serif text-2xl text-primary-charcoal hover:text-sage-600 transition-colors">
              @doblandoelviento
            </a>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {[
              "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=300&h=300&fit=crop&q=80",
              "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=300&h=300&fit=crop&q=80",
              "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=300&h=300&fit=crop&q=80",
              "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop&q=80",
              "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=300&h=300&fit=crop&q=80",
              "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=300&h=300&fit=crop&q=80"
            ].map((src, i) => (
              <div key={i} className="aspect-square rounded-sm overflow-hidden group cursor-pointer">
                <img 
                  src={src}
                  alt={`Evento ${i + 1}`}
                  className="w-full h-full object-cover opacity-75 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
