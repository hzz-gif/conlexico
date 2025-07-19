import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Letter, Category } from '@/types';
import { SPANISH_ALPHABET } from '@/data/words';
import { getColorBySlug } from '@/data/colors';
import { generatePageTitle, generatePageDescription, generateKeywords, generateCanonicalUrl } from '@/utils/seo';
import LetterPage from '@/components/letter/LetterPage';
import ColorDetailPage from '@/components/color/ColorDetailPage';

// 配置Edge Runtime以支持Cloudflare Pages
export const runtime = 'edge';

// 类别名称映射（复数形式到单数形式）
const CATEGORY_SINGULAR_MAP: Record<string, Category> = {
  'color': 'colores',
  'animal': 'animales',
  'pais': 'paises',
  'fruta': 'frutas',
  'comida': 'comidas',
  'palabra': 'palabras',
  'apellido': 'apellidos'
};

interface Props {
  params: Promise<{
    slug: string[];
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug: rawSlug } = await params;

  if (!rawSlug || rawSlug.length === 0) {
    return {};
  }

  // 解码URL参数以正确处理特殊字符如ñ
  const slug = rawSlug.map(segment => decodeURIComponent(segment));

  // 处理颜色详情页面的元数据
  if (slug.length === 2 && slug[0].includes('-con-')) {
    const parts = slug[0].split('-con-');
    if (parts.length !== 2) {
      return {};
    }

    const [singularCategory, letter] = parts;
    const colorSlug = slug[1];
    const category = CATEGORY_SINGULAR_MAP[singularCategory];

    if (category !== 'colores' || !SPANISH_ALPHABET.includes(letter as Letter)) {
      return {};
    }

    const color = getColorBySlug(colorSlug);
    if (!color) {
      return {};
    }

    const title = `${color.word} - Color que Empieza por ${letter.toUpperCase()} | ConLéxico`;
    const description = `Descubre todo sobre el color ${color.word}: ${color.definition}. Explora colores que empiezan por ${letter.toUpperCase()} en ConLéxico.`;
    const canonical = `https://conlexico.com/color-con-${letter}/${colorSlug}`;

    return {
      title,
      description,
      keywords: [
        `color ${color.word.toLowerCase()}`,
        `${color.word.toLowerCase()} color`,
        `colores con ${letter.toUpperCase()}`,
        `código color ${color.word.toLowerCase()}`,
        `definición color ${color.word.toLowerCase()}`,
        'colores en español',
        'ConLéxico'
      ],
      alternates: {
        canonical
      },
      openGraph: {
        title,
        description,
        url: canonical,
        type: 'website',
        siteName: 'ConLéxico',
        locale: 'es_ES'
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description
      }
    };
  }

  // 处理字母页面的元数据
  if (slug.length === 1 && slug[0].includes('-con-')) {
    const parts = slug[0].split('-con-');
    if (parts.length !== 2) {
      return {};
    }

    const [singularCategory, letter] = parts;
    const category = CATEGORY_SINGULAR_MAP[singularCategory];

    if (!category || !SPANISH_ALPHABET.includes(letter as Letter)) {
      return {};
    }

    return {
      title: generatePageTitle(category, letter as Letter),
      description: generatePageDescription(category, letter as Letter),
      keywords: generateKeywords(category, letter as Letter),
      alternates: {
        canonical: generateCanonicalUrl(category, letter as Letter)
      },
      openGraph: {
        title: generatePageTitle(category, letter as Letter),
        description: generatePageDescription(category, letter as Letter),
        url: generateCanonicalUrl(category, letter as Letter),
        type: 'website',
        siteName: 'ConLéxico',
        locale: 'es_ES'
      },
      twitter: {
        card: 'summary_large_image',
        title: generatePageTitle(category, letter as Letter),
        description: generatePageDescription(category, letter as Letter)
      }
    };
  }

  return {};
}

export default async function DynamicPage({ params }: Props) {
  const { slug: rawSlug } = await params;

  if (!rawSlug || rawSlug.length === 0) {
    notFound();
  }

  // 解码URL参数以正确处理特殊字符如ñ
  const slug = rawSlug.map(segment => decodeURIComponent(segment));

  // 处理颜色详情页面 (例如: /color-con-f/frambuesa) - 最优先处理
  if (slug.length === 2 && slug[0].includes('-con-')) {
    const parts = slug[0].split('-con-');
    if (parts.length !== 2) {
      notFound();
    }

    const [singularCategory, letter] = parts;
    const colorSlug = slug[1];
    const category = CATEGORY_SINGULAR_MAP[singularCategory];

    // 只有颜色类别支持详情页面
    if (category !== 'colores' || !SPANISH_ALPHABET.includes(letter as Letter)) {
      notFound();
    }

    // 查找颜色数据
    const color = getColorBySlug(colorSlug);
    if (!color) {
      notFound();
    }

    return <ColorDetailPage color={color} letter={letter} />;
  }

  // 处理字母页面 (例如: /color-con-a)
  if (slug.length === 1 && slug[0].includes('-con-')) {
    const parts = slug[0].split('-con-');
    if (parts.length !== 2) {
      notFound();
    }

    const [singularCategory, letter] = parts;
    const category = CATEGORY_SINGULAR_MAP[singularCategory];

    if (!category || !SPANISH_ALPHABET.includes(letter as Letter)) {
      notFound();
    }

    return <LetterPage category={category} letter={letter as Letter} />;
  }

  notFound();
}
