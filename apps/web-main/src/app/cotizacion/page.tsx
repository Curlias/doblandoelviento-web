"use client";

import { useState } from "react";
import { Button } from "@repo/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@repo/ui/card";

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
    // Aquí iría la lógica para enviar el formulario
    console.log("Formulario enviado:", formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-gray-50 min-h-screen flex items-center justify-center py-16">
        <Card variant="elevated" className="max-w-2xl mx-4">
          <CardContent className="pt-6 text-center">
            <div className="text-6xl mb-4">✅</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ¡Cotización Recibida!
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Gracias por tu interés. Nos pondremos en contacto contigo en las próximas 24 horas 
              para discutir los detalles de tu evento.
            </p>
            <div className="space-y-3">
              <a href="/">
                <Button variant="primary" className="w-full">
                  Volver al Inicio
                </Button>
              </a>
              <a 
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5212345678901"}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="w-full">
                  Contáctanos por WhatsApp
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="bg-gray-50">
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 text-center">
            Solicitar Cotización
          </h1>
          <p className="mt-4 text-lg text-gray-600 text-center max-w-3xl mx-auto">
            Completa el formulario y te contactaremos para crear el evento de tus sueños
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <Card variant="elevated">
          <CardHeader>
            <CardTitle>Información del Evento</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    required
                    value={formData.nombre}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    required
                    value={formData.telefono}
                    onChange={handleChange}
                    placeholder="442-123-4567"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="fechaEvento" className="block text-sm font-medium text-gray-700 mb-2">
                    Fecha del Evento *
                  </label>
                  <input
                    type="date"
                    id="fechaEvento"
                    name="fechaEvento"
                    required
                    value={formData.fechaEvento}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="tipoEvento" className="block text-sm font-medium text-gray-700 mb-2">
                    Tipo de Evento *
                  </label>
                  <select
                    id="tipoEvento"
                    name="tipoEvento"
                    required
                    value={formData.tipoEvento}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
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
                  <label htmlFor="numeroInvitados" className="block text-sm font-medium text-gray-700 mb-2">
                    Número de Invitados
                  </label>
                  <input
                    type="number"
                    id="numeroInvitados"
                    name="numeroInvitados"
                    value={formData.numeroInvitados}
                    onChange={handleChange}
                    placeholder="Ej: 100"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Servicios de Interés *
                </label>
                <div className="space-y-2">
                  {["Curaduría Completa", "Barra Dulce", "Velas Artesanales", "Decoración", "Detalles para Invitados"].map((servicio) => (
                    <label key={servicio} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.servicios.includes(servicio)}
                        onChange={() => handleCheckboxChange(servicio)}
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                      />
                      <span className="ml-2 text-gray-700">{servicio}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="presupuesto" className="block text-sm font-medium text-gray-700 mb-2">
                  Presupuesto Aproximado
                </label>
                <select
                  id="presupuesto"
                  name="presupuesto"
                  value={formData.presupuesto}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Selecciona un rango...</option>
                  <option value="5000-10000">$5,000 - $10,000 MXN</option>
                  <option value="10000-20000">$10,000 - $20,000 MXN</option>
                  <option value="20000-30000">$20,000 - $30,000 MXN</option>
                  <option value="30000+">Más de $30,000 MXN</option>
                </select>
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">
                  Cuéntanos más sobre tu evento
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={4}
                  value={formData.mensaje}
                  onChange={handleChange}
                  placeholder="Describe tu visión, tema, colores, ideas especiales..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div className="flex gap-4">
                <Button type="submit" variant="primary" size="lg" className="flex-1">
                  Enviar Cotización
                </Button>
                <a 
                  href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5212345678901"}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button type="button" variant="outline" size="lg" className="w-full">
                    WhatsApp Directo
                  </Button>
                </a>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
