export default function TestimoniosPage() {
  const testimonios = [
    {
      nombre: "María González",
      evento: "Boda - Junio 2024",
      iniciales: "MG",
      comentario: "¡Increíble trabajo! El equipo de Doblando el Viento superó todas nuestras expectativas. La decoración de nuestra boda fue simplemente perfecta, cada detalle cuidado al máximo. Las velas artesanales como recuerdos fueron un éxito total entre nuestros invitados.",
      foto: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&q=80",
    },
    {
      nombre: "Laura Martínez",
      evento: "Baby Shower - Agosto 2024",
      iniciales: "LM",
      comentario: "Contraté sus servicios para mi baby shower y quedé encantada. La barra dulce fue hermosa y deliciosa, y la decoración en tonos pastel quedó preciosa. Todo el equipo fue muy profesional y atento. ¡Totalmente recomendado!",
      foto: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&q=80",
    },
    {
      nombre: "Roberto Sánchez",
      evento: "Cumpleaños 50 años - Septiembre 2024",
      iniciales: "RS",
      comentario: "Organizaron una celebración elegante y sofisticada para mi cumpleaños. La atención al detalle fue excepcional, desde la decoración hasta los recuerdos personalizados. Mis invitados no pararon de elogiar cada aspecto del evento.",
      foto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&q=80",
    },
    {
      nombre: "Ana Ramírez",
      evento: "Evento Corporativo - Octubre 2024",
      iniciales: "AR",
      comentario: "Trabajamos con Doblando el Viento para el lanzamiento de nuestro producto y el resultado fue espectacular. Muy profesionales, puntuales y creativos. La presentación fue impecable y nuestros clientes quedaron impresionados.",
      foto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&q=80",
    },
    {
      nombre: "Gabriela Torres",
      evento: "XV Años - Noviembre 2024",
      iniciales: "GT",
      comentario: "Hicieron realidad el sueño de mi hija. La decoración fue mágica, la barra dulce increíble y los detalles para los invitados fueron hermosos. Todo salió perfecto, gracias por hacer este día tan especial.",
      foto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&q=80",
    },
    {
      nombre: "Carlos Hernández",
      evento: "Aniversario - Diciembre 2023",
      iniciales: "CH",
      comentario: "Sorprendí a mi esposa con una cena de aniversario decorada por Doblando el Viento. El ambiente que crearon fue romántico y elegante. Las velas aromáticas y la decoración floral fueron el toque perfecto. ¡Gracias por hacer esta noche inolvidable!",
      foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-primary-cream">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1920&h=1080&fit=crop&q=80"
            alt="Clientes felices"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary-charcoal/60"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="text-sage-300 text-sm tracking-widest uppercase mb-4 block">Lo que dicen nuestros clientes</span>
          <h1 className="font-serif text-4xl md:text-6xl font-normal text-primary-cream mb-6">
            Testimonios
          </h1>
          <div className="w-16 h-px bg-sage-400 mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-primary-beige max-w-3xl mx-auto leading-relaxed">
            La satisfacción de nuestros clientes es nuestra mayor recompensa
          </p>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonios.map((testimonio, index) => (
              <div key={index} className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 mr-4">
                    <img 
                      src={testimonio.foto}
                      alt={testimonio.nombre}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-primary-charcoal mb-1">
                      {testimonio.nombre}
                    </h3>
                    <p className="text-sm text-sage-600">{testimonio.evento}</p>
                    <div className="flex mt-2">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-sage-500 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-primary-dark/70 italic leading-relaxed">
                  "{testimonio.comentario}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { numero: "98%", label: "Satisfacción del Cliente" },
              { numero: "200+", label: "Eventos Exitosos" },
              { numero: "4.9/5", label: "Calificación Promedio" },
              { numero: "95%", label: "Clientes que Regresan" },
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="font-serif text-4xl md:text-5xl text-sage-600 mb-2">{stat.numero}</div>
                <div className="text-sm text-primary-dark/70 tracking-wider uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1920&h=800&fit=crop&q=80"
            alt="Evento elegante"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-sage-700/80"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-serif text-3xl md:text-4xl font-normal text-white mb-6">
            ¿Listo para crear tu propio testimonio?
          </h2>
          <p className="text-sage-100 text-lg mb-10 max-w-2xl mx-auto">
            Únete a nuestros clientes satisfechos y deja que hagamos de tu evento algo memorable
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/cotizacion"
              className="inline-block bg-white text-sage-700 px-8 py-4 text-sm tracking-wider uppercase font-medium hover:bg-primary-cream transition-all duration-300"
            >
              Solicitar Cotización
            </a>
            <a
              href="/galeria"
              className="inline-block border border-white text-white px-8 py-4 text-sm tracking-wider uppercase font-medium hover:bg-white hover:text-sage-700 transition-all duration-300"
            >
              Ver Galería
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
