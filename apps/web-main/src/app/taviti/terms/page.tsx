export default function TermsPage() {
  return (
    <div className="bg-gray-50">
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 text-center">
            Términos de Servicio
          </h1>
          <p className="mt-4 text-sm text-gray-600 text-center">
            Última actualización: 24 de noviembre de 2025
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Aceptación de Términos</h2>
            <p className="text-gray-600">
              Al acceder y utilizar el sitio web de Doblando el Viento y nuestros servicios, aceptas 
              estar sujeto a estos Términos de Servicio. Si no estás de acuerdo con alguna parte de 
              estos términos, no debes utilizar nuestros servicios.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Servicios Ofrecidos</h2>
            <p className="text-gray-600 mb-4">
              Doblando el Viento ofrece servicios de curaduría y decoración de eventos, incluyendo:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li>Diseño y coordinación integral de eventos</li>
              <li>Barras dulces personalizadas</li>
              <li>Velas artesanales de cera de soya</li>
              <li>Detalles y recuerdos para invitados</li>
              <li>Decoración de espacios</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Cotizaciones y Reservaciones</h2>
            <p className="text-gray-600 mb-4">
              Las cotizaciones proporcionadas son válidas por 15 días a partir de su emisión. 
              Para reservar nuestros servicios:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li>Se requiere un anticipo del 50% para confirmar la reservación</li>
              <li>El saldo restante debe pagarse 7 días antes del evento</li>
              <li>Los precios pueden estar sujetos a cambios según disponibilidad y temporada</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Cancelaciones y Reembolsos</h2>
            <div className="space-y-4 text-gray-600">
              <div>
                <h3 className="font-semibold text-gray-900">Cancelación por el Cliente:</h3>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li>Más de 30 días antes del evento: Reembolso del 80% del anticipo</li>
                  <li>Entre 15-30 días antes: Reembolso del 50% del anticipo</li>
                  <li>Menos de 15 días antes: No hay reembolso</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Cancelación por Doblando el Viento:</h3>
                <p className="mt-2">
                  En caso de que tengamos que cancelar por causas de fuerza mayor, se reembolsará 
                  el 100% de los pagos realizados.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Modificaciones al Servicio</h2>
            <p className="text-gray-600">
              Cualquier modificación a los servicios contratados debe solicitarse por escrito con al 
              menos 10 días de anticipación y está sujeta a disponibilidad y posibles costos adicionales.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Responsabilidades</h2>
            <div className="space-y-4 text-gray-600">
              <div>
                <h3 className="font-semibold text-gray-900">Nuestras Responsabilidades:</h3>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li>Proporcionar los servicios acordados con profesionalismo y calidad</li>
                  <li>Llegar puntualmente para el montaje del evento</li>
                  <li>Utilizar materiales de calidad en todos nuestros productos</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Tus Responsabilidades:</h3>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li>Proporcionar acceso al lugar del evento con anticipación</li>
                  <li>Asegurar que el espacio cumple con los requisitos acordados</li>
                  <li>Realizar los pagos en las fechas establecidas</li>
                  <li>Informar cualquier cambio o requerimiento especial con anticipación</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitación de Responsabilidad</h2>
            <p className="text-gray-600">
              Doblando el Viento no será responsable por daños, pérdidas o lesiones causadas por 
              terceros, condiciones climáticas adversas, o circunstancias fuera de nuestro control 
              razonable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Propiedad Intelectual</h2>
            <p className="text-gray-600">
              Todos los diseños, conceptos y materiales creados por Doblando el Viento son propiedad 
              intelectual de la empresa. Podemos utilizar fotografías del evento para fines promocionales, 
              a menos que se solicite lo contrario por escrito.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Jurisdicción</h2>
            <p className="text-gray-600">
              Estos términos se rigen por las leyes de los Estados Unidos Mexicanos. Cualquier disputa 
              se resolverá en los tribunales competentes de Querétaro, Querétaro.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Cambios a los Términos</h2>
            <p className="text-gray-600">
              Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios 
              entrarán en vigor inmediatamente después de su publicación en el sitio web.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contacto</h2>
            <p className="text-gray-600">
              Para cualquier pregunta sobre estos términos de servicio, contáctanos:
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
