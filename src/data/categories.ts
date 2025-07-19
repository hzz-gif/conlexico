import { Category, CategoryInfo } from '@/types';

// 类别配置数据
export const CATEGORIES: Record<Category, CategoryInfo> = {
  colores: {
    name: 'colores',
    displayName: 'Colores',
    description: 'Descubre palabras relacionadas con colores que empiecen con cada letra del alfabeto',
    icon: '🎨',
    priority: 1
  },
  animales: {
    name: 'animales',
    displayName: 'Animales',
    description: 'Explora nombres de animales organizados por la primera letra',
    icon: '🐾',
    priority: 2
  },
  paises: {
    name: 'paises',
    displayName: 'Países',
    description: 'Encuentra países del mundo clasificados por su letra inicial',
    icon: '🌍',
    priority: 3
  },
  frutas: {
    name: 'frutas',
    displayName: 'Frutas',
    description: 'Conoce diferentes frutas ordenadas alfabéticamente',
    icon: '🍎',
    priority: 4
  },
  palabras: {
    name: 'palabras',
    displayName: 'Palabras',
    description: 'Amplía tu vocabulario con palabras diversas por letra',
    icon: '📝',
    priority: 5
  },
  comidas: {
    name: 'comidas',
    displayName: 'Comidas',
    description: 'Descubre platos y alimentos por orden alfabético',
    icon: '🍽️',
    priority: 6
  },
  apellidos: {
    name: 'apellidos',
    displayName: 'Apellidos',
    description: 'Explora apellidos comunes organizados por letra',
    icon: '👥',
    priority: 7
  }
};

// Páginas con mayor volumen de búsqueda
export const HIGH_VOLUME_PAGES = {
  colores: ['j', 'h', 's', 'i', 'u', 'b', 'k', 'd', 'l'],
  animales: ['u', 'n', 'd', 'i', 'e', 'v', 'j', 'f'],
  paises: ['t', 'd', 's'],
  frutas: ['e'],
  palabras: ['y'],
  comidas: ['i'],
  apellidos: ['i']
};

// Volúmenes de búsqueda específicos
export const SEARCH_VOLUMES: Record<string, number> = {
  'colores/j': 274000,
  'colores/h': 232000,
  'colores/s': 192000,
  'colores/i': 184000,
  'colores/u': 79000,
  'colores/b': 75000,
  'colores/k': 73000,
  'colores/d': 70000,
  'colores/l': 69000,
  'animales/u': 246000,
  'animales/n': 224000,
  'animales/d': 137000,
  'animales/i': 93000,
  'animales/e': 81000,
  'animales/v': 80000,
  'animales/j': 75000,
  'animales/f': 69000,
  'paises/t': 76000,
  'paises/d': 70000,
  'paises/s': 68000,
  'frutas/e': 88000,
  'palabras/y': 85000,
  'comidas/i': 80000,
  'apellidos/i': 78000
};

// Obtener categorías ordenadas por prioridad
export const getCategoriesByPriority = (): CategoryInfo[] => {
  return Object.values(CATEGORIES).sort((a, b) => a.priority - b.priority);
};

// Obtener categorías principales (colores y animales)
export const getMainCategories = (): CategoryInfo[] => {
  return [CATEGORIES.colores, CATEGORIES.animales];
};
