export default function Home() {
  return (
    <div className="min-h-screen bg-primary-cream">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-cream via-primary-beige to-primary-cream py-32 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-64 h-64 border-2 border-primary-dark rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 border-2 border-primary-dark rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold text-primary-charcoal mb-8 tracking-tight">
            Doblando el Viento
          </h1>
          <div className="w-24 h-1 bg-primary-accent mx-auto mb-8"></div>
          <p className="font-serif text-2xl md:text-3xl text-primary-dark mb-6 max-w-3xl mx-auto italic">
            Diseño & Curaduría para eventos en Querétaro
          </p>
          <p className="text-lg md:text-xl text-primary-dark/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Velas artesanales de cera de soya, detalles personalizados, barras dulces y montajes completos para hacer de tu celebración un momento inolvidable
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/cotizacion"
              className="bg-primary-charcoal text-primary-cream px-10 py-4 rounded-sm font-medium hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Solicitar Cotización
            </a>
            <a
              href="https://wa.me/524421234567"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-primary-charcoal text-primary-charcoal px-10 py-4 rounded-sm font-medium hover:bg-primary-charcoal hover:text-primary-cream transition-all duration-300"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-center mb-4 text-primary-charcoal">
            Nuestros Servicios
          </h2>
          <div className="w-24 h-1 bg-primary-accent mx-auto mb-16"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-primary-cream p-10 rounded-sm hover:bg-primary-beige transition-all duration-300 border-l-4 border-primary-dark">
              <div className="text-4xl mb-6 opacity-60">🕯️</div>
              <h3 className="font-serif text-3xl font-bold mb-4 text-primary-charcoal">Curaduría Completa</h3>
              <p className="text-primary-dark/70 mb-6 leading-relaxed">
                Diseño y coordinación integral de tu evento. Desde la conceptualización hasta el montaje final.
              </p>
              <a href="/servicios" className="text-primary-charcoal font-medium hover:text-primary-dark inline-flex items-center gap-2 group">
                Ver más <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
            <div className="group bg-primary-cream p-10 rounded-sm hover:bg-primary-beige transition-all duration-300 border-l-4 border-primary-dark">
              <div className="text-4xl mb-6 opacity-60">🍰</div>
              <h3 className="font-serif text-3xl font-bold mb-4 text-primary-charcoal">Barra Dulce</h3>
              <p className="text-primary-dark/70 mb-6 leading-relaxed">
                Mesas de dulces personalizadas con decoración temática y dulces artesanales de la más alta calidad.
              </p>
              <a href="/servicios" className="text-primary-charcoal font-medium hover:text-primary-dark inline-flex items-center gap-2 group">
                Ver más <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
            <div className="group bg-primary-cream p-10 rounded-sm hover:bg-primary-beige transition-all duration-300 border-l-4 border-primary-dark">
              <div className="text-4xl mb-6 opacity-60">🎁</div>
              <h3 className="font-serif text-3xl font-bold mb-4 text-primary-charcoal">Detalles & Recuerdos</h3>
              <p className="text-primary-dark/70 mb-6 leading-relaxed">
                Velas artesanales de cera de soya, cajitas personalizadas y detalles únicos para tus invitados.
              </p>
              <a href="/servicios" className="text-primary-charcoal font-medium hover:text-primary-dark inline-flex items-center gap-2 group">
                Ver más <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-primary-charcoal py-24 text-primary-cream overflow-hidden">
        {/* Decorative circle */}
        <div className="absolute top-0 right-0 w-96 h-96 border border-primary-cream/10 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            ¿Listo para crear un evento inolvidable?
          </h2>
          <div className="w-24 h-1 bg-primary-accent mx-auto mb-8"></div>
          <p className="text-xl mb-12 max-w-2xl mx-auto text-primary-cream/90 leading-relaxed">
            Cotiza tu evento sin compromiso y descubre cómo podemos ayudarte
          </p>
          <a
            href="/cotizacion"
            className="bg-primary-cream text-primary-charcoal px-10 py-4 rounded-sm font-medium hover:bg-primary-beige transition-all duration-300 inline-block shadow-lg"
          >
            Obtener Cotización
          </a>
        </div>
      </section>
    </div>
  );
}
