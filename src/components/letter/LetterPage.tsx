import Link from 'next/link';
import { Category, Letter, WordItem } from '@/types';
import { CATEGORIES } from '@/data/categories';
import { SPANISH_ALPHABET, getWordsByLetter } from '@/data/words';
import { getColorsByLetter } from '@/data/colors';
import { getCategoryPath, getLetterPath } from '@/utils/routes';
import { getSearchVolume, formatSearchVolume } from '@/utils/seo';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import StructuredData from '@/components/seo/StructuredData';
import ColorCard from '@/components/color/ColorCard';
import CopyButton from '@/components/ui/CopyButton';
import { generateBreadcrumbs } from '@/utils/routes';

interface LetterPageProps {
  category: Category;
  letter: Letter;
}

export default function LetterPage({ category, letter }: LetterPageProps) {
  const categoryInfo = CATEGORIES[category];
  const words = getWordsByLetter(category, letter);
  const colors = category === 'colores' ? getColorsByLetter(letter) : [];
  const searchVolume = getSearchVolume(category, letter);

  const breadcrumbs = generateBreadcrumbs(category, letter);

  // Mapeo de categorías a formas singulares para títulos
  const singularDisplayNames: Record<Category, string> = {
    colores: 'Color',
    animales: 'Animal',
    paises: 'País',
    frutas: 'Fruta',
    palabras: 'Palabra',
    comidas: 'Comida',
    apellidos: 'Apellido'
  };

  // Usar datos reales para todas las categorías
  const displayData = category === 'colores' && colors.length > 0 ? colors : words;

  return (
    <>
      <StructuredData type="letter" category={category} letter={letter} />
      <div className="min-h-screen bg-white">
      {/* Breadcrumbs */}
      <div className="bg-gray-50 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <span className="text-6xl mr-4">{categoryInfo.icon}</span>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                {singularDisplayNames[category]} con <span className="text-blue-600">{letter.toUpperCase()}</span>
              </h1>
            </div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Descubre {categoryInfo.displayName.toLowerCase()} que empiezan con la letra {letter.toUpperCase()}. 
            Amplía tu vocabulario con definiciones claras y ejemplos de uso.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-2xl font-bold text-blue-600">{displayData.length}</div>
              <div className="text-sm text-gray-600">
                {category === 'colores' ? 'Colores encontrados' : 'Palabras encontradas'}
              </div>
            </div>
            {searchVolume && (
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-2xl font-bold text-green-600">{Math.round(searchVolume / 1000)}k</div>
                <div className="text-sm text-gray-600">Búsquedas mensuales</div>
              </div>
            )}
          </div>
        </div>
      </section>



      {/* Content List */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            {category === 'colores' ? 'Colores' : 'Lista de ' + categoryInfo.displayName}
          </h2>

          {category === 'colores' && colors.length > 0 ? (
            // Mostrar tarjetas de colores
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {colors.map((color, index) => (
                <ColorCard key={index} color={color} letter={letter} />
              ))}
            </div>
          ) : (
            // Mostrar lista de palabras tradicional
            <div className="space-y-6">
              {displayData.map((item, index) => (
                <div key={index} className="group relative bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="relative inline-block">
                      <div className="text-2xl font-bold text-gray-900 capitalize pr-8">
                        {item.word}
                      </div>
                      {/* Copy Button - positioned at bottom right of word */}
                      <CopyButton
                        text={item.word}
                        title="Copiar palabra"
                        showOnHover={true}
                        className="absolute -bottom-1 -right-2 p-1 text-gray-400 hover:text-blue-600 hover:bg-blue-50"
                      />
                    </div>
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      {letter.toUpperCase()}
                    </span>
                  </div>

                  {item.definition && (
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Definición:</h4>
                      <p className="text-gray-600">{item.definition}</p>
                    </div>
                  )}

                  {item.example && (
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Ejemplo de uso:</h4>
                      <p className="text-gray-600 italic">"{item.example}"</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Alphabet Navigation */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Explorar Otras Letras
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3">
            {SPANISH_ALPHABET.map((l) => {
              const isCurrentLetter = l === letter;
              const letterSearchVolume = getSearchVolume(category, l);
              
              return (
                <Link
                  key={l}
                  href={getLetterPath(category, l)}
                  className={`relative text-center p-4 rounded-lg transition-all duration-300 ${
                    isCurrentLetter
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-200 hover:border-blue-300'
                  }`}
                  rel="nofollow"
                >
                  <div className="text-2xl font-bold mb-1">
                    {l.toUpperCase()}
                  </div>
                  {letterSearchVolume && letterSearchVolume > 50000 && (
                    <div className="text-xs opacity-75">
                      Popular
                    </div>
                  )}
                </Link>
              );
            })}
          </div>

        </div>
      </section>

      {/* Welcome and Description Section - Footer Above */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              ¡Bienvenido a {singularDisplayNames[category]} con {letter.toUpperCase()}!
            </h2>
            <div className="prose prose-lg mx-auto text-gray-600">
              {category === 'colores' && (
                <>
                  <p className="mb-4">
                    Explora nuestra selección de colores que empiezan con la letra <strong>{letter.toUpperCase()}</strong>.
                    Cada color incluye su código hexadecimal, valores RGB, definición detallada y ejemplos visuales para ayudarte a identificar y usar estos tonos correctamente.
                  </p>
                  <p className="mb-4">
                    En esta sección podrás:
                  </p>
                  <ul className="text-left list-disc list-inside space-y-2 mb-4">
                    <li>Ver códigos de color exactos (HEX, RGB, HSL)</li>
                    <li>Observar variaciones de tonalidad y saturación</li>
                    <li>Conocer el origen y significado de cada nombre de color</li>
                    <li>Encontrar inspiración para proyectos de diseño</li>
                  </ul>
                </>
              )}

              {category === 'animales' && (
                <>
                  <p className="mb-4">
                    Descubre la fascinante variedad de animales cuyos nombres comienzan con la letra <strong>{letter.toUpperCase()}</strong>.
                    Cada entrada proporciona información sobre características, hábitat y curiosidades de estas especies.
                  </p>
                  <p className="mb-4">
                    Aquí encontrarás:
                  </p>
                  <ul className="text-left list-disc list-inside space-y-2 mb-4">
                    <li>Descripciones detalladas de cada especie animal</li>
                    <li>Información sobre su hábitat natural</li>
                    <li>Datos curiosos y características distintivas</li>
                    <li>Ejemplos de uso en contextos cotidianos</li>
                  </ul>
                </>
              )}

              {category === 'paises' && (
                <>
                  <p className="mb-4">
                    Conoce los países del mundo que inician con la letra <strong>{letter.toUpperCase()}</strong>.
                    Amplía tus conocimientos geográficos con información sobre ubicación, cultura y características principales de cada nación.
                  </p>
                  <p className="mb-4">
                    Esta sección te permite:
                  </p>
                  <ul className="text-left list-disc list-inside space-y-2 mb-4">
                    <li>Aprender sobre geografía mundial de forma organizada</li>
                    <li>Conocer datos importantes de cada país</li>
                    <li>Mejorar tu cultura general geográfica</li>
                    <li>Practicar pronunciación de nombres de países</li>
                  </ul>
                </>
              )}

              {category === 'frutas' && (
                <>
                  <p className="mb-4">
                    Explora el delicioso mundo de las frutas que comienzan con <strong>{letter.toUpperCase()}</strong>.
                    Aprende sobre sus propiedades nutricionales, sabores característicos y formas de consumo.
                  </p>
                  <p className="mb-4">
                    Descubrirás:
                  </p>
                  <ul className="text-left list-disc list-inside space-y-2 mb-4">
                    <li>Variedades de frutas y sus características</li>
                    <li>Beneficios nutricionales y vitaminas</li>
                    <li>Formas de preparación y consumo</li>
                    <li>Temporadas de cosecha y disponibilidad</li>
                  </ul>
                </>
              )}

              {category === 'comidas' && (
                <>
                  <p className="mb-4">
                    Sumérgete en el mundo gastronómico con platos y alimentos que empiezan por <strong>{letter.toUpperCase()}</strong>.
                    Descubre recetas tradicionales, ingredientes principales y orígenes culturales de cada preparación.
                  </p>
                  <p className="mb-4">
                    En esta colección podrás:
                  </p>
                  <ul className="text-left list-disc list-inside space-y-2 mb-4">
                    <li>Conocer platos típicos de diferentes culturas</li>
                    <li>Aprender sobre ingredientes y preparaciones</li>
                    <li>Expandir tu vocabulario culinario</li>
                    <li>Descubrir nuevas opciones gastronómicas</li>
                  </ul>
                </>
              )}

              {category === 'palabras' && (
                <>
                  <p className="mb-4">
                    Enriquece tu vocabulario con palabras diversas que inician con la letra <strong>{letter.toUpperCase()}</strong>.
                    Cada término incluye su definición precisa, ejemplos de uso y contextos apropiados para su aplicación.
                  </p>
                  <p className="mb-4">
                    Esta sección te ofrece:
                  </p>
                  <ul className="text-left list-disc list-inside space-y-2 mb-4">
                    <li>Definiciones claras y comprensibles</li>
                    <li>Ejemplos prácticos de uso cotidiano</li>
                    <li>Sinónimos y palabras relacionadas</li>
                    <li>Mejora continua de tu expresión verbal</li>
                  </ul>
                </>
              )}

              {category === 'apellidos' && (
                <>
                  <p className="mb-4">
                    Explora apellidos comunes que comienzan con <strong>{letter.toUpperCase()}</strong>.
                    Conoce sus orígenes etimológicos, distribución geográfica y significados históricos.
                  </p>
                  <p className="mb-4">
                    Aquí podrás:
                  </p>
                  <ul className="text-left list-disc list-inside space-y-2 mb-4">
                    <li>Descubrir el origen de apellidos familiares</li>
                    <li>Conocer su distribución geográfica</li>
                    <li>Aprender sobre genealogía y linajes</li>
                    <li>Entender significados históricos y culturales</li>
                  </ul>
                </>
              )}

              <p>
                Navega por el alfabeto completo usando los botones superiores o explora otras categorías para continuar expandiendo tus conocimientos.
              </p>
            </div>
          </div>
        </div>
      </section>

      </div>
    </>
  );
}
