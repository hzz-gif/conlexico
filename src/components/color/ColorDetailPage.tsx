'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ColorItem, Letter } from '@/types';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateBreadcrumbs } from '@/utils/routes';

interface ColorDetailPageProps {
  color: ColorItem;
  letter: string;
}

export default function ColorDetailPage({ color, letter }: ColorDetailPageProps) {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const formatRgb = (rgb: { r: number; g: number; b: number }) => {
    return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
  };

  const formatHsl = (hsl: { h: number; s: number; l: number }) => {
    return `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;
  };

  // Generar breadcrumbs para la página de detalle de color
  const breadcrumbs = generateBreadcrumbs('colores', letter as Letter, color.word);

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumbs */}
      <div className="bg-gray-50 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-70-screen mx-auto">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-70-screen mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Color Display */}
            <div className="space-y-6">
              <div 
                className="w-full h-80 rounded-xl shadow-lg border-4 border-gray-200"
                style={{ backgroundColor: color.hex }}
              />
              
              {/* Color Palette Variations */}
              <div className="grid grid-cols-5 gap-2">
                {[0.2, 0.4, 0.6, 0.8, 1.0].map((opacity, index) => (
                  <div
                    key={index}
                    className="h-16 rounded-lg border border-gray-200"
                    style={{ 
                      backgroundColor: color.hex,
                      opacity: opacity
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Color Information */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  {color.word}
                </h1>
                <p className="text-xl text-gray-600 mb-6">
                  {color.definition}
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                  <p className="text-blue-800 italic">
                    &quot;{color.example}&quot;
                  </p>
                </div>
              </div>

              {/* Color Values */}
              <div className="bg-gray-900 rounded-xl p-6 text-white">
                <h3 className="text-lg font-semibold mb-4">Valores del Color</h3>
                
                <div className="space-y-4">
                  {/* HEX */}
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">HEX:</span>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-lg">{color.hex}</span>
                      <button
                        onClick={() => copyToClipboard(color.hex, 'hex')}
                        className="bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm transition-colors"
                      >
                        {copiedField === 'hex' ? '✓ Copiado' : 'Copiar'}
                      </button>
                    </div>
                  </div>
                  
                  {/* RGB */}
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">RGB:</span>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-lg">{formatRgb(color.rgb)}</span>
                      <button
                        onClick={() => copyToClipboard(formatRgb(color.rgb), 'rgb')}
                        className="bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm transition-colors"
                      >
                        {copiedField === 'rgb' ? '✓ Copiado' : 'Copiar'}
                      </button>
                    </div>
                  </div>
                  
                  {/* HSL */}
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">HSL:</span>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-lg">{formatHsl(color.hsl)}</span>
                      <button
                        onClick={() => copyToClipboard(formatHsl(color.hsl), 'hsl')}
                        className="bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm transition-colors"
                      >
                        {copiedField === 'hsl' ? '✓ Copiado' : 'Copiar'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Color Information Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-70-screen mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Información del Color
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Características
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li><strong>Matiz:</strong> {color.hsl.h}°</li>
                <li><strong>Saturación:</strong> {color.hsl.s}%</li>
                <li><strong>Luminosidad:</strong> {color.hsl.l}%</li>
                <li><strong>Rojo:</strong> {color.rgb.r}</li>
                <li><strong>Verde:</strong> {color.rgb.g}</li>
                <li><strong>Azul:</strong> {color.rgb.b}</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Uso y Significado
              </h3>
              <p className="text-gray-600 mb-4">
                {color.definition}
              </p>
              <p className="text-gray-600">
                Este color es ampliamente utilizado en diseño, arte y decoración 
                por sus características únicas y su impacto visual.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-70-screen mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Explorar Más Colores
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/color-con-${letter}`}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Más Colores con {letter.toUpperCase()}
            </Link>
            <Link
              href="/color"
              className="bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
            >
              Todos los Colores
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
