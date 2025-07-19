import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Términos de Uso - ConLéxico',
  description: 'Lee los términos y condiciones de uso de ConLéxico.',
  robots: 'index, follow',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-70-screen mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Términos de Uso
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-600 mb-8">
            Última actualización: {new Date().toLocaleDateString('es-ES')}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. Aceptación de los Términos
            </h2>
            <p className="text-gray-600 mb-4">
              Al acceder y utilizar ConLéxico, aceptas estar sujeto a estos 
              Términos de Uso y a todas las leyes y regulaciones aplicables. 
              Si no estás de acuerdo con alguno de estos términos, no debes 
              utilizar este sitio web.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. Descripción del Servicio
            </h2>
            <p className="text-gray-600 mb-4">
              ConLéxico es una plataforma educativa gratuita que organiza 
              vocabulario en español por categorías y letras del alfabeto. 
              Nuestro objetivo es facilitar el aprendizaje y la expansión 
              del vocabulario.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. Uso Permitido
            </h2>
            <p className="text-gray-600 mb-4">
              Puedes utilizar ConLéxico para:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Aprender y expandir tu vocabulario en español</li>
              <li>Enseñar español utilizando nuestros recursos</li>
              <li>Investigación educativa personal</li>
              <li>Compartir enlaces a nuestro contenido</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. Uso Prohibido
            </h2>
            <p className="text-gray-600 mb-4">
              No puedes:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Copiar, reproducir o distribuir nuestro contenido sin autorización</li>
              <li>Utilizar el sitio para fines comerciales sin permiso</li>
              <li>Intentar acceder a áreas restringidas del sitio</li>
              <li>Interferir con el funcionamiento del sitio web</li>
              <li>Utilizar el sitio para actividades ilegales</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. Propiedad Intelectual
            </h2>
            <p className="text-gray-600 mb-4">
              Todo el contenido de ConLéxico, incluyendo textos, gráficos, 
              logos, iconos, imágenes y software, es propiedad de ConLéxico 
              o sus proveedores de contenido y está protegido por las leyes 
              de derechos de autor.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. Exención de Responsabilidad
            </h2>
            <p className="text-gray-600 mb-4">
              ConLéxico se proporciona "tal como está" sin garantías de ningún tipo. 
              No garantizamos que el servicio sea ininterrumpido, seguro o libre de errores. 
              El uso del sitio es bajo tu propio riesgo.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7. Limitación de Responsabilidad
            </h2>
            <p className="text-gray-600 mb-4">
              En ningún caso ConLéxico será responsable por daños directos, 
              indirectos, incidentales, especiales o consecuentes que resulten 
              del uso o la imposibilidad de usar el servicio.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8. Modificaciones
            </h2>
            <p className="text-gray-600 mb-4">
              Nos reservamos el derecho de modificar estos términos en cualquier 
              momento. Los cambios serán efectivos inmediatamente después de su 
              publicación en esta página.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              9. Ley Aplicable
            </h2>
            <p className="text-gray-600 mb-4">
              Estos términos se rigen por las leyes aplicables y cualquier 
              disputa será resuelta en los tribunales competentes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              10. Contacto
            </h2>
            <p className="text-gray-600 mb-4">
              Si tienes preguntas sobre estos Términos de Uso, puedes contactarnos en:
            </p>
            <p className="text-gray-600">
              Email: legal@conlexico.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
