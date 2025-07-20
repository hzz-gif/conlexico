import Link from 'next/link';
import { Category, Letter } from '@/types';
import { CATEGORIES } from '@/data/categories';
import { SPANISH_ALPHABET, getWordsByLetter } from '@/data/words';
import { getColorsByLetter } from '@/data/colors';
import { getLetterPath } from '@/utils/routes';
import { getSearchVolume } from '@/utils/seo';
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
            Explora nuestra completa colección de <strong>{singularDisplayNames[category]} con {letter.toUpperCase()}</strong> y descubre
            todos los {categoryInfo.displayName.toLowerCase()} que empiezan con la letra {letter.toUpperCase()}.
            Cada <strong>{singularDisplayNames[category]} con {letter.toUpperCase()}</strong> incluye definiciones claras y ejemplos prácticos de uso.
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
            {category === 'colores'
              ? `Colores que empiezan con ${letter.toUpperCase()}`
              : `${categoryInfo.displayName} que empiezan con ${letter.toUpperCase()}`
            }
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
                      <div className="text-sm font-semibold text-gray-700 mb-2">Definición:</div>
                      <p className="text-gray-600">{item.definition}</p>
                    </div>
                  )}

                  {item.example && (
                    <div>
                      <div className="text-sm font-semibold text-gray-700 mb-2">Ejemplo de uso:</div>
                      <p className="text-gray-600 italic">&quot;{item.example}&quot;</p>
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
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            {singularDisplayNames[category]} con otras letras
          </h2>
          <h3 className="text-lg text-center text-gray-600 mb-8">
            {singularDisplayNames[category]} con otras letras
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
            {SPANISH_ALPHABET.map((l) => {
              const isCurrentLetter = l === letter;

              return (
                <Link
                  key={l}
                  href={getLetterPath(category, l)}
                  className={`block p-3 rounded-lg transition-all duration-300 text-left ${
                    isCurrentLetter
                      ? 'bg-blue-600 text-white shadow-md font-bold'
                      : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-200 hover:border-blue-300'
                  }`}
                >
                  <div className="text-sm">
                    {singularDisplayNames[category]} con {l}
                  </div>
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
              ¡Bienvenido a nuestra sección de {singularDisplayNames[category]} con {letter.toUpperCase()}!
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Descubre todo sobre <strong className="text-blue-600">{singularDisplayNames[category]} con {letter.toUpperCase()}</strong> en
              nuestra plataforma especializada. Cada <strong className="text-blue-600">{singularDisplayNames[category]} con {letter.toUpperCase()}</strong>
              está cuidadosamente documentado para ofrecerte la mejor experiencia de aprendizaje.
            </p>
            <div className="prose prose-lg mx-auto text-gray-600">
              {category === 'colores' && (
                <>
                  <p className="mb-4">
                    Nuestra plataforma de <strong className="text-blue-600">{singularDisplayNames[category]} con {letter.toUpperCase()}</strong> te
                    ofrece la colección más completa de colores que empiezan con la letra <strong>{letter.toUpperCase()}</strong>.
                    Cada <strong className="text-blue-600">{singularDisplayNames[category]} con {letter.toUpperCase()}</strong> incluye
                    código hexadecimal, valores RGB y HSL, definición detallada y ejemplos visuales para ayudarte a identificar y usar estos tonos correctamente.
                  </p>
                  <p className="mb-4">
                    Con nuestro catálogo de <strong className="text-blue-600">{singularDisplayNames[category]} con {letter.toUpperCase()}</strong> podrás:
                  </p>
                  <ul className="text-left list-disc list-inside space-y-2 mb-4">
                    <li>Acceder a códigos de color precisos (HEX, RGB, HSL) para cada <strong>{singularDisplayNames[category]} con {letter.toUpperCase()}</strong></li>
                    <li>Copiar valores directamente para usar en tus proyectos de diseño</li>
                    <li>Aprender sobre la historia y significado cultural de cada <strong>{singularDisplayNames[category]} con {letter.toUpperCase()}</strong></li>
                    <li>Encontrar inspiración para crear paletas cromáticas únicas</li>
                    <li>Explorar variaciones y tonalidades relacionadas con cada <strong>{singularDisplayNames[category]} con {letter.toUpperCase()}</strong></li>
                  </ul>
                </>
              )}

              {category === 'animales' && (
                <>
                  <p className="mb-4">
                    Explora nuestra completa guía de <strong className="text-blue-600">{singularDisplayNames[category]} con {letter.toUpperCase()}</strong> y
                    descubre la fascinante variedad de animales cuyos nombres comienzan con la letra <strong>{letter.toUpperCase()}</strong>.
                    Cada <strong className="text-blue-600">{singularDisplayNames[category]} con {letter.toUpperCase()}</strong> incluye información
                    detallada sobre características, hábitat y curiosidades de estas especies.
                  </p>
                  <p className="mb-4">
                    En nuestra sección de <strong className="text-blue-600">{singularDisplayNames[category]} con {letter.toUpperCase()}</strong> encontrarás:
                  </p>
                  <ul className="text-left list-disc list-inside space-y-2 mb-4">
                    <li>Descripciones completas de cada <strong>{singularDisplayNames[category]} con {letter.toUpperCase()}</strong></li>
                    <li>Información sobre el hábitat natural de cada especie</li>
                    <li>Datos curiosos y características distintivas de cada <strong>{singularDisplayNames[category]} con {letter.toUpperCase()}</strong></li>
                    <li>Ejemplos de uso en contextos educativos y cotidianos</li>
                    <li>Clasificación científica y datos biológicos relevantes</li>
                  </ul>
                </>
              )}

              {category === 'paises' && (
                <>
                  <p className="mb-4">
                    Descubre nuestra enciclopedia de <strong className="text-blue-600">{singularDisplayNames[category]} con {letter.toUpperCase()}</strong> y
                    conoce todos los países del mundo que inician con la letra <strong>{letter.toUpperCase()}</strong>.
                    Cada <strong className="text-blue-600">{singularDisplayNames[category]} con {letter.toUpperCase()}</strong> incluye información
                    detallada sobre ubicación, cultura y características principales de cada nación.
                  </p>
                  <p className="mb-4">
                    Nuestra guía de <strong className="text-blue-600">{singularDisplayNames[category]} con {letter.toUpperCase()}</strong> te permite:
                  </p>
                  <ul className="text-left list-disc list-inside space-y-2 mb-4">
                    <li>Aprender sobre geografía mundial explorando cada <strong>{singularDisplayNames[category]} con {letter.toUpperCase()}</strong></li>
                    <li>Conocer datos importantes y curiosidades de cada nación</li>
                    <li>Mejorar tu cultura general geográfica de forma sistemática</li>
                    <li>Practicar pronunciación correcta de nombres de países</li>
                    <li>Estudiar capitales, idiomas y características culturales</li>
                  </ul>
                </>
              )}

              {category === 'frutas' && (
                <>
                  <p className="mb-4">
                    Sumérgete en nuestro catálogo de <strong className="text-blue-600">{singularDisplayNames[category]} con {letter.toUpperCase()}</strong> y
                    explora el delicioso mundo de las frutas que comienzan con <strong>{letter.toUpperCase()}</strong>.
                    Cada <strong className="text-blue-600">{singularDisplayNames[category]} con {letter.toUpperCase()}</strong> incluye información
                    sobre propiedades nutricionales, sabores característicos y formas de consumo.
                  </p>
                  <p className="mb-4">
                    Con nuestra guía de <strong className="text-blue-600">{singularDisplayNames[category]} con {letter.toUpperCase()}</strong> descubrirás:
                  </p>
                  <ul className="text-left list-disc list-inside space-y-2 mb-4">
                    <li>Variedades y características únicas de cada <strong>{singularDisplayNames[category]} con {letter.toUpperCase()}</strong></li>
                    <li>Beneficios nutricionales, vitaminas y minerales</li>
                    <li>Formas de preparación, conservación y consumo</li>
                    <li>Temporadas de cosecha y disponibilidad regional</li>
                    <li>Recetas y usos culinarios para cada <strong>{singularDisplayNames[category]} con {letter.toUpperCase()}</strong></li>
                  </ul>
                </>
              )}

              {category === 'comidas' && (
                <>
                  <p className="mb-4">
                    Explora nuestra enciclopedia gastronómica de <strong className="text-blue-600">{singularDisplayNames[category]} con {letter.toUpperCase()}</strong> y
                    sumérgete en el mundo culinario con platos y alimentos que empiezan por <strong>{letter.toUpperCase()}</strong>.
                    Cada <strong className="text-blue-600">{singularDisplayNames[category]} con {letter.toUpperCase()}</strong> incluye información
                    sobre recetas tradicionales, ingredientes principales y orígenes culturales.
                  </p>
                  <p className="mb-4">
                    Con nuestra colección de <strong className="text-blue-600">{singularDisplayNames[category]} con {letter.toUpperCase()}</strong> podrás:
                  </p>
                  <ul className="text-left list-disc list-inside space-y-2 mb-4">
                    <li>Conocer platos típicos y preparaciones de cada <strong>{singularDisplayNames[category]} con {letter.toUpperCase()}</strong></li>
                    <li>Aprender sobre ingredientes, técnicas y métodos de cocción</li>
                    <li>Expandir tu vocabulario culinario internacional</li>
                    <li>Descubrir nuevas opciones gastronómicas y sabores</li>
                    <li>Explorar la historia cultural detrás de cada <strong>{singularDisplayNames[category]} con {letter.toUpperCase()}</strong></li>
                  </ul>
                </>
              )}

              {category === 'palabras' && (
                <>
                  <p className="mb-4">
                    Amplía tu vocabulario con nuestro diccionario de <strong className="text-blue-600">{singularDisplayNames[category]} con {letter.toUpperCase()}</strong> y
                    enriquece tu lenguaje con palabras diversas que inician con la letra <strong>{letter.toUpperCase()}</strong>.
                    Cada <strong className="text-blue-600">{singularDisplayNames[category]} con {letter.toUpperCase()}</strong> incluye
                    definición precisa, ejemplos de uso y contextos apropiados para su aplicación.
                  </p>
                  <p className="mb-4">
                    Nuestra colección de <strong className="text-blue-600">{singularDisplayNames[category]} con {letter.toUpperCase()}</strong> te ofrece:
                  </p>
                  <ul className="text-left list-disc list-inside space-y-2 mb-4">
                    <li>Definiciones claras y comprensibles para cada <strong>{singularDisplayNames[category]} con {letter.toUpperCase()}</strong></li>
                    <li>Ejemplos prácticos de uso cotidiano y académico</li>
                    <li>Sinónimos, antónimos y palabras relacionadas</li>
                    <li>Mejora continua de tu expresión verbal y escrita</li>
                    <li>Etimología y origen histórico de términos selectos</li>
                  </ul>
                </>
              )}

              {category === 'apellidos' && (
                <>
                  <p className="mb-4">
                    Descubre nuestra base de datos genealógica de <strong className="text-blue-600">{singularDisplayNames[category]} con {letter.toUpperCase()}</strong> y
                    explora apellidos comunes que comienzan con <strong>{letter.toUpperCase()}</strong>.
                    Cada <strong className="text-blue-600">{singularDisplayNames[category]} con {letter.toUpperCase()}</strong> incluye información
                    sobre orígenes etimológicos, distribución geográfica y significados históricos.
                  </p>
                  <p className="mb-4">
                    Con nuestra investigación de <strong className="text-blue-600">{singularDisplayNames[category]} con {letter.toUpperCase()}</strong> podrás:
                  </p>
                  <ul className="text-left list-disc list-inside space-y-2 mb-4">
                    <li>Descubrir el origen histórico de cada <strong>{singularDisplayNames[category]} con {letter.toUpperCase()}</strong></li>
                    <li>Conocer la distribución geográfica y frecuencia de uso</li>
                    <li>Aprender sobre genealogía, linajes y tradiciones familiares</li>
                    <li>Entender significados históricos y culturales profundos</li>
                    <li>Explorar variantes regionales y evolución lingüística</li>
                  </ul>
                </>
              )}

              <p>
                Continúa explorando nuestra plataforma de <strong className="text-blue-600">{singularDisplayNames[category]} con {letter.toUpperCase()}</strong>
                navegando por el alfabeto completo usando los botones superiores, o descubre otras categorías para continuar expandiendo tus conocimientos.
                Cada sección de <strong className="text-blue-600">{singularDisplayNames[category]} con {letter.toUpperCase()}</strong> está diseñada
                para ofrecerte la mejor experiencia educativa posible.
              </p>
            </div>
          </div>
        </div>
      </section>

      </div>
    </>
  );
}
