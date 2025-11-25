export default function PersonalizacionPage() {
  const pasos = [
    {
      numero: "01",
      titulo: "Cuéntanos tu visión",
      descripcion: "Comparte con nosotros los detalles de tu proyecto, tu estilo y lo que quieres transmitir"
    },
    {
      numero: "02",
      titulo: "Propuesta de diseño",
      descripcion: "Creamos mockups digitales para que visualices cómo quedará tu papelería"
    },
    {
      numero: "03",
      titulo: "Ajustes y aprobación",
      descripcion: "Realizamos los cambios que necesites hasta que esté perfecto"
    },
    {
      numero: "04",
      titulo: "Producción",
      descripcion: "Fabricamos con los mejores materiales y técnicas de impresión"
    }
  ];

  const opciones = [
    {
      titulo: "Papeles Premium",
      items: ["Algodón 100%", "Papel reciclado", "Texturizados", "Metalicos", "Transparencias", "Kraft"]
    },
    {
      titulo: "Técnicas de Impresión",
      items: ["Offset", "Digital", "Letterpress", "Serigrafía", "Hot stamping", "Relieve"]
    },
    {
      titulo: "Acabados Especiales",
      items: ["Foil dorado/plateado", "Barniz UV", "Troquelados", "Dobleces especiales", "Costuras", "Wax seal"]
    },
    {
      titulo: "Extras",
      items: ["Cintas de seda", "Lazos", "Sobres forrados", "Cajas personalizadas", "Ensamblado manual", "Empaque regalo"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1920&h=800&fit=crop"
            alt="Personalización"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-charcoal/80 to-primary-charcoal/40"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10 text-primary-cream">
          <span className="text-primary-sand text-sm tracking-widest uppercase mb-4 block">Tu proyecto único</span>
          <h1 className="font-serif text-4xl md:text-6xl font-normal mb-6">
            Personalización
          </h1>
          <div className="w-16 h-px bg-primary-sand mx-auto mb-6"></div>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
            Diseños únicos creados específicamente para ti, desde la conceptualización hasta la producción final
          </p>
        </div>
      </section>

      {/* Proceso */}
      <section className="py-24 bg-primary-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-normal text-primary-charcoal mb-6">
              Cómo Funciona
            </h2>
            <div className="w-16 h-px bg-primary-sand mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {pasos.map((paso, idx) => (
              <div key={idx} className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-sm mb-6">
                  <span className="font-serif text-3xl text-primary-dark">{paso.numero}</span>
                </div>
                <h3 className="font-serif text-xl text-primary-charcoal mb-3">{paso.titulo}</h3>
                <p className="text-primary-dark/70 text-sm leading-relaxed">{paso.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Opciones de Personalización */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-normal text-primary-charcoal mb-6">
              Opciones de Personalización
            </h2>
            <div className="w-16 h-px bg-primary-sand mx-auto mb-6"></div>
            <p className="text-primary-dark/70 max-w-2xl mx-auto">
              Combina diferentes materiales, técnicas y acabados para crear algo verdaderamente único
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {opciones.map((opcion, idx) => (
              <div key={idx} className="bg-primary-cream p-8">
                <h3 className="font-serif text-2xl text-primary-charcoal mb-6">{opcion.titulo}</h3>
                <ul className="space-y-3">
                  {opcion.items.map((item, i) => (
                    <li key={i} className="flex items-center text-primary-dark/70">
                      <svg className="w-5 h-5 mr-3 text-primary-dark flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galería de Inspiración */}
      <section className="py-24 bg-primary-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-normal text-primary-charcoal mb-6">
              Inspiración
            </h2>
            <div className="w-16 h-px bg-primary-sand mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1519741497674-611481863552?w=500&h=500&fit=crop",
              "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=500&h=500&fit=crop",
              "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&h=500&fit=crop",
              "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=500&h=500&fit=crop",
              "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=500&h=500&fit=crop",
              "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=500&h=500&fit=crop",
              "https://images.unsplash.com/photo-1565118531796-763e5082d113?w=500&h=500&fit=crop",
              "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=500&h=500&fit=crop"
            ].map((url, num) => (
              <div key={num} className="aspect-square overflow-hidden group">
                <img 
                  src={url}
                  alt={`Inspiración ${num + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Form */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-normal text-primary-charcoal mb-6">
              Empecemos tu Proyecto
            </h2>
            <div className="w-16 h-px bg-primary-sand mx-auto mb-6"></div>
            <p className="text-primary-dark/70">
              Cuéntanos sobre tu proyecto y te enviaremos una cotización personalizada
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-primary-dark mb-2">Nombre</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-primary-sand bg-white focus:border-primary-dark focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm text-primary-dark mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-primary-sand bg-white focus:border-primary-dark focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-primary-dark mb-2">Tipo de Proyecto</label>
              <select className="w-full px-4 py-3 border border-primary-sand bg-white focus:border-primary-dark focus:outline-none transition-colors">
                <option>Selecciona una opción</option>
                <option>Invitaciones de Boda</option>
                <option>Papelería Corporativa</option>
                <option>Productos Artesanales</option>
                <option>Otro</option>
              </select>
            </div>

            <div>
              <label className="block text-sm text-primary-dark mb-2">Cuéntanos sobre tu proyecto</label>
              <textarea 
                rows={6}
                className="w-full px-4 py-3 border border-primary-sand bg-white focus:border-primary-dark focus:outline-none transition-colors resize-none"
                placeholder="Describe tu visión, cantidad necesaria, fecha del evento, estilo preferido, etc."
              />
            </div>

            <div className="text-center pt-4">
              <button
                type="submit"
                className="inline-block bg-primary-dark text-primary-cream px-12 py-4 text-sm tracking-wider uppercase font-medium hover:bg-primary-charcoal transition-all duration-300"
              >
                Solicitar Cotización
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
