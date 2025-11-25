export default function ContactoTavitiPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-primary-cream"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="text-primary-dark/60 text-sm tracking-widest uppercase mb-4 block">Estamos aquí</span>
          <h1 className="font-serif text-4xl md:text-6xl font-normal text-primary-charcoal mb-6">
            Contacto
          </h1>
          <div className="w-16 h-px bg-primary-sand mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-primary-dark/70 max-w-3xl mx-auto leading-relaxed">
            Hagamos realidad tu proyecto juntos
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Formulario */}
            <div>
              <h2 className="font-serif text-3xl font-normal text-primary-charcoal mb-6">
                Envíanos un Mensaje
              </h2>
              <p className="text-primary-dark/70 mb-8">
                Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas
              </p>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm text-primary-dark mb-2">Nombre Completo *</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-4 py-3 border border-primary-sand bg-white focus:border-primary-dark focus:outline-none transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-primary-dark mb-2">Email *</label>
                    <input 
                      type="email" 
                      required
                      className="w-full px-4 py-3 border border-primary-sand bg-white focus:border-primary-dark focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-primary-dark mb-2">Teléfono</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 border border-primary-sand bg-white focus:border-primary-dark focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-primary-dark mb-2">Tipo de Proyecto *</label>
                  <select 
                    required
                    className="w-full px-4 py-3 border border-primary-sand bg-white focus:border-primary-dark focus:outline-none transition-colors"
                  >
                    <option value="">Selecciona una opción</option>
                    <option>Invitaciones de Boda</option>
                    <option>Save the Date</option>
                    <option>Papelería Corporativa</option>
                    <option>Cuadernos / Agendas</option>
                    <option>XV Años</option>
                    <option>Otro Evento</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-primary-dark mb-2">Fecha Estimada del Evento</label>
                  <input 
                    type="date" 
                    className="w-full px-4 py-3 border border-primary-sand bg-white focus:border-primary-dark focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm text-primary-dark mb-2">Presupuesto Aproximado</label>
                  <select className="w-full px-4 py-3 border border-primary-sand bg-white focus:border-primary-dark focus:outline-none transition-colors">
                    <option value="">Selecciona un rango</option>
                    <option>Menos de $5,000</option>
                    <option>$5,000 - $10,000</option>
                    <option>$10,000 - $20,000</option>
                    <option>Más de $20,000</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-primary-dark mb-2">Mensaje *</label>
                  <textarea 
                    rows={6}
                    required
                    placeholder="Cuéntanos sobre tu proyecto: estilo que te gusta, cantidad necesaria, colores preferidos, inspiración, etc."
                    className="w-full px-4 py-3 border border-primary-sand bg-white focus:border-primary-dark focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-dark text-primary-cream px-10 py-4 text-sm tracking-wider uppercase font-medium hover:bg-primary-charcoal transition-all duration-300"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>

            {/* Información de Contacto */}
            <div>
              <h2 className="font-serif text-3xl font-normal text-primary-charcoal mb-6">
                Información de Contacto
              </h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-sand/30 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <svg className="w-5 h-5 text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-primary-charcoal mb-1">Email</h3>
                    <a href="mailto:hola@taviti.com" className="text-primary-dark/70 hover:text-primary-dark transition-colors">
                      hola@taviti.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-sand/30 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <svg className="w-5 h-5 text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-primary-charcoal mb-1">WhatsApp</h3>
                    <a href="https://wa.me/524421234567" className="text-primary-dark/70 hover:text-primary-dark transition-colors">
                      +52 442 123 4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-sand/30 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <svg className="w-5 h-5 text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-primary-charcoal mb-1">Ubicación</h3>
                    <p className="text-primary-dark/70">
                      Querétaro, México<br />
                      Atención con cita previa
                    </p>
                  </div>
                </div>
              </div>

              {/* Horario */}
              <div className="bg-primary-cream p-8 mb-8">
                <h3 className="font-serif text-xl text-primary-charcoal mb-4">Horario de Atención</h3>
                <div className="space-y-2 text-sm text-primary-dark/70">
                  <div className="flex justify-between">
                    <span>Lunes - Viernes</span>
                    <span>10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábado</span>
                    <span>10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingo</span>
                    <span>Cerrado</span>
                  </div>
                </div>
              </div>

              {/* Redes Sociales */}
              <div>
                <h3 className="font-serif text-xl text-primary-charcoal mb-4">Síguenos</h3>
                <div className="flex gap-4">
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-primary-sand/30 rounded-full flex items-center justify-center text-primary-dark hover:bg-primary-dark hover:text-primary-cream transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-primary-sand/30 rounded-full flex items-center justify-center text-primary-dark hover:bg-primary-dark hover:text-primary-cream transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-primary-sand/30 rounded-full flex items-center justify-center text-primary-dark hover:bg-primary-dark hover:text-primary-cream transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-primary-cream">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-normal text-primary-charcoal mb-6">
              Preguntas Frecuentes
            </h2>
            <div className="w-16 h-px bg-primary-sand mx-auto"></div>
          </div>

          <div className="space-y-6">
            {[
              {
                pregunta: "¿Cuánto tiempo toma producir un pedido?",
                respuesta: "El tiempo varía según el proyecto. Generalmente, invitaciones de boda toman 3-4 semanas desde la aprobación del diseño. Para proyectos urgentes, consultanos."
              },
              {
                pregunta: "¿Hacen entregas a toda la República?",
                respuesta: "Sí, enviamos a toda la República Mexicana. Los costos de envío se calculan según la ubicación y peso del pedido."
              },
              {
                pregunta: "¿Puedo ver muestras antes de hacer el pedido completo?",
                respuesta: "¡Por supuesto! Para proyectos grandes podemos hacer muestras físicas por un costo adicional que se descuenta del pedido final."
              },
              {
                pregunta: "¿Qué formas de pago aceptan?",
                respuesta: "Aceptamos transferencia bancaria, depósito y pago con tarjeta. Se requiere un anticipo del 50% para iniciar la producción."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white p-6">
                <h3 className="font-serif text-lg text-primary-charcoal mb-2">{faq.pregunta}</h3>
                <p className="text-primary-dark/70 text-sm">{faq.respuesta}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
