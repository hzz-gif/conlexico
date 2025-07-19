import Link from 'next/link';
import { getColorsByLetter } from '@/data/colors';
import ColorCard from '@/components/color/ColorCard';

const ColorConJSection = () => {
  const jColors = getColorsByLetter('j');

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-70-screen mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Colores que empiezan con <span className="text-blue-600">J</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre la belleza de los colores únicos que comienzan con la letra J
          </p>
        </div>

        {/* Grid de colores */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {jColors.map((color) => (
            <ColorCard
              key={color.slug}
              color={color}
              letter="j"
            />
          ))}
        </div>



        {/* Información adicional */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              ¿Sabías que...?
            </h3>
            <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Los colores que empiezan con J son especialmente únicos en español. 
              <strong className="text-blue-600"> Jade</strong> proviene del mineral verde, 
              <strong className="text-red-600"> Jaspe</strong> de la piedra semipreciosa rojiza, y 
              <strong className="text-orange-600"> Jacinto</strong> de la hermosa flor naranja.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ColorConJSection;
