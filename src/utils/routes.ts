import { Category, Letter } from '@/types';
import { CATEGORIES, HIGH_VOLUME_PAGES } from '@/data/categories';
import { SPANISH_ALPHABET } from '@/data/words';

// 类别名称映射（复数形式到单数形式）
const CATEGORY_SINGULAR_MAP: Record<Category, string> = {
  'colores': 'color',
  'animales': 'animal',
  'paises': 'pais',
  'frutas': 'fruta',
  'comidas': 'comida',
  'palabras': 'palabra',
  'apellidos': 'apellido'
};

// 生成类别页面路径
export const getCategoryPath = (category: Category): string => {
  const singular = CATEGORY_SINGULAR_MAP[category];
  return `/${singular}`;
};

// 生成字母页面路径
export const getLetterPath = (category: Category, letter: Letter): string => {
  const singular = CATEGORY_SINGULAR_MAP[category];
  return `/${singular}-con-${letter}`;
};

// 验证类别是否有效
export const isValidCategory = (category: string): category is Category => {
  return Object.keys(CATEGORIES).includes(category);
};

// 验证字母是否有效
export const isValidLetter = (letter: string): letter is Letter => {
  return SPANISH_ALPHABET.includes(letter as Letter);
};

// 获取类别的所有字母页面路径
export const getCategoryLetterPaths = (category: Category): string[] => {
  return SPANISH_ALPHABET.map(letter => getLetterPath(category, letter));
};

// 获取所有类别页面路径
export const getAllCategoryPaths = (): string[] => {
  return Object.keys(CATEGORIES).map(category => getCategoryPath(category as Category));
};

// 获取所有字母页面路径
export const getAllLetterPaths = (): string[] => {
  const paths: string[] = [];
  
  Object.keys(CATEGORIES).forEach(category => {
    SPANISH_ALPHABET.forEach(letter => {
      paths.push(getLetterPath(category as Category, letter));
    });
  });
  
  return paths;
};

// 获取高优先级页面路径（基于搜索量）
export const getHighPriorityPaths = (): string[] => {
  const paths: string[] = [];
  
  Object.entries(HIGH_VOLUME_PAGES).forEach(([category, letters]) => {
    letters.forEach(letter => {
      paths.push(getLetterPath(category as Category, letter as Letter));
    });
  });
  
  return paths;
};

// 生成面包屑导航数据
export interface BreadcrumbItem {
  label: string;
  href: string;
  current?: boolean;
}

export const generateBreadcrumbs = (category?: Category, letter?: Letter, colorName?: string): BreadcrumbItem[] => {
  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Inicio', href: '/' }
  ];

  if (category) {
    const categoryInfo = CATEGORIES[category];
    const singular = CATEGORY_SINGULAR_MAP[category];

    // 如果有字母，使用 category-con-letter 格式
    if (letter) {
      breadcrumbs.push({
        label: `${singular}-con-${letter}`,
        href: getLetterPath(category, letter),
        current: !colorName
      });

      // 如果有颜色名称，添加颜色详情页面
      if (colorName) {
        breadcrumbs.push({
          label: colorName,
          href: `${getLetterPath(category, letter)}/${colorName.toLowerCase()}`,
          current: true
        });
      }
    } else {
      // 只有类别，使用单数形式
      breadcrumbs.push({
        label: singular,
        href: getCategoryPath(category),
        current: true
      });
    }
  }

  return breadcrumbs;
};

// 生成相关页面链接
export const getRelatedPages = (category: Category, letter?: Letter): { label: string; href: string }[] => {
  const related: { label: string; href: string }[] = [];
  
  if (letter) {
    // 添加同类别的其他字母
    const otherLetters = SPANISH_ALPHABET.filter(l => l !== letter).slice(0, 5);
    otherLetters.forEach(l => {
      related.push({
        label: `${CATEGORIES[category].displayName} con ${l.toUpperCase()}`,
        href: getLetterPath(category, l)
      });
    });
    
    // 添加其他类别的相同字母
    Object.keys(CATEGORIES).forEach(cat => {
      if (cat !== category) {
        related.push({
          label: `${CATEGORIES[cat as Category].displayName} con ${letter.toUpperCase()}`,
          href: getLetterPath(cat as Category, letter)
        });
      }
    });
  } else {
    // 添加其他类别
    Object.keys(CATEGORIES).forEach(cat => {
      if (cat !== category) {
        related.push({
          label: CATEGORIES[cat as Category].displayName,
          href: getCategoryPath(cat as Category)
        });
      }
    });
  }
  
  return related.slice(0, 6);
};
