import { WordItem, Letter } from '@/types';

// 水果数据按字母组织
export const FRUITS_DATA: Record<Letter, WordItem[]> = {
  a: [
    {
      word: 'Aguacate',
      definition: 'Fruto verde cremoso rico en grasas saludables',
      example: 'El aguacate es perfecto para hacer guacamole'
    },
    {
      word: 'Arándano',
      definition: 'Pequeña baya azul rica en antioxidantes',
      example: 'Los arándanos son excelentes para la vista'
    },
    {
      word: 'Albaricoque',
      definition: 'Fruto anaranjado dulce de hueso',
      example: 'El albaricoque es delicioso en mermeladas'
    },
    {
      word: 'Ananá',
      definition: 'Fruto tropical dulce y jugoso (piña)',
      example: 'El ananá es refrescante en los días calurosos'
    }
  ],
  b: [
    {
      word: 'Banana',
      definition: 'Fruto tropical amarillo alargado, rico en potasio y vitaminas del grupo B',
      example: 'La banana es perfecta para el desayuno y aporta energía natural'
    },
    {
      word: 'Breva',
      definition: 'Primer fruto de la higuera en el año, más grande y dulce que el higo',
      example: 'Las brevas maduran en junio y son más grandes que los higos de otoño'
    },
    {
      word: 'Bergamota',
      definition: 'Cítrico aromático usado principalmente para extraer aceites esenciales',
      example: 'La bergamota se usa para aromatizar el té Earl Grey'
    },
    {
      word: 'Babaco',
      definition: 'Fruto tropical ecuatoriano sin semillas, híbrido natural de papaya',
      example: 'El babaco tiene un sabor que mezcla papaya, piña y fresa'
    }
  ],
  c: [
    {
      word: 'Cereza',
      definition: 'Pequeño fruto rojo dulce con hueso',
      example: 'Las cerezas son deliciosas en tartas'
    },
    {
      word: 'Ciruela',
      definition: 'Fruto de hueso morado o amarillo',
      example: 'La ciruela es jugosa y refrescante'
    },
    {
      word: 'Coco',
      definition: 'Fruto tropical grande con agua y pulpa blanca',
      example: 'El agua de coco es muy hidratante'
    },
    {
      word: 'Chirimoya',
      definition: 'Fruto tropical cremoso y dulce',
      example: 'La chirimoya tiene un sabor único'
    }
  ],
  d: [
    {
      word: 'Durazno',
      definition: 'Fruto de hueso aterciopelado y dulce',
      example: 'El durazno es perfecto para compotas'
    },
    {
      word: 'Dátil',
      definition: 'Fruto seco muy dulce de la palmera datilera',
      example: 'Los dátiles son energéticos y nutritivos'
    }
  ],
  e: [
    {
      word: 'Espinaca',
      definition: 'Aunque es verdura, se incluye por ser vegetal comestible',
      example: 'La espinaca es rica en hierro'
    }
  ],
  f: [
    {
      word: 'Fresa',
      definition: 'Pequeño fruto rojo dulce y aromático',
      example: 'Las fresas son perfectas con crema'
    },
    {
      word: 'Frambuesa',
      definition: 'Pequeña baya roja de sabor agridulce',
      example: 'Las frambuesas son ideales para postres'
    }
  ],
  g: [
    {
      word: 'Granada',
      definition: 'Fruto rojo con semillas jugosas en su interior',
      example: 'La granada tiene propiedades antioxidantes'
    },
    {
      word: 'Grosella',
      definition: 'Pequeña baya ácida de color rojo o negro',
      example: 'Las grosellas se usan en jaleas'
    },
    {
      word: 'Guayaba',
      definition: 'Fruto tropical aromático y dulce',
      example: 'La guayaba es rica en vitamina C'
    }
  ],
  h: [
    {
      word: 'Higo',
      definition: 'Fruto dulce de la higuera',
      example: 'Los higos secos son muy nutritivos'
    }
  ],
  i: [
    {
      word: 'Icaco',
      definition: 'Fruto tropical pequeño de color morado o blanco, también conocido como ciruela de playa',
      example: 'El icaco crece cerca de las costas tropicales y tiene un sabor dulce'
    },
    {
      word: 'Ilama',
      definition: 'Fruto tropical centroamericano de pulpa cremosa y dulce, pariente de la chirimoya',
      example: 'La ilama tiene una textura similar al helado natural'
    }
  ],
  j: [
    {
      word: 'Jaca',
      definition: 'Fruto tropical gigante de Asia, el más grande que crece en un árbol, con pulpa dulce y aromática',
      example: 'La jaca puede pesar hasta 50 kilos y su pulpa se usa en postres'
    },
    {
      word: 'Jambosa',
      definition: 'Fruto tropical asiático de forma alargada, también conocido como manzana de agua',
      example: 'La jambosa tiene una textura crujiente y refrescante'
    },
    {
      word: 'Jobo',
      definition: 'Fruto tropical americano de color amarillo, con sabor agridulce y muy aromático',
      example: 'El jobo se usa para hacer jugos y mermeladas en el Caribe'
    }
  ],
  k: [
    {
      word: 'Kiwi',
      definition: 'Fruto verde por fuera y por dentro con semillas negras',
      example: 'El kiwi es muy rico en vitamina C'
    }
  ],
  l: [
    {
      word: 'Limón',
      definition: 'Cítrico amarillo ácido muy aromático',
      example: 'El limón es esencial en la cocina'
    },
    {
      word: 'Lima',
      definition: 'Cítrico verde pequeño y ácido',
      example: 'La lima es perfecta para cocteles'
    },
    {
      word: 'Lichi',
      definition: 'Fruto tropical asiático dulce y perfumado',
      example: 'El lichi tiene una textura única'
    }
  ],
  m: [
    {
      word: 'Manzana',
      definition: 'Fruto redondo que puede ser rojo, verde o amarillo',
      example: 'Una manzana al día mantiene alejado al doctor'
    },
    {
      word: 'Mango',
      definition: 'Fruto tropical dulce y jugoso',
      example: 'El mango es delicioso en batidos'
    },
    {
      word: 'Melón',
      definition: 'Fruto grande y dulce de pulpa anaranjada',
      example: 'El melón es refrescante en verano'
    },
    {
      word: 'Mora',
      definition: 'Pequeña baya oscura de sabor agridulce',
      example: 'Las moras crecen en arbustos espinosos'
    },
    {
      word: 'Mandarina',
      definition: 'Cítrico pequeño fácil de pelar',
      example: 'La mandarina es perfecta para el recreo'
    }
  ],
  n: [
    {
      word: 'Naranja',
      definition: 'Cítrico redondo rico en vitamina C',
      example: 'El jugo de naranja es muy saludable'
    },
    {
      word: 'Níspero',
      definition: 'Fruto pequeño amarillo de sabor dulce',
      example: 'Los nísperos maduran en primavera'
    }
  ],
  ñ: [
    {
      word: 'Ñame',
      definition: 'Tubérculo tropical comestible de pulpa blanca o amarilla, rico en carbohidratos',
      example: 'El ñame se puede cocinar hervido, frito o al horno como la papa'
    },
    {
      word: 'Ñangapirí',
      definition: 'Fruto pequeño y picante usado como condimento en Paraguay',
      example: 'El ñangapirí es muy picante y se usa para sazonar comidas'
    },
    {
      word: 'Ñispero',
      definition: 'Fruto pequeño amarillo de sabor dulce, también llamado níspero',
      example: 'Los ñisperos maduran en primavera y tienen un sabor muy dulce'
    }
  ],
  o: [
    {
      word: 'Oliva',
      definition: 'Fruto del olivo usado para aceite',
      example: 'Las olivas verdes son perfectas para ensaladas'
    }
  ],
  p: [
    {
      word: 'Pera',
      definition: 'Fruto alargado dulce y jugoso',
      example: 'La pera es suave y refrescante'
    },
    {
      word: 'Piña',
      definition: 'Fruto tropical grande con corona de hojas',
      example: 'La piña es perfecta para pizzas hawaianas'
    },
    {
      word: 'Plátano',
      definition: 'Fruto amarillo alargado muy nutritivo',
      example: 'El plátano da mucha energía'
    },
    {
      word: 'Papaya',
      definition: 'Fruto tropical grande de pulpa anaranjada',
      example: 'La papaya ayuda a la digestión'
    }
  ],
  q: [
    {
      word: 'Quinoto',
      definition: 'Pequeño cítrico amargo usado en conservas',
      example: 'El quinoto se usa para hacer mermeladas'
    }
  ],
  r: [
    {
      word: 'Rambután',
      definition: 'Fruto tropical asiático con cáscara peluda',
      example: 'El rambután tiene un sabor dulce y refrescante'
    }
  ],
  s: [
    {
      word: 'Sandía',
      definition: 'Fruto grande verde por fuera y rojo por dentro',
      example: 'La sandía es perfecta para el calor'
    }
  ],
  t: [
    {
      word: 'Tomate',
      definition: 'Aunque botánicamente es fruto, se usa como verdura',
      example: 'El tomate es base de muchas salsas'
    }
  ],
  u: [
    {
      word: 'Uva',
      definition: 'Pequeño fruto que crece en racimos',
      example: 'Las uvas se usan para hacer vino'
    }
  ],
  v: [
    {
      word: 'Vainilla',
      definition: 'Vaina aromática usada como especia',
      example: 'La vainilla da sabor a muchos postres'
    }
  ],
  w: [
    {
      word: 'Wasabi',
      definition: 'Planta japonesa de sabor picante',
      example: 'El wasabi se usa como condimento'
    }
  ],
  x: [
    {
      word: 'Xigua',
      definition: 'Nombre chino para la sandía',
      example: 'La xigua es refrescante en verano'
    }
  ],
  y: [
    {
      word: 'Yuzu',
      definition: 'Cítrico japonés aromático',
      example: 'El yuzu se usa en la cocina asiática'
    }
  ],
  z: [
    {
      word: 'Zapote',
      definition: 'Fruto tropical dulce de pulpa cremosa',
      example: 'El zapote es muy popular en México'
    }
  ]
};

// 获取特定字母的水果
export const getFruitsByLetter = (letter: Letter): WordItem[] => {
  return FRUITS_DATA[letter] || [];
};

// 获取所有水果
export const getAllFruits = (): WordItem[] => {
  return Object.values(FRUITS_DATA).flat();
};
