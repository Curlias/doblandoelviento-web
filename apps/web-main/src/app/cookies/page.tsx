export default function CookiesPage() {
  return (
    <div className="bg-gray-50">
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 text-center">
            Política de Cookies
          </h1>
          <p className="mt-4 text-sm text-gray-600 text-center">
            Última actualización: 24 de noviembre de 2025
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Qué son las cookies?</h2>
            <p className="text-gray-600">
              Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando 
              visitas un sitio web. Se utilizan ampliamente para hacer que los sitios web funcionen 
              de manera más eficiente, así como para proporcionar información a los propietarios del sitio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies que utilizamos</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">1. Cookies Esenciales</h3>
                <p className="text-gray-600">
                  Estas cookies son necesarias para el funcionamiento del sitio web y no se pueden 
                  desactivar. Normalmente solo se establecen en respuesta a acciones realizadas por ti, 
                  como establecer tus preferencias de privacidad o llenar formularios.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">2. Cookies de Rendimiento</h3>
                <p className="text-gray-600">
                  Estas cookies nos permiten contar las visitas y fuentes de tráfico para poder medir 
                  y mejorar el rendimiento de nuestro sitio. Nos ayudan a saber qué páginas son las más 
                  y menos populares y ver cómo los visitantes se mueven por el sitio.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">3. Cookies Funcionales</h3>
                <p className="text-gray-600">
                  Estas cookies permiten al sitio proporcionar funcionalidad y personalización mejoradas. 
                  Pueden ser establecidas por nosotros o por proveedores externos cuyos servicios hemos 
                  agregado a nuestras páginas.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">4. Cookies de Marketing</h3>
                <p className="text-gray-600">
                  Estas cookies pueden ser establecidas a través de nuestro sitio por nuestros socios 
                  publicitarios. Pueden ser utilizadas por esas compañías para construir un perfil de 
                  tus intereses y mostrarte anuncios relevantes en otros sitios.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies de terceros</h2>
            <p className="text-gray-600 mb-4">
              Utilizamos servicios de terceros que pueden establecer cookies en tu dispositivo:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li><strong>Google Analytics:</strong> Para analizar el uso del sitio web</li>
              <li><strong>Facebook Pixel:</strong> Para medir la efectividad de la publicidad</li>
              <li><strong>Redes Sociales:</strong> Para compartir contenido en redes sociales</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Gestión de cookies</h2>
            <p className="text-gray-600 mb-4">
              Puedes controlar y/o eliminar las cookies como desees. Puedes eliminar todas las cookies 
              que ya están en tu computadora y puedes configurar la mayoría de los navegadores para 
              evitar que se coloquen.
            </p>
            <p className="text-gray-600 mb-4">
              Sin embargo, si haces esto, es posible que tengas que ajustar manualmente algunas 
              preferencias cada vez que visites un sitio y algunos servicios y funcionalidades pueden 
              no funcionar.
            </p>
            <div className="bg-amber-50 border-l-4 border-primary-500 p-4 mt-4">
              <p className="text-gray-700">
                <strong>Nota:</strong> Al continuar navegando en nuestro sitio web, aceptas el uso de 
                cookies según esta política.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Configuración del navegador</h2>
            <p className="text-gray-600 mb-4">
              Aquí te mostramos cómo gestionar las cookies en los navegadores más populares:
            </p>
            <ul className="space-y-2 text-gray-600 ml-4">
              <li>• <strong>Google Chrome:</strong> Configuración → Privacidad y seguridad → Cookies</li>
              <li>• <strong>Firefox:</strong> Opciones → Privacidad y seguridad → Cookies</li>
              <li>• <strong>Safari:</strong> Preferencias → Privacidad → Cookies</li>
              <li>• <strong>Edge:</strong> Configuración → Privacidad → Cookies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contacto</h2>
            <p className="text-gray-600">
              Si tienes preguntas sobre nuestra política de cookies, contáctanos en:
            </p>
            <p className="text-gray-600 mt-2">
              Email: contacto@doblandoelviento.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
