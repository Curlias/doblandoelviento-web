'use client';
import { useState } from 'react';

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-primary-cream">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=800&fit=crop&q=80"
            alt="Oficina elegante"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary-charcoal/70"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="text-sage-300 text-sm tracking-widest uppercase mb-4 block">Hablemos</span>
          <h1 className="font-serif text-4xl md:text-6xl font-normal text-primary-cream mb-6">
            Contáctanos
          </h1>
          <div className="w-16 h-px bg-sage-400 mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-primary-beige max-w-2xl mx-auto leading-relaxed">
            Estamos aquí para hacer realidad el evento de tus sueños
          </p>
        </div>
      </section>

      {/* Contenido Principal */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Información de Contacto */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 shadow-lg sticky top-8">
                <h2 className="font-serif text-2xl text-primary-charcoal mb-8">
                  Información de Contacto
                </h2>

                <div className="space-y-6">
                  {/* Dirección */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                      <svg className="w-6 h-6 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-sage-600 mb-1">Ubicación</h3>
                      <p className="text-primary-dark/70">Zona Centro y Bajío de México<br />Querétaro, Ciudad de México,<br />Guanajuato, San Luis Potosí</p>
                    </div>
                  </div>

                  {/* Teléfono */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                      <svg className="w-6 h-6 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-sage-600 mb-1">Teléfono</h3>
                      <p className="text-primary-dark/70">+52 55 1234 5678<br />+52 55 8765 4321</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                      <svg className="w-6 h-6 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-sage-600 mb-1">Email</h3>
                      <p className="text-primary-dark/70">hola@doblandoelviento.com<br />eventos@doblandoelviento.com</p>
                    </div>
                  </div>

                  {/* Horario */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                      <svg className="w-6 h-6 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-sage-600 mb-1">Horario</h3>
                      <p className="text-primary-dark/70">Lunes a Viernes: 9:00 - 19:00<br />Sábado: 10:00 - 14:00</p>
                    </div>
                  </div>
                </div>

                {/* Redes Sociales */}
                <div className="mt-10 pt-8 border-t border-primary-sand">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-sage-600 mb-4">Síguenos</h3>
                  <div className="flex gap-3">
                    {[
                      { href: "https://instagram.com", icon: (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                          <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8z"/>
                          <circle cx="18.406" cy="5.594" r="1.44"/>
                        </svg>
                      )},
                      { href: "https://facebook.com", icon: (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      )},
                      { href: "https://pinterest.com", icon: (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0a12 12 0 00-4.37 23.17c-.06-.56-.12-1.42 0-2 .12-.62.77-3.27.77-3.27s-.2-.39-.2-1c0-.91.53-1.59 1.18-1.59.56 0 .83.42.83.92 0 .56-.36 1.4-.54 2.18-.15.64.32 1.16 1 1.16 1.16 0 2.05-1.22 2.05-3 0-1.56-1.12-2.65-2.72-2.65-1.85 0-2.94 1.39-2.94 2.82 0 .56.21 1.16.48 1.48.05.06.06.12.04.18l-.18.74c-.03.12-.1.15-.22.09-.82-.38-1.33-1.58-1.33-2.54 0-2.06 1.5-3.95 4.33-3.95 2.27 0 4.04 1.62 4.04 3.78 0 2.25-1.42 4.06-3.39 4.06-.66 0-1.28-.34-1.49-.75l-.41 1.55c-.15.57-.55 1.29-.82 1.73a12 12 0 1010.36-18.76z"/>
                        </svg>
                      )},
                    ].map((social, idx) => (
                      <a
                        key={idx}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-sage-100 rounded-full flex items-center justify-center text-sage-600 hover:bg-sage-600 hover:text-white transition-all duration-300"
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Formulario */}
            <div className="lg:col-span-3">
              <div className="bg-white p-8 md:p-12 shadow-lg">
                <h2 className="font-serif text-2xl text-primary-charcoal mb-2">
                  Envíanos un Mensaje
                </h2>
                <p className="text-primary-dark/70 mb-8">
                  Completa el formulario y nos pondremos en contacto contigo a la brevedad
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="nombre" className="block text-sm font-medium text-primary-dark mb-2">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-primary-cream border border-primary-sand focus:border-sage-500 focus:ring-1 focus:ring-sage-500 outline-none transition-colors"
                        placeholder="Tu nombre"
                      />
                    </div>

                    <div>
                      <label htmlFor="telefono" className="block text-sm font-medium text-primary-dark mb-2">
                        Teléfono *
                      </label>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-primary-cream border border-primary-sand focus:border-sage-500 focus:ring-1 focus:ring-sage-500 outline-none transition-colors"
                        placeholder="+52 55 1234 5678"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary-dark mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-primary-cream border border-primary-sand focus:border-sage-500 focus:ring-1 focus:ring-sage-500 outline-none transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="asunto" className="block text-sm font-medium text-primary-dark mb-2">
                      Tipo de Evento *
                    </label>
                    <select
                      id="asunto"
                      name="asunto"
                      value={formData.asunto}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-primary-cream border border-primary-sand focus:border-sage-500 focus:ring-1 focus:ring-sage-500 outline-none transition-colors"
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="boda">Boda</option>
                      <option value="xv">XV Años</option>
                      <option value="baby">Baby Shower</option>
                      <option value="corporativo">Evento Corporativo</option>
                      <option value="cumpleanos">Cumpleaños</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-medium text-primary-dark mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-primary-cream border border-primary-sand focus:border-sage-500 focus:ring-1 focus:ring-sage-500 outline-none transition-colors resize-none"
                      placeholder="Cuéntanos sobre tu evento: fecha aproximada, número de invitados, ideas que tengas..."
                    />
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full bg-sage-600 text-white px-8 py-4 text-sm tracking-wider uppercase font-medium hover:bg-sage-700 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <span>Enviar Mensaje</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Area Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <span className="text-sage-600 text-sm tracking-widest uppercase mb-4 block">Nuestra Cobertura</span>
            <h2 className="font-serif text-3xl md:text-4xl font-normal text-primary-charcoal mb-6">
              Zona Centro y Bajío de México
            </h2>
            <div className="w-16 h-px bg-sage-400 mx-auto mb-6"></div>
            <p className="text-primary-dark/70 leading-relaxed text-lg">
              Con más de 10 años de experiencia, ofrecemos nuestros servicios de curaduría de eventos 
              en las principales ciudades de la región Centro y Bajío de México.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-sage-50 p-6 text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <svg className="w-8 h-8 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-primary-charcoal mb-2">Querétaro</h3>
              <p className="text-sm text-primary-dark/70">Capital y municipios</p>
            </div>

            <div className="bg-sage-50 p-6 text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <svg className="w-8 h-8 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-primary-charcoal mb-2">Ciudad de México</h3>
              <p className="text-sm text-primary-dark/70">CDMX y zona metropolitana</p>
            </div>

            <div className="bg-sage-50 p-6 text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <svg className="w-8 h-8 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-primary-charcoal mb-2">Guanajuato</h3>
              <p className="text-sm text-primary-dark/70">León, San Miguel, Guanajuato</p>
            </div>

            <div className="bg-sage-50 p-6 text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <svg className="w-8 h-8 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-primary-charcoal mb-2">San Luis Potosí</h3>
              <p className="text-sm text-primary-dark/70">Capital y zona</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-primary-dark/70 mb-4">
              ¿Tu evento está fuera de estas ciudades?
            </p>
            <p className="text-sage-600 font-medium">
              Contáctanos. Evaluamos proyectos especiales en otras ubicaciones.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=1920&h=600&fit=crop&q=80"
            alt="Workspace"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-sage-800/90"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-serif text-3xl md:text-4xl font-normal text-white mb-6">
            ¿Prefieres una Reunión Presencial?
          </h2>
          <p className="text-sage-100 text-lg mb-10 max-w-2xl mx-auto">
            Agenda una cita en nuestra oficina para platicar sobre tu evento con una taza de café
          </p>
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-sage-700 px-8 py-4 text-sm tracking-wider uppercase font-medium hover:bg-primary-cream transition-all duration-300"
          >
            Agendar Cita
          </a>
        </div>
      </section>
    </div>
  );
}
