import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100">
      <div className="max-w-70-screen mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-20">
          {/* 品牌词居中 - 时尚设计 */}
          <Link href="/" className="group flex items-center">
            <div className="relative">
              {/* 背景光晕效果 */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>

              {/* 主要品牌词 */}
              <div className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                <span className="text-4xl font-black tracking-tight">
                  Con<span className="text-blue-500">Léxico</span>
                </span>
              </div>

              {/* 装饰性元素 */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-80 group-hover:scale-125 transition-transform duration-300"></div>
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-gradient-to-r from-pink-400 to-red-400 rounded-full opacity-60 group-hover:scale-110 transition-transform duration-300 delay-100"></div>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
