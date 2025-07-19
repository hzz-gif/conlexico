import { MetadataRoute } from 'next';
import { CATEGORIES } from '@/data/categories';
import { SPANISH_ALPHABET } from '@/data/words';
import { getColorsByLetter } from '@/data/colors';
import { getCategoryPath, getLetterPath } from '@/utils/routes';
import { Category } from '@/types';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://conlexico.com';
  
  const routes: MetadataRoute.Sitemap = [
    // Main pages
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
    },

  ];

  // Category pages
  Object.keys(CATEGORIES).forEach((category) => {
    routes.push({
      url: `${baseUrl}${getCategoryPath(category as Category)}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
    });
  });

  // Letter pages for each category
  Object.keys(CATEGORIES).forEach((category) => {
    SPANISH_ALPHABET.forEach((letter) => {
      routes.push({
        url: `${baseUrl}${getLetterPath(category as Category, letter)}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
      });
    });
  });

  // Color detail pages
  SPANISH_ALPHABET.forEach((letter) => {
    const colors = getColorsByLetter(letter);
    colors.forEach((color) => {
      routes.push({
        url: `${baseUrl}/color-con-${letter}/${color.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
      });
    });
  });

  return routes;
}


