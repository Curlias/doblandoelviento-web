export default function ServiciosPage() {
  const servicios = [
    {
      title: "Curaduría Completa de Eventos",
      description: "Transformamos tu visión en realidad con un servicio integral de diseño y coordinación. Desde el primer concepto hasta el último detalle del montaje, cuidamos cada aspecto para que tú solo disfrutes.",
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      features: [
        "Consultoría personalizada y asesoría de estilo",
        "Desarrollo de concepto y paleta de colores",
        "Coordinación con proveedores seleccionados",
        "Timeline detallado y gestión de tiempos",
        "Montaje completo y supervisión in situ",
        "Coordinación el día del evento",
      ],
      detalles: "Incluye 3 reuniones previas, propuesta visual detallada, y coordinación de hasta 8 proveedores.",
      precio: "Desde $15,000",
      imagen: "https://picsum.photos/800/600?random=2",
    },
    {
      title: "Bodas de Ensueño",
      description: "Tu boda es el inicio de una nueva etapa. Creamos ceremonias y recepciones que reflejan tu amor y personalidad, cuidando cada momento para que sea perfecto e inolvidable.",
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      features: [
        "Diseño completo de ceremonia y recepción",
        "Coordinación de florería y decoración",
        "Ambientación con iluminación personalizada",
        "Papelería de boda (save the date, invitaciones)",
        "Coordinador dedicado el día de la boda",
        "Detalles para invitados y recuerdos",
      ],
      detalles: "Paquetes desde 50 hasta 300 invitados. Incluye pruebas de montaje y visita al venue.",
      precio: "Desde $25,000",
      imagen: "https://picsum.photos/800/600?random=3",
    },
    {
      title: "Barras Dulces & Saladas",
      description: "Experiencias gastronómicas que deleitan la vista y el paladar. Diseñamos mesas temáticas con productos artesanales de la más alta calidad y presentación impecable.",
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
        </svg>
      ),
      features: [
        "Diseño temático personalizado de mesa",
        "Selección de dulces y postres premium",
        "Decoración completa con flores y props",
        "Señalética y etiquetas personalizadas",
        "Vajilla, cristalería y mantelería elegante",
        "Servicio y atención durante el evento",
      ],
      detalles: "Opciones veganas, sin gluten y orgánicas disponibles. Degustación previa incluida.",
      precio: "Desde $5,000",
      imagen: "https://picsum.photos/800/600?random=4",
    },
    {
      title: "Decoración de Espacios",
      description: "Convertimos cualquier lugar en el escenario perfecto para tu celebración. Desde decoraciones florales hasta instalaciones artísticas que sorprenden.",
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      features: [
        "Arreglos florales y follaje natural",
        "Arcos orgánicos y estructuras decorativas",
        "Centros de mesa diseñados a medida",
        "Iluminación ambiental y efectos especiales",
        "Lounge areas y espacios de descanso",
        "Fondos para fotos y photobooths",
      ],
      detalles: "Trabajamos con flores de temporada y materiales sustentables. Montaje y desmontaje incluido.",
      precio: "Desde $8,000",
      imagen: "https://picsum.photos/800/600?random=5",
    },
    {
      title: "Detalles & Recuerdos",
      description: "Creamos recuerdos tangibles que tus invitados atesorarán. Cada detalle está pensado para reflejar la esencia de tu evento y dejar una impresión duradera.",
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
        </svg>
      ),
      features: [
        "Cajitas y empaques personalizados",
        "Mini arreglos florales para llevar",
        "Productos artesanales (velas, jabones, sales)",
        "Etiquetas y tags con diseño custom",
        "Kits de bienvenida para eventos",
        "Bolsas de tela reutilizables",
      ],
      detalles: "Mínimo 20 piezas. Diseño gráfico de etiquetas incluido. Opciones eco-friendly.",
      precio: "Desde $120 c/u",
      imagen: "https://picsum.photos/800/600?random=6",
    },
    {
      title: "Eventos Corporativos",
      description: "Profesionalismo y creatividad para tus eventos de empresa. Lanzamientos, conferencias, cenas de gala y celebraciones que reflejan la identidad de tu marca.",
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      features: [
        "Branding y personalización corporativa",
        "Coffee breaks y estaciones de snacks",
        "Montaje de escenarios y backdrops",
        "Coordinación con AV y tecnología",
        "Atención a invitados VIP",
        "Regalos corporativos personalizados",
      ],
      detalles: "Experiencia con eventos de 20 a 500 personas. Facturación disponible.",
      precio: "Cotización personalizada",
      imagen: "https://picsum.photos/800/600?random=7",
    },
  ];

  return (
    <div className="min-h-screen bg-primary-cream">
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://picsum.photos/1920/1080?random=1"
            alt="Decoración elegante de eventos"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary-charcoal/60"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="text-sage-300 text-sm tracking-widest uppercase mb-4 block">Lo que ofrecemos</span>
          <h1 className="font-serif text-4xl md:text-6xl font-normal text-primary-cream mb-6">
            Nuestros Servicios
          </h1>
          <div className="w-16 h-px bg-sage-400 mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-primary-beige max-w-3xl mx-auto leading-relaxed">
            Servicios integrales de diseño y curaduría para crear eventos únicos e inolvidables
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {servicios.map((servicio, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="aspect-[4/3] rounded-sm overflow-hidden shadow-lg">
                    <img 
                      src={servicio.imagen}
                      alt={servicio.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mb-6 text-sage-600">
                    {servicio.icon}
                  </div>
                  
                  <h2 className="font-serif text-3xl md:text-4xl font-normal text-primary-charcoal mb-4">
                    {servicio.title}
                  </h2>
                  
                  <div className="w-12 h-px bg-sage-400 mb-6"></div>
                  
                  <p className="text-primary-dark/70 leading-relaxed mb-6">
                    {servicio.description}
                  </p>

                  <div className="mb-6">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-sage-600 mb-3">Incluye:</h3>
                    <ul className="space-y-2">
                      {servicio.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="w-5 h-5 text-sage-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-primary-dark/70">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="text-sm text-primary-dark/60 italic mb-6 pl-8">
                    {servicio.detalles}
                  </p>

                  <div className="flex items-center justify-between pt-6 border-t border-primary-sand">
                    <span className="font-serif text-2xl text-sage-700">{servicio.precio}</span>
                    <a
                      href="/cotizacion"
                      className="bg-sage-600 text-white px-6 py-3 text-sm tracking-wider uppercase font-medium hover:bg-sage-700 transition-all duration-300"
                    >
                      Solicitar Cotización
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-sage-600 text-sm tracking-widest uppercase mb-4 block">Cómo trabajamos</span>
            <h2 className="font-serif text-4xl md:text-5xl font-normal text-primary-charcoal mb-6">
              Nuestro Proceso
            </h2>
            <div className="w-16 h-px bg-sage-400 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { numero: "01", titulo: "Consulta Inicial", desc: "Conocemos tu visión, necesidades y presupuesto en una reunión personalizada." },
              { numero: "02", titulo: "Propuesta & Diseño", desc: "Creamos un concepto visual detallado con moodboard, paleta de colores y cotización." },
              { numero: "03", titulo: "Planificación", desc: "Coordinamos proveedores, timeline y todos los detalles logísticos del evento." },
              { numero: "04", titulo: "Ejecución", desc: "Montaje, coordinación y supervisión completa para que disfrutes sin preocupaciones." },
            ].map((paso, idx) => (
              <div key={idx} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sage-100 mb-6">
                  <span className="font-serif text-2xl text-sage-600">{paso.numero}</span>
                </div>
                <h3 className="font-serif text-xl text-primary-charcoal mb-3">{paso.titulo}</h3>
                <p className="text-primary-dark/70 text-sm leading-relaxed">{paso.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=1920&h=800&fit=crop&q=80"
            alt="Decoración elegante"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-sage-700/80"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-serif text-3xl md:text-4xl font-normal text-white mb-6">
            ¿No encuentras lo que buscas?
          </h2>
          <p className="text-sage-100 text-lg mb-10 max-w-2xl mx-auto">
            Creamos paquetes personalizados adaptados a tus necesidades y presupuesto. 
            Cada evento es único y merece una propuesta a la medida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/cotizacion"
              className="bg-white text-sage-700 px-8 py-4 text-sm tracking-wider uppercase font-medium hover:bg-primary-cream transition-all duration-300"
            >
              Cotización Personalizada
            </a>
            <a
              href="/contacto"
              className="border border-white text-white px-8 py-4 text-sm tracking-wider uppercase font-medium hover:bg-white hover:text-sage-700 transition-all duration-300"
            >
              Contáctanos
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
