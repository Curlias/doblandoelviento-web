"use client";

import { useState } from "react";
import { Button } from "@repo/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@repo/ui/card";

export default function InscripcionPage() {
  const [formData, setFormData] = useState({
    nombrePadre: "",
    email: "",
    telefono: "",
    nombreNino: "",
    edad: "",
    cursoInteres: "",
    horarioPreferencia: "",
    comentarios: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
              ¡Inscripción Recibida!
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Gracias por tu interés en ILAIA. Nos pondremos en contacto contigo en las próximas 
              24 horas para confirmar la inscripción y proporcionarte todos los detalles.
            </p>
            <div className="space-y-3">
              <a href="/">
                <Button variant="primary" className="w-full">
                  Volver al Inicio
                </Button>
              </a>
              <a href="/cursos">
                <Button variant="outline" className="w-full">
                  Ver Más Cursos
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
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 text-center">
            Inscripción
          </h1>
          <p className="mt-4 text-lg text-gray-600 text-center max-w-3xl mx-auto">
            Completa el formulario para inscribir a tu hijo en nuestros cursos STEAM
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <Card variant="elevated">
          <CardHeader>
            <CardTitle>Formulario de Inscripción</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Información del Padre/Tutor
                </h3>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="nombrePadre" className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      id="nombrePadre"
                      name="nombrePadre"
                      required
                      value={formData.nombrePadre}
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

                  <div className="md:col-span-2">
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
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Información del Niño/a
                </h3>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="nombreNino" className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre del Niño/a *
                    </label>
                    <input
                      type="text"
                      id="nombreNino"
                      name="nombreNino"
                      required
                      value={formData.nombreNino}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="edad" className="block text-sm font-medium text-gray-700 mb-2">
                      Edad *
                    </label>
                    <input
                      type="number"
                      id="edad"
                      name="edad"
                      required
                      min="4"
                      max="18"
                      value={formData.edad}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Detalles del Curso
                </h3>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="cursoInteres" className="block text-sm font-medium text-gray-700 mb-2">
                      Curso de Interés *
                    </label>
                    <select
                      id="cursoInteres"
                      name="cursoInteres"
                      required
                      value={formData.cursoInteres}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Selecciona un curso...</option>
                      <option value="robotica">Robótica para Principiantes</option>
                      <option value="ciencia">Experimentos de Ciencia</option>
                      <option value="scratch">Programación Scratch</option>
                      <option value="matematicas">Matemáticas Divertidas</option>
                      <option value="lego">Ingeniería con LEGO</option>
                      <option value="arte-digital">Arte Digital</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="horarioPreferencia" className="block text-sm font-medium text-gray-700 mb-2">
                      Horario de Preferencia
                    </label>
                    <select
                      id="horarioPreferencia"
                      name="horarioPreferencia"
                      value={formData.horarioPreferencia}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Selecciona un horario...</option>
                      <option value="matutino">Matutino (9:00 - 12:00)</option>
                      <option value="vespertino">Vespertino (15:00 - 18:00)</option>
                      <option value="sabados">Sábados</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="comentarios" className="block text-sm font-medium text-gray-700 mb-2">
                      Comentarios Adicionales
                    </label>
                    <textarea
                      id="comentarios"
                      name="comentarios"
                      rows={4}
                      value={formData.comentarios}
                      onChange={handleChange}
                      placeholder="¿Tiene tu hijo alguna experiencia previa? ¿Intereses específicos? ¿Necesidades especiales?"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-6">
                <Button type="submit" variant="primary" size="lg" className="flex-1">
                  Enviar Inscripción
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

        <Card variant="bordered" className="mt-8">
          <CardContent className="p-6">
            <h3 className="font-semibold text-gray-900 mb-3">
              Proceso de Inscripción
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-sm text-gray-600">
              <li>Envía el formulario de inscripción</li>
              <li>Recibirás confirmación por email y WhatsApp en 24 horas</li>
              <li>Realiza el pago para asegurar el lugar</li>
              <li>Recibe los detalles del curso y materiales necesarios</li>
              <li>¡Comienza la aventura STEAM!</li>
            </ol>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
