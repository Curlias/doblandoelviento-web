export default function ProductosPage() {
  const categorias = [
    {
      nombre: "Bodas & Eventos Especiales",
      descripcion: "Papelería elegante para los momentos más importantes de tu vida",
      productos: [
        {
          nombre: "Invitaciones de Boda Premium",
          descripcion: "Invitaciones en papel algodón con impresión en relieve y acabados metálicos",
          imagen: "https://images.unsplash.com/photo-1519741497674-611481863552?w=500&h=700&fit=crop",
          precio: "Desde $2,500",
          incluye: ["50 invitaciones", "Sobres forrados", "Diseño personalizado", "Prueba de impresión"],
          etiqueta: "Más Popular"
        },
        {
          nombre: "Save the Date",
          descripcion: "Tarjetas para anunciar tu fecha especial con estilo",
          imagen: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=500&h=700&fit=crop",
          precio: "Desde $1,200",
          incluye: ["50 tarjetas", "Sobres incluidos", "Diseño custom", "Impresión digital"]
        },
        {
          nombre: "Menús de Boda",
          descripcion: "Menús elegantes para tu recepción",
          imagen: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=500&h=700&fit=crop",
          precio: "Desde $800",
          incluye: ["50 menús", "Papel premium", "Diseño a medida", "Acabado mate o brillante"]
        },
        {
          nombre: "Programa de Ceremonia",
          descripcion: "Guía detallada del orden de tu ceremonia",
          imagen: "https://images.unsplash.com/photo-1464688390355-c2c2d7489d75?w=500&h=700&fit=crop",
          precio: "Desde $650",
          incluye: ["50 programas", "Diseño coordinado", "Impresión doble cara", "Encuadernación opcio nal"]
        },
        {
          nombre: "Etiquetas y Detalles",
          descripcion: "Pequeños detalles que hacen la diferencia",
          imagen: "https://images.unsplash.com/photo-1522673607211-8e47a5f82e35?w=500&h=700&fit=crop",
          precio: "Desde $400",
          incluye: ["100 etiquetas", "Diferentes formas", "Acabado brillante", "Troquelado especial"],
          etiqueta: "Nuevo"
        }
      ]
    },
    {
      nombre: "Papelería Corporativa",
      descripcion: "Proyecta profesionalismo con cada pieza impresa",
      productos: [
        {
          nombre: "Tarjetas de Presentación Premium",
          descripcion: "Tarjetas que reflejan la profesionalidad de tu marca",
          imagen: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=500&h=700&fit=crop",
          precio: "Desde $800",
          incluye: ["100 tarjetas", "Papel premium", "Diseño profesional", "Acabados especiales"],
          etiqueta: "Recomendado"
        },
        {
          nombre: "Papelería Membretada Completa",
          descripcion: "Hojas, sobres y carpetas con tu identidad",
          imagen: "https://images.unsplash.com/photo-1565118531796-763e5082d113?w=500&h=700&fit=crop",
          precio: "Desde $1,500",
          incluye: ["Kit completo", "Diseño corporativo", "Papel bond", "Impresión offset"]
        },
        {
          nombre: "Folders y Presentaciones",
          descripcion: "Impresiona en cada presentación de negocios",
          imagen: "https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?w=500&h=700&fit=crop",
          precio: "Desde $1,200",
          incluye: ["50 folders", "Bolsillos interiores", "Laminado premium", "Troquelado personalizado"]
        },
        {
          nombre: "Catálogos de Productos",
          descripcion: "Muestra tus productos de forma profesional",
          imagen: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500&h=700&fit=crop",
          precio: "Desde $2,800",
          incluye: ["25 catálogos", "Hasta 20 páginas", "Encuadernación profesional", "Papel couché"]
        }
      ]
    },
    {
      nombre: "Productos Artesanales",
      descripcion: "Piezas únicas hechas a mano con dedicación",
      productos: [
        {
          nombre: "Cuadernos Encuadernados",
          descripcion: "Cuadernos hechos a mano con papel premium",
          imagen: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&h=700&fit=crop",
          precio: "Desde $450",
          incluye: ["100 páginas", "Encuadernación artesanal", "Personalización", "Papel premium"]
        },
        {
          nombre: "Agendas Personalizadas 2025",
          descripcion: "Organiza tu año con estilo único",
          imagen: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=500&h=700&fit=crop",
          precio: "Desde $650",
          incluye: ["Calendario anual", "Secciones personalizadas", "Encuadernación dura", "Grabado opcional"],
          etiqueta: "Temporada"
        },
        {
          nombre: "Diarios de Viaje",
          descripcion: "Documenta tus aventuras con estilo",
          imagen: "https://images.unsplash.com/photo-1517842264405-ec69d7a7b83a?w=500&h=700&fit=crop",
          precio: "Desde $550",
          incluye: ["120 páginas", "Bolsillos interiores", "Elástico de cierre", "Papel reciclado"]
        },
        {
          nombre: "Sets de Papelería",
          descripcion: "Kits completos para correspondencia elegante",
          imagen: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=500&h=700&fit=crop",
          precio: "Desde $850",
          incluye: ["20 hojas", "20 sobres", "Sello de cera", "Caja decorativa"]
        }
      ]
    },
    {
      nombre: "Ocasiones Especiales",
      descripcion: "Papelería para celebraciones memorables",
      productos: [
        {
          nombre: "Invitaciones XV Años",
          descripcion: "Diseños únicos para una celebración especial",
          imagen: "https://images.unsplash.com/photo-1481653125770-b78c206c59d4?w=500&h=700&fit=crop",
          precio: "Desde $1,800",
          incluye: ["50 invitaciones", "Diseño temático", "Sobres decorados", "Tarjeta de confirmación"]
        },
        {
          nombre: "Baby Shower",
          descripcion: "Invitaciones tiernas para recibir al bebé",
          imagen: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=500&h=700&fit=crop",
          precio: "Desde $1,200",
          incluye: ["40 invitaciones", "Diseños personalizados", "Sobres de colores", "Etiquetas de regalo"]
        },
        {
          nombre: "Cumpleaños Premium",
          descripcion: "Invitaciones que causan impresión",
          imagen: "https://images.unsplash.com/photo-1464983308776-8f5f63f5e2e6?w=500&h=700&fit=crop",
          precio: "Desde $950",
          incluye: ["30 invitaciones", "Diseño festivo", "Sobres incluidos", "Tarjetas de agradecimiento"]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1920&h=800&fit=crop"
            alt="Nuestros Productos"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/70 via-amber-800/60 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="text-amber-200 text-sm tracking-widest uppercase mb-4 block">Catálogo 2025</span>
            <h1 className="font-serif text-5xl md:text-7xl font-normal text-white mb-6">
              Nuestros Productos
            </h1>
            <div className="w-20 h-1 bg-amber-400 mb-8 rounded-full"></div>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Cada pieza está diseñada con atención al detalle y fabricada con los mejores materiales para crear momentos inolvidables
            </p>
          </div>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-8 bg-amber-50 border-y border-amber-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-gray-700">Categorías:</span>
              <div className="flex flex-wrap gap-2">
                {categorias.map((cat, idx) => (
                  <button 
                    key={idx}
                    className="px-4 py-2 text-xs uppercase tracking-wider bg-white border border-amber-200 text-gray-700 hover:bg-amber-700 hover:text-white hover:border-amber-700 transition-all duration-300 rounded-sm"
                  >
                    {cat.nombre}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">{categorias.reduce((acc, cat) => acc + cat.productos.length, 0)} productos</span>
            </div>
          </div>
        </div>
      </section>

      {/* Productos por Categoría */}
      {categorias.map((categoria, catIdx) => (
        <section key={catIdx} className={`py-24 ${catIdx % 2 === 0 ? 'bg-white' : 'bg-gradient-to-b from-amber-50/30 to-white'}`}>
          <div className="container mx-auto px-4">
            <div className="mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-normal text-primary-charcoal mb-4">
                {categoria.nombre}
              </h2>
              {categoria.descripcion && (
                <p className="text-lg text-gray-600 italic max-w-2xl">{categoria.descripcion}</p>
              )}
              <div className="w-16 h-1 bg-amber-600 mt-6 rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {categoria.productos.map((producto, idx) => (
                <div key={idx} className="group bg-white shadow-sm hover:shadow-2xl transition-all duration-500 rounded-lg overflow-hidden border border-gray-100">
                  <div className="aspect-[5/7] overflow-hidden relative">
                    {producto.etiqueta && (
                      <div className="absolute top-4 right-4 z-10 bg-amber-700 text-white px-3 py-1 text-xs uppercase tracking-wider font-medium rounded-full">
                        {producto.etiqueta}
                      </div>
                    )}
                    <img 
                      src={producto.imagen}
                      alt={producto.nombre}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-normal text-primary-charcoal mb-2 group-hover:text-amber-700 transition-colors">
                      {producto.nombre}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {producto.descripcion}
                    </p>
                    
                    <div className="mb-4 bg-amber-50 p-3 rounded-lg">
                      <h4 className="text-xs uppercase tracking-wider text-amber-900 font-bold mb-2">Incluye:</h4>
                      <ul className="space-y-1">
                        {producto.incluye.map((item, i) => (
                          <li key={i} className="text-xs text-gray-700 flex items-start">
                            <svg className="w-4 h-4 text-amber-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <span className="font-serif text-xl text-amber-700 font-medium">{producto.precio}</span>
                      <a
                        href="/taviti/contacto"
                        className="text-xs uppercase tracking-widest text-amber-700 hover:text-amber-900 font-medium transition-colors flex items-center gap-1 group/link"
                      >
                        Cotizar
                        <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-amber-700 via-amber-600 to-amber-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}}></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-serif text-4xl md:text-5xl font-normal mb-6">
            ¿No Encuentras Lo Que Buscas?
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto text-amber-50">
            Cada proyecto es único. Si tienes una idea especial o necesitas algo diferente, contáctanos y crearemos la solución perfecta para ti.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/taviti/personalizacion"
              className="inline-block bg-white text-amber-700 px-12 py-5 text-sm tracking-wider uppercase font-medium hover:bg-amber-50 transition-all duration-300 rounded-sm shadow-lg hover:shadow-2xl hover:-translate-y-1"
            >
              Proyecto Personalizado
            </a>
            <a
              href="/taviti/contacto"
              className="inline-block border-2 border-white text-white px-12 py-5 text-sm tracking-wider uppercase font-medium hover:bg-white hover:text-amber-700 transition-all duration-300 rounded-sm shadow-lg hover:shadow-2xl hover:-translate-y-1"
            >
              Asesoría Gratuita
            </a>
          </div>
          <p className="mt-8 text-amber-100 text-sm">
            ⭐ Más de 500 proyectos realizados • 📦 Envíos a toda la república • 💳 Planes de pago disponibles
          </p>
        </div>
      </section>
    </div>
  );
}
