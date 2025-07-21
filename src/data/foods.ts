import { WordItem, Letter } from '@/types';

// 食物数据按字母组织
export const FOODS_DATA: Record<Letter, WordItem[]> = {
  a: [
    {
      word: 'Arroz',
      definition: 'Cereal básico en la alimentación mundial',
      example: 'El arroz con pollo es un plato muy popular'
    },
    {
      word: 'Arepa',
      definition: 'Pan de maíz típico de Venezuela y Colombia',
      example: 'La arepa se puede rellenar con queso'
    },
    {
      word: 'Asado',
      definition: 'Carne cocinada a la parrilla',
      example: 'El asado argentino es famoso mundialmente'
    }
  ],
  b: [
    {
      word: 'Burrito',
      definition: 'Tortilla de harina rellena enrollada',
      example: 'El burrito mexicano lleva frijoles y carne'
    },
    {
      word: 'Bistec',
      definition: 'Filete de carne de res',
      example: 'El bistec a la plancha es muy sabroso'
    },
    {
      word: 'Brownie',
      definition: 'Postre de chocolate denso y húmedo',
      example: 'El brownie con helado es irresistible'
    }
  ],
  c: [
    {
      word: 'Ceviche',
      definition: 'Pescado crudo marinado en limón',
      example: 'El ceviche peruano es refrescante'
    },
    {
      word: 'Churro',
      definition: 'Masa frita espolvoreada con azúcar',
      example: 'Los churros con chocolate son deliciosos'
    },
    {
      word: 'Croqueta',
      definition: 'Masa frita rellena de diversos ingredientes',
      example: 'Las croquetas de jamón son muy populares'
    },
    {
      word: 'Curry',
      definition: 'Guiso especiado originario de la India',
      example: 'El curry de pollo tiene muchas especias'
    }
  ],
  d: [
    {
      word: 'Dulce',
      definition: 'Alimento azucarado que se come como postre o golosina',
      example: 'Los dulces tradicionales mexicanos son muy ricos y variados'
    },
    {
      word: 'Dumpling',
      definition: 'Masa rellena cocida al vapor, hervida o frita, típica de Asia',
      example: 'Los dumplings chinos pueden tener relleno de carne o verduras'
    },
    {
      word: 'Donut',
      definition: 'Rosquilla dulce frita y glaseada, popular en Estados Unidos',
      example: 'El donut glaseado es perfecto para acompañar el café'
    }
  ],
  e: [
    {
      word: 'Empanada',
      definition: 'Masa rellena y horneada o frita',
      example: 'Las empanadas argentinas son famosas'
    },
    {
      word: 'Enchilada',
      definition: 'Tortilla rellena bañada en salsa picante',
      example: 'Las enchiladas verdes son típicas de México'
    },
    {
      word: 'Ensalada',
      definition: 'Mezcla de vegetales frescos',
      example: 'La ensalada César es muy popular'
    }
  ],
  f: [
    {
      word: 'Frijoles',
      definition: 'Legumbres nutritivas básicas en muchas culturas',
      example: 'Los frijoles negros son ricos en proteína'
    },
    {
      word: 'Flan',
      definition: 'Postre cremoso con caramelo',
      example: 'El flan de vainilla es un clásico'
    }
  ],
  g: [
    {
      word: 'Gazpacho',
      definition: 'Sopa fría de verduras típica de España',
      example: 'El gazpacho es perfecto para el verano'
    },
    {
      word: 'Guacamole',
      definition: 'Salsa mexicana hecha con aguacate',
      example: 'El guacamole va perfecto con nachos'
    }
  ],
  h: [
    {
      word: 'Hamburguesa',
      definition: 'Pan con carne y diversos acompañamientos',
      example: 'La hamburguesa con queso es muy popular'
    },
    {
      word: 'Helado',
      definition: 'Postre frío y cremoso',
      example: 'El helado de vainilla es el favorito de muchos'
    },
    {
      word: 'Huevo',
      definition: 'Alimento básico rico en proteínas',
      example: 'Los huevos revueltos son perfectos para desayunar'
    }
  ],
  i: [
    {
      word: 'Injera',
      definition: 'Pan esponjoso etíope hecho de teff fermentado, base de la cocina tradicional africana',
      example: 'La injera se usa como plato y utensilio para comer otros alimentos'
    },
    {
      word: 'Ikura',
      definition: 'Huevas de salmón marinadas, muy apreciadas en la gastronomía japonesa',
      example: 'El ikura se sirve sobre arroz en el sushi y tiene un sabor intenso'
    },
    {
      word: 'Imam bayildi',
      definition: 'Plato turco de berenjenas rellenas con cebolla, ajo y tomate, cocidas en aceite de oliva',
      example: 'El imam bayildi es un plato vegetariano muy popular en la cocina mediterránea'
    }
  ],
  j: [
    {
      word: 'Jamón',
      definition: 'Carne curada de cerdo',
      example: 'El jamón ibérico es una delicia española'
    }
  ],
  k: [
    {
      word: 'Kiwi',
      definition: 'Fruta verde con pulpa dulce y semillas negras',
      example: 'El kiwi es rico en vitamina C'
    },
    {
      word: 'Kebab',
      definition: 'Carne asada en brocheta de origen árabe',
      example: 'El kebab se sirve con pan pita'
    }
  ],
  l: [
    {
      word: 'Lasaña',
      definition: 'Pasta italiana en capas con salsa y queso',
      example: 'La lasaña de carne es muy sustanciosa'
    },
    {
      word: 'Lenteja',
      definition: 'Legumbre pequeña muy nutritiva',
      example: 'Las lentejas con chorizo son tradicionales'
    }
  ],
  m: [
    {
      word: 'Mole',
      definition: 'Salsa mexicana compleja con chocolate',
      example: 'El mole poblano es patrimonio culinario'
    },
    {
      word: 'Milanesa',
      definition: 'Carne empanizada y frita',
      example: 'La milanesa napolitana lleva jamón y queso'
    }
  ],
  n: [
    {
      word: 'Nachos',
      definition: 'Totopos con queso derretido y otros ingredientes',
      example: 'Los nachos son perfectos para compartir'
    }
  ],
  ñ: [
    {
      word: 'Ñoquis',
      definition: 'Pasta italiana hecha con papa, harina y huevo, servida con salsa',
      example: 'Los ñoquis con salsa de tomate son un plato tradicional del día 29'
    },
    {
      word: 'Ñame frito',
      definition: 'Tubérculo tropical cortado en rodajas y frito hasta dorarse',
      example: 'El ñame frito es una guarnición popular en el Caribe'
    },
    {
      word: 'Ñachi',
      definition: 'Plato mapuche hecho con sangre de cordero cocida y condimentada',
      example: 'El ñachi es un plato tradicional de la cultura mapuche'
    }
  ],
  o: [
    {
      word: 'Omelet',
      definition: 'Huevos batidos y cocinados con relleno',
      example: 'El omelet de queso es muy fácil de hacer'
    }
  ],
  p: [
    {
      word: 'Paella',
      definition: 'Plato español de arroz con mariscos o carne',
      example: 'La paella valenciana es la original'
    },
    {
      word: 'Pizza',
      definition: 'Pan plano con salsa de tomate y queso',
      example: 'La pizza margherita es la más clásica'
    },
    {
      word: 'Pasta',
      definition: 'Alimento italiano hecho de harina y agua',
      example: 'La pasta con salsa boloñesa es deliciosa'
    }
  ],
  q: [
    {
      word: 'Quesadilla',
      definition: 'Tortilla doblada con queso derretido',
      example: 'La quesadilla de flor de calabaza es exquisita'
    },
    {
      word: 'Queso',
      definition: 'Producto lácteo cuajado y fermentado',
      example: 'El queso manchego es típico de España'
    }
  ],
  r: [
    {
      word: 'Risotto',
      definition: 'Plato italiano de arroz cremoso',
      example: 'El risotto de hongos es muy aromático'
    }
  ],
  s: [
    {
      word: 'Sushi',
      definition: 'Plato japonés de arroz con pescado crudo',
      example: 'El sushi de salmón es muy popular'
    },
    {
      word: 'Sopa',
      definition: 'Líquido caliente con diversos ingredientes',
      example: 'La sopa de pollo cura los resfriados'
    },
    {
      word: 'Sandwich',
      definition: 'Pan relleno con diversos ingredientes',
      example: 'El sandwich de jamón y queso es clásico'
    }
  ],
  t: [
    {
      word: 'Taco',
      definition: 'Tortilla doblada con relleno',
      example: 'Los tacos al pastor son típicos mexicanos'
    },
    {
      word: 'Tamale',
      definition: 'Masa de maíz rellena envuelta en hoja',
      example: 'Los tamales se comen en Navidad'
    },
    {
      word: 'Tortilla',
      definition: 'Pan plano de maíz o harina',
      example: 'La tortilla española lleva huevo y papa'
    }
  ],
  u: [
    {
      word: 'Udon',
      definition: 'Fideos japoneses gruesos de trigo',
      example: 'El udon se sirve en caldo caliente'
    }
  ],
  v: [
    {
      word: 'Vinagre',
      definition: 'Condimento ácido usado en cocina',
      example: 'El vinagre balsámico realza el sabor'
    },
    {
      word: 'Vainilla',
      definition: 'Especia aromática usada en postres',
      example: 'El helado de vainilla es un clásico'
    }
  ],
  w: [
    {
      word: 'Wasabi',
      definition: 'Condimento japonés picante verde',
      example: 'El wasabi acompaña el sushi'
    },
    {
      word: 'Wantán',
      definition: 'Pasta china rellena, similar a los ravioles',
      example: 'Los wantanes se sirven en sopa o fritos'
    },
    {
      word: 'Watercress',
      definition: 'Berro de agua, verdura de hoja verde picante',
      example: 'El watercress añade sabor a las ensaladas'
    }
  ],
  x: [
    {
      word: 'Xoconostle',
      definition: 'Tuna ácida mexicana usada en cocina',
      example: 'El xoconostle se usa en salsas'
    },
    {
      word: 'Xinxón',
      definition: 'Jamón curado asturiano de cerdo',
      example: 'El xinxón es una especialidad de Asturias'
    },
    {
      word: 'Xató',
      definition: 'Salsa catalana con almendras y ñoras',
      example: 'El xató acompaña ensaladas de escarola'
    }
  ],
  y: [
    {
      word: 'Yogur',
      definition: 'Producto lácteo fermentado',
      example: 'El yogur griego es muy cremoso'
    },
    {
      word: 'Yuca',
      definition: 'Tubérculo tropical rico en almidón',
      example: 'La yuca se puede hervir, freír o asar'
    },
    {
      word: 'Yakitori',
      definition: 'Brochetas japonesas de pollo a la parrilla',
      example: 'El yakitori se marina en salsa teriyaki'
    }
  ],
  z: [
    {
      word: 'Zanahoria',
      definition: 'Verdura anaranjada rica en vitamina A',
      example: 'Las zanahorias son buenas para la vista'
    },
    {
      word: 'Zapallo',
      definition: 'Calabaza grande sudamericana de pulpa anaranjada',
      example: 'El zapallo se usa en sopas y guisos'
    },
    {
      word: 'Zarzamora',
      definition: 'Fruto silvestre negro de sabor agridulce',
      example: 'Las zarzamoras crecen en arbustos espinosos'
    }
  ]
};

// 获取特定字母的食物
export const getFoodsByLetter = (letter: Letter): WordItem[] => {
  return FOODS_DATA[letter] || [];
};

// 获取所有食物
export const getAllFoods = (): WordItem[] => {
  return Object.values(FOODS_DATA).flat();
};
