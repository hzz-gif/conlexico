import { Category, Letter, SEOMetadata } from '@/types';
import { CATEGORIES, SEARCH_VOLUMES } from '@/data/categories';
import { getCategoryPath, getLetterPath } from './routes';

// 类别名称映射（用于SEO标题）
const CATEGORY_SEO_MAP: Record<Category, { singular: string; plural: string; article: string }> = {
  'colores': { singular: 'Color', plural: 'Colores', article: 'el' },
  'animales': { singular: 'Animal', plural: 'Animales', article: 'el' },
  'paises': { singular: 'País', plural: 'Países', article: 'el' },
  'frutas': { singular: 'Fruta', plural: 'Frutas', article: 'la' },
  'comidas': { singular: 'Comida', plural: 'Comidas', article: 'la' },
  'palabras': { singular: 'Palabra', plural: 'Palabras', article: 'la' },
  'apellidos': { singular: 'Apellido', plural: 'Apellidos', article: 'el' }
};

// 生成页面标题
export const generatePageTitle = (category?: Category, letter?: Letter): string => {
  if (!category) {
    return 'ConLéxico - Diccionario Visual de Palabras en Español por Letras';
  }

  const categoryInfo = CATEGORIES[category];
  const seoInfo = CATEGORY_SEO_MAP[category];

  if (!letter) {
    return `${seoInfo.plural} en Español - Lista Completa por Letras | ConLéxico`;
  }

  const letterUpper = letter.toUpperCase();
  return `${seoInfo.singular} con ${letterUpper} - ${seoInfo.plural} que Empiezan por ${letterUpper} | ConLéxico`;
};

// 生成页面描述
export const generatePageDescription = (category?: Category, letter?: Letter): string => {
  if (!category) {
    return 'Aprende vocabulario en español con ConLéxico. Más de 1000 palabras organizadas por categorías y letras: colores, animales, países, frutas y más. Diccionario visual gratuito.';
  }

  const categoryInfo = CATEGORIES[category];
  const seoInfo = CATEGORY_SEO_MAP[category];

  if (!letter) {
    return `Descubre todos los ${seoInfo.plural.toLowerCase()} en español organizados por letras del alfabeto. Explora ${categoryInfo.description.toLowerCase()} con definiciones y ejemplos en ConLéxico.`;
  }

  const letterUpper = letter.toUpperCase();
  return `Explora todos los ${seoInfo.plural.toLowerCase()} en español que empiezan con la letra ${letterUpper}. Encuentra ${seoInfo.plural.toLowerCase()} con ${letterUpper} con definiciones, ejemplos y pronunciación en ConLéxico.`;
};



// 生成规范URL
export const generateCanonicalUrl = (category?: Category, letter?: Letter): string => {
  const baseUrl = 'https://conlexico.com';

  if (!category) {
    return baseUrl;
  }

  if (!letter) {
    // 不生成单独的类别页面URL，因为这些页面不存在
    // 返回首页URL作为fallback
    return baseUrl;
  }

  return `${baseUrl}${getLetterPath(category, letter)}`;
};

// 生成完整的SEO元数据
export const generateSEOMetadata = (category?: Category, letter?: Letter): SEOMetadata => {
  return {
    title: generatePageTitle(category, letter),
    description: generatePageDescription(category, letter),
    canonical: generateCanonicalUrl(category, letter),
    ogImage: '/og-image.jpg'
  };
};

// 获取搜索量
export const getSearchVolume = (category: Category, letter?: Letter): number | undefined => {
  if (!letter) return undefined;
  
  const key = `${category}/${letter}`;
  return SEARCH_VOLUMES[key];
};

// 格式化搜索量显示
export const formatSearchVolume = (volume?: number): string => {
  if (!volume) return '';
  
  if (volume >= 1000) {
    return `${Math.round(volume / 1000)}k búsquedas/mes`;
  }
  
  return `${volume} búsquedas/mes`;
};
