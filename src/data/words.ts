import { Category, Letter, WordItem } from '@/types';
import { getAnimalsByLetter } from './animals';
import { getCountriesByLetter } from './countries';
import { getFruitsByLetter } from './fruits';
import { getGeneralWordsByLetter } from './general-words';
import { getFoodsByLetter } from './foods';
import { getSurnamesByLetter } from './surnames';

// 西班牙语字母表
export const SPANISH_ALPHABET: Letter[] = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
  'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

// 词汇数据结构
type WordsData = Record<Category, Partial<Record<Letter, WordItem[]>>>;

// Datos de vocabulario organizados por categoría y letra
export const WORDS_DATA: Partial<WordsData> = {
  colores: {
    a: [
      { word: 'azul', definition: 'Color del cielo despejado y del mar', example: 'El cielo está azul hoy' },
      { word: 'amarillo', definition: 'Color del sol y de los limones', example: 'El sol es amarillo brillante' },
      { word: 'añil', definition: 'Color azul oscuro intenso', example: 'El añil es un color profundo' },
      { word: 'aguamarina', definition: 'Color azul verdoso como el agua del mar', example: 'Su vestido era de color aguamarina' },
      { word: 'ámbar', definition: 'Color amarillo dorado', example: 'Los ojos de ámbar brillaban al sol' }
    ],
    b: [
      { word: 'blanco', definition: 'Color de la nieve y las nubes', example: 'La nieve es blanca y pura' },
      { word: 'beige', definition: 'Color crema claro y neutro', example: 'Las paredes son de color beige' },
      { word: 'burdeos', definition: 'Color rojo oscuro como el vino', example: 'Llevaba una chaqueta burdeos' },
      { word: 'bronce', definition: 'Color marrón dorado metálico', example: 'La estatua tenía un acabado bronce' }
    ],
    c: [
      { word: 'celeste', definition: 'Color azul claro como el cielo', example: 'Su camisa era de color celeste' },
      { word: 'carmesí', definition: 'Color rojo intenso', example: 'Las rosas carmesí decoraban el jardín' },
      { word: 'coral', definition: 'Color rosado anaranjado', example: 'El vestido coral le quedaba perfecto' },
      { word: 'cobre', definition: 'Color marrón rojizo metálico', example: 'Su cabello tenía reflejos cobre' }
    ],
    d: [
      { word: 'dorado', definition: 'Color amarillo brillante como el oro', example: 'El marco dorado resaltaba el cuadro' },
      { word: 'durazno', definition: 'Color rosado anaranjado suave', example: 'Las paredes durazno daban calidez al cuarto' }
    ],
    e: [
      { word: 'esmeralda', definition: 'Color verde intenso como la gema', example: 'Sus ojos esmeralda eran cautivadores' },
      { word: 'escarlata', definition: 'Color rojo brillante', example: 'La capa escarlata ondeaba al viento' }
    ],
    f: [
      { word: 'fucsia', definition: 'Color rosa intenso y vibrante', example: 'Las flores fucsia destacaban en el jardín' },
      { word: 'frambuesa', definition: 'Color rojo rosado', example: 'Su lápiz labial frambuesa era perfecto' }
    ],
    g: [
      { word: 'gris', definition: 'Color entre blanco y negro', example: 'Las nubes grises anunciaban lluvia' },
      { word: 'granate', definition: 'Color rojo oscuro', example: 'Su bufanda granate combinaba con el abrigo' }
    ],
    h: [
      { word: 'hueso', definition: 'Color blanco amarillento', example: 'El vestido color hueso era elegante' }
    ],
    i: [
      { word: 'índigo', definition: 'Color azul oscuro profundo', example: 'El cielo nocturno tenía un tono índigo' },
      { word: 'ivory', definition: 'Color marfil, blanco cremoso', example: 'Las teclas ivory del piano brillaban' }
    ],
    j: [
      { word: 'jade', definition: 'Color verde claro mineral', example: 'El jade es un color muy relajante' },
      { word: 'jaspe', definition: 'Color rojizo con vetas', example: 'El jaspe tiene tonos rojizos únicos' }
    ],
    l: [
      { word: 'lila', definition: 'Color morado claro', example: 'Las flores lila perfumaban el aire' },
      { word: 'lavanda', definition: 'Color morado suave', example: 'Su perfume tenía aroma a lavanda' }
    ],
    m: [
      { word: 'magenta', definition: 'Color rosa intenso', example: 'La impresora necesita tinta magenta' },
      { word: 'marrón', definition: 'Color café o chocolate', example: 'Sus zapatos marrón eran de cuero' },
      { word: 'mostaza', definition: 'Color amarillo oscuro', example: 'Su chaqueta mostaza era muy moderna' }
    ],
    n: [
      { word: 'negro', definition: 'Color más oscuro, ausencia de luz', example: 'Su vestido negro era muy elegante' },
      { word: 'naranja', definition: 'Color de la fruta cítrica', example: 'El atardecer tenía tonos naranja' }
    ],
    o: [
      { word: 'oro', definition: 'Color amarillo metálico brillante', example: 'Su anillo de oro brillaba al sol' },
      { word: 'ocre', definition: 'Color amarillo terroso', example: 'Las paredes ocre daban calidez al hogar' }
    ],
    p: [
      { word: 'púrpura', definition: 'Color morado intenso', example: 'La túnica púrpura era real' },
      { word: 'plata', definition: 'Color gris metálico brillante', example: 'Su collar de plata era hermoso' },
      { word: 'perla', definition: 'Color blanco nacarado', example: 'Su vestido perla era perfecto para la boda' }
    ],
    r: [
      { word: 'rojo', definition: 'Color de la sangre y las rosas', example: 'La rosa roja simboliza el amor' },
      { word: 'rosa', definition: 'Color rosado suave', example: 'Su vestido rosa era muy femenino' },
      { word: 'rubí', definition: 'Color rojo intenso como la gema', example: 'Sus labios rubí eran cautivadores' }
    ],
    s: [
      { word: 'salmón', definition: 'Color rosado anaranjado', example: 'La pared salmón daba calidez al cuarto' },
      { word: 'sepia', definition: 'Color marrón amarillento', example: 'La fotografía sepia era muy antigua' }
    ],
    t: [
      { word: 'turquesa', definition: 'Color azul verdoso', example: 'El mar turquesa era cristalino' },
      { word: 'terracota', definition: 'Color marrón rojizo', example: 'Las macetas terracota decoraban el patio' }
    ],
    u: [
      { word: 'ultramar', definition: 'Color azul intenso', example: 'El pigmento ultramar era muy valioso' }
    ],
    v: [
      { word: 'verde', definition: 'Color de las plantas y la naturaleza', example: 'Las hojas verdes brillaban con el rocío' },
      { word: 'violeta', definition: 'Color morado como la flor', example: 'Las violetas del jardín eran hermosas' },
      { word: 'vino', definition: 'Color rojo oscuro', example: 'Su vestido color vino era elegante' }
    ],
    z: [
      { word: 'zafiro', definition: 'Color azul intenso como la gema', example: 'Sus ojos zafiro brillaban en la oscuridad' }
    ]
  },
  animales: {
    a: [
      { word: 'águila', definition: 'Ave rapaz de gran tamaño y vista aguda', example: 'El águila vuela majestuosamente sobre las montañas' },
      { word: 'araña', definition: 'Arácnido de ocho patas que teje telarañas', example: 'La araña teje su tela para atrapar insectos' },
      { word: 'abeja', definition: 'Insecto que produce miel y poliniza flores', example: 'La abeja recolecta néctar de las flores' },
      { word: 'ardilla', definition: 'Pequeño roedor que vive en los árboles', example: 'La ardilla guarda nueces para el invierno' },
      { word: 'avestruz', definition: 'Ave grande que no puede volar', example: 'El avestruz corre muy rápido por la sabana' }
    ],
    b: [
      { word: 'ballena', definition: 'Mamífero marino de gran tamaño', example: 'La ballena azul es el animal más grande del mundo' },
      { word: 'búho', definition: 'Ave nocturna con grandes ojos', example: 'El búho caza ratones durante la noche' },
      { word: 'burro', definition: 'Équido doméstico usado para carga', example: 'El burro llevaba provisiones por el sendero' },
      { word: 'boa', definition: 'Serpiente grande no venenosa', example: 'La boa constrictora se enrolla alrededor de su presa' }
    ],
    c: [
      { word: 'caballo', definition: 'Mamífero équido usado para montar', example: 'El caballo galopa por el campo' },
      { word: 'conejo', definition: 'Mamífero pequeño con orejas largas', example: 'El conejo salta entre los arbustos' },
      { word: 'colibrí', definition: 'Ave pequeña que puede volar hacia atrás', example: 'El colibrí libaba el néctar de las flores' },
      { word: 'ciervo', definition: 'Mamífero con cuernos ramificados', example: 'El ciervo pastaba tranquilamente en el bosque' },
      { word: 'cangrejo', definition: 'Crustáceo con pinzas y caparazón', example: 'El cangrejo camina de lado por la playa' }
    ],
    d: [
      { word: 'delfín', definition: 'Mamífero marino muy inteligente', example: 'El delfín salta fuera del agua juguetonamente' },
      { word: 'dinosaurio', definition: 'Reptil prehistórico ya extinto', example: 'El dinosaurio dominaba la Tierra hace millones de años' }
    ],
    e: [
      { word: 'elefante', definition: 'Mamífero grande con trompa', example: 'El elefante usa su trompa para beber agua' },
      { word: 'erizo', definition: 'Mamífero pequeño cubierto de púas', example: 'El erizo se enrolla cuando se siente amenazado' }
    ],
    f: [
      { word: 'foca', definition: 'Mamífero marino con aletas', example: 'La foca descansa sobre las rocas' },
      { word: 'flamenco', definition: 'Ave rosada de patas largas', example: 'El flamenco se para en una sola pata' }
    ],
    g: [
      { word: 'gato', definition: 'Felino doméstico cazador de ratones', example: 'El gato ronronea cuando está contento' },
      { word: 'gallina', definition: 'Ave de corral que pone huevos', example: 'La gallina cuida a sus pollitos' },
      { word: 'gorila', definition: 'Primate grande y fuerte', example: 'El gorila vive en las selvas africanas' },
      { word: 'gaviota', definition: 'Ave marina que vuela sobre el océano', example: 'La gaviota busca peces en la orilla' }
    ],
    h: [
      { word: 'hipopótamo', definition: 'Mamífero grande que vive en ríos', example: 'El hipopótamo pasa la mayor parte del día en el agua' },
      { word: 'hormiga', definition: 'Insecto social que vive en colonias', example: 'La hormiga trabaja en equipo con sus compañeras' }
    ],
    i: [
      { word: 'iguana', definition: 'Reptil grande con cresta dorsal', example: 'La iguana toma el sol sobre las rocas' },
      { word: 'insecto', definition: 'Artrópodo con seis patas', example: 'El insecto poliniza las flores del jardín' }
    ],
    j: [
      { word: 'jirafa', definition: 'Mamífero con cuello muy largo', example: 'La jirafa alcanza las hojas más altas de los árboles' },
      { word: 'jaguar', definition: 'Felino grande de América', example: 'El jaguar es un excelente nadador' }
    ],
    l: [
      { word: 'león', definition: 'Felino grande conocido como rey de la selva', example: 'El león ruge para marcar su territorio' },
      { word: 'lobo', definition: 'Cánido salvaje que vive en manadas', example: 'El lobo aúlla a la luna llena' },
      { word: 'libélula', definition: 'Insecto con alas transparentes', example: 'La libélula vuela sobre el estanque' }
    ],
    m: [
      { word: 'mono', definition: 'Primate ágil que vive en los árboles', example: 'El mono se balancea de rama en rama' },
      { word: 'mariposa', definition: 'Insecto con alas coloridas', example: 'La mariposa se posa delicadamente en la flor' },
      { word: 'murciélago', definition: 'Mamífero volador nocturno', example: 'El murciélago usa ecolocalización para navegar' }
    ],
    n: [
      { word: 'nutria', definition: 'Mamífero acuático juguetón', example: 'La nutria nada boca arriba en el río' }
    ],
    o: [
      { word: 'oso', definition: 'Mamífero grande y peludo', example: 'El oso hiberna durante el invierno' },
      { word: 'oveja', definition: 'Mamífero doméstico que da lana', example: 'La oveja pasta en el prado verde' }
    ],
    p: [
      { word: 'perro', definition: 'Mamífero doméstico fiel al hombre', example: 'El perro mueve la cola cuando ve a su dueño' },
      { word: 'pez', definition: 'Animal acuático que respira por branquias', example: 'El pez nada graciosamente en el acuario' },
      { word: 'pingüino', definition: 'Ave que no vuela pero nada muy bien', example: 'El pingüino se desliza sobre el hielo' },
      { word: 'panda', definition: 'Oso blanco y negro que come bambú', example: 'El panda mastica bambú todo el día' }
    ],
    r: [
      { word: 'ratón', definition: 'Roedor pequeño de cola larga', example: 'El ratón busca migajas en la cocina' },
      { word: 'rana', definition: 'Anfibio que salta y croa', example: 'La rana salta de hoja en hoja en el estanque' }
    ],
    s: [
      { word: 'serpiente', definition: 'Reptil sin patas que se arrastra', example: 'La serpiente se desliza silenciosamente por el suelo' },
      { word: 'sapo', definition: 'Anfibio similar a la rana pero más grande', example: 'El sapo croa fuertemente en la noche' }
    ],
    t: [
      { word: 'tigre', definition: 'Felino grande con rayas negras', example: 'El tigre caza sigilosamente en la selva' },
      { word: 'tortuga', definition: 'Reptil con caparazón protector', example: 'La tortuga se esconde en su caparazón' }
    ],
    u: [
      { word: 'urraca', definition: 'Ave inteligente de color negro y blanco', example: 'La urraca colecciona objetos brillantes' }
    ],
    v: [
      { word: 'vaca', definition: 'Mamífero doméstico que da leche', example: 'La vaca pasta tranquilamente en el campo' },
      { word: 'víbora', definition: 'Serpiente venenosa', example: 'La víbora se enrolla para atacar' }
    ],
    z: [
      { word: 'zorro', definition: 'Mamífero astuto de cola peluda', example: 'El zorro es muy inteligente y astuto' },
      { word: 'zebra', definition: 'Équido con rayas blancas y negras', example: 'La zebra galopa por la sabana africana' }
    ]
  },
  paises: {
    a: [
      { word: 'Argentina', definition: 'País sudamericano famoso por el tango y la carne', example: 'Argentina es conocida por sus excelentes vinos' },
      { word: 'Australia', definition: 'País y continente de Oceanía', example: 'Australia es hogar de canguros y koalas' },
      { word: 'Alemania', definition: 'País europeo conocido por su industria', example: 'Alemania es famosa por sus automóviles' },
      { word: 'Angola', definition: 'País africano de habla portuguesa', example: 'Angola tiene importantes reservas de petróleo' }
    ],
    b: [
      { word: 'Brasil', definition: 'País más grande de América del Sur', example: 'Brasil es famoso por el carnaval de Río' },
      { word: 'Bolivia', definition: 'País sudamericano sin salida al mar', example: 'Bolivia tiene dos capitales: La Paz y Sucre' },
      { word: 'Bélgica', definition: 'País europeo famoso por sus chocolates', example: 'Bélgica produce los mejores chocolates del mundo' }
    ],
    c: [
      { word: 'Colombia', definition: 'País sudamericano productor de café', example: 'Colombia es famosa por su café de alta calidad' },
      { word: 'Chile', definition: 'País largo y estrecho en la costa del Pacífico', example: 'Chile se extiende a lo largo de la costa sudamericana' },
      { word: 'China', definition: 'País asiático más poblado del mundo', example: 'China tiene la Gran Muralla como símbolo nacional' },
      { word: 'Canadá', definition: 'País norteamericano conocido por sus paisajes', example: 'Canadá es famoso por sus bosques y lagos' }
    ],
    d: [
      { word: 'Dinamarca', definition: 'País nórdico europeo', example: 'Dinamarca es conocida por su diseño y calidad de vida' }
    ],
    e: [
      { word: 'España', definition: 'País ibérico europeo de habla hispana', example: 'España es famosa por el flamenco y la paella' },
      { word: 'Ecuador', definition: 'País sudamericano atravesado por la línea ecuatorial', example: 'Ecuador alberga las Islas Galápagos' },
      { word: 'Egipto', definition: 'País africano con pirámides milenarias', example: 'Egipto es hogar de las pirámides de Giza' }
    ],
    f: [
      { word: 'Francia', definition: 'País europeo famoso por su cultura y gastronomía', example: 'Francia es conocida por la Torre Eiffel' },
      { word: 'Finlandia', definition: 'País nórdico conocido por sus saunas', example: 'Finlandia es la tierra de los mil lagos' }
    ],
    g: [
      { word: 'Guatemala', definition: 'País centroamericano con cultura maya', example: 'Guatemala conserva importantes ruinas mayas' },
      { word: 'Grecia', definition: 'País europeo cuna de la democracia', example: 'Grecia es famosa por su historia antigua' }
    ],
    h: [
      { word: 'Honduras', definition: 'País centroamericano con costa caribeña', example: 'Honduras tiene hermosas playas en el Caribe' },
      { word: 'Holanda', definition: 'País europeo famoso por sus tulipanes', example: 'Holanda es conocida por sus molinos de viento' }
    ],
    i: [
      { word: 'Italia', definition: 'País europeo con forma de bota', example: 'Italia es famosa por su pasta y pizza' },
      { word: 'India', definition: 'País asiático con gran diversidad cultural', example: 'India es conocida por el Taj Mahal' },
      { word: 'Irlanda', definition: 'Isla europea conocida como la Isla Esmeralda', example: 'Irlanda es famosa por sus paisajes verdes' }
    ],
    j: [
      { word: 'Japón', definition: 'País asiático insular con rica tradición', example: 'Japón es famoso por la tecnología y el sushi' },
      { word: 'Jamaica', definition: 'Isla caribeña famosa por el reggae', example: 'Jamaica es la cuna de Bob Marley' }
    ],
    m: [
      { word: 'México', definition: 'País norteamericano con rica cultura prehispánica', example: 'México es famoso por sus tacos y mariachis' },
      { word: 'Marruecos', definition: 'País africano con cultura árabe-bereber', example: 'Marruecos es conocido por sus mercados coloridos' }
    ],
    n: [
      { word: 'Nicaragua', definition: 'País centroamericano con volcanes activos', example: 'Nicaragua tiene hermosos lagos volcánicos' },
      { word: 'Noruega', definition: 'País nórdico famoso por sus fiordos', example: 'Noruega es conocida por la aurora boreal' }
    ],
    p: [
      { word: 'Perú', definition: 'País sudamericano hogar de Machu Picchu', example: 'Perú conserva la ciudadela inca de Machu Picchu' },
      { word: 'Portugal', definition: 'País ibérico famoso por sus navegantes', example: 'Portugal fue una gran potencia marítima' },
      { word: 'Paraguay', definition: 'País sudamericano sin salida al mar', example: 'Paraguay es conocido por sus artesanías' }
    ],
    r: [
      { word: 'Rusia', definition: 'País más extenso del mundo', example: 'Rusia se extiende desde Europa hasta Asia' },
      { word: 'Rumania', definition: 'País europeo en los Cárpatos', example: 'Rumania es famosa por los castillos de Transilvania' }
    ],
    s: [
      { word: 'Suecia', definition: 'País nórdico conocido por IKEA y Volvo', example: 'Suecia es famosa por su diseño minimalista' },
      { word: 'Suiza', definition: 'País alpino famoso por sus relojes', example: 'Suiza es conocida por su neutralidad política' }
    ],
    t: [
      { word: 'Turquía', definition: 'País transcontinental entre Europa y Asia', example: 'Turquía une dos continentes en Estambul' },
      { word: 'Tailandia', definition: 'País asiático famoso por sus templos', example: 'Tailandia es conocida por su gastronomía picante' }
    ],
    u: [
      { word: 'Uruguay', definition: 'País sudamericano entre Argentina y Brasil', example: 'Uruguay es famoso por su carne y vinos' },
      { word: 'Ucrania', definition: 'País europeo oriental con vastas llanuras', example: 'Ucrania es conocida por sus campos de trigo' }
    ],
    v: [
      { word: 'Venezuela', definition: 'País sudamericano con grandes reservas petroleras', example: 'Venezuela tiene las cataratas más altas del mundo' },
      { word: 'Vietnam', definition: 'País asiático con forma alargada', example: 'Vietnam es famoso por su café y pho' }
    ]
  }
};

// Función para obtener palabras por categoría y letra
export const getWordsByLetter = (category: Category, letter: Letter): WordItem[] => {
  switch (category) {
    case 'animales':
      return getAnimalsByLetter(letter);
    case 'paises':
      return getCountriesByLetter(letter);
    case 'frutas':
      return getFruitsByLetter(letter);
    case 'palabras':
      return getGeneralWordsByLetter(letter);
    case 'comidas':
      return getFoodsByLetter(letter);
    case 'apellidos':
      return getSurnamesByLetter(letter);
    case 'colores':
      // 颜色数据在 colors.ts 中处理，这里返回空数组
      return [];
    default:
      // 回退到旧数据结构
      return WORDS_DATA[category]?.[letter] || [];
  }
};

// Función para verificar si existe contenido para una categoría y letra
export const hasWordsForLetter = (category: Category, letter: Letter): boolean => {
  const words = getWordsByLetter(category, letter);
  return words.length > 0;
};

// Función para obtener todas las letras disponibles para una categoría
export const getAvailableLetters = (category: Category): Letter[] => {
  const categoryData = WORDS_DATA[category];
  if (!categoryData) return [];
  
  return Object.keys(categoryData) as Letter[];
};


