import { WordItem, Letter } from '@/types';

// 动物数据按字母组织
export const ANIMALS_DATA: Record<Letter, WordItem[]> = {
  a: [
    {
      word: 'Abeja',
      definition: 'Insecto que produce miel y vive en colmenas',
      example: 'La abeja recolecta néctar de las flores'
    },
    {
      word: 'Águila',
      definition: 'Ave rapaz de gran tamaño con vista muy aguda',
      example: 'El águila vuela muy alto en las montañas'
    },
    {
      word: 'Araña',
      definition: 'Arácnido que teje telarañas para cazar',
      example: 'La araña construyó su telaraña en el rincón'
    },
    {
      word: 'Ardilla',
      definition: 'Pequeño mamífero roedor que vive en los árboles',
      example: 'La ardilla guarda nueces para el invierno'
    },
    {
      word: 'Avestruz',
      definition: 'Ave no voladora de gran tamaño originaria de África',
      example: 'El avestruz puede correr muy rápido'
    }
  ],
  b: [
    {
      word: 'Ballena',
      definition: 'Mamífero marino de gran tamaño',
      example: 'La ballena azul es el animal más grande del mundo'
    },
    {
      word: 'Búho',
      definition: 'Ave nocturna con grandes ojos y excelente audición',
      example: 'El búho caza ratones durante la noche'
    },
    {
      word: 'Burro',
      definition: 'Mamífero doméstico similar al caballo pero más pequeño',
      example: 'El burro ayuda a cargar equipaje en las montañas'
    },
    {
      word: 'Boa',
      definition: 'Serpiente no venenosa que mata por constricción',
      example: 'La boa constrictora se enrolla alrededor de su presa'
    }
  ],
  c: [
    {
      word: 'Caballo',
      definition: 'Mamífero doméstico usado para montar y trabajar',
      example: 'El caballo galopa por el campo'
    },
    {
      word: 'Cabra',
      definition: 'Mamífero doméstico que da leche y carne',
      example: 'La cabra trepa por las rocas con facilidad'
    },
    {
      word: 'Canguro',
      definition: 'Marsupial que salta y lleva a sus crías en una bolsa',
      example: 'El canguro salta grandes distancias'
    },
    {
      word: 'Cocodrilo',
      definition: 'Reptil acuático de gran tamaño con mandíbulas poderosas',
      example: 'El cocodrilo se esconde en el agua esperando su presa'
    },
    {
      word: 'Conejo',
      definition: 'Pequeño mamífero herbívoro con orejas largas',
      example: 'El conejo come zanahorias en el jardín'
    }
  ],
  d: [
    {
      word: 'Delfín',
      definition: 'Mamífero marino inteligente y sociable',
      example: 'El delfín salta fuera del agua jugando'
    },
    {
      word: 'Dinosaurio',
      definition: 'Reptil prehistórico extinto hace millones de años',
      example: 'El dinosaurio T-Rex era un gran depredador'
    },
    {
      word: 'Dragón',
      definition: 'Criatura mítica que escupe fuego (en cuentos)',
      example: 'El dragón del cuento protegía un tesoro'
    }
  ],
  e: [
    {
      word: 'Elefante',
      definition: 'Mamífero terrestre más grande con trompa larga',
      example: 'El elefante usa su trompa para beber agua'
    },
    {
      word: 'Erizo',
      definition: 'Pequeño mamífero cubierto de púas',
      example: 'El erizo se enrolla en una bola cuando se asusta'
    },
    {
      word: 'Escorpión',
      definition: 'Arácnido con cola venenosa y pinzas',
      example: 'El escorpión vive en el desierto'
    }
  ],
  f: [
    {
      word: 'Foca',
      definition: 'Mamífero marino con aletas',
      example: 'La foca nada graciosamente en el océano'
    },
    {
      word: 'Flamenco',
      definition: 'Ave rosada de cuello largo que vive cerca del agua',
      example: 'El flamenco se para en una pata'
    },
    {
      word: 'Faisán',
      definition: 'Ave de colores brillantes y cola larga',
      example: 'El faisán macho tiene plumas muy coloridas'
    }
  ],
  g: [
    {
      word: 'Gato',
      definition: 'Mamífero doméstico carnívoro y cazador',
      example: 'El gato ronronea cuando está contento'
    },
    {
      word: 'Gallina',
      definition: 'Ave doméstica que pone huevos',
      example: 'La gallina cuida a sus pollitos'
    },
    {
      word: 'Gorila',
      definition: 'Primate grande y fuerte que vive en África',
      example: 'El gorila es muy inteligente y social'
    },
    {
      word: 'Gusano',
      definition: 'Invertebrado alargado sin patas',
      example: 'El gusano ayuda a fertilizar la tierra'
    }
  ],
  h: [
    {
      word: 'Hipopótamo',
      definition: 'Mamífero acuático grande de África',
      example: 'El hipopótamo pasa la mayor parte del día en el agua'
    },
    {
      word: 'Hormiga',
      definition: 'Insecto social que vive en colonias',
      example: 'La hormiga trabaja en equipo con otras hormigas'
    },
    {
      word: 'Hamster',
      definition: 'Pequeño roedor doméstico',
      example: 'El hamster corre en su rueda toda la noche'
    }
  ],
  i: [
    {
      word: 'Iguana',
      definition: 'Reptil herbívoro de clima tropical con cresta dorsal y capacidad de cambiar de color',
      example: 'La iguana toma el sol sobre las rocas para regular su temperatura corporal'
    },
    {
      word: 'Insecto',
      definition: 'Artrópodo con seis patas y cuerpo segmentado, el grupo animal más diverso del planeta',
      example: 'El insecto poliniza las flores del jardín mientras busca néctar'
    },
    {
      word: 'Impala',
      definition: 'Antílope africano ágil y saltador, conocido por sus saltos espectaculares de hasta 3 metros',
      example: 'El impala puede saltar hasta 3 metros de altura para escapar de depredadores'
    },
    {
      word: 'Ibis',
      definition: 'Ave zancuda de pico largo y curvado, considerada sagrada en el antiguo Egipto',
      example: 'El ibis busca alimento en aguas poco profundas con su pico especializado'
    }
  ],
  j: [
    {
      word: 'Jirafa',
      definition: 'Mamífero africano con cuello extremadamente largo, el animal terrestre más alto del mundo',
      example: 'La jirafa come hojas de acacia en las copas de los árboles que otros animales no alcanzan'
    },
    {
      word: 'Jaguar',
      definition: 'Felino grande y poderoso de América, el tercer felino más grande del mundo',
      example: 'El jaguar es un excelente nadador y puede cazar caimanes en el agua'
    },
    {
      word: 'Jabalí',
      definition: 'Cerdo salvaje europeo y asiático con colmillos prominentes y pelaje espeso',
      example: 'El jabalí usa sus colmillos para defenderse y buscar raíces en el suelo'
    },
    {
      word: 'Jilguero',
      definition: 'Pequeño pájaro cantor de colores brillantes, especialmente amarillo y negro',
      example: 'El jilguero construye su nido en las ramas altas y tiene un canto melodioso'
    }
  ],
  k: [
    {
      word: 'Koala',
      definition: 'Marsupial australiano que se alimenta exclusivamente de hojas de eucalipto',
      example: 'El koala duerme hasta 20 horas al día para conservar energía debido a su dieta baja en nutrientes'
    },
    {
      word: 'Kiwi',
      definition: 'Ave no voladora endémica de Nueva Zelanda, símbolo nacional del país',
      example: 'El kiwi tiene un pico largo y sensible que usa para buscar gusanos en la tierra'
    },
    {
      word: 'Krill',
      definition: 'Pequeño crustáceo marino que forma la base de la cadena alimentaria oceánica',
      example: 'El krill es el alimento principal de las ballenas azules y otros mamíferos marinos'
    }
  ],
  l: [
    {
      word: 'León',
      definition: 'Felino grande conocido como el rey de la selva',
      example: 'El león ruge para marcar su territorio'
    },
    {
      word: 'Lobo',
      definition: 'Mamífero carnívoro que vive en manadas',
      example: 'El lobo aúlla a la luna llena'
    },
    {
      word: 'Libélula',
      definition: 'Insecto con cuatro alas transparentes',
      example: 'La libélula vuela sobre el estanque'
    }
  ],
  m: [
    {
      word: 'Mono',
      definition: 'Primate ágil que vive en los árboles',
      example: 'El mono se balancea de rama en rama'
    },
    {
      word: 'Mariposa',
      definition: 'Insecto con alas coloridas que poliniza flores',
      example: 'La mariposa vuela de flor en flor'
    },
    {
      word: 'Murciélago',
      definition: 'Mamífero volador nocturno',
      example: 'El murciélago sale a cazar insectos por la noche'
    }
  ],
  n: [
    {
      word: 'Nutria',
      definition: 'Mamífero acuático semiacuático con pelaje denso e impermeable, conocido por su comportamiento juguetón',
      example: 'La nutria nada y juega en el río, usando herramientas para abrir moluscos'
    },
    {
      word: 'Narval',
      definition: 'Cetáceo ártico conocido como el unicornio del mar por su largo colmillo en espiral',
      example: 'El narval macho usa su colmillo para competir por las hembras'
    },
    {
      word: 'Numbat',
      definition: 'Pequeño marsupial australiano que se alimenta exclusivamente de termitas',
      example: 'El numbat puede comer hasta 20,000 termitas al día'
    },
    {
      word: 'Nandú',
      definition: 'Ave corredora sudamericana similar al avestruz, pero más pequeña',
      example: 'El nandú puede correr hasta 60 kilómetros por hora'
    }
  ],
  ñ: [
    {
      word: 'Ñandú',
      definition: 'Ave corredora sudamericana similar al avestruz, pero más pequeña y con tres dedos',
      example: 'El ñandú puede correr hasta 60 km/h y es el ave más grande de Sudamérica'
    },
    {
      word: 'Ñu',
      definition: 'Antílope africano que migra en grandes manadas a través de la sabana',
      example: 'Los ñus cruzan el río Mara durante la gran migración anual'
    },
    {
      word: 'Ñacurutú',
      definition: 'Búho grande sudamericano, también conocido como búho real',
      example: 'El ñacurutú es el búho más grande de América del Sur'
    }
  ],
  o: [
    {
      word: 'Oso',
      definition: 'Mamífero grande y fuerte omnívoro',
      example: 'El oso hiberna durante el invierno'
    },
    {
      word: 'Oveja',
      definition: 'Mamífero doméstico que da lana',
      example: 'La oveja pasta en el prado verde'
    },
    {
      word: 'Orca',
      definition: 'Mamífero marino conocido como ballena asesina',
      example: 'La orca es muy inteligente y social'
    }
  ],
  p: [
    {
      word: 'Perro',
      definition: 'Mamífero doméstico fiel compañero del hombre',
      example: 'El perro mueve la cola cuando está feliz'
    },
    {
      word: 'Pez',
      definition: 'Animal acuático que respira por branquias',
      example: 'El pez nada en el acuario'
    },
    {
      word: 'Pingüino',
      definition: 'Ave no voladora que vive en regiones frías',
      example: 'El pingüino camina torpemente en tierra'
    },
    {
      word: 'Panda',
      definition: 'Oso asiático que come bambú',
      example: 'El panda gigante es muy tierno'
    }
  ],
  q: [
    {
      word: 'Quetzal',
      definition: 'Ave tropical centroamericana de plumaje verde y rojo brillante, considerada sagrada por los mayas y aztecas',
      example: 'El quetzal es el ave nacional de Guatemala y símbolo de libertad'
    },
    {
      word: 'Quirquincho',
      definition: 'Pequeño armadillo sudamericano que puede enrollarse completamente en una bola para protegerse',
      example: 'El quirquincho se enrolla como una pelota cuando se siente amenazado'
    },
    {
      word: 'Quokka',
      definition: 'Pequeño marsupial australiano conocido por su expresión facial que parece una sonrisa',
      example: 'El quokka es famoso por aparecer en selfies con turistas'
    },
    {
      word: 'Quebrantahuesos',
      definition: 'Gran ave rapaz que se alimenta principalmente de huesos y médula ósea',
      example: 'El quebrantahuesos puede romper huesos lanzándolos desde gran altura'
    }
  ],
  r: [
    {
      word: 'Ratón',
      definition: 'Pequeño roedor que vive cerca de los humanos',
      example: 'El ratón busca migajas en la cocina'
    },
    {
      word: 'Rana',
      definition: 'Anfibio que vive tanto en agua como en tierra',
      example: 'La rana salta de hoja en hoja'
    },
    {
      word: 'Rinoceronte',
      definition: 'Mamífero grande con cuerno en el hocico',
      example: 'El rinoceronte tiene piel muy gruesa'
    }
  ],
  s: [
    {
      word: 'Serpiente',
      definition: 'Reptil sin patas que se arrastra',
      example: 'La serpiente se desliza silenciosamente'
    },
    {
      word: 'Sapo',
      definition: 'Anfibio similar a la rana pero más terrestre',
      example: 'El sapo sale por las noches después de la lluvia'
    },
    {
      word: 'Serpiente',
      definition: 'Reptil sin patas que se desplaza reptando y puede ser venenoso o constrictora',
      example: 'La serpiente muda su piel varias veces al año para crecer'
    },
    {
      word: 'Salamandra',
      definition: 'Anfibio que puede regenerar extremidades perdidas y vive en ambientes húmedos',
      example: 'La salamandra puede regenerar su cola si la pierde'
    },
    {
      word: 'Salmón',
      definition: 'Pez anádromo que nace en agua dulce, vive en el mar y regresa a desovar',
      example: 'El salmón nada contra la corriente para llegar a su lugar de nacimiento'
    }
  ],
  t: [
    {
      word: 'Tigre',
      definition: 'Felino grande con rayas negras y naranjas',
      example: 'El tigre es un cazador solitario'
    },
    {
      word: 'Tortuga',
      definition: 'Reptil con caparazón protector',
      example: 'La tortuga se esconde en su caparazón'
    },
    {
      word: 'Tiburón',
      definition: 'Pez cartilaginoso depredador marino',
      example: 'El tiburón es el depredador del océano'
    }
  ],
  u: [
    {
      word: 'Unicornio',
      definition: 'Criatura mítica parecida a un caballo con cuerno',
      example: 'El unicornio es un animal de leyenda'
    },
    {
      word: 'Urraca',
      definition: 'Ave inteligente de la familia de los córvidos, conocida por su capacidad de imitar sonidos',
      example: 'La urraca puede aprender a imitar palabras humanas'
    },
    {
      word: 'Urial',
      definition: 'Oveja salvaje de Asia Central con cuernos curvados característicos',
      example: 'El urial macho usa sus cuernos para competir por las hembras'
    },
    {
      word: 'Ualabí',
      definition: 'Marsupial australiano similar al canguro pero más pequeño',
      example: 'El ualabí salta ágilmente entre las rocas del desierto australiano'
    }
  ],
  v: [
    {
      word: 'Vaca',
      definition: 'Mamífero doméstico que da leche',
      example: 'La vaca pasta en el campo'
    },
    {
      word: 'Víbora',
      definition: 'Serpiente venenosa',
      example: 'La víbora tiene colmillos venenosos'
    }
  ],
  w: [
    {
      word: 'Wombat',
      definition: 'Marsupial australiano robusto y excavador',
      example: 'El wombat vive en madrigueras subterráneas'
    }
  ],
  x: [
    {
      word: 'Xoloitzcuintli',
      definition: 'Perro mexicano sin pelo, también llamado xolo',
      example: 'El xoloitzcuintli era sagrado para los aztecas'
    }
  ],
  y: [
    {
      word: 'Yak',
      definition: 'Bovino peludo de las montañas asiáticas',
      example: 'El yak vive en las altas montañas del Tíbet'
    }
  ],
  z: [
    {
      word: 'Zorro',
      definition: 'Mamífero carnívoro astuto y ágil',
      example: 'El zorro es muy inteligente y astuto'
    },
    {
      word: 'Zebra',
      definition: 'Mamífero africano con rayas blancas y negras',
      example: 'La zebra vive en las sabanas de África'
    }
  ]
};

// 获取特定字母的动物
export const getAnimalsByLetter = (letter: Letter): WordItem[] => {
  return ANIMALS_DATA[letter] || [];
};

// 获取所有动物
export const getAllAnimals = (): WordItem[] => {
  return Object.values(ANIMALS_DATA).flat();
};
