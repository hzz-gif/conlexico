import Link from 'next/link';
import { Category, CategoryInfo } from '@/types';
import { SPANISH_ALPHABET } from '@/data/words';
import { getLetterPath } from '@/utils/routes';
import { getSearchVolume, formatSearchVolume } from '@/utils/seo';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import StructuredData from '@/components/seo/StructuredData';
import { generateBreadcrumbs } from '@/utils/routes';

interface CategoryPageProps {
  category: CategoryInfo;
}

export default function CategoryPage({ category }: CategoryPageProps) {
  const breadcrumbs = generateBreadcrumbs(category.name);

  return (
    <>
      <StructuredData type="category" category={category.name} />
      <div className="min-h-screen bg-white">
      {/* Breadcrumbs */}
      <div className="bg-gray-50 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <span className="text-6xl mr-4">{category.icon}</span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              {category.displayName}
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {category.description}
          </p>
          <div className="bg-white rounded-lg p-4 inline-block shadow-sm">
            <div className="text-2xl font-bold text-blue-600">26</div>
            <div className="text-sm text-gray-600">Letras disponibles</div>
          </div>
        </div>
      </section>

      {/* Alphabet Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Selecciona una Letra
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            Haz clic en cualquier letra para ver todas las {category.displayName.toLowerCase()} que empiecen con esa letra
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
            {SPANISH_ALPHABET.map((letter) => {
              const searchVolume = getSearchVolume(category.name, letter);
              const isHighVolume = searchVolume && searchVolume > 50000;
              
              return (
                <Link
                  key={letter}
                  href={getLetterPath(category.name, letter)}
                  className={`group relative bg-white border-2 rounded-lg p-6 text-center hover:border-blue-500 hover:shadow-md transition-all duration-300 ${
                    isHighVolume ? 'border-blue-200 bg-blue-50' : 'border-gray-200'
                  }`}
                  rel="nofollow"
                >
                  {isHighVolume && (
                    <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                      Popular
                    </div>
                  )}
                  
                  <div className={`text-3xl font-bold mb-2 group-hover:text-blue-600 transition-colors ${
                    isHighVolume ? 'text-blue-600' : 'text-gray-700'
                  }`}>
                    {letter.toUpperCase()}
                  </div>
                  
                  <div className="text-sm text-gray-500 group-hover:text-blue-500 transition-colors">
                    {category.displayName}
                  </div>
                  
                  {searchVolume && (
                    <div className="text-xs text-gray-400 mt-1">
                      {formatSearchVolume(searchVolume)}
                    </div>
                  )}
                  
                  <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-5 rounded-lg transition-opacity" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Letters */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Letras Más Buscadas
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            Estas son las letras con mayor volumen de búsqueda para {category.displayName.toLowerCase()}
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SPANISH_ALPHABET
              .map(letter => ({
                letter,
                volume: getSearchVolume(category.name, letter)
              }))
              .filter(item => item.volume && item.volume > 50000)
              .sort((a, b) => (b.volume || 0) - (a.volume || 0))
              .slice(0, 6)
              .map(({ letter, volume }) => (
                <Link
                  key={letter}
                  href={getLetterPath(category.name, letter)}
                  className="group bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 hover:border-blue-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                        <span className="text-xl font-bold text-blue-600">
                          {letter.toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <div className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">
                          {category.displayName} con {letter.toUpperCase()}
                        </div>
                        <p className="text-sm text-gray-500">
                          {formatSearchVolume(volume)}
                        </p>
                      </div>
                    </div>
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            ¿Cómo Usar Esta Sección?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Selecciona una Letra
              </h3>
              <p className="text-gray-600">
                Haz clic en cualquier letra del alfabeto para explorar {category.displayName.toLowerCase()} que empiecen con esa letra.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Explora las Palabras
              </h3>
              <p className="text-gray-600">
                Descubre una lista completa de {category.displayName.toLowerCase()} con definiciones y ejemplos de uso.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Aprende y Practica
              </h3>
              <p className="text-gray-600">
                Utiliza las definiciones y ejemplos para ampliar tu vocabulario y mejorar tu español.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Listo para Explorar {category.displayName}?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Comienza con las letras más populares o explora todo el alfabeto
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {SPANISH_ALPHABET
              .map(letter => ({
                letter,
                volume: getSearchVolume(category.name, letter)
              }))
              .filter(item => item.volume && item.volume > 100000)
              .slice(0, 2)
              .map(({ letter }) => (
                <Link
                  key={letter}
                  href={getLetterPath(category.name, letter)}
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  {category.displayName} con {letter.toUpperCase()}
                </Link>
              ))}
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
