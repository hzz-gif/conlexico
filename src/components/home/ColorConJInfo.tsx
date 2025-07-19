import Link from 'next/link';

const ColorConJInfo = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="max-w-70-screen mx-auto space-y-8">

        {/* ¿Qué es Color con J? */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            ¿Qué es Color con J?
          </h2>
          <div className="text-left space-y-4">
            <p className="text-gray-700 leading-relaxed">
              ¡Bienvenido a <strong className="text-blue-600">Color con J</strong>! Nuestra herramienta especializada
              te permite encontrar todas las palabras que buscas de manera rápida y eficiente.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Utiliza nuestro buscador para <strong>encontrar las palabras que deseas</strong>,
              <strong className="text-green-600"> aumenta tus habilidades en juegos de palabras</strong> y
              <strong className="text-purple-600"> libera todo tu potencial vocabulario</strong>.
              Descubre colores únicos como Jade, Jaspe y Jacinto, cada uno con definiciones completas y ejemplos prácticos.
            </p>
          </div>
        </div>

        {/* Cómo usar Color con J */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Cómo usar Color con J
          </h2>
          <div className="text-left mb-8">
            <p className="text-gray-700 leading-relaxed">
              Utiliza nuestro buscador de palabras <strong className="text-blue-600">Color con J</strong> para
              descifrar un mundo de posibilidades infinitas y explora sin esfuerzo todas las posibles
              soluciones de palabras que ofrecen las letras que proporcionas.
            </p>
          </div>

          <div className="text-left space-y-4">
            <div className="flex items-start space-x-4">
              <div className="relative flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-xl font-bold text-white">1</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Elige una Categoría</h3>
                <p className="text-gray-600 leading-relaxed">
                  Selecciona entre colores, animales, países, frutas y más categorías disponibles.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="relative flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-xl font-bold text-white">2</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Selecciona una Letra</h3>
                <p className="text-gray-600 leading-relaxed">
                  Haz clic en cualquier letra del alfabeto para ver todas las palabras que empiecen con ella.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="relative flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-xl font-bold text-white">3</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Explora y Aprende</h3>
                <p className="text-gray-600 leading-relaxed">
                  Descubre nuevas palabras con definiciones y ejemplos para ampliar tu vocabulario.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Más que solo Color con J */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Más que solo Color con J
          </h2>
          <div className="text-left space-y-6">
            <p className="text-gray-700 leading-relaxed">
              ConLéxico ofrece una amplia gama de herramientas de vocabulario más allá de los colores con J.
              Explora nuestras otras categorías para expandir tu conocimiento:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link href="/animal-con-a" className="group bg-gray-50 rounded-lg p-4 hover:bg-blue-50 transition-colors border">
                <div className="text-2xl mb-2">🐾</div>
                <div className="font-semibold text-gray-900 group-hover:text-blue-600 mb-1">Animales</div>
                <p className="text-sm text-gray-600">Por cada letra del alfabeto</p>
              </Link>
              <Link href="/fruta-con-a" className="group bg-gray-50 rounded-lg p-4 hover:bg-blue-50 transition-colors border">
                <div className="text-2xl mb-2">🍎</div>
                <div className="font-semibold text-gray-900 group-hover:text-blue-600 mb-1">Frutas</div>
                <p className="text-sm text-gray-600">Frutas de la A a la Z</p>
              </Link>
              <Link href="/pais-con-a" className="group bg-gray-50 rounded-lg p-4 hover:bg-blue-50 transition-colors border">
                <div className="text-2xl mb-2">🌍</div>
                <div className="font-semibold text-gray-900 group-hover:text-blue-600 mb-1">Países</div>
                <p className="text-sm text-gray-600">Geografía mundial</p>
              </Link>
              <Link href="/palabra-con-a" className="group bg-gray-50 rounded-lg p-4 hover:bg-blue-50 transition-colors border">
                <div className="text-2xl mb-2">📝</div>
                <div className="font-semibold text-gray-900 group-hover:text-blue-600 mb-1">Palabras</div>
                <p className="text-sm text-gray-600">Vocabulario general</p>
              </Link>
            </div>
          </div>
        </div>

        {/* Por qué elegir Color con J */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            ¿Por qué elegir Color con J?
          </h2>
          <div className="text-left space-y-4">
            <div className="flex items-start space-x-3">
              <div className="bg-green-100 rounded-lg w-8 h-8 flex items-center justify-center mt-1 flex-shrink-0">
                <span className="text-green-600 font-bold text-sm">✓</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Información Completa</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Cada color incluye definición, ejemplo de uso y valores técnicos precisos.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="bg-green-100 rounded-lg w-8 h-8 flex items-center justify-center mt-1 flex-shrink-0">
                <span className="text-green-600 font-bold text-sm">✓</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Fácil de Usar</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Interfaz intuitiva y navegación simple para encontrar rápidamente lo que buscas.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="bg-green-100 rounded-lg w-8 h-8 flex items-center justify-center mt-1 flex-shrink-0">
                <span className="text-green-600 font-bold text-sm">✓</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Para Profesionales</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Valores HEX, RGB y HSL listos para copiar y usar en tus proyectos.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 rounded-lg w-8 h-8 flex items-center justify-center mt-1 flex-shrink-0">
                <span className="text-blue-600 font-bold text-sm">✓</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Educativo</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Perfecto para estudiantes y profesionales del diseño.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 rounded-lg w-8 h-8 flex items-center justify-center mt-1 flex-shrink-0">
                <span className="text-blue-600 font-bold text-sm">✓</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Actualizado</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Contenido constantemente revisado y mejorado para mayor precisión.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 rounded-lg w-8 h-8 flex items-center justify-center mt-1 flex-shrink-0">
                <span className="text-blue-600 font-bold text-sm">✓</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Gratuito</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Acceso completo y gratuito a toda nuestra base de datos de colores.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ColorConJInfo;
