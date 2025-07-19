import Link from 'next/link';
import { SPANISH_ALPHABET } from '@/data/words';
import { getLetterPath } from '@/utils/routes';
import { Category } from '@/types';

const FooterAlphabetNavigation = () => {
  // 获取主要类别（按优先级排序）
  const mainCategories = [
    { key: 'colores', name: 'Color', icon: '🎨' },
    { key: 'animales', name: 'Animal', icon: '🐾' },
    { key: 'frutas', name: 'Fruta', icon: '🍎' },
    { key: 'paises', name: 'País', icon: '🌍' },
    { key: 'comidas', name: 'Comida', icon: '🍽️' },
    { key: 'palabras', name: 'Palabra', icon: '📝' },
    { key: 'apellidos', name: 'Apellido', icon: '👥' }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-70-screen mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explora por <span className="text-blue-600">Letras</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Encuentra palabras específicas navegando por cada letra del alfabeto en diferentes categorías
          </p>
        </div>

        <div className="space-y-8">
          {mainCategories.map((category) => (
            <div key={category.key} className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
              <div className="text-lg font-semibold text-gray-900 mb-4">
                {category.name} con...
              </div>

              {/* Primera fila del alfabeto */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2 justify-start">
                  {SPANISH_ALPHABET.slice(0, 13).map((letter) => (
                    <Link
                      key={letter}
                      href={getLetterPath(category.key as Category, letter)}
                      className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded text-center transition-all duration-200 hover:scale-105"
                      rel="nofollow"
                    >
                      <span className="text-sm sm:text-base font-medium text-gray-700 hover:text-blue-600">
                        {letter.toUpperCase()}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Segunda fila del alfabeto */}
              <div>
                <div className="flex flex-wrap gap-2 justify-start">
                  {SPANISH_ALPHABET.slice(13).map((letter) => (
                    <Link
                      key={letter}
                      href={getLetterPath(category.key as Category, letter)}
                      className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded text-center transition-all duration-200 hover:scale-105"
                      rel="nofollow"
                    >
                      <span className="text-sm sm:text-base font-medium text-gray-700 hover:text-blue-600">
                        {letter.toUpperCase()}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Nota informativa */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-sm text-blue-700">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Haz clic en cualquier letra para ver todas las palabras de esa categoría
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterAlphabetNavigation;
