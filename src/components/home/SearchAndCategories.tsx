'use client';

import { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { CATEGORIES } from '@/data/categories';
import { getAllColors } from '@/data/colors';
import { getAllAnimals } from '@/data/animals';
import { getAllCountries } from '@/data/countries';
import { getAllFruits } from '@/data/fruits';
import { getAllFoods } from '@/data/foods';
import { getAllGeneralWords } from '@/data/general-words';
import { getAllSurnames } from '@/data/surnames';
import { getLetterPath } from '@/utils/routes';
import { Category, Letter } from '@/types';
import CopyButton from '@/components/ui/CopyButton';

interface SearchResult {
  word: string;
  category: Category;
  categoryDisplay: string;
  letter: Letter;
  url: string;
  type: 'color' | 'word';
}

export default function SearchAndCategories() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category>('colores');
  const router = useRouter();

  // 从localStorage恢复用户上次选择的类别
  useEffect(() => {
    const savedCategory = localStorage.getItem('selectedCategory') as Category;
    if (savedCategory && Object.keys(CATEGORIES).includes(savedCategory)) {
      setSelectedCategory(savedCategory);
    }
  }, []);

  // 保存用户选择到localStorage
  const handleCategorySelect = (category: Category) => {
    setSelectedCategory(category);
    localStorage.setItem('selectedCategory', category);
  };

  // 使用 useMemo 创建搜索索引，确保只创建一次
  const searchIndex = useMemo((): SearchResult[] => {
    const index: SearchResult[] = [];

    // 添加颜色
    const colors = getAllColors();
    colors.forEach(color => {
      const letter = color.word.charAt(0).toLowerCase() as Letter;
      index.push({
        word: color.word,
        category: 'colores',
        categoryDisplay: 'Color',
        letter,
        url: `/color-con-${letter}/${color.slug}`,
        type: 'color'
      });
    });

    // 添加动物
    const animals = getAllAnimals();
    animals.forEach(animal => {
      const letter = animal.word.charAt(0).toLowerCase() as Letter;
      index.push({
        word: animal.word,
        category: 'animales',
        categoryDisplay: 'Animal',
        letter,
        url: `/animal-con-${letter}`,
        type: 'word'
      });
    });

    // 添加国家
    const countries = getAllCountries();
    countries.forEach(country => {
      const letter = country.word.charAt(0).toLowerCase() as Letter;
      index.push({
        word: country.word,
        category: 'paises',
        categoryDisplay: 'País',
        letter,
        url: `/pais-con-${letter}`,
        type: 'word'
      });
    });

    // 添加水果
    const fruits = getAllFruits();
    fruits.forEach(fruit => {
      const letter = fruit.word.charAt(0).toLowerCase() as Letter;
      index.push({
        word: fruit.word,
        category: 'frutas',
        categoryDisplay: 'Fruta',
        letter,
        url: `/fruta-con-${letter}`,
        type: 'word'
      });
    });

    // 添加食物
    const foods = getAllFoods();
    foods.forEach(food => {
      const letter = food.word.charAt(0).toLowerCase() as Letter;
      index.push({
        word: food.word,
        category: 'comidas',
        categoryDisplay: 'Comida',
        letter,
        url: `/comida-con-${letter}`,
        type: 'word'
      });
    });

    // 添加一般词汇
    const generalWords = getAllGeneralWords();
    generalWords.forEach(word => {
      const letter = word.word.charAt(0).toLowerCase() as Letter;
      index.push({
        word: word.word,
        category: 'palabras',
        categoryDisplay: 'Palabra',
        letter,
        url: `/palabra-con-${letter}`,
        type: 'word'
      });
    });

    // 添加姓氏
    const surnames = getAllSurnames();
    surnames.forEach(surname => {
      const letter = surname.word.charAt(0).toLowerCase() as Letter;
      index.push({
        word: surname.word,
        category: 'apellidos',
        categoryDisplay: 'Apellido',
        letter,
        url: `/apellido-con-${letter}`,
        type: 'word'
      });
    });

    return index;
  }, []); // 空依赖数组，确保只创建一次

  useEffect(() => {
    if (query.length === 0) {
      setResults([]);
      setShowResults(false);
      return;
    }

    setIsLoading(true);
    
    // Simular delay de búsqueda
    const timeoutId = setTimeout(() => {
      const filteredResults = searchIndex
        .filter(item =>
          item.word.toLowerCase().startsWith(query.toLowerCase())
        )
        .slice(0, 20); // 显示最多20个结果

      setResults(filteredResults);
      setShowResults(true);
      setIsLoading(false);
    }, 150);

    return () => clearTimeout(timeoutId);
  }, [query]);

  const handleResultClick = (result: SearchResult) => {
    setQuery('');
    setShowResults(false);
    router.push(result.url);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (results.length > 0) {
      handleResultClick(results[0]);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto mb-20">
      {/* Search Section */}
      <div className="text-center mb-12">
        {/* Search Box */}
        <div className="relative max-w-3xl mx-auto mb-12">
          <form onSubmit={handleSubmit}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-100">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onFocus={() => query && setShowResults(true)}
                  onBlur={() => setTimeout(() => setShowResults(false), 200)}
                  placeholder="Buscar palabras por letra..."
                  className="w-full px-8 py-6 text-xl bg-transparent rounded-3xl focus:outline-none placeholder-gray-400 font-medium"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </form>

          {/* Search Results */}
          {showResults && (
            <div className="absolute z-50 w-full mt-4 bg-white/95 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-2xl max-h-96 overflow-y-auto">
              {isLoading ? (
                <div className="p-6 text-center text-gray-500">
                  <div className="inline-flex items-center">
                    <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce mr-2"></div>
                    <div className="w-4 h-4 bg-indigo-500 rounded-full animate-bounce delay-100 mr-2"></div>
                    <div className="w-4 h-4 bg-purple-500 rounded-full animate-bounce delay-200 mr-3"></div>
                    Buscando...
                  </div>
                </div>
              ) : results.length > 0 ? (
                results.map((result, index) => (
                  <div
                    key={index}
                    onClick={() => handleResultClick(result)}
                    className="w-full px-6 py-4 text-left hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 border-b border-gray-100 last:border-b-0 group transition-all duration-200 cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                          <span className="text-xl">{CATEGORIES[result.category].icon}</span>
                        </div>
                        <div>
                          <div className="relative inline-block">
                            <div className="font-bold text-gray-900 text-lg group-hover:text-blue-600 transition-colors duration-200 pr-6">
                              {result.word}
                            </div>
                            {/* Copy Button - positioned at bottom right of word */}
                            <CopyButton
                              text={result.word}
                              title="Copiar palabra"
                              showOnHover={true}
                              className="absolute -bottom-1 -right-1 p-1 text-gray-400 hover:text-blue-600 hover:bg-blue-50"
                            />
                          </div>
                          <div className="text-sm text-gray-500 font-medium">
                            {result.categoryDisplay}
                          </div>
                        </div>
                      </div>
                      <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 text-sm font-semibold rounded-full group-hover:from-blue-200 group-hover:to-indigo-200 transition-all duration-200">
                        {result.categoryDisplay}
                      </div>
                    </div>
                  </div>
                ))
              ) : query.length > 0 ? (
                <div className="p-6 text-center text-gray-500">
                  <div className="text-4xl mb-2">🔍</div>
                  <div className="font-medium">No se encontraron resultados para &quot;{query}&quot;</div>
                </div>
              ) : null}
            </div>
          )}
        </div>
      </div>

      {/* Categories Grid - 一排7个卡片 */}
      <div className="max-w-6xl mx-auto mb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {Object.values(CATEGORIES).map((category) => (
            <button
              key={category.name}
              onClick={() => handleCategorySelect(category.name as Category)}
              className={`group relative backdrop-blur-sm border rounded-2xl p-6 text-center transition-all duration-300 transform hover:-translate-y-1 overflow-hidden ${
                selectedCategory === category.name
                  ? 'bg-gradient-to-br from-blue-500 to-indigo-600 border-blue-500 text-white shadow-xl scale-105'
                  : 'bg-white/80 border-gray-200 hover:border-blue-300 hover:shadow-lg'
              }`}
            >
              {/* Background gradient for non-selected cards */}
              {selectedCategory !== category.name && (
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              )}

              {/* Content */}
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 ${
                  selectedCategory === category.name
                    ? 'bg-white/20 group-hover:scale-110'
                    : 'bg-gradient-to-br from-blue-100 to-indigo-100 group-hover:scale-110 group-hover:rotate-3'
                }`}>
                  <span className="text-2xl">{category.icon}</span>
                </div>
                <div className={`font-bold mb-2 transition-colors duration-300 text-sm ${
                  selectedCategory === category.name
                    ? 'text-white'
                    : 'text-gray-900 group-hover:text-blue-600'
                }`}>
                  {category.displayName}
                </div>
                <p className={`text-xs font-medium ${
                  selectedCategory === category.name
                    ? 'text-blue-100'
                    : 'text-gray-500'
                }`}>
                  26 letras
                </p>

                {/* Selection indicator */}
                {selectedCategory === category.name && (
                  <div className="absolute top-2 right-2 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Alphabet Letters Grid */}
      <div className="max-w-70-screen mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Selecciona una letra para explorar{' '}
            <span className="text-blue-600">{CATEGORIES[selectedCategory].displayName}</span>
          </h3>
          <p className="text-gray-600">
            Haz clic en cualquier letra del alfabeto para ver todas las palabras de esta categoría
          </p>
        </div>

        {/* Keyboard Layout - QWERTY Style */}
        <div className="space-y-3">
          {/* First Row - QWERTYUIOP */}
          <div className="flex justify-center gap-2">
            {['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'].map((letter) => (
              <Link
                key={letter}
                href={getLetterPath(selectedCategory, letter as Letter)}
                className="group relative bg-white border-2 border-gray-200 rounded-xl p-3 md:p-4 text-center hover:border-blue-400 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 min-w-[40px] md:min-w-[50px]"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>

                {/* Letter - SEO optimized */}
                <div className="relative z-10">
                  <div
                    className="letter-display letter-display-keyboard text-gray-700 group-hover:text-blue-600 transition-colors duration-300"
                    data-letter={letter.toUpperCase()}
                  >
                    <span className="letter-text">{letter}</span>
                  </div>
                </div>

                {/* Hover effect indicator */}
                <div className="absolute inset-0 border-2 border-blue-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            ))}
          </div>

          {/* Second Row - ASDFGHJKLÑ */}
          <div className="flex justify-center gap-2">
            {['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ñ'].map((letter) => (
              <Link
                key={letter}
                href={getLetterPath(selectedCategory, letter as Letter)}
                className="group relative bg-white border-2 border-gray-200 rounded-xl p-3 md:p-4 text-center hover:border-blue-400 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 min-w-[40px] md:min-w-[50px]"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>

                {/* Letter - SEO optimized */}
                <div className="relative z-10">
                  <div
                    className="letter-display letter-display-keyboard text-gray-700 group-hover:text-blue-600 transition-colors duration-300"
                    data-letter={letter.toUpperCase()}
                  >
                    <span className="letter-text">{letter}</span>
                  </div>
                </div>

                {/* Hover effect indicator */}
                <div className="absolute inset-0 border-2 border-blue-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            ))}
          </div>

          {/* Third Row - ZXCVBNM */}
          <div className="flex justify-center gap-2">
            {['z', 'x', 'c', 'v', 'b', 'n', 'm'].map((letter) => (
              <Link
                key={letter}
                href={getLetterPath(selectedCategory, letter as Letter)}
                className="group relative bg-white border-2 border-gray-200 rounded-xl p-3 md:p-4 text-center hover:border-blue-400 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 min-w-[40px] md:min-w-[50px]"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>

                {/* Letter - SEO optimized */}
                <div className="relative z-10">
                  <div
                    className="letter-display letter-display-keyboard text-gray-700 group-hover:text-blue-600 transition-colors duration-300"
                    data-letter={letter.toUpperCase()}
                  >
                    <span className="letter-text">{letter}</span>
                  </div>
                </div>

                {/* Hover effect indicator */}
                <div className="absolute inset-0 border-2 border-blue-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            ))}
          </div>
        </div>

        {/* Category info */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full">
            <span className="text-2xl mr-3">{CATEGORIES[selectedCategory].icon}</span>
            <div className="text-left">
              <div className="font-bold text-blue-800">{CATEGORIES[selectedCategory].displayName}</div>
              <div className="text-sm text-blue-600">{CATEGORIES[selectedCategory].description}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
