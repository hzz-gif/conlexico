'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SPANISH_ALPHABET } from '@/data/words';
import { getLetterPath } from '@/utils/routes';
import { Category } from '@/types';

const FooterAlphabetNavigation = () => {
  const pathname = usePathname();

  // 从URL路径中提取当前类别
  const getCurrentCategory = (): Category | undefined => {
    if (pathname.startsWith('/color-con-')) return 'colores';
    if (pathname.startsWith('/animal-con-')) return 'animales';
    if (pathname.startsWith('/fruta-con-')) return 'frutas';
    if (pathname.startsWith('/pais-con-')) return 'paises';
    if (pathname.startsWith('/comida-con-')) return 'comidas';
    if (pathname.startsWith('/palabra-con-')) return 'palabras';
    if (pathname.startsWith('/apellido-con-')) return 'apellidos';
    return undefined;
  };

  const currentCategory = getCurrentCategory();
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

  // 过滤掉当前类别，避免重复
  const filteredCategories = mainCategories.filter(cat => cat.key !== currentCategory);

  // 如果没有类别要显示，则不渲染组件
  if (filteredCategories.length === 0) {
    return null;
  }

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

        <nav className="space-y-8" role="navigation" aria-label="Navegación alfabética por categorías">
          {filteredCategories.map((category) => (
            <div key={category.key} className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
              <div className="text-lg font-semibold text-gray-900 mb-4">
                {category.name} con...
              </div>

              {/* Grid de enlaces de texto */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2">
                {SPANISH_ALPHABET.map((letter) => (
                  <Link
                    key={letter}
                    href={getLetterPath(category.key as Category, letter)}
                    className="block p-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded transition-all duration-200"
                    aria-label={`Ver ${category.name.toLowerCase()} con ${letter.toUpperCase()}`}
                  >
                    {category.name} con {letter}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>

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
