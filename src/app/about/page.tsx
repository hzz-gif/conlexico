import { Metadata } from 'next';
import Link from 'next/link';
import { generateSEOMetadata } from '@/utils/seo';

export const metadata: Metadata = {
  ...generateSEOMetadata(),
  title: 'Acerca de ConLéxico - Nuestra Misión y Visión',
  description: 'Conoce más sobre ConLéxico, la plataforma dedicada a ayudarte a expandir tu vocabulario de manera organizada y efectiva.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-70-screen mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Acerca de <span className="text-blue-600">ConLéxico</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos una plataforma dedicada a hacer que el aprendizaje de vocabulario
            sea más accesible, organizado y efectivo para estudiantes de todos los niveles.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-70-screen mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Nuestra Misión
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                En ConLéxico, creemos que el vocabulario es la base fundamental para dominar cualquier idioma. 
                Nuestra misión es proporcionar una herramienta intuitiva y completa que permita a los usuarios 
                explorar y aprender nuevas palabras de manera sistemática.
              </p>
              <p className="text-lg text-gray-600">
                Organizamos el vocabulario por categorías temáticas y letras del alfabeto, facilitando 
                el proceso de aprendizaje y haciendo que sea más natural recordar y utilizar nuevas palabras.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">7</div>
                  <div className="text-sm text-gray-600">Categorías Principales</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">26</div>
                  <div className="text-sm text-gray-600">Letras del Alfabeto</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">182</div>
                  <div className="text-sm text-gray-600">Páginas Únicas</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">1000+</div>
                  <div className="text-sm text-gray-600">Palabras Catalogadas</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-70-screen mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            ¿Qué Nos Hace Únicos?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Organización Sistemática
              </h3>
              <p className="text-gray-600">
                Cada palabra está cuidadosamente categorizada por tema y letra inicial, 
                facilitando la búsqueda y el aprendizaje estructurado.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Búsqueda Intuitiva
              </h3>
              <p className="text-gray-600">
                Nuestro sistema de búsqueda te permite encontrar palabras rápidamente 
                por categoría, letra o término específico.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Contenido Educativo
              </h3>
              <p className="text-gray-600">
                Cada palabra incluye definiciones claras y ejemplos de uso 
                para facilitar la comprensión y aplicación práctica.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-70-screen mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Nuestro Compromiso
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Estamos comprometidos con la excelencia educativa y la mejora continua de nuestra plataforma. 
            Trabajamos constantemente para expandir nuestro catálogo de palabras y mejorar la experiencia 
            de aprendizaje de nuestros usuarios.
          </p>
          
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              ¿Tienes Sugerencias?
            </h3>
            <p className="text-blue-100 mb-6">
              Valoramos tu opinión y sugerencias para mejorar ConLéxico. 
              Tu feedback nos ayuda a crear una mejor experiencia para todos.
            </p>
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Contáctanos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
