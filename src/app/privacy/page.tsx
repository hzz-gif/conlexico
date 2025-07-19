import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidad - ConLéxico',
  description: 'Conoce cómo ConLéxico protege tu privacidad y maneja tus datos personales.',
  robots: 'index, follow',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-70-screen mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Política de Privacidad
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-600 mb-8">
            Última actualización: {new Date().toLocaleDateString('es-ES')}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. Información que Recopilamos
            </h2>
            <p className="text-gray-600 mb-4">
              ConLéxico es una plataforma educativa que no requiere registro de usuarios. 
              La información que podemos recopilar incluye:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Información de navegación (páginas visitadas, tiempo de permanencia)</li>
              <li>Datos técnicos (tipo de navegador, sistema operativo, dirección IP)</li>
              <li>Información proporcionada voluntariamente a través de formularios de contacto</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. Uso de la Información
            </h2>
            <p className="text-gray-600 mb-4">
              Utilizamos la información recopilada para:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Mejorar la experiencia del usuario en nuestro sitio web</li>
              <li>Analizar el uso del sitio para optimizar el contenido</li>
              <li>Responder a consultas y proporcionar soporte</li>
              <li>Cumplir con obligaciones legales</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. Cookies y Tecnologías Similares
            </h2>
            <p className="text-gray-600 mb-4">
              Utilizamos cookies y tecnologías similares para mejorar la funcionalidad 
              del sitio web y analizar el tráfico. Puedes controlar el uso de cookies 
              a través de la configuración de tu navegador.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. Compartir Información
            </h2>
            <p className="text-gray-600 mb-4">
              No vendemos, intercambiamos ni transferimos tu información personal 
              a terceros sin tu consentimiento, excepto en los casos descritos 
              en esta política o cuando sea requerido por ley.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. Seguridad de los Datos
            </h2>
            <p className="text-gray-600 mb-4">
              Implementamos medidas de seguridad apropiadas para proteger tu 
              información personal contra acceso no autorizado, alteración, 
              divulgación o destrucción.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. Tus Derechos
            </h2>
            <p className="text-gray-600 mb-4">
              Tienes derecho a:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Acceder a tu información personal</li>
              <li>Rectificar datos inexactos</li>
              <li>Solicitar la eliminación de tus datos</li>
              <li>Oponerte al procesamiento de tus datos</li>
              <li>Solicitar la portabilidad de tus datos</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7. Contacto
            </h2>
            <p className="text-gray-600 mb-4">
              Si tienes preguntas sobre esta Política de Privacidad, puedes contactarnos en:
            </p>
            <p className="text-gray-600">
              Email: privacidad@conlexico.com
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8. Cambios en esta Política
            </h2>
            <p className="text-gray-600 mb-4">
              Nos reservamos el derecho de actualizar esta Política de Privacidad 
              en cualquier momento. Los cambios serán efectivos inmediatamente 
              después de su publicación en esta página.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
