import StructuredData from '@/components/seo/StructuredData';
import SearchAndCategories from '@/components/home/SearchAndCategories';
import ColorConJSection from '@/components/home/ColorConJSection';
import ColorConJInfo from '@/components/home/ColorConJInfo';


export default function Home() {

  return (
    <>
      <StructuredData type="website" />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-70-screen mx-auto">
          {/* Main Title */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full text-sm font-medium text-blue-800 mb-6">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
              Más de 1000 palabras disponibles
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 mb-6 leading-tight">
              Color con J
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              Explora la fascinante colección de <strong>Color con J</strong> y descubre todos los colores que empiezan con la letra J.
              <span className="block mt-2 text-lg text-gray-500">Desde Jade hasta Jaspe, encuentra cada <strong>Color con J</strong> con definiciones completas y ejemplos prácticos.</span>
            </p>
          </div>

          {/* Search and Categories Component */}
          <SearchAndCategories />
        </div>
      </section>

      {/* Color con J Section */}
      <ColorConJSection />



      {/* Color con J Information */}
      <ColorConJInfo />






      </div>
    </>
  );
}
