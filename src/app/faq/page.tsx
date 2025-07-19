'use client';

import { useState } from 'react';
import Link from 'next/link';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'usage' | 'content' | 'technical';
}

const faqData: FAQItem[] = [
  {
    id: '1',
    question: '¿Qué es ConLéxico?',
    answer: 'ConLéxico es una plataforma educativa que organiza vocabulario por categorías temáticas y letras del alfabeto. Nuestro objetivo es facilitar el aprendizaje y la expansión del vocabulario de manera sistemática y efectiva.',
    category: 'general'
  },
  {
    id: '2',
    question: '¿Cómo puedo buscar palabras específicas?',
    answer: 'Puedes buscar palabras de varias maneras: 1) Usa la barra de búsqueda en la página principal, 2) Navega por categorías (colores, animales, etc.), 3) Selecciona una letra específica dentro de cada categoría, o 4) Explora directamente las páginas de cada letra.',
    category: 'usage'
  },
  {
    id: '3',
    question: '¿Qué categorías de palabras están disponibles?',
    answer: 'Actualmente ofrecemos 7 categorías principales: Colores, Animales, Países, Frutas, Palabras generales, Comidas y Apellidos. Cada categoría incluye palabras organizadas de la A a la Z.',
    category: 'content'
  },
  {
    id: '4',
    question: '¿Es gratuito usar ConLéxico?',
    answer: 'Sí, ConLéxico es completamente gratuito. Puedes acceder a todas las categorías, palabras, definiciones y ejemplos sin costo alguno.',
    category: 'general'
  },
  {
    id: '5',
    question: '¿Cómo están organizadas las palabras?',
    answer: 'Las palabras están organizadas en dos niveles: primero por categoría temática (como colores o animales) y luego alfabéticamente por la primera letra de cada palabra. Esto facilita encontrar palabras específicas y explorar vocabulario relacionado.',
    category: 'usage'
  },
  {
    id: '6',
    question: '¿Puedo sugerir nuevas palabras o categorías?',
    answer: 'Absolutamente. Valoramos las sugerencias de nuestros usuarios. Puedes contactarnos a través de la página de contacto para proponer nuevas palabras, categorías o mejoras a la plataforma.',
    category: 'content'
  },
  {
    id: '7',
    question: '¿La plataforma funciona en dispositivos móviles?',
    answer: 'Sí, ConLéxico está diseñado para funcionar perfectamente en computadoras, tablets y teléfonos móviles. La interfaz se adapta automáticamente al tamaño de tu pantalla.',
    category: 'technical'
  },
  {
    id: '8',
    question: '¿Con qué frecuencia se actualiza el contenido?',
    answer: 'Trabajamos continuamente para expandir nuestro catálogo de palabras y mejorar la plataforma. Las actualizaciones se realizan regularmente, añadiendo nuevas palabras y mejorando las definiciones existentes.',
    category: 'content'
  },
  {
    id: '9',
    question: '¿Puedo usar ConLéxico para enseñar?',
    answer: 'Por supuesto. ConLéxico es una excelente herramienta para educadores, estudiantes y cualquier persona que quiera enseñar o aprender vocabulario de manera organizada.',
    category: 'usage'
  },
  {
    id: '10',
    question: '¿Hay alguna aplicación móvil disponible?',
    answer: 'Actualmente ConLéxico funciona como una aplicación web que puedes acceder desde cualquier navegador. Estamos considerando desarrollar una aplicación móvil nativa en el futuro.',
    category: 'technical'
  }
];

const categories = {
  general: 'General',
  usage: 'Uso de la Plataforma',
  content: 'Contenido',
  technical: 'Técnico'
};

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const filteredFAQs = selectedCategory === 'all' 
    ? faqData 
    : faqData.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-70-screen mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Preguntas Frecuentes
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Encuentra respuestas a las preguntas más comunes sobre ConLéxico. 
            Si no encuentras lo que buscas, no dudes en contactarnos.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-70-screen mx-auto">
          {/* Category Filter */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Filtrar por categoría:</h2>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === 'all'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Todas
              </button>
              {Object.entries(categories).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setSelectedCategory(key)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === key
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {filteredFAQs.map((item) => (
              <div key={item.id} className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {item.question}
                    </h3>
                    <span className="text-sm text-blue-600 font-medium">
                      {categories[item.category]}
                    </span>
                  </div>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      openItems.includes(item.id) ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {openItems.includes(item.id) && (
                  <div className="px-6 pb-4">
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-gray-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                ¿No encontraste tu respuesta?
              </h3>
              <p className="text-blue-100 mb-6">
                Estamos aquí para ayudarte. Contáctanos y te responderemos lo antes posible.
              </p>
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
              >
                Contáctanos
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
