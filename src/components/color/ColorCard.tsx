'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ColorItem } from '@/types';
import CopyButton from '@/components/ui/CopyButton';

interface ColorCardProps {
  color: ColorItem;
  letter: string;
}

export default function ColorCard({ color, letter }: ColorCardProps) {
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

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden text-white shadow-lg">
      {/* Color Preview - Top Section */}
      <div
        className="w-full h-40 relative"
        style={{ backgroundColor: color.hex }}
      />

      {/* Content Section */}
      <div className="p-6">
        {/* Color Name */}
        <div className="group relative inline-block mb-4">
          <div className="text-xl font-bold text-white pr-8">
            {color.word}
          </div>
          {/* Copy Button - positioned at bottom right of color name */}
          <CopyButton
            text={color.word}
            title="Copiar nombre del color"
            showOnHover={true}
            className="absolute -bottom-1 -right-2 p-1 text-gray-400 hover:text-white hover:bg-gray-700"
          />
        </div>

        {/* Color Values */}
        <div className="space-y-3 mb-6">
          {/* HEX */}
          <div className="flex items-center justify-between">
            <span className="text-gray-300 text-sm">HEX:</span>
            <div className="flex items-center gap-2">
              <span className="text-white font-mono">{color.hex}</span>
              <button
                onClick={() => copyToClipboard(color.hex, 'hex')}
                className="bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded text-xs transition-colors"
              >
                {copiedField === 'hex' ? '✓' : 'Copiar'}
              </button>
            </div>
          </div>

          {/* RGB */}
          <div className="flex items-center justify-between">
            <span className="text-gray-300 text-sm">RGB:</span>
            <div className="flex items-center gap-2">
              <span className="text-white font-mono">{formatRgb(color.rgb)}</span>
              <button
                onClick={() => copyToClipboard(formatRgb(color.rgb), 'rgb')}
                className="bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded text-xs transition-colors"
              >
                {copiedField === 'rgb' ? '✓' : 'Copiar'}
              </button>
            </div>
          </div>

          {/* HSL */}
          <div className="flex items-center justify-between">
            <span className="text-gray-300 text-sm">HSL:</span>
            <div className="flex items-center gap-2">
              <span className="text-white font-mono">{formatHsl(color.hsl)}</span>
              <button
                onClick={() => copyToClipboard(formatHsl(color.hsl), 'hsl')}
                className="bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded text-xs transition-colors"
              >
                {copiedField === 'hsl' ? '✓' : 'Copiar'}
              </button>
            </div>
          </div>
        </div>

        {/* Ver Detalles Button */}
        <Link
          href={`/color-con-${letter}/${color.slug}`}
          className="block w-full bg-purple-600 hover:bg-purple-700 text-white text-center py-3 rounded-lg font-semibold transition-colors"
        >
          Ver Detalles
        </Link>
      </div>
    </div>
  );
}
