// 类别类型定义
export type Category = 'colores' | 'animales' | 'paises' | 'frutas' | 'palabras' | 'comidas' | 'apellidos';

// 字母类型定义
export type Letter = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'i' | 'j' | 'k' | 'l' | 'm' | 'n' | 'ñ' | 'o' | 'p' | 'q' | 'r' | 's' | 't' | 'u' | 'v' | 'w' | 'x' | 'y' | 'z';

// 词汇项接口
export interface WordItem {
  word: string;
  definition?: string;
  example?: string;
}

// 颜色项接口
export interface ColorItem extends WordItem {
  hex: string;
  rgb: {
    r: number;
    g: number;
    b: number;
  };
  hsl: {
    h: number;
    s: number;
    l: number;
  };
  slug: string; // URL友好的名称
}

// 类别信息接口
export interface CategoryInfo {
  name: string;
  displayName: string;
  description: string;
  icon: string;
  searchVolume?: number;
  priority: number;
}

// 字母页面数据接口
export interface LetterPageData {
  category: Category;
  letter: Letter;
  words: WordItem[];
  searchVolume?: number;
}

// 导航项接口
export interface NavItem {
  name: string;
  href: string;
  description?: string;
}

// SEO元数据接口
export interface SEOMetadata {
  title: string;
  description: string;
  keywords: string[];
  canonical?: string;
  ogImage?: string;
}
