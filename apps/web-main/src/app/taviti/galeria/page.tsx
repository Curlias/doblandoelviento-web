export default function GaleriaPage() {
  const categorias = [
    { nombre: "Todas", filtro: "all" },
    { nombre: "Bodas", filtro: "bodas" },
    { nombre: "Corporativo", filtro: "corporativo" },
    { nombre: "Artesanal", filtro: "artesanal" }
  ];

  const proyectos = [
    {
      titulo: "Boda María & Carlos",
      categoria: "bodas",
      imagen: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
      descripcion: "Suite completa de invitaciones con papel algodón y hot stamping dorado"
    },
    {
      titulo: "Tarjetas Estudio Legal",
      categoria: "corporativo",
      imagen: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=800&h=600&fit=crop",
      descripcion: "Tarjetas de presentación con relieve y acabado mate"
    },
    {
      titulo: "Cuadernos Personalizados",
      categoria: "artesanal",
      imagen: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&h=600&fit=crop",
      descripcion: "Línea de cuadernos con encuadernación japonesa"
    },
    {
      titulo: "Boda Ana & Luis",
      categoria: "bodas",
      imagen: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&h=600&fit=crop",
      descripcion: "Invitaciones minimalistas con sobre forrado en seda"
    },
    {
      titulo: "Branding Restaurante",
      categoria: "corporativo",
      imagen: "https://images.unsplash.com/photo-1565118531796-763e5082d113?w=800&h=600&fit=crop",
      descripcion: "Menús, tarjetas y papelería completa"
    },
    {
      titulo: "Agendas 2025",
      categoria: "artesanal",
      imagen: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop",
      descripcion: "Agendas con portada en piel sintética y personalización"
    },
    {
      titulo: "XV Años Sofía",
      categoria: "bodas",
      imagen: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=600&fit=crop",
      descripcion: "Invitaciones en tonos pasteles con detalles florales"
    },
    {
      titulo: "Papelería Boutique",
      categoria: "corporativo",
      imagen: "https://images.unsplash.com/photo-1618172193622-ae2d025f4032?w=800&h=600&fit=crop",
      descripcion: "Identidad completa para tienda de ropa"
    },
    {
      titulo: "Libretas Artesanales",
      categoria: "artesanal",
      imagen: "https://images.unsplash.com/photo-1531346590573-9d74f09de48c?w=800&h=600&fit=crop",
      descripcion: "Colección de libretas con papel reciclado"
    },
    {
      titulo: "Boda Destino",
      categoria: "bodas",
      imagen: "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?w=800&h=600&fit=crop",
      descripcion: "Suite de boda con tema playero y colores tropicales"
    },
    {
      titulo: "Consultora Empresarial",
      categoria: "corporativo",
      imagen: "https://images.unsplash.com/photo-1542435503-956c469947f6?w=800&h=600&fit=crop",
      descripcion: "Papelería corporativa minimalista y profesional"
    },
    {
      titulo: "Diarios Personalizados",
      categoria: "artesanal",
      imagen: "https://images.unsplash.com/photo-1517842645767-c639042777db?w=800&h=600&fit=crop",
      descripcion: "Diarios con grabado láser en portada de madera"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1920&h=800&fit=crop"
            alt="Galería de Proyectos"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary-charcoal/60"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10 text-primary-cream">
          <span className="text-primary-sand text-sm tracking-widest uppercase mb-4 block">Nuestro trabajo</span>
          <h1 className="font-serif text-4xl md:text-6xl font-normal mb-6">
            Galería de Proyectos
          </h1>
          <div className="w-16 h-px bg-primary-sand mx-auto mb-6"></div>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
            Cada proyecto cuenta una historia única
          </p>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-12 bg-primary-cream border-b border-primary-sand">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categorias.map((cat, idx) => (
              <button
                key={idx}
                className="px-6 py-2 text-sm tracking-wider uppercase font-medium transition-all duration-300 hover:bg-primary-dark hover:text-primary-cream border border-primary-sand bg-white text-primary-dark"
              >
                {cat.nombre}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid de Proyectos */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {proyectos.map((proyecto, idx) => (
              <div key={idx} className="group">
                <div className="aspect-[4/3] overflow-hidden mb-4 relative">
                  <img 
                    src={proyecto.imagen}
                    alt={proyecto.titulo}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary-charcoal/0 group-hover:bg-primary-charcoal/80 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-6">
                      <p className="text-primary-cream text-sm">
                        {proyecto.descripcion}
                      </p>
                    </div>
                  </div>
                </div>
                <h3 className="font-serif text-xl text-primary-charcoal mb-2">
                  {proyecto.titulo}
                </h3>
                <span className="text-sm text-primary-dark/60 uppercase tracking-wider">
                  {proyecto.categoria}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Estadísticas */}
      <section className="py-20 bg-primary-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { numero: "500+", label: "Proyectos Completados" },
              { numero: "300+", label: "Bodas Realizadas" },
              { numero: "50+", label: "Empresas Atendidas" },
              { numero: "98%", label: "Clientes Satisfechos" }
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="font-serif text-4xl md:text-5xl text-primary-charcoal mb-2">
                  {stat.numero}
                </div>
                <div className="text-sm text-primary-dark/70 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-normal text-primary-charcoal mb-6">
            ¿Listo para crear tu proyecto?
          </h2>
          <p className="text-lg text-primary-dark/70 mb-10 max-w-2xl mx-auto">
            Cada proyecto es único y especial. Trabajemos juntos para crear algo memorable
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/taviti/personalizacion"
              className="inline-block bg-primary-dark text-primary-cream px-10 py-4 text-sm tracking-wider uppercase font-medium hover:bg-primary-charcoal transition-all duration-300"
            >
              Proyecto Personalizado
            </a>
            <a
              href="/taviti/contacto"
              className="inline-block border-2 border-primary-dark text-primary-dark px-10 py-4 text-sm tracking-wider uppercase font-medium hover:bg-primary-dark hover:text-primary-cream transition-all duration-300"
            >
              Contáctanos
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
