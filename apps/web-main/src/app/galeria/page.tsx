'use client';
import { useState } from 'react';

export default function GaleriaPage() {
  const [categoriaActiva, setCategoriaActiva] = useState('Todos');

  const categorias = [
    { nombre: "Todos", icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    )},
    { nombre: "Bodas", icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )},
    { nombre: "XV Años", icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    )},
    { nombre: "Baby Shower", icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
      </svg>
    )},
    { nombre: "Corporativos", icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )},
  ];

  const galeria = [
    { url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=1200&fit=crop&q=80", categoria: "Bodas", titulo: "Boda Jardín Vintage", descripcion: "Ceremonia al aire libre con toques románticos" },
    { url: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop&q=80", categoria: "Bodas", titulo: "Recepción Elegante", descripcion: "Mesa imperial con flores blancas" },
    { url: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=600&h=800&fit=crop&q=80", categoria: "Bodas", titulo: "Detalles Florales", descripcion: "Arreglos naturales y orgánicos" },
    { url: "https://images.unsplash.com/photo-1519167758481-83f29da8c2b6?w=800&h=600&fit=crop&q=80", categoria: "Corporativos", titulo: "Evento Corporativo", descripcion: "Conferencia con montaje elegante" },
    { url: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=1200&fit=crop&q=80", categoria: "Corporativos", titulo: "Lanzamiento de Producto", descripcion: "Escenografía moderna y minimalista" },
    { url: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&h=600&fit=crop&q=80", categoria: "XV Años", titulo: "XV Años Primaveral", descripcion: "Decoración fresca con tonos pastel" },
    { url: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&h=800&fit=crop&q=80", categoria: "XV Años", titulo: "Mesa de Honor", descripcion: "Diseño romántico con velas" },
    { url: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&h=600&fit=crop&q=80", categoria: "Baby Shower", titulo: "Baby Shower Boho", descripcion: "Barra dulce con detalles naturales" },
    { url: "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=800&h=1200&fit=crop&q=80", categoria: "Baby Shower", titulo: "Celebración Íntima", descripcion: "Decoración suave y acogedora" },
    { url: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=800&h=600&fit=crop&q=80", categoria: "Bodas", titulo: "Detalles para Invitados", descripcion: "Recuerdos personalizados y elegantes" },
    { url: "https://images.unsplash.com/photo-1470229538611-16ba8c7ffbd7?w=600&h=800&fit=crop&q=80", categoria: "Bodas", titulo: "Ceremonia al Atardecer", descripcion: "Iluminación cálida y romántica" },
    { url: "https://images.unsplash.com/photo-1460667262436-cf19894f4774?w=800&h=600&fit=crop&q=80", categoria: "Corporativos", titulo: "Networking Lounge", descripcion: "Espacios diseñados para conexión" },
  ];

  const imagenesFiltradas = categoriaActiva === 'Todos' 
    ? galeria 
    : galeria.filter(img => img.categoria === categoriaActiva);

  return (
    <div className="min-h-screen bg-primary-cream">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&h=1080&fit=crop&q=80"
            alt="Galería de eventos"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary-charcoal/60"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="text-sage-300 text-sm tracking-widest uppercase mb-4 block">Nuestro Portafolio</span>
          <h1 className="font-serif text-4xl md:text-6xl font-normal text-primary-cream mb-6">
            Galería de Eventos
          </h1>
          <div className="w-16 h-px bg-sage-400 mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-primary-beige max-w-3xl mx-auto leading-relaxed">
            Una muestra de momentos inolvidables que hemos tenido el privilegio de crear
          </p>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-12 bg-white border-b border-primary-sand">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categorias.map((cat) => (
              <button
                key={cat.nombre}
                onClick={() => setCategoriaActiva(cat.nombre)}
                className={`flex items-center gap-2 px-6 py-3 text-sm tracking-wider uppercase font-medium transition-all duration-300 ${
                  categoriaActiva === cat.nombre
                    ? 'bg-sage-600 text-white'
                    : 'bg-white text-primary-dark border border-primary-sand hover:border-sage-400 hover:text-sage-600'
                }`}
              >
                {cat.icon}
                {cat.nombre}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Galería Masonry */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {imagenesFiltradas.map((imagen, idx) => (
              <div key={idx} className="break-inside-avoid group">
                <div className="relative overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src={imagen.url}
                    alt={imagen.titulo}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-charcoal/80 via-primary-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 text-white w-full">
                      <h3 className="font-serif text-xl mb-2">{imagen.titulo}</h3>
                      <p className="text-sage-200 text-sm">{imagen.descripcion}</p>
                      <span className="inline-block mt-3 text-xs tracking-widest uppercase text-sage-300 border-b border-sage-400 pb-1">
                        {imagen.categoria}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Estadísticas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { numero: "200+", label: "Eventos Realizados" },
              { numero: "500+", label: "Clientes Felices" },
              { numero: "50+", label: "Proveedores Aliados" },
              { numero: "10+", label: "Años de Experiencia" },
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
            src="https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=1920&h=800&fit=crop&q=80"
            alt="Decoración elegante"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-sage-700/80"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-serif text-3xl md:text-4xl font-normal text-white mb-6">
            ¿Listo para crear tu evento único?
          </h2>
          <p className="text-sage-100 text-lg mb-10 max-w-2xl mx-auto">
            Agenda una consulta sin compromiso y platicamos sobre tu visión
          </p>
          <a
            href="/cotizacion"
            className="inline-block bg-white text-sage-700 px-8 py-4 text-sm tracking-wider uppercase font-medium hover:bg-primary-cream transition-all duration-300"
          >
            Solicitar Cotización
          </a>
        </div>
      </section>
    </div>
  );
}
