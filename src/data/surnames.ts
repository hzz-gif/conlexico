import { WordItem, Letter } from '@/types';

// 姓氏数据按字母组织
export const SURNAMES_DATA: Record<Letter, WordItem[]> = {
  a: [
    {
      word: 'Álvarez',
      definition: 'Apellido de origen español muy común',
      example: 'María Álvarez es la nueva directora'
    },
    {
      word: 'Aguilar',
      definition: 'Apellido que significa "lugar de águilas"',
      example: 'Los Aguilar tienen una larga tradición familiar'
    },
    {
      word: 'Alonso',
      definition: 'Apellido de origen germánico',
      example: 'Fernando Alonso es un piloto famoso'
    }
  ],
  b: [
    {
      word: 'Benítez',
      definition: 'Apellido patronímico derivado de Benito',
      example: 'La familia Benítez vive en el centro'
    },
    {
      word: 'Blanco',
      definition: 'Apellido que hace referencia al color',
      example: 'Ana Blanco presenta las noticias'
    }
  ],
  c: [
    {
      word: 'Castro',
      definition: 'Apellido que significa "fortaleza"',
      example: 'Los Castro emigraron de Galicia'
    },
    {
      word: 'Cortés',
      definition: 'Apellido que significa "cortés, educado"',
      example: 'Hernán Cortés fue un conquistador'
    },
    {
      word: 'Cruz',
      definition: 'Apellido religioso muy extendido',
      example: 'Penélope Cruz es una actriz española'
    }
  ],
  d: [
    {
      word: 'Díaz',
      definition: 'Apellido patronímico muy común en España',
      example: 'El Dr. Díaz atiende en la clínica'
    },
    {
      word: 'Domínguez',
      definition: 'Apellido derivado del nombre Domingo',
      example: 'Los Domínguez organizan la fiesta'
    }
  ],
  e: [
    {
      word: 'Espinoza',
      definition: 'Apellido que hace referencia a un lugar espinoso',
      example: 'Carmen Espinoza es la alcaldesa'
    }
  ],
  f: [
    {
      word: 'Fernández',
      definition: 'Uno de los apellidos más comunes en España',
      example: 'Los Fernández tienen una gran familia'
    },
    {
      word: 'Flores',
      definition: 'Apellido que hace referencia a las flores',
      example: 'Rosa Flores trabaja en el jardín botánico'
    }
  ],
  g: [
    {
      word: 'García',
      definition: 'El apellido más común en España',
      example: 'Federico García Lorca fue un gran poeta'
    },
    {
      word: 'González',
      definition: 'Apellido patronímico muy extendido',
      example: 'La profesora González enseña matemáticas'
    },
    {
      word: 'Gutiérrez',
      definition: 'Apellido de origen vasco',
      example: 'Los Gutiérrez viven en el norte'
    }
  ],
  h: [
    {
      word: 'Hernández',
      definition: 'Apellido patronímico derivado de Hernando',
      example: 'Miguel Hernández fue un poeta del siglo XX'
    },
    {
      word: 'Herrera',
      definition: 'Apellido que hace referencia al oficio de herrero',
      example: 'La familia Herrera tiene un taller'
    }
  ],
  i: [
    {
      word: 'Iglesias',
      definition: 'Apellido que hace referencia a las iglesias',
      example: 'Julio Iglesias es un cantante famoso'
    }
  ],
  j: [
    {
      word: 'Jiménez',
      definition: 'Apellido patronímico derivado de Jimeno',
      example: 'Juan Ramón Jiménez ganó el Nobel'
    }
  ],
  k: [
    {
      word: 'Klein',
      definition: 'Apellido alemán que significa "pequeño"',
      example: 'Calvin Klein es un diseñador famoso'
    }
  ],
  l: [
    {
      word: 'López',
      definition: 'Apellido patronímico muy común',
      example: 'Jennifer López es una artista internacional'
    },
    {
      word: 'Luna',
      definition: 'Apellido que hace referencia al satélite',
      example: 'Los Luna son una familia de artistas'
    }
  ],
  m: [
    {
      word: 'Martínez',
      definition: 'Apellido patronímico derivado de Martín',
      example: 'El chef Martínez prepara platos exquisitos'
    },
    {
      word: 'Morales',
      definition: 'Apellido que hace referencia a las moras',
      example: 'Evo Morales fue presidente de Bolivia'
    },
    {
      word: 'Muñoz',
      definition: 'Apellido patronímico derivado de Muño',
      example: 'La doctora Muñoz es muy reconocida'
    }
  ],
  n: [
    {
      word: 'Navarro',
      definition: 'Apellido que indica origen en Navarra',
      example: 'Los Navarro vinieron del norte de España'
    }
  ],
  ñ: [
    {
      word: 'Ñíguez',
      definition: 'Apellido español de origen medieval, variante regional de Íñiguez que significa "hijo de Íñigo"',
      example: 'Saúl Ñíguez es un futbolista español muy conocido del Atlético de Madrid'
    },
    {
      word: 'Ñoño',
      definition: 'Apellido poco común de origen español, posiblemente relacionado con características físicas',
      example: 'La familia Ñoño tiene tradición en la educación y las letras'
    },
    {
      word: 'Ñancul',
      definition: 'Apellido de origen mapuche que significa "águila" en mapudungun',
      example: 'Los Ñancul son una familia de origen mapuche del sur de Chile'
    }
  ],
  o: [
    {
      word: 'Ortega',
      definition: 'Apellido que hace referencia a las ortigas',
      example: 'José Ortega y Gasset fue un filósofo'
    }
  ],
  p: [
    {
      word: 'Pérez',
      definition: 'Apellido patronímico muy extendido',
      example: 'Galdós se llamaba Benito Pérez Galdós'
    },
    {
      word: 'Ponce',
      definition: 'Apellido de origen latino',
      example: 'Los Ponce tienen raíces andaluzas'
    }
  ],
  q: [
    {
      word: 'Quintero',
      definition: 'Apellido que hace referencia a una quinta parte',
      example: 'Los hermanos Quintero fueron dramaturgos españoles'
    },
    {
      word: 'Quiroga',
      definition: 'Apellido de origen gallego',
      example: 'Horacio Quiroga fue un gran escritor uruguayo'
    }
  ],
  r: [
    {
      word: 'Rodríguez',
      definition: 'Apellido patronímico muy común',
      example: 'Amancio Rodríguez fue un gran futbolista'
    },
    {
      word: 'Ruiz',
      definition: 'Apellido patronímico derivado de Ruy',
      example: 'Los Ruiz tienen un negocio familiar'
    },
    {
      word: 'Ramos',
      definition: 'Apellido que hace referencia a las ramas',
      example: 'Sergio Ramos es un futbolista conocido'
    }
  ],
  s: [
    {
      word: 'Sánchez',
      definition: 'Apellido patronímico muy común en España',
      example: 'Pedro Sánchez es político español'
    },
    {
      word: 'Silva',
      definition: 'Apellido que hace referencia al bosque',
      example: 'Los Silva emigraron a América'
    }
  ],
  t: [
    {
      word: 'Torres',
      definition: 'Apellido que hace referencia a las torres',
      example: 'Fernando Torres fue un gran delantero'
    }
  ],
  u: [
    {
      word: 'Uribe',
      definition: 'Apellido vasco que significa "villa"',
      example: 'Álvaro Uribe fue presidente de Colombia'
    },
    {
      word: 'Ulloa',
      definition: 'Apellido de origen gallego',
      example: 'La familia Ulloa tiene raíces gallegas'
    }
  ],
  v: [
    {
      word: 'Vargas',
      definition: 'Apellido de origen toponímico',
      example: 'Mario Vargas Llosa es un escritor peruano'
    },
    {
      word: 'Vega',
      definition: 'Apellido que hace referencia a terrenos fértiles',
      example: 'Lope de Vega fue un dramaturgo del Siglo de Oro'
    }
  ],
  w: [
    {
      word: 'Wagner',
      definition: 'Apellido alemán que significa "carretero"',
      example: 'Richard Wagner fue un compositor famoso'
    }
  ],
  x: [
    {
      word: 'Ximénez',
      definition: 'Variante del apellido Jiménez',
      example: 'Los Ximénez tienen tradición andaluza'
    }
  ],
  y: [
    {
      word: 'Yáñez',
      definition: 'Apellido patronímico derivado de Juan',
      example: 'María Yáñez es la nueva alcaldesa'
    }
  ],
  z: [
    {
      word: 'Zapata',
      definition: 'Apellido que hace referencia al calzado',
      example: 'Emiliano Zapata fue un revolucionario mexicano'
    },
    {
      word: 'Zúñiga',
      definition: 'Apellido de origen vasco',
      example: 'Los Zúñiga son una familia noble'
    }
  ]
};

// 获取特定字母的姓氏
export const getSurnamesByLetter = (letter: Letter): WordItem[] => {
  return SURNAMES_DATA[letter] || [];
};

// 获取所有姓氏
export const getAllSurnames = (): WordItem[] => {
  return Object.values(SURNAMES_DATA).flat();
};
