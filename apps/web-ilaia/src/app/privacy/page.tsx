export default function PrivacyPage() {
  return (
    <div className="bg-gray-50">
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 text-center">
            Política de Privacidad
          </h1>
          <p className="mt-4 text-sm text-gray-600 text-center">
            Última actualización: 24 de noviembre de 2025
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Información que Recopilamos</h2>
            <p className="text-gray-600 mb-4">
              En Doblando el Viento recopilamos información personal cuando utilizas nuestros servicios, 
              incluyendo:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li>Nombre completo</li>
              <li>Dirección de correo electrónico</li>
              <li>Número de teléfono</li>
              <li>Información sobre el evento (fecha, tipo, número de invitados)</li>
              <li>Preferencias y comentarios sobre servicios</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Uso de la Información</h2>
            <p className="text-gray-600 mb-4">
              Utilizamos la información recopilada para:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li>Procesar y gestionar cotizaciones y reservaciones</li>
              <li>Comunicarnos contigo sobre tu evento</li>
              <li>Mejorar nuestros servicios y experiencia del cliente</li>
              <li>Enviar información sobre promociones y nuevos servicios (solo si lo autorizas)</li>
              <li>Cumplir con obligaciones legales y fiscales</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Protección de Datos</h2>
            <p className="text-gray-600">
              Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger 
              tu información personal contra acceso no autorizado, alteración, divulgación o destrucción. 
              Tu información está almacenada en servidores seguros y solo es accesible para personal autorizado.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Compartir Información</h2>
            <p className="text-gray-600">
              No vendemos, alquilamos ni compartimos tu información personal con terceros, excepto:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4 mt-4">
              <li>Cuando sea necesario para proporcionar nuestros servicios (proveedores de confianza)</li>
              <li>Cuando sea requerido por ley o autoridades competentes</li>
              <li>Con tu consentimiento explícito</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Tus Derechos</h2>
            <p className="text-gray-600 mb-4">
              De acuerdo con la Ley Federal de Protección de Datos Personales en Posesión de 
              Particulares, tienes derecho a:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li>Acceder a tus datos personales</li>
              <li>Rectificar datos incorrectos o incompletos</li>
              <li>Cancelar el uso de tus datos</li>
              <li>Oponerte al tratamiento de tus datos para fines específicos</li>
            </ul>
            <p className="text-gray-600 mt-4">
              Para ejercer estos derechos, contáctanos en: contacto@doblandoelviento.com
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookies y Tecnologías Similares</h2>
            <p className="text-gray-600">
              Nuestro sitio web puede utilizar cookies para mejorar tu experiencia de navegación. 
              Consulta nuestra{" "}
              <a href="/cookies" className="text-primary-600 hover:text-primary-700 underline">
                Política de Cookies
              </a>{" "}
              para más información.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cambios a esta Política</h2>
            <p className="text-gray-600">
              Podemos actualizar esta política de privacidad periódicamente. Te notificaremos sobre 
              cambios importantes publicando la nueva política en esta página y actualizando la fecha 
              de "última actualización".
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contacto</h2>
            <p className="text-gray-600">
              Si tienes preguntas sobre esta política de privacidad, contáctanos:
            </p>
            <div className="mt-4 text-gray-600">
              <p>Email: contacto@doblandoelviento.com</p>
              <p>Teléfono: {process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+52 (442) 123-4567"}</p>
              <p>Ubicación: Querétaro, Querétaro, México</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
