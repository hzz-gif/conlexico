import { WordItem, Letter } from '@/types';

// 国家数据按字母组织
export const COUNTRIES_DATA: Record<Letter, WordItem[]> = {
  a: [
    {
      word: 'Argentina',
      definition: 'País sudamericano famoso por el tango y la carne',
      example: 'Argentina es conocida por sus excelentes vinos'
    },
    {
      word: 'Australia',
      definition: 'País y continente en Oceanía',
      example: 'Australia tiene animales únicos como el canguro'
    },
    {
      word: 'Alemania',
      definition: 'País europeo conocido por su industria y cultura',
      example: 'Alemania es famosa por sus automóviles'
    },
    {
      word: 'Angola',
      definition: 'País africano en la costa atlántica',
      example: 'Angola es rico en petróleo y diamantes'
    }
  ],
  b: [
    {
      word: 'Brasil',
      definition: 'País más grande de Sudamérica',
      example: 'Brasil es famoso por el carnaval de Río'
    },
    {
      word: 'Bolivia',
      definition: 'País sudamericano sin salida al mar',
      example: 'Bolivia tiene dos capitales: La Paz y Sucre'
    },
    {
      word: 'Bélgica',
      definition: 'País europeo famoso por sus chocolates',
      example: 'Bélgica produce los mejores chocolates del mundo'
    }
  ],
  c: [
    {
      word: 'Colombia',
      definition: 'País sudamericano conocido por el café',
      example: 'Colombia produce café de alta calidad'
    },
    {
      word: 'Chile',
      definition: 'País largo y estrecho en la costa del Pacífico',
      example: 'Chile tiene una geografía muy diversa'
    },
    {
      word: 'China',
      definition: 'País asiático más poblado del mundo',
      example: 'China tiene una historia milenaria'
    },
    {
      word: 'Canadá',
      definition: 'País norteamericano conocido por sus paisajes',
      example: 'Canadá tiene dos idiomas oficiales'
    },
    {
      word: 'Cuba',
      definition: 'Isla caribeña famosa por sus puros y música',
      example: 'Cuba es conocida por la salsa y el son'
    }
  ],
  d: [
    {
      word: 'Dinamarca',
      definition: 'Reino nórdico europeo conocido por su alta calidad de vida y diseño moderno',
      example: 'Dinamarca es famosa por los cuentos de Hans Christian Andersen y los bloques LEGO'
    },
    {
      word: 'Dominica',
      definition: 'Isla caribeña conocida como la "Isla de la Naturaleza" por su biodiversidad',
      example: 'Dominica tiene la mayor concentración de ballenas jorobadas del Caribe'
    },
    {
      word: 'Djibouti',
      definition: 'Pequeño país africano estratégicamente ubicado en el Cuerno de África',
      example: 'Djibouti es un importante puerto comercial entre África, Asia y Europa'
    }
  ],
  e: [
    {
      word: 'España',
      definition: 'País europeo en la península ibérica',
      example: 'España es famosa por el flamenco y la paella'
    },
    {
      word: 'Ecuador',
      definition: 'País sudamericano atravesado por la línea ecuatorial',
      example: 'Ecuador tiene las islas Galápagos'
    },
    {
      word: 'Egipto',
      definition: 'País africano con pirámides milenarias',
      example: 'Egipto tiene las famosas pirámides de Giza'
    },
    {
      word: 'Estonia',
      definition: 'País báltico en el norte de Europa',
      example: 'Estonia es uno de los países más digitalizados'
    }
  ],
  f: [
    {
      word: 'Francia',
      definition: 'País europeo famoso por su cultura y gastronomía',
      example: 'Francia es conocida por la Torre Eiffel'
    },
    {
      word: 'Finlandia',
      definition: 'País nórdico conocido por sus saunas',
      example: 'Finlandia es la tierra de los mil lagos'
    },
    {
      word: 'Francia',
      definition: 'República europea famosa por su cultura, gastronomía y arte',
      example: 'Francia es conocida por la Torre Eiffel y sus vinos'
    },
    {
      word: 'Filipinas',
      definition: 'Archipiélago asiático compuesto por más de 7,000 islas',
      example: 'Filipinas tiene una increíble diversidad cultural y natural'
    },
    {
      word: 'Finlandia',
      definition: 'País nórdico conocido por sus auroras boreales y saunas',
      example: 'Finlandia es famosa por su sistema educativo de alta calidad'
    }
  ],
  g: [
    {
      word: 'Grecia',
      definition: 'País europeo cuna de la democracia',
      example: 'Grecia tiene una rica historia antigua'
    },
    {
      word: 'Guatemala',
      definition: 'País centroamericano con cultura maya',
      example: 'Guatemala tiene impresionantes ruinas mayas'
    },
    {
      word: 'Grecia',
      definition: 'Cuna de la democracia y la filosofía occidental en el Mediterráneo',
      example: 'Grecia tiene miles de islas y una rica historia antigua'
    },
    {
      word: 'Guatemala',
      definition: 'País centroamericano con rica herencia maya y volcanes activos',
      example: 'Guatemala es famosa por sus textiles coloridos y Tikal'
    },
    {
      word: 'Ghana',
      definition: 'País africano occidental conocido por su oro y cacao',
      example: 'Ghana fue el primer país africano en independizarse'
    }
  ],
  h: [
    {
      word: 'Honduras',
      definition: 'País centroamericano con costa en dos océanos',
      example: 'Honduras tiene hermosas islas en el Caribe'
    },
    {
      word: 'Hungría',
      definition: 'País europeo central sin salida al mar',
      example: 'Hungría es famosa por sus aguas termales'
    }
  ],
  i: [
    {
      word: 'Italia',
      definition: 'País europeo con forma de bota',
      example: 'Italia es famosa por la pasta y la pizza'
    },
    {
      word: 'India',
      definition: 'País asiático con gran diversidad cultural',
      example: 'India es conocida por el Taj Mahal'
    },
    {
      word: 'Irlanda',
      definition: 'Isla europea conocida como la Isla Esmeralda',
      example: 'Irlanda es famosa por sus paisajes verdes'
    },
    {
      word: 'Israel',
      definition: 'País de Oriente Medio con sitios sagrados',
      example: 'Israel tiene lugares santos para tres religiones'
    }
  ],
  j: [
    {
      word: 'Japón',
      definition: 'País insular asiático conocido por su tecnología',
      example: 'Japón es famoso por el sushi y los samurái'
    },
    {
      word: 'Jamaica',
      definition: 'Isla caribeña famosa por el reggae',
      example: 'Jamaica es la tierra natal de Bob Marley'
    }
  ],
  k: [
    {
      word: 'Kenia',
      definition: 'País africano famoso por sus safaris',
      example: 'Kenia tiene increíbles reservas naturales'
    }
  ],
  l: [
    {
      word: 'Líbano',
      definition: 'País de Oriente Medio en el Mediterráneo',
      example: 'Líbano es conocido por su rica gastronomía'
    }
  ],
  m: [
    {
      word: 'México',
      definition: 'País norteamericano con rica cultura prehispánica',
      example: 'México es famoso por sus tacos y mariachis'
    },
    {
      word: 'Marruecos',
      definition: 'País africano en el noroeste del continente',
      example: 'Marruecos tiene hermosos mercados tradicionales'
    }
  ],
  n: [
    {
      word: 'Nicaragua',
      definition: 'País centroamericano con volcanes activos',
      example: 'Nicaragua tiene lagos de origen volcánico'
    },
    {
      word: 'Noruega',
      definition: 'País nórdico famoso por sus fiordos',
      example: 'Noruega tiene espectaculares auroras boreales'
    }
  ],
  ñ: [
    {
      word: 'Ñuble',
      definition: 'Región de Chile conocida por su agricultura y producción vitivinícola',
      example: 'Ñuble es famosa por sus viñedos, cultivos de cereales y tradiciones campesinas'
    },
    {
      word: 'Ñuñoa',
      definition: 'Comuna de Santiago de Chile, importante centro urbano y educativo',
      example: 'Ñuñoa alberga varias universidades y es conocida por su vida cultural'
    }
  ],
  o: [
    {
      word: 'Omán',
      definition: 'Sultanato árabe ubicado en la península arábiga, conocido por su rica historia marítima y arquitectura tradicional',
      example: 'Omán tiene hermosas costas en el océano Índico y antiguos fuertes portugueses'
    },
    {
      word: 'Oceanía',
      definition: 'Continente insular que incluye Australia, Nueva Zelanda y miles de islas del Pacífico',
      example: 'Oceanía es el continente más pequeño pero con gran diversidad cultural'
    }
  ],
  p: [
    {
      word: 'Perú',
      definition: 'País sudamericano con herencia inca',
      example: 'Perú tiene la ciudadela de Machu Picchu'
    },
    {
      word: 'Paraguay',
      definition: 'País sudamericano sin salida al mar',
      example: 'Paraguay tiene dos idiomas oficiales'
    },
    {
      word: 'Portugal',
      definition: 'País europeo en la península ibérica',
      example: 'Portugal es famoso por sus azulejos'
    },
    {
      word: 'Polonia',
      definition: 'País europeo central con rica historia',
      example: 'Polonia tiene hermosos centros históricos'
    }
  ],
  q: [
    {
      word: 'Qatar',
      definition: 'País árabe en el Golfo Pérsico',
      example: 'Qatar organizó la Copa Mundial de Fútbol 2022'
    }
  ],
  r: [
    {
      word: 'Rusia',
      definition: 'País más grande del mundo que abarca dos continentes',
      example: 'Rusia tiene el ferrocarril Transiberiano'
    },
    {
      word: 'Rumania',
      definition: 'País europeo en los Cárpatos',
      example: 'Rumania es famosa por los castillos de Transilvania'
    }
  ],
  s: [
    {
      word: 'Suecia',
      definition: 'País nórdico conocido por IKEA y ABBA',
      example: 'Suecia tiene el premio Nobel'
    },
    {
      word: 'Suiza',
      definition: 'País europeo famoso por sus montañas y relojes',
      example: 'Suiza es conocida por sus chocolates'
    },
    {
      word: 'Singapur',
      definition: 'Ciudad-estado asiática muy desarrollada',
      example: 'Singapur es un importante centro financiero'
    }
  ],
  t: [
    {
      word: 'Turquía',
      definition: 'País que conecta Europa y Asia',
      example: 'Turquía tiene la famosa ciudad de Estambul'
    },
    {
      word: 'Tailandia',
      definition: 'País asiático conocido por sus templos',
      example: 'Tailandia es famosa por su comida picante'
    }
  ],
  u: [
    {
      word: 'Uruguay',
      definition: 'Pequeño país sudamericano entre Argentina y Brasil',
      example: 'Uruguay es conocido por sus playas'
    },
    {
      word: 'Ucrania',
      definition: 'País europeo oriental con vastas llanuras',
      example: 'Ucrania es conocida por sus campos de girasoles'
    }
  ],
  v: [
    {
      word: 'Venezuela',
      definition: 'País sudamericano con grandes reservas de petróleo',
      example: 'Venezuela tiene el Salto Ángel, la cascada más alta'
    },
    {
      word: 'Vietnam',
      definition: 'País asiático con forma alargada',
      example: 'Vietnam es famoso por su café y pho'
    }
  ],
  w: [
    {
      word: 'Wallis y Futuna',
      definition: 'Territorio francés en el Pacífico',
      example: 'Wallis y Futuna son islas del Pacífico Sur'
    },
    {
      word: 'Sahara Occidental',
      definition: 'Territorio disputado en el norte de África',
      example: 'El Sahara Occidental es un territorio no autónomo'
    }
  ],
  x: [
    {
      word: 'Xinjiang',
      definition: 'Región autónoma de China',
      example: 'Xinjiang es una región de gran diversidad cultural'
    }
  ],
  y: [
    {
      word: 'Yemen',
      definition: 'País árabe en la península arábiga',
      example: 'Yemen tiene una arquitectura única'
    },
    {
      word: 'Yibuti',
      definition: 'Pequeño país africano en el Cuerno de África',
      example: 'Yibuti es estratégico por su ubicación en el Mar Rojo'
    }
  ],
  z: [
    {
      word: 'Zambia',
      definition: 'País africano sin salida al mar',
      example: 'Zambia tiene las cataratas Victoria'
    },
    {
      word: 'Zimbabue',
      definition: 'País africano conocido por sus ruinas antiguas',
      example: 'Zimbabue tiene las famosas ruinas del Gran Zimbabue'
    },
    {
      word: 'Zanzíbar',
      definition: 'Archipiélago semiautónomo de Tanzania',
      example: 'Zanzíbar es famoso por sus especias y playas'
    }
  ]
};

// 获取特定字母的国家
export const getCountriesByLetter = (letter: Letter): WordItem[] => {
  return COUNTRIES_DATA[letter] || [];
};

// 获取所有国家
export const getAllCountries = (): WordItem[] => {
  return Object.values(COUNTRIES_DATA).flat();
};
