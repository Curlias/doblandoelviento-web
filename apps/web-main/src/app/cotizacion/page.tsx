"use client";

import { useState } from "react";

export default function CotizacionPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    fechaEvento: "",
    tipoEvento: "",
    numeroInvitados: "",
    presupuesto: "",
    servicios: [] as string[],
    mensaje: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (servicio: string) => {
    setFormData(prev => ({
      ...prev,
      servicios: prev.servicios.includes(servicio)
        ? prev.servicios.filter(s => s !== servicio)
        : [...prev.servicios, servicio],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-primary-cream flex items-center justify-center py-16">
        <div className="bg-white p-12 shadow-lg max-w-2xl mx-4 text-center">
          <div className="w-20 h-20 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="font-serif text-3xl text-primary-charcoal mb-4">
            ¡Cotización Recibida!
          </h2>
          <p className="text-lg text-primary-dark/70 mb-8">
            Gracias por tu interés. Nos pondremos en contacto contigo en las próximas 24 horas 
            para discutir los detalles de tu evento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/"
              className="bg-sage-600 text-white px-6 py-3 text-sm tracking-wider uppercase font-medium hover:bg-sage-700 transition-all duration-300"
            >
              Volver al Inicio
            </a>
            <a
              href="/contacto"
              className="border border-sage-600 text-sage-600 px-6 py-3 text-sm tracking-wider uppercase font-medium hover:bg-sage-50 transition-all duration-300"
            >
              Contáctanos Directamente
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-primary-cream">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&h=800&fit=crop&q=80"
            alt="Planificación de eventos"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary-charcoal/70"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="text-sage-300 text-sm tracking-widest uppercase mb-4 block">Comienza aquí</span>
          <h1 className="font-serif text-4xl md:text-6xl font-normal text-primary-cream mb-6">
            Solicitar Cotización
          </h1>
          <div className="w-16 h-px bg-sage-400 mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-primary-beige max-w-2xl mx-auto leading-relaxed">
            Completa el formulario y te contactaremos para crear el evento de tus sueños
          </p>
        </div>
      </section>

      {/* Formulario */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white p-8 md:p-12 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Información Personal */}
              <div>
                <h2 className="font-serif text-2xl text-primary-charcoal mb-6 pb-3 border-b border-primary-sand">
                  Información Personal
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-primary-dark mb-2">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      required
                      value={formData.nombre}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-primary-cream border border-primary-sand focus:border-sage-500 focus:ring-1 focus:ring-sage-500 outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary-dark mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-primary-cream border border-primary-sand focus:border-sage-500 focus:ring-1 focus:ring-sage-500 outline-none transition-colors"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="telefono" className="block text-sm font-medium text-primary-dark mb-2">
                      Teléfono / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      required
                      value={formData.telefono}
                      onChange={handleChange}
                      placeholder="+52 55 1234 5678"
                      className="w-full px-4 py-3 bg-primary-cream border border-primary-sand focus:border-sage-500 focus:ring-1 focus:ring-sage-500 outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Detalles del Evento */}
              <div>
                <h2 className="font-serif text-2xl text-primary-charcoal mb-6 pb-3 border-b border-primary-sand">
                  Detalles del Evento
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="tipoEvento" className="block text-sm font-medium text-primary-dark mb-2">
                      Tipo de Evento *
                    </label>
                    <select
                      id="tipoEvento"
                      name="tipoEvento"
                      required
                      value={formData.tipoEvento}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-primary-cream border border-primary-sand focus:border-sage-500 focus:ring-1 focus:ring-sage-500 outline-none transition-colors"
                    >
                      <option value="">Selecciona...</option>
                      <option value="boda">Boda</option>
                      <option value="xv-anos">XV Años</option>
                      <option value="baby-shower">Baby Shower</option>
                      <option value="cumpleanos">Cumpleaños</option>
                      <option value="corporativo">Evento Corporativo</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="fechaEvento" className="block text-sm font-medium text-primary-dark mb-2">
                      Fecha del Evento *
                    </label>
                    <input
                      type="date"
                      id="fechaEvento"
                      name="fechaEvento"
                      required
                      value={formData.fechaEvento}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-primary-cream border border-primary-sand focus:border-sage-500 focus:ring-1 focus:ring-sage-500 outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="numeroInvitados" className="block text-sm font-medium text-primary-dark mb-2">
                      Número de Invitados
                    </label>
                    <input
                      type="number"
                      id="numeroInvitados"
                      name="numeroInvitados"
                      value={formData.numeroInvitados}
                      onChange={handleChange}
                      placeholder="Ej: 100"
                      className="w-full px-4 py-3 bg-primary-cream border border-primary-sand focus:border-sage-500 focus:ring-1 focus:ring-sage-500 outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="presupuesto" className="block text-sm font-medium text-primary-dark mb-2">
                      Presupuesto Aproximado
                    </label>
                    <select
                      id="presupuesto"
                      name="presupuesto"
                      value={formData.presupuesto}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-primary-cream border border-primary-sand focus:border-sage-500 focus:ring-1 focus:ring-sage-500 outline-none transition-colors"
                    >
                      <option value="">Selecciona un rango...</option>
                      <option value="5000-10000">$5,000 - $10,000 MXN</option>
                      <option value="10000-20000">$10,000 - $20,000 MXN</option>
                      <option value="20000-30000">$20,000 - $30,000 MXN</option>
                      <option value="30000+">Más de $30,000 MXN</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Servicios */}
              <div>
                <h2 className="font-serif text-2xl text-primary-charcoal mb-6 pb-3 border-b border-primary-sand">
                  Servicios de Interés *
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {["Curaduría Completa", "Decoración de Espacios", "Barra Dulce", "Detalles para Invitados", "Flores y Arreglos", "Evento Corporativo"].map((servicio) => (
                    <label key={servicio} className="flex items-center p-4 bg-primary-cream border border-primary-sand hover:border-sage-400 transition-colors cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.servicios.includes(servicio)}
                        onChange={() => handleCheckboxChange(servicio)}
                        className="w-5 h-5 text-sage-600 focus:ring-sage-500 border-gray-300 rounded"
                      />
                      <span className="ml-3 text-primary-dark">{servicio}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Mensaje */}
              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-primary-dark mb-2">
                  Cuéntanos más sobre tu evento
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={6}
                  value={formData.mensaje}
                  onChange={handleChange}
                  placeholder="Describe tu visión, tema, colores, ideas especiales..."
                  className="w-full px-4 py-3 bg-primary-cream border border-primary-sand focus:border-sage-500 focus:ring-1 focus:ring-sage-500 outline-none transition-colors resize-none"
                />
              </div>

              {/* Submit */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button
                  type="submit"
                  className="flex-1 bg-sage-600 text-white px-8 py-4 text-sm tracking-wider uppercase font-medium hover:bg-sage-700 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>Enviar Cotización</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
                <a
                  href="/contacto"
                  className="flex-1 border border-sage-600 text-sage-600 px-8 py-4 text-sm tracking-wider uppercase font-medium hover:bg-sage-50 transition-all duration-300 text-center"
                >
                  Contacto Directo
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
