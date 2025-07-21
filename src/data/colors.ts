import { ColorItem, Letter } from '@/types';

// 颜色数据按字母组织
export const COLORS_DATA: Record<Letter, ColorItem[]> = {
  a: [
    {
      word: 'Azul',
      definition: 'Color del cielo despejado y del mar',
      example: 'El cielo está azul hoy',
      hex: '#0066CC',
      rgb: { r: 0, g: 102, b: 204 },
      hsl: { h: 210, s: 100, l: 40 },
      slug: 'azul'
    },
    {
      word: 'Amarillo',
      definition: 'Color del sol y de los limones',
      example: 'El sol es amarillo brillante',
      hex: '#FFFF00',
      rgb: { r: 255, g: 255, b: 0 },
      hsl: { h: 60, s: 100, l: 50 },
      slug: 'amarillo'
    },
    {
      word: 'Añil',
      definition: 'Color azul oscuro intenso',
      example: 'El añil es un color profundo',
      hex: '#4B0082',
      rgb: { r: 75, g: 0, b: 130 },
      hsl: { h: 275, s: 100, l: 25 },
      slug: 'anil'
    },
    {
      word: 'Aguamarina',
      definition: 'Color azul verdoso como el agua del mar',
      example: 'Su vestido era de color aguamarina',
      hex: '#7FFFD4',
      rgb: { r: 127, g: 255, b: 212 },
      hsl: { h: 160, s: 100, l: 75 },
      slug: 'aguamarina'
    },
    {
      word: 'Azulado',
      definition: 'Color que tiende al azul, con matices azules',
      example: 'El agua azulada del lago reflejaba el cielo',
      hex: '#6495ED',
      rgb: { r: 100, g: 149, b: 237 },
      hsl: { h: 219, s: 79, l: 66 },
      slug: 'azulado'
    }
  ],
  b: [
    {
      word: 'Blanco',
      definition: 'Color de la nieve y las nubes',
      example: 'La nieve es blanca y pura',
      hex: '#FFFFFF',
      rgb: { r: 255, g: 255, b: 255 },
      hsl: { h: 0, s: 0, l: 100 },
      slug: 'blanco'
    },
    {
      word: 'Beige',
      definition: 'Color crema claro y neutro',
      example: 'Las paredes son de color beige',
      hex: '#F5F5DC',
      rgb: { r: 245, g: 245, b: 220 },
      hsl: { h: 60, s: 56, l: 91 },
      slug: 'beige'
    },
    {
      word: 'Burdeos',
      definition: 'Color rojo oscuro como el vino',
      example: 'Llevaba una chaqueta burdeos',
      hex: '#800020',
      rgb: { r: 128, g: 0, b: 32 },
      hsl: { h: 345, s: 100, l: 25 },
      slug: 'burdeos'
    },
    {
      word: 'Bronce',
      definition: 'Color marrón dorado metálico',
      example: 'La estatua tenía un acabado bronce',
      hex: '#CD7F32',
      rgb: { r: 205, g: 127, b: 50 },
      hsl: { h: 30, s: 61, l: 50 },
      slug: 'bronce'
    }
  ],
  c: [
    {
      word: 'Celeste',
      definition: 'Color azul claro como el cielo',
      example: 'Su camisa era de color celeste',
      hex: '#87CEEB',
      rgb: { r: 135, g: 206, b: 235 },
      hsl: { h: 197, s: 71, l: 73 },
      slug: 'celeste'
    },
    {
      word: 'Carmesí',
      definition: 'Color rojo intenso',
      example: 'Las rosas carmesí decoraban el jardín',
      hex: '#DC143C',
      rgb: { r: 220, g: 20, b: 60 },
      hsl: { h: 348, s: 83, l: 47 },
      slug: 'carmesi'
    },
    {
      word: 'Coral',
      definition: 'Color rosado anaranjado',
      example: 'El vestido coral le quedaba perfecto',
      hex: '#FF7F50',
      rgb: { r: 255, g: 127, b: 80 },
      hsl: { h: 16, s: 100, l: 66 },
      slug: 'coral'
    },
    {
      word: 'Cobre',
      definition: 'Color marrón rojizo metálico',
      example: 'Su cabello tenía reflejos cobre',
      hex: '#B87333',
      rgb: { r: 184, g: 115, b: 51 },
      hsl: { h: 29, s: 57, l: 46 },
      slug: 'cobre'
    }
  ],
  d: [
    {
      word: 'Dorado',
      definition: 'Color amarillo brillante como el oro',
      example: 'El marco dorado resaltaba el cuadro',
      hex: '#FFD700',
      rgb: { r: 255, g: 215, b: 0 },
      hsl: { h: 51, s: 100, l: 50 },
      slug: 'dorado'
    },
    {
      word: 'Durazno',
      definition: 'Color rosado anaranjado suave como la fruta',
      example: 'Las paredes durazno daban calidez al cuarto',
      hex: '#FFCBA4',
      rgb: { r: 255, g: 203, b: 164 },
      hsl: { h: 26, s: 100, l: 82 },
      slug: 'durazno'
    },
    {
      word: 'Damasco',
      definition: 'Color anaranjado pálido como el albaricoque',
      example: 'El vestido damasco era perfecto para la primavera',
      hex: '#FAD5A5',
      rgb: { r: 250, g: 213, b: 165 },
      hsl: { h: 34, s: 85, l: 81 },
      slug: 'damasco'
    }
  ],
  e: [
    {
      word: 'Esmeralda',
      definition: 'Color verde intenso como la gema preciosa',
      example: 'Sus ojos esmeralda eran cautivadores',
      hex: '#50C878',
      rgb: { r: 80, g: 200, b: 120 },
      hsl: { h: 140, s: 55, l: 55 },
      slug: 'esmeralda'
    },
    {
      word: 'Escarlata',
      definition: 'Color rojo brillante e intenso',
      example: 'El vestido escarlata llamaba la atención',
      hex: '#FF2400',
      rgb: { r: 255, g: 36, b: 0 },
      hsl: { h: 8, s: 100, l: 50 },
      slug: 'escarlata'
    },
    {
      word: 'Ébano',
      definition: 'Color negro profundo como la madera preciosa',
      example: 'Su cabello ébano contrastaba con su piel clara',
      hex: '#555D50',
      rgb: { r: 85, g: 93, b: 80 },
      hsl: { h: 97, s: 8, l: 34 },
      slug: 'ebano'
    },
    {
      word: 'Esmeril',
      definition: 'Color gris verdoso como el mineral abrasivo',
      example: 'La superficie esmeril tenía un acabado mate',
      hex: '#8FBC8F',
      rgb: { r: 143, g: 188, b: 143 },
      hsl: { h: 120, s: 25, l: 65 },
      slug: 'esmeril'
    }
  ],
  f: [
    {
      word: 'Fucsia',
      definition: 'Color rosa intenso y vibrante',
      example: 'Las flores fucsia destacaban en el jardín',
      hex: '#FF00FF',
      rgb: { r: 255, g: 0, b: 255 },
      hsl: { h: 300, s: 100, l: 50 },
      slug: 'fucsia'
    },
    {
      word: 'Frambuesa',
      definition: 'Color rojo rosado como la fruta',
      example: 'Su lápiz labial frambuesa era perfecto',
      hex: '#E30B5C',
      rgb: { r: 227, g: 11, b: 92 },
      hsl: { h: 338, s: 91, l: 47 },
      slug: 'frambuesa'
    },
    {
      word: 'Fresa',
      definition: 'Color rojo suave con toque rosado',
      example: 'El helado de fresa tenía ese color característico',
      hex: '#FC5A8D',
      rgb: { r: 252, g: 90, b: 141 },
      hsl: { h: 341, s: 96, l: 67 },
      slug: 'fresa'
    }
  ],
  g: [
    {
      word: 'Gris',
      definition: 'Color entre blanco y negro',
      example: 'Las nubes grises anunciaban lluvia',
      hex: '#808080',
      rgb: { r: 128, g: 128, b: 128 },
      hsl: { h: 0, s: 0, l: 50 },
      slug: 'gris'
    },
    {
      word: 'Granate',
      definition: 'Color rojo oscuro como la piedra preciosa',
      example: 'Su bufanda granate combinaba perfectamente con el abrigo',
      hex: '#722F37',
      rgb: { r: 114, g: 47, b: 55 },
      hsl: { h: 353, s: 42, l: 32 },
      slug: 'granate'
    },
    {
      word: 'Grana',
      definition: 'Color rojo intenso obtenido del insecto cochinilla',
      example: 'El vestido de grana era el más elegante del baile',
      hex: '#E60026',
      rgb: { r: 230, g: 0, b: 38 },
      hsl: { h: 350, s: 100, l: 45 },
      slug: 'grana'
    },
    {
      word: 'Guinda',
      definition: 'Color rojo oscuro como la cereza ácida',
      example: 'Los labios guinda destacaban en su rostro pálido',
      hex: '#722F37',
      rgb: { r: 114, g: 47, b: 55 },
      hsl: { h: 353, s: 42, l: 32 },
      slug: 'guinda'
    },
    {
      word: 'Glauco',
      definition: 'Color verde azulado pálido como el mar',
      example: 'Sus ojos glaucos reflejaban la tranquilidad del océano',
      hex: '#6082B6',
      rgb: { r: 96, g: 130, b: 182 },
      hsl: { h: 216, s: 36, l: 55 },
      slug: 'glauco'
    }
  ],
  h: [
    {
      word: 'Hueso',
      definition: 'Color blanco amarillento como el hueso envejecido',
      example: 'El vestido color hueso era elegante y atemporal',
      hex: '#F7E7CE',
      rgb: { r: 247, g: 231, b: 206 },
      hsl: { h: 37, s: 67, l: 89 },
      slug: 'hueso'
    },
    {
      word: 'Hematita',
      definition: 'Color rojo óxido metálico como el mineral de hierro',
      example: 'La pintura hematita daba un aspecto industrial a la pared',
      hex: '#A0522D',
      rgb: { r: 160, g: 82, b: 45 },
      hsl: { h: 19, s: 56, l: 40 },
      slug: 'hematita'
    },
    {
      word: 'Heliotropo',
      definition: 'Color púrpura rosado como la flor del mismo nombre',
      example: 'El atardecer heliotropo pintaba el cielo de manera espectacular',
      hex: '#DF73FF',
      rgb: { r: 223, g: 115, b: 255 },
      hsl: { h: 286, s: 100, l: 73 },
      slug: 'heliotropo'
    },
    {
      word: 'Herrumbre',
      definition: 'Color marrón rojizo del óxido de hierro',
      example: 'La puerta herrumbre le daba carácter rústico a la casa',
      hex: '#B7410E',
      rgb: { r: 183, g: 65, b: 14 },
      hsl: { h: 18, s: 86, l: 39 },
      slug: 'herrumbre'
    }
  ],
  i: [
    {
      word: 'Índigo',
      definition: 'Color azul oscuro profundo del espectro visible',
      example: 'El cielo nocturno tenía un hermoso tono índigo',
      hex: '#4B0082',
      rgb: { r: 75, g: 0, b: 130 },
      hsl: { h: 275, s: 100, l: 25 },
      slug: 'indigo'
    },
    {
      word: 'Iridiscente',
      definition: 'Color que cambia según el ángulo de la luz',
      example: 'Las burbujas iridiscentes brillaban al sol',
      hex: '#9370DB',
      rgb: { r: 147, g: 112, b: 219 },
      hsl: { h: 260, s: 60, l: 65 },
      slug: 'iridiscente'
    },
    {
      word: 'Iris',
      definition: 'Color púrpura azulado como la flor del lirio',
      example: 'Los iris del jardín inspiraron la paleta de colores',
      hex: '#5A4FCF',
      rgb: { r: 90, g: 79, b: 207 },
      hsl: { h: 245, s: 58, l: 56 },
      slug: 'iris'
    },
    {
      word: 'Ivory',
      definition: 'Color blanco cremoso como el marfil',
      example: 'El piano ivory era una pieza elegante',
      hex: '#FFFFF0',
      rgb: { r: 255, g: 255, b: 240 },
      hsl: { h: 60, s: 100, l: 97 },
      slug: 'ivory'
    }
  ],
  j: [
    {
      word: 'Jade',
      definition: 'Color verde claro mineral',
      example: 'El jade es un color muy relajante',
      hex: '#00A86B',
      rgb: { r: 0, g: 168, b: 107 },
      hsl: { h: 158, s: 100, l: 33 },
      slug: 'jade'
    },
    {
      word: 'Jaspe',
      definition: 'Color rojizo con vetas como la piedra semipreciosa',
      example: 'El jaspe tiene tonos rojizos únicos con patrones naturales',
      hex: '#D73502',
      rgb: { r: 215, g: 53, b: 2 },
      hsl: { h: 14, s: 98, l: 43 },
      slug: 'jaspe'
    },
    {
      word: 'Jacinto',
      definition: 'Color naranja rojizo como la flor del jacinto',
      example: 'El atardecer jacinto iluminaba toda la habitación',
      hex: '#FF8C00',
      rgb: { r: 255, g: 140, b: 0 },
      hsl: { h: 33, s: 100, l: 50 },
      slug: 'jacinto'
    },
    {
      word: 'Jengibre',
      definition: 'Color amarillo dorado como la raíz de jengibre',
      example: 'Su cabello jengibre brillaba bajo el sol',
      hex: '#B06500',
      rgb: { r: 176, g: 101, b: 0 },
      hsl: { h: 34, s: 100, l: 35 },
      slug: 'jengibre'
    },
    {
      word: 'Jalde',
      definition: 'Color amarillo intenso heráldico',
      example: 'El escudo llevaba un león jalde sobre campo azul',
      hex: '#F1C232',
      rgb: { r: 241, g: 194, b: 50 },
      hsl: { h: 45, s: 87, l: 57 },
      slug: 'jalde'
    },
    {
      word: 'Jazmín',
      definition: 'Color blanco cremoso como la flor del jazmín',
      example: 'El vestido jazmín era perfecto para la boda',
      hex: '#F8F8FF',
      rgb: { r: 248, g: 248, b: 255 },
      hsl: { h: 240, s: 100, l: 99 },
      slug: 'jazmin'
    },
    {
      word: 'Jet',
      definition: 'Color negro intenso como el azabache',
      example: 'Su cabello jet contrastaba con su piel pálida',
      hex: '#343434',
      rgb: { r: 52, g: 52, b: 52 },
      hsl: { h: 0, s: 0, l: 20 },
      slug: 'jet'
    }
  ],
  k: [
    {
      word: 'Kaki',
      definition: 'Color marrón verdoso como el uniforme militar',
      example: 'El color kaki es perfecto para ropa de campo',
      hex: '#F0E68C',
      rgb: { r: 240, g: 230, b: 140 },
      hsl: { h: 54, s: 77, l: 75 },
      slug: 'kaki'
    },
    {
      word: 'Khaki',
      definition: 'Variante del color caqui, beige verdoso',
      example: 'Los pantalones khaki son versátiles',
      hex: '#C3B091',
      rgb: { r: 195, g: 176, b: 145 },
      hsl: { h: 37, s: 29, l: 67 },
      slug: 'khaki'
    },
    {
      word: 'Kermés',
      definition: 'Color rojo carmesí intenso del insecto kermés',
      example: 'El manto kermés era símbolo de nobleza',
      hex: '#DC143C',
      rgb: { r: 220, g: 20, b: 60 },
      hsl: { h: 348, s: 83, l: 47 },
      slug: 'kermes'
    }
  ],
  l: [
    {
      word: 'Lila',
      definition: 'Color morado claro',
      example: 'Las flores lila perfumaban el aire',
      hex: '#C8A2C8',
      rgb: { r: 200, g: 162, b: 200 },
      hsl: { h: 300, s: 25, l: 71 },
      slug: 'lila'
    },
    {
      word: 'Lino',
      definition: 'Color beige claro como la fibra natural',
      example: 'La camisa de color lino era perfecta para el verano',
      hex: '#FAF0E6',
      rgb: { r: 250, g: 240, b: 230 },
      hsl: { h: 30, s: 67, l: 94 },
      slug: 'lino'
    },
    {
      word: 'Lavanda',
      definition: 'Color púrpura pálido aromático',
      example: 'Los campos de lavanda creaban un paisaje mágico',
      hex: '#E6E6FA',
      rgb: { r: 230, g: 230, b: 250 },
      hsl: { h: 240, s: 67, l: 94 },
      slug: 'lavanda'
    },
    {
      word: 'Lima',
      definition: 'Color verde amarillento brillante',
      example: 'La camiseta lima destacaba entre la multitud',
      hex: '#32CD32',
      rgb: { r: 50, g: 205, b: 50 },
      hsl: { h: 120, s: 61, l: 50 },
      slug: 'lima'
    }
  ],
  m: [
    {
      word: 'Magenta',
      definition: 'Color rosa intenso',
      example: 'La impresora necesita tinta magenta',
      hex: '#FF00FF',
      rgb: { r: 255, g: 0, b: 255 },
      hsl: { h: 300, s: 100, l: 50 },
      slug: 'magenta'
    },
    {
      word: 'Marrón',
      definition: 'Color café o chocolate',
      example: 'Sus zapatos marrón eran de cuero',
      hex: '#964B00',
      rgb: { r: 150, g: 75, b: 0 },
      hsl: { h: 30, s: 100, l: 29 },
      slug: 'marron'
    },
    {
      word: 'Mostaza',
      definition: 'Color amarillo oscuro',
      example: 'Su chaqueta mostaza era muy moderna',
      hex: '#FFDB58',
      rgb: { r: 255, g: 219, b: 88 },
      hsl: { h: 47, s: 100, l: 67 },
      slug: 'mostaza'
    }
  ],
  n: [
    {
      word: 'Negro',
      definition: 'Color más oscuro, ausencia de luz',
      example: 'Su vestido negro era muy elegante',
      hex: '#000000',
      rgb: { r: 0, g: 0, b: 0 },
      hsl: { h: 0, s: 0, l: 0 },
      slug: 'negro'
    },
    {
      word: 'Naranja',
      definition: 'Color de la fruta cítrica',
      example: 'El atardecer tenía tonos naranja',
      hex: '#FFA500',
      rgb: { r: 255, g: 165, b: 0 },
      hsl: { h: 39, s: 100, l: 50 },
      slug: 'naranja'
    },
    {
      word: 'Negruzco',
      definition: 'Color que tiende al negro, casi negro',
      example: 'El cielo negruzco anunciaba tormenta',
      hex: '#2F2F2F',
      rgb: { r: 47, g: 47, b: 47 },
      hsl: { h: 0, s: 0, l: 18 },
      slug: 'negruzco'
    },
    {
      word: 'Nácar',
      definition: 'Color blanco iridiscente como el interior de las conchas',
      example: 'Los botones nácar daban un toque sofisticado',
      hex: '#FFEEF5',
      rgb: { r: 255, g: 238, b: 245 },
      hsl: { h: 335, s: 100, l: 97 },
      slug: 'nacar'
    },
    {
      word: 'Nieve',
      definition: 'Color blanco puro como la nieve fresca',
      example: 'Las sábanas nieve contrastaban con las almohadas',
      hex: '#FFFAFA',
      rgb: { r: 255, g: 250, b: 250 },
      hsl: { h: 0, s: 100, l: 99 },
      slug: 'nieve'
    }
  ],
  ñ: [
    {
      word: 'Ñandú',
      definition: 'Color gris parduzco como el ave sudamericana',
      example: 'El color ñandú es perfecto para decoración rústica',
      hex: '#8B7355',
      rgb: { r: 139, g: 115, b: 85 },
      hsl: { h: 33, s: 24, l: 44 },
      slug: 'ñandu'
    },
    {
      word: 'Ñoño',
      definition: 'Color beige rosado suave y delicado',
      example: 'Las paredes ñoño creaban un ambiente acogedor',
      hex: '#F5DEB3',
      rgb: { r: 245, g: 222, b: 179 },
      hsl: { h: 39, s: 77, l: 83 },
      slug: 'ñoño'
    },
    {
      word: 'Ñame',
      definition: 'Color marrón claro como el tubérculo tropical',
      example: 'El color ñame daba calidez natural al comedor',
      hex: '#D2B48C',
      rgb: { r: 210, g: 180, b: 140 },
      hsl: { h: 34, s: 44, l: 69 },
      slug: 'ñame'
    }
  ],
  o: [
    {
      word: 'Oro',
      definition: 'Color amarillo metálico brillante',
      example: 'Su anillo de oro brillaba al sol',
      hex: '#FFD700',
      rgb: { r: 255, g: 215, b: 0 },
      hsl: { h: 51, s: 100, l: 50 },
      slug: 'oro'
    },
    {
      word: 'Ocre',
      definition: 'Color amarillo terroso',
      example: 'Las paredes ocre daban calidez al hogar',
      hex: '#CC7722',
      rgb: { r: 204, g: 119, b: 34 },
      hsl: { h: 30, s: 71, l: 47 },
      slug: 'ocre'
    },
    {
      word: 'Oliva',
      definition: 'Color verde grisáceo como la aceituna',
      example: 'El uniforme oliva se camuflaba en el bosque',
      hex: '#808000',
      rgb: { r: 128, g: 128, b: 0 },
      hsl: { h: 60, s: 100, l: 25 },
      slug: 'oliva'
    },
    {
      word: 'Ocaso',
      definition: 'Color anaranjado rojizo del atardecer',
      example: 'Los colores del ocaso pintaban el cielo',
      hex: '#FF6347',
      rgb: { r: 255, g: 99, b: 71 },
      hsl: { h: 9, s: 100, l: 64 },
      slug: 'ocaso'
    }
  ],
  p: [
    {
      word: 'Púrpura',
      definition: 'Color morado intenso',
      example: 'La túnica púrpura era real',
      hex: '#800080',
      rgb: { r: 128, g: 0, b: 128 },
      hsl: { h: 300, s: 100, l: 25 },
      slug: 'purpura'
    },
    {
      word: 'Plata',
      definition: 'Color gris metálico brillante',
      example: 'Su collar de plata era hermoso',
      hex: '#C0C0C0',
      rgb: { r: 192, g: 192, b: 192 },
      hsl: { h: 0, s: 0, l: 75 },
      slug: 'plata'
    },
    {
      word: 'Pálido',
      definition: 'Color desvaído, de poca intensidad',
      example: 'Su rostro pálido contrastaba con el cabello oscuro',
      hex: '#F0F8FF',
      rgb: { r: 240, g: 248, b: 255 },
      hsl: { h: 208, s: 100, l: 97 },
      slug: 'palido'
    },
    {
      word: 'Perla',
      definition: 'Color blanco grisáceo iridiscente',
      example: 'El collar perla era una reliquia familiar',
      hex: '#EAE0C8',
      rgb: { r: 234, g: 224, b: 200 },
      hsl: { h: 42, s: 44, l: 85 },
      slug: 'perla'
    }
  ],
  q: [
    {
      word: 'Quinacridona',
      definition: 'Pigmento sintético de color magenta intenso',
      example: 'La quinacridona produce colores muy vibrantes',
      hex: '#E30B5C',
      rgb: { r: 227, g: 11, b: 92 },
      hsl: { h: 338, s: 91, l: 47 },
      slug: 'quinacridona'
    },
    {
      word: 'Quemado',
      definition: 'Color marrón oscuro como algo quemado',
      example: 'La tierra quemada contrastaba con el cielo azul',
      hex: '#8B4513',
      rgb: { r: 139, g: 69, b: 19 },
      hsl: { h: 25, s: 76, l: 31 },
      slug: 'quemado'
    },
    {
      word: 'Quermes',
      definition: 'Color rojo carmín intenso como el tinte natural',
      example: 'El manto quermes del noble era símbolo de poder',
      hex: '#DC143C',
      rgb: { r: 220, g: 20, b: 60 },
      hsl: { h: 348, s: 83, l: 47 },
      slug: 'quermes'
    }
  ],
  r: [
    {
      word: 'Rojo',
      definition: 'Color de la sangre y las rosas',
      example: 'La rosa roja simboliza el amor',
      hex: '#FF0000',
      rgb: { r: 255, g: 0, b: 0 },
      hsl: { h: 0, s: 100, l: 50 },
      slug: 'rojo'
    },
    {
      word: 'Rosa',
      definition: 'Color rosado suave',
      example: 'Su vestido rosa era muy femenino',
      hex: '#FFC0CB',
      rgb: { r: 255, g: 192, b: 203 },
      hsl: { h: 350, s: 100, l: 88 },
      slug: 'rosa'
    },
    {
      word: 'Rubí',
      definition: 'Color rojo intenso como la gema preciosa',
      example: 'Sus labios rubí destacaban en la fotografía',
      hex: '#E0115F',
      rgb: { r: 224, g: 17, b: 95 },
      hsl: { h: 337, s: 86, l: 47 },
      slug: 'rubi'
    },
    {
      word: 'Rosáceo',
      definition: 'Color que tiende al rosa, con matices rosados',
      example: 'El cielo rosáceo del amanecer era hermoso',
      hex: '#FFC0CB',
      rgb: { r: 255, g: 192, b: 203 },
      hsl: { h: 350, s: 100, l: 88 },
      slug: 'rosaceo'
    }
  ],
  s: [
    {
      word: 'Salmón',
      definition: 'Color rosado anaranjado',
      example: 'La pared salmón daba calidez al cuarto',
      hex: '#FA8072',
      rgb: { r: 250, g: 128, b: 114 },
      hsl: { h: 6, s: 93, l: 71 },
      slug: 'salmon'
    },
    {
      word: 'Sepia',
      definition: 'Color marrón amarillento como la tinta antigua',
      example: 'La fotografía sepia evocaba tiempos pasados',
      hex: '#704214',
      rgb: { r: 112, g: 66, b: 20 },
      hsl: { h: 30, s: 69, l: 26 },
      slug: 'sepia'
    },
    {
      word: 'Siena',
      definition: 'Color tierra natural amarillo parduzco',
      example: 'La pintura siena era perfecta para paisajes',
      hex: '#A0522D',
      rgb: { r: 160, g: 82, b: 45 },
      hsl: { h: 19, s: 56, l: 40 },
      slug: 'siena'
    }
  ],
  t: [
    {
      word: 'Turquesa',
      definition: 'Color azul verdoso como la piedra preciosa',
      example: 'El mar turquesa era de una belleza hipnotizante',
      hex: '#40E0D0',
      rgb: { r: 64, g: 224, b: 208 },
      hsl: { h: 174, s: 72, l: 56 },
      slug: 'turquesa'
    },
    {
      word: 'Tostado',
      definition: 'Color marrón dorado como el pan tostado',
      example: 'Su piel tostada reflejaba las vacaciones de verano',
      hex: '#D2B48C',
      rgb: { r: 210, g: 180, b: 140 },
      hsl: { h: 34, s: 44, l: 69 },
      slug: 'tostado'
    },
    {
      word: 'Titanio',
      definition: 'Color gris metálico como el metal',
      example: 'El reloj titanio era resistente y elegante',
      hex: '#878681',
      rgb: { r: 135, g: 134, b: 129 },
      hsl: { h: 50, s: 2, l: 52 },
      slug: 'titanio'
    }
  ],
  u: [
    {
      word: 'Ultramar',
      definition: 'Color azul intenso',
      example: 'El pigmento ultramar era muy valioso',
      hex: '#120A8F',
      rgb: { r: 18, g: 10, b: 143 },
      hsl: { h: 244, s: 87, l: 30 },
      slug: 'ultramar'
    },
    {
      word: 'Umbría',
      definition: 'Color gris oscuro como la sombra',
      example: 'El color umbría de las montañas era misterioso',
      hex: '#4A4A4A',
      rgb: { r: 74, g: 74, b: 74 },
      hsl: { h: 0, s: 0, l: 29 },
      slug: 'umbria'
    },
    {
      word: 'Umbra',
      definition: 'Color marrón terroso natural como la tierra de sombra',
      example: 'La pintura umbra daba profundidad al paisaje',
      hex: '#635147',
      rgb: { r: 99, g: 81, b: 71 },
      hsl: { h: 21, s: 16, l: 33 },
      slug: 'umbra'
    },
    {
      word: 'Uva',
      definition: 'Color púrpura oscuro como la fruta',
      example: 'El vestido uva era perfecto para la gala',
      hex: '#714693',
      rgb: { r: 113, g: 70, b: 147 },
      hsl: { h: 274, s: 35, l: 43 },
      slug: 'uva'
    }
  ],
  v: [
    {
      word: 'Verde',
      definition: 'Color de la naturaleza y las plantas',
      example: 'El verde del bosque era relajante',
      hex: '#008000',
      rgb: { r: 0, g: 128, b: 0 },
      hsl: { h: 120, s: 100, l: 25 },
      slug: 'verde'
    },
    {
      word: 'Violeta',
      definition: 'Color morado como la flor del mismo nombre',
      example: 'Las violetas del jardín eran hermosas y delicadas',
      hex: '#8B00FF',
      rgb: { r: 139, g: 0, b: 255 },
      hsl: { h: 273, s: 100, l: 50 },
      slug: 'violeta'
    },
    {
      word: 'Violáceo',
      definition: 'Color que tiende al violeta, con matices violetas',
      example: 'El cielo violáceo del atardecer era espectacular',
      hex: '#8B00FF',
      rgb: { r: 139, g: 0, b: 255 },
      hsl: { h: 273, s: 100, l: 50 },
      slug: 'violaceo'
    }
  
  ],
  w: [
    {
      word: 'Wengué',
      definition: 'Color marrón oscuro como la madera africana',
      example: 'Los muebles de color wengué son muy elegantes',
      hex: '#645452',
      rgb: { r: 100, g: 84, b: 82 },
      hsl: { h: 7, s: 10, l: 36 },
      slug: 'wengue'
    },
    {
      word: 'Whisky',
      definition: 'Color ámbar dorado como la bebida destilada',
      example: 'El color whisky del atardecer era espectacular',
      hex: '#D2691E',
      rgb: { r: 210, g: 105, b: 30 },
      hsl: { h: 25, s: 75, l: 47 },
      slug: 'whisky'
    },
    {
      word: 'Wisteria',
      definition: 'Color púrpura pálido como la flor de glicinia',
      example: 'Las cortinas wisteria daban un toque romántico',
      hex: '#C9A0DC',
      rgb: { r: 201, g: 160, b: 220 },
      hsl: { h: 281, s: 43, l: 75 },
      slug: 'wisteria'
    }
  
  ],
  x: [
    {
      word: 'Xanto',
      definition: 'Color amarillo dorado intenso',
      example: 'El color xanto del trigal maduro era hermoso',
      hex: '#F1C232',
      rgb: { r: 241, g: 194, b: 50 },
      hsl: { h: 45, s: 87, l: 57 },
      slug: 'xanto'
    },
    {
      word: 'Xerez',
      definition: 'Color ámbar dorado como el vino de Jerez',
      example: 'El color xerez del licor brillaba en la copa',
      hex: '#B8860B',
      rgb: { r: 184, g: 134, b: 11 },
      hsl: { h: 43, s: 89, l: 38 },
      slug: 'xerez'
    },
    {
      word: 'Xilófago',
      definition: 'Color marrón como la madera carcomida',
      example: 'El color xilófago evocaba maderas antiguas',
      hex: '#8B4513',
      rgb: { r: 139, g: 69, b: 19 },
      hsl: { h: 25, s: 76, l: 31 },
      slug: 'xilofago'
    }
  
  ],
  y: [
    {
      word: 'Yema',
      definition: 'Color amarillo intenso como la yema del huevo',
      example: 'El color yema es perfecto para decorar la cocina',
      hex: '#FFD700',
      rgb: { r: 255, g: 215, b: 0 },
      hsl: { h: 51, s: 100, l: 50 },
      slug: 'yema'
    },
    {
      word: 'Yodo',
      definition: 'Color marrón rojizo como el elemento químico',
      example: 'El color yodo de la tintura era característico',
      hex: '#9966CC',
      rgb: { r: 153, g: 102, b: 204 },
      hsl: { h: 270, s: 50, l: 60 },
      slug: 'yodo'
    },
    {
      word: 'Yuzu',
      definition: 'Color amarillo verdoso como el cítrico japonés',
      example: 'El color yuzu daba frescura al diseño',
      hex: '#FFFF99',
      rgb: { r: 255, g: 255, b: 153 },
      hsl: { h: 60, s: 100, l: 80 },
      slug: 'yuzu'
    }
  
  ],
  z: [
    {
      word: 'Zafiro',
      definition: 'Color azul intenso como la gema preciosa',
      example: 'Sus ojos zafiro brillaban como joyas en la oscuridad',
      hex: '#0F52BA',
      rgb: { r: 15, g: 82, b: 186 },
      hsl: { h: 217, s: 85, l: 39 },
      slug: 'zafiro'
    },
    {
      word: 'Zinc',
      definition: 'Color gris metálico como el metal',
      example: 'El techo zinc protegía la casa de la lluvia',
      hex: '#A8A8A8',
      rgb: { r: 168, g: 168, b: 168 },
      hsl: { h: 0, s: 0, l: 66 },
      slug: 'zinc'
    },
    {
      word: 'Zanahoria',
      definition: 'Color naranja como la hortaliza',
      example: 'Su cabello zanahoria destacaba entre la multitud',
      hex: '#FF8C00',
      rgb: { r: 255, g: 140, b: 0 },
      hsl: { h: 33, s: 100, l: 50 },
      slug: 'zanahoria'
    }
  
  ]
};

// 获取特定字母的颜色
export const getColorsByLetter = (letter: Letter): ColorItem[] => {
  return COLORS_DATA[letter] || [];
};

// 获取所有颜色
export const getAllColors = (): ColorItem[] => {
  return Object.values(COLORS_DATA).flat();
};

// 根据slug查找颜色
export const getColorBySlug = (slug: string): ColorItem | undefined => {
  return getAllColors().find(color => color.slug === slug);
};
